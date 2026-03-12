// "use client";

// import { useEffect, useState } from "react";
// import { auth, db } from "@/lib/firebase";
// import { onAuthStateChanged, User } from "firebase/auth";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { UserCircle, Save } from "lucide-react";

// interface UserData {
//   username?: string;
//   name?: string;
//   email?: string;
// }

// export default function EditProfilePage() {
//   const router = useRouter();

//   const [user, setUser] = useState<User | null>(null);
//   const [username, setUsername] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (!currentUser) {
//         router.push("/login");
//         return;
//       }

//       setUser(currentUser);

//       const docRef = doc(db, "users", currentUser.uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const data = docSnap.data() as UserData;

//         setUsername(data.username || "");
//         setName(data.name || "");
//         setEmail(data.email || "");
//       }

//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [router]);

//   const handleSave = async () => {
//     if (!user) return;

//     setSaving(true);

//     try {
//       const docRef = doc(db, "users", user.uid);

//       await updateDoc(docRef, {
//         username,
//         name,
//       });

//       alert("Profile updated successfully!");
//       router.push("/dashboard/profile");
//     } catch (error) {
//       console.error(error);
//       alert("Error updating profile.");
//     }

//     setSaving(false);
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-[60vh] text-gray-400">
//         Loading profile...
//       </div>
//     );
//   }

//   return (
//     <div className="px-8 py-10">

//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-white mb-8">
//         Edit Profile
//       </h1>

//       <div className="max-w-2xl rounded-2xl border border-white/10 
//       bg-white/5 backdrop-blur-lg p-8 shadow-xl">

//         {/* Avatar */}
//         <div className="flex items-center gap-6 mb-8">

//           <div className="w-20 h-20 rounded-full flex items-center justify-center
//           bg-gradient-to-br from-purple-600 to-blue-500">
//             <UserCircle size={44} className="text-white" />
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold text-white">
//               Update your profile
//             </h2>
//             <p className="text-gray-400 text-sm">
//               Change your account information below
//             </p>
//           </div>

//         </div>

//         {/* Form */}
//         <div className="space-y-6">

//           {/* Username */}
//           <div>
//             <label className="text-sm text-gray-300">Username</label>
//             <input
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full mt-2 p-3 rounded-lg 
//               bg-black/40 border border-white/10 
//               text-white outline-none focus:border-purple-500"
//             />
//           </div>

//           {/* Name */}
//           <div>
//             <label className="text-sm text-gray-300">Full Name</label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full mt-2 p-3 rounded-lg 
//               bg-black/40 border border-white/10 
//               text-white outline-none focus:border-purple-500"
//             />
//           </div>

//           {/* Email (Read Only) */}
//           <div>
//             <label className="text-sm text-gray-300">Email</label>
//             <input
//               value={email}
//               disabled
//               className="w-full mt-2 p-3 rounded-lg 
//               bg-black/20 border border-white/10 
//               text-gray-400"
//             />
//           </div>

//           {/* Save Button */}
//           <button
//             onClick={handleSave}
//             disabled={saving}
//             className="flex items-center gap-2 
//             bg-gradient-to-r from-purple-600 to-blue-500
//             hover:opacity-90 transition
//             text-white px-6 py-3 rounded-lg"
//           >
//             <Save size={18} />
//             {saving ? "Saving..." : "Save Changes"}
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { UserCircle, Save } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

interface UserData {
  username?: string;
  name?: string;
  email?: string;
}

export default function EditProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login");
        return;
      }

      setUser(currentUser);

      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as UserData;

        setUsername(data.username || "");
        setName(data.name || "");
        setEmail(data.email || "");

        toast.success("Profile loaded successfully");
      } else {
        toast.error("Profile data not found");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSave = async () => {
    if (!user) return;

    setSaving(true);

    try {
      const docRef = doc(db, "users", user.uid);

      await updateDoc(docRef, {
        username,
        name,
      });

      toast.success("Profile updated successfully!");
      // router.push("/dashboard/profile");
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile.");
    }

    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="px-8 py-10">

      <Toaster position="top-right" reverseOrder={false} />

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-white mb-8">
        Edit Profile
      </h1>

      <div className="max-w-2xl rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-lg p-8 shadow-xl">

        {/* Avatar */}
        <div className="flex items-center gap-6 mb-8">

          <div className="w-20 h-20 rounded-full flex items-center justify-center
          bg-gradient-to-br from-purple-600 to-blue-500">
            <UserCircle size={44} className="text-white" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              Update your profile
            </h2>
            <p className="text-gray-400 text-sm">
              Change your account information below
            </p>
          </div>

        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Username */}
          <div>
            <label className="text-sm text-gray-300">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg 
              bg-black/40 border border-white/10 
              text-white outline-none focus:border-purple-500"
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 rounded-lg 
              bg-black/40 border border-white/10 
              text-white outline-none focus:border-purple-500"
            />
          </div>

          {/* Email (Read Only) */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              value={email}
              disabled
              className="w-full mt-2 p-3 rounded-lg 
              bg-black/20 border border-white/10 
              text-gray-400"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 
            bg-gradient-to-r from-purple-600 to-blue-500
            hover:opacity-90 transition
            text-white px-6 py-3 rounded-lg"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>
    </div>
  );
}