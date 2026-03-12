// // "use client";

// // import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
// // import type { ReactNode } from "react";
// // import { useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import { onAuthStateChanged } from "firebase/auth";
// // import { auth } from "@/lib/firebase";

// // export default function DashboardLayout({ children }: { children: ReactNode }) {
// //   const router = useRouter();
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       if (!user) {
// //         router.replace("/");
// //       }
// //       setLoading(false);
// //     });

// //     return () => unsubscribe();
// //   }, [router]);

// //   if (loading) return null;

// //   return (
// //     <div className="flex min-h-screen bg-gradient-to-b from-black via-purple-950 to-blue-950 text-gray-200">
// //       <DashboardSidebar />

// //       <main className="flex-1 p-10">
// //         {children}
// //       </main>
// //     </div>
// //   );
// // }

// "use client";

// import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
// import type { ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { Menu, X } from "lucide-react";

// export default function DashboardLayout({ children }: { children: ReactNode }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         router.replace("/");
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [router]);

//   if (loading) return null;

//   return (
//     <div className="flex min-h-screen bg-gradient-to-b from-black via-purple-950 to-blue-950 text-gray-200">

//       {/* Mobile Sidebar Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/50 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed z-50 h-full w-64 transform bg-black lg:relative lg:translate-x-0 transition-transform duration-300 
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:block`}
//       >
//         <DashboardSidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col flex-1 w-full">

//         {/* Mobile Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-800 lg:hidden">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="text-white"
//           >
//             <Menu size={26} />
//           </button>

//           <h1 className="text-lg font-semibold">Dashboard</h1>
//         </div>

//         {/* Close Button Inside Sidebar (Mobile) */}
//         {sidebarOpen && (
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="fixed top-4 left-60 z-50 lg:hidden text-white"
//           >
//             <X size={24} />
//           </button>
//         )}

//         {/* Page Content */}
//         <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-x-hidden">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }

"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.replace("/");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return null;

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-black via-purple-950 to-blue-950 text-gray-200">

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Content */}
      <div className="flex flex-col flex-1 lg:ml-64">

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-purple-900/40">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={26} />
          </button>

          <h1 className="font-semibold">Dashboard</h1>
        </div>

        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}