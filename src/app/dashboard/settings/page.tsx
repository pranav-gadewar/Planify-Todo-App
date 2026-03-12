"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { User, Info, Trash2 } from "lucide-react";

import { auth, db } from "@/lib/firebase";

import { deleteUser } from "firebase/auth";

import {
  doc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function SettingsPage() {
  const router = useRouter();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDeleteAccount = async () => {
    if (confirmText !== "DELETE MY ACCOUNT") return;

    try {
      setLoading(true);

      const user = auth.currentUser;

      if (!user) {
        alert("No user logged in.");
        return;
      }

      const uid = user.uid;

      /* ---------------- DELETE USER TASKS ---------------- */

      const tasksRef = collection(db, "tasks");
      const q = query(tasksRef, where("userId", "==", uid));

      const querySnapshot = await getDocs(q);

      const deletePromises: Promise<void>[] = [];

      querySnapshot.forEach((docSnap) => {
        deletePromises.push(deleteDoc(docSnap.ref));
      });

      await Promise.all(deletePromises);

      /* ---------------- DELETE USER DOCUMENT ---------------- */

      await deleteDoc(doc(db, "users", uid));

      /* ---------------- DELETE AUTH ACCOUNT ---------------- */

      await deleteUser(user);

      alert("Account deleted successfully.");

      router.push("/");
    } catch (error: unknown) {
      console.error(error);

      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        (error as { code: string }).code === "auth/requires-recent-login"
      ) {
        alert("Please logout and login again before deleting your account.");
      } else {
        alert("Error deleting account.");
      }
    } finally {
      setLoading(false);
      setShowDeleteModal(false);
      setConfirmText("");
    }
  };

  const settingsOptions = [
    {
      title: "Edit Profile",
      description: "Update your username and personal information.",
      icon: User,
      action: () => router.push("/dashboard/settings/editProfile"),
    },
    {
      title: "About Planify",
      description: "Learn more about the Planify application.",
      icon: Info,
      action: () => router.push("/dashboard/settings/about"),
    },
    {
      title: "Delete Account",
      description: "Permanently remove your account and all tasks.",
      icon: Trash2,
      action: () => setShowDeleteModal(true),
    },
  ];

  return (
    <div className="px-8 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {settingsOptions.map((option, index) => {
          const Icon = option.icon;

          return (
            <div
              key={index}
              onClick={option.action}
              className="cursor-pointer rounded-xl border border-white/10 
              bg-white/5 backdrop-blur-lg p-6 
              hover:border-purple-500 transition"
            >
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-lg bg-gradient-to-br 
                from-purple-600 to-blue-500"
                >
                  <Icon size={20} className="text-white" />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {option.title}
                  </h2>

                  <p className="text-gray-400 text-sm">{option.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DELETE ACCOUNT MODAL */}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-white/10 rounded-xl p-8 w-full max-w-md">
            <h2 className="text-xl font-semibold text-white mb-4">
              Delete Account
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              This action is permanent and cannot be undone.
              <br />
              Type{" "}
              <span className="text-red-400 font-semibold">
                DELETE MY ACCOUNT
              </span>{" "}
              to confirm.
            </p>

            <input
              type="text"
              placeholder="DELETE MY ACCOUNT"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-white/10 
              text-white outline-none focus:border-red-500 mb-4"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setConfirmText("");
                }}
                className="px-4 py-2 rounded-lg border border-white/10 
                text-gray-300 hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteAccount}
                disabled={confirmText !== "DELETE MY ACCOUNT" || loading}
                className={`px-4 py-2 rounded-lg text-white transition
                ${
                  confirmText === "DELETE MY ACCOUNT"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-700 cursor-not-allowed"
                }`}
              >
                {loading ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
