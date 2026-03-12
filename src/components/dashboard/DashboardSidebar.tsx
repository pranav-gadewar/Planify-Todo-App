// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   LayoutDashboard,
//   CheckSquare,
//   CheckCircle2,
//   Settings,
//   LogOut,
//   ListCollapse,
//   User2,
//   X,
// } from "lucide-react";
// import { signOut } from "firebase/auth";
// import { auth } from "@/lib/firebase";

// export default function DashboardSidebar({
//   open,
//   setOpen,
// }: {
//   open: boolean;
//   setOpen: (val: boolean) => void;
// }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const navItems = [
//     { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
//     { name: "Profile", href: "/dashboard/profile", icon: User2 },
//     { name: "Add Tasks", href: "/dashboard/addTask", icon: ListCollapse },
//     { name: "View Tasks", href: "/dashboard/viewTasks", icon: CheckCircle2 },
//     { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
//     { name: "Settings", href: "/dashboard/settings", icon: Settings },
//   ];

//   const handleLogout = async () => {
//     await signOut(auth);
//     router.replace("/");
//   };

//   return (
//     <aside
//       className={`fixed z-50 top-0 left-0 h-screen w-64 bg-black border-r border-purple-900/40 flex flex-col justify-between transform transition-transform duration-300
//   ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
//     >
//       {/* Mobile Close Button */}
//       <div className="lg:hidden flex justify-end p-4">
//         <button onClick={() => setOpen(false)}>
//           <X size={24} />
//         </button>
//       </div>

//       {/* Top */}
//       <div>
//         <div className="px-6 py-6 border-b border-purple-900/40">
//           <Link
//             href="/"
//             className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
//           >
//             Planify
//           </Link>
//         </div>

//         <nav className="mt-6 px-4 space-y-2">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             const active = pathname === item.href;

//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${active
//                     ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
//                     : "text-gray-300 hover:bg-purple-900/40 hover:text-white"
//                   }`}
//               >
//                 <Icon size={20} />
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </div>

//       {/* Bottom */}
//       <div className="p-4 border-t border-purple-900/40">
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-red-900/30 hover:text-red-400 transition"
//         >
//           <LogOut size={20} />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  CheckSquare,
  CheckCircle2,
  Settings,
  LogOut,
  ListCollapse,
  User2,
  X,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import toast, { Toaster } from "react-hot-toast";

export default function DashboardSidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/dashboard/profile", icon: User2 },
    { name: "Add Tasks", href: "/dashboard/addTask", icon: ListCollapse },
    { name: "View Tasks", href: "/dashboard/viewTasks", icon: CheckCircle2 },
    { name: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      router.replace("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <aside
        className={`fixed z-50 top-0 left-0 h-screen w-64 bg-black border-r border-purple-900/40 flex flex-col justify-between transform transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Top */}
        <div>
          <div className="px-6 py-6 border-b border-purple-900/40">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Planify
            </Link>
          </div>

          <nav className="mt-6 px-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    active
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "text-gray-300 hover:bg-purple-900/40 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom */}
        <div className="p-4 border-t border-purple-900/40">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-red-900/30 hover:text-red-400 transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}