// "use client";

// import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
// import type { ReactNode } from "react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { Menu } from "lucide-react";

// export default function DashboardLayout({ children }: { children: ReactNode }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) router.replace("/");
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [router]);

//   if (loading) return null;

//   return (
//     <div className="flex min-h-screen bg-gradient-to-b from-black via-purple-950 to-blue-950 text-gray-200">

//       {/* Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       {/* Content */}
//       <div className="flex flex-col flex-1 lg:ml-64">

//         {/* Mobile Header */}
//         <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-purple-900/40">
//           <button onClick={() => setSidebarOpen(true)}>
//             <Menu size={26} />
//           </button>

//           <h1 className="font-semibold">Dashboard</h1>
//         </div>

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

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return null;

  return (
    <div className="relative flex min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-black via-purple-950 to-blue-950 text-gray-200">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <DashboardSidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="relative flex min-w-0 flex-1 flex-col lg:ml-64">
        {/* Mobile Header */}
        <header className="flex items-center justify-between border-b border-purple-900/40 px-4 py-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-md p-1 transition hover:bg-purple-900/20"
            aria-label="Open Sidebar"
          >
            <Menu size={26} />
          </button>

          {/* <h1 className="text-lg font-semibold">Dashboard</h1> */}

          {/* Spacer to keep title centered */}
          <div className="w-[34px]" />
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 md:p-8 lg:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}