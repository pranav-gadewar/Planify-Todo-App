// // "use client";

// // import { useEffect, useState } from "react";
// // import { auth } from "@/lib/firebase";
// // import { onAuthStateChanged, User, signOut } from "firebase/auth";
// // import { useRouter } from "next/navigation";
// // import { UserCircle, Mail, Calendar, LogOut } from "lucide-react";

// // export default function ProfilePage() {
// //   const router = useRouter();
// //   const [user, setUser] = useState<User | null>(null);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
// //       if (!currentUser) {
// //         router.push("/login");
// //       } else {
// //         setUser(currentUser);
// //       }
// //     });

// //     return () => unsubscribe();
// //   }, [router]);

// //   const handleLogout = async () => {
// //     await signOut(auth);
// //     router.push("/login");
// //   };

// //   if (!user) {
// //     return (
// //       <div className="flex items-center justify-center h-[60vh] text-gray-500">
// //         Loading profile...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-4xl mx-auto px-6 py-10">
      
// //       {/* Page Title */}
// //       <h1 className="text-3xl font-bold mb-8 text-gray-800">
// //         My Profile
// //       </h1>

// //       {/* Profile Card */}
// //       <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">

// //         {/* Avatar */}
// //         <div className="flex items-center gap-6 mb-8">
// //           <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
// //             <UserCircle size={60} className="text-purple-600" />
// //           </div>

// //           <div>
// //             <h2 className="text-xl font-semibold text-gray-800">
// //               {user.displayName || "Planify User"}
// //             </h2>
// //             <p className="text-gray-500">{user.email}</p>
// //           </div>
// //         </div>

// //         {/* Profile Info */}
// //         <div className="space-y-4">

// //           <div className="flex items-center gap-3 text-gray-700">
// //             <Mail size={18} />
// //             <span>Email: {user.email}</span>
// //           </div>

// //           <div className="flex items-center gap-3 text-gray-700">
// //             <Calendar size={18} />
// //             <span>
// //               Joined:{" "}
// //               {user.metadata.creationTime
// //                 ? new Date(user.metadata.creationTime).toLocaleDateString()
// //                 : "N/A"}
// //             </span>
// //           </div>

// //         </div>

// //         {/* Logout Button */}
// //         <button
// //           onClick={handleLogout}
// //           className="mt-8 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
// //         >
// //           <LogOut size={18} />
// //           Logout
// //         </button>

// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { auth } from "@/lib/firebase";
// import { onAuthStateChanged, User, signOut } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { UserCircle, Mail, Calendar, LogOut } from "lucide-react";

// export default function ProfilePage() {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (!currentUser) {
//         router.push("/login");
//       } else {
//         setUser(currentUser);
//       }
//     });

//     return () => unsubscribe();
//   }, [router]);

//   const handleLogout = async () => {
//     await signOut(auth);
//     router.push("/login");
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

//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-white mb-8">
//         My Profile
//       </h1>

//       {/* Profile Card */}
//       <div className="max-w-3xl rounded-2xl border border-white/10 
//       bg-white/5 backdrop-blur-lg p-8 shadow-xl">

//         {/* User Info */}
//         <div className="flex items-center gap-6 mb-8">

//           {/* Avatar */}
//           <div className="w-20 h-20 rounded-full flex items-center justify-center
//           bg-gradient-to-br from-purple-600 to-blue-500">
//             <UserCircle size={44} className="text-white" />
//           </div>

//           <div>
//             <h2 className="text-xl font-semibold text-white">
//               {user.displayName || "Planify User"}
//             </h2>

//             <p className="text-gray-400">
//               {user.email}
//             </p>
//           </div>

//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/10 mb-6"></div>

//         {/* Profile Details */}
//         <div className="space-y-4 text-gray-300">

//           <div className="flex items-center gap-3">
//             <Mail size={18} className="text-purple-400"/>
//             <span>Email: {user.email}</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <Calendar size={18} className="text-blue-400"/>
//             <span>
//               Joined:{" "}
//               {user.metadata.creationTime
//                 ? new Date(user.metadata.creationTime).toLocaleDateString()
//                 : "N/A"}
//             </span>
//           </div>

//         </div>

//         {/* Logout Button */}
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
      <div className="flex items-center justify-center h-[60vh] text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="px-8 py-10 w-full">

      <h1 className="text-3xl font-bold text-white mb-8">
        My Profile
      </h1>

      <div className="max-w-3xl rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-lg p-8 shadow-xl">

        <div className="flex items-center gap-6 mb-8">

          <div className="w-20 h-20 rounded-full flex items-center justify-center
          bg-gradient-to-br from-purple-600 to-blue-500">
            <UserCircle size={44} className="text-white" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              {userData?.username || "User"}
            </h2>

            <p className="text-gray-400">
              {userData?.email || user.email}
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 mb-6"></div>

        <div className="space-y-4 text-gray-300">

          <div className="flex items-center gap-3">
            <Mail size={18} className="text-purple-400"/>
            <span>Email: {userData?.email || user.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Calendar size={18} className="text-blue-400"/>
            <span>
              Joined:{" "}
              {userData?.createdAt
                ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString("en-GB")
                : "N/A"}
            </span>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="mt-8 flex items-center gap-2
          bg-gradient-to-r from-purple-600 to-blue-500
          hover:opacity-90
          text-white px-5 py-2 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </div>
  );
}