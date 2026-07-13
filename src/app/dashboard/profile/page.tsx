// "use client";

// import { useEffect, useState } from "react";
// import { auth, db } from "@/lib/firebase";
// import { onAuthStateChanged, User, signOut } from "firebase/auth";
// import { doc, getDoc, Timestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { UserCircle, Mail, Calendar, LogOut } from "lucide-react";

// interface UserData {
//   username?: string;
//   name?: string;
//   email?: string;
//   createdAt?: Timestamp;
// }

// export default function ProfilePage() {
//   const router = useRouter();

//   const [user, setUser] = useState<User | null>(null);
//   const [userData, setUserData] = useState<UserData | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (!currentUser) {
//         router.push("/auth/login");
//         return;
//       }

//       setUser(currentUser);

//       // Fetch Firestore user data
//       const docRef = doc(db, "users", currentUser.uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         setUserData(docSnap.data() as UserData);
//       }
//     });

//     return () => unsubscribe();
//   }, [router]);

//   const handleLogout = async () => {
//     await signOut(auth);
//     router.push("/auth/login");
//   };

//   if (!user) {
//     return (
//       <div className="flex items-center justify-center h-[60vh] text-gray-400">
//         Loading profile...
//       </div>
//     );
//   }

//   return (
//     <div className="px-8 py-10 w-full">

//       <h1 className="text-3xl font-bold text-white mb-8">
//         My Profile
//       </h1>

//       <div className="max-w-3xl rounded-2xl border border-white/10 
//       bg-white/5 backdrop-blur-lg p-8 shadow-xl">

//         <div className="flex items-center gap-6 mb-8">

//           <div className="w-20 h-20 rounded-full flex items-center justify-center
//           bg-gradient-to-br from-purple-600 to-blue-500">
//             <UserCircle size={44} className="text-white" />
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold text-white">
//               {userData?.username || "User"}
//             </h2>

//             <p className="text-gray-400">
//               {userData?.email || user.email}
//             </p>
//           </div>

//         </div>

//         <div className="border-t border-white/10 mb-6"></div>

//         <div className="space-y-4 text-gray-300">

//           <div className="flex items-center gap-3">
//             <Mail size={18} className="text-purple-400"/>
//             <span>Email: {userData?.email || user.email}</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <Calendar size={18} className="text-blue-400"/>
//             <span>
//               Joined:{" "}
//               {userData?.createdAt
//                 ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString("en-GB")
//                 : "N/A"}
//             </span>
//           </div>

//         </div>

//         <button
//           onClick={handleLogout}
//           className="mt-8 flex items-center gap-2
//           bg-gradient-to-r from-purple-600 to-blue-500
//           hover:opacity-90
//           text-white px-5 py-2 rounded-lg transition"
//         >
//           <LogOut size={18} />
//           Logout
//         </button>

//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { UserCircle, Mail, Calendar, LogOut } from "lucide-react";

interface UserData {
  username?: string;
  name?: string;
  email?: string;
  createdAt?: Timestamp;
}

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/auth/login");
        return;
      }

      setUser(currentUser);

      // Fetch Firestore user data
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data() as UserData);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/auth/login");
  };

  if (!user) {
    return (
      <div className="flex h-[60vh] items-center justify-center text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl">
        My Profile
      </h1>

      <div
        className="
          w-full
          max-w-3xl
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-5
          shadow-xl
          backdrop-blur-lg
          sm:p-8
          overflow-hidden
        "
      >
        {/* Profile Header */}
        <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row sm:items-center">
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-purple-600
              to-blue-500
              shrink-0
            "
          >
            <UserCircle size={44} className="text-white" />
          </div>

          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h2 className="truncate text-xl font-semibold text-white">
              {userData?.username || "User"}
            </h2>

            <p className="break-all text-gray-400">
              {userData?.email || user.email}
            </p>
          </div>
        </div>

        <div className="mb-6 border-t border-white/10"></div>

        {/* Profile Info */}
        <div className="space-y-5 text-gray-300">
          <div className="flex items-start gap-3">
            <Mail
              size={18}
              className="mt-1 shrink-0 text-purple-400"
            />

            <span className="break-all">
              <span className="font-medium">Email:</span>{" "}
              {userData?.email || user.email}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar
              size={18}
              className="shrink-0 text-blue-400"
            />

            <span>
              <span className="font-medium">Joined:</span>{" "}
              {userData?.createdAt
                ? new Date(
                    userData.createdAt.seconds * 1000
                  ).toLocaleDateString("en-GB")
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-gradient-to-r
            from-purple-600
            to-blue-500
            px-5
            py-3
            text-white
            transition
            hover:opacity-90
            sm:w-auto
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}