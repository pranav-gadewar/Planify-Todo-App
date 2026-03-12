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
// import toast, { Toaster } from "react-hot-toast";

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
//     try {
//       await signOut(auth);
//       toast.success("Logged out successfully");
//       router.replace("/");
//     } catch (error) {
//       console.error("Logout error:", error);
//       toast.error("Failed to logout");
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />

//       <aside
//         className={`fixed z-50 top-0 left-0 h-screen w-64 bg-black border-r border-purple-900/40 flex flex-col justify-between transform transition-transform duration-300
//   ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
//       >
//         {/* Top */}
//         <div>
//           <div className="flex items-center justify-between px-6 py-6 border-b border-purple-900/40">
//             <Link
//               href="/"
//               className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
//             >
//               Planify
//             </Link>

//             <button className="lg:hidden" onClick={() => setOpen(false)}>
//               <X size={22} />
//             </button>
//           </div>

//           <nav className="mt-6 px-4 space-y-2">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const active = pathname === item.href;

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
//                     active
//                       ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
//                       : "text-gray-300 hover:bg-purple-900/40 hover:text-white"
//                   }`}
//                 >
//                   <Icon size={20} />
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Bottom */}
//         <div className="p-4 border-t border-purple-900/40">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-red-900/30 hover:text-red-400 transition"
//           >
//             <LogOut size={20} />
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
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
import { motion, AnimatePresence } from "framer-motion";

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

      {/* Mobile Overlay - Adds a smooth fade-in backdrop when sidebar is open */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed z-50 top-0 left-0 h-screen w-64 bg-black border-r border-purple-900/40 flex flex-col justify-between transform transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Top */}
        <div>
          <div className="flex items-center justify-between px-6 py-6 border-b border-purple-900/40">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Planify
            </Link>

            <button className="lg:hidden text-gray-400 hover:text-white transition-colors" onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <nav className="mt-6 px-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
                        : "text-gray-400 hover:bg-purple-900/20 hover:text-white"
                    }`}
                  >
                    <Icon 
                      size={20} 
                      className={`transition-transform duration-300 ${active ? "scale-110" : "group-hover:scale-110"}`} 
                    />
                    <span className="font-medium">{item.name}</span>
                    
                    {/* Active Indicator Glow */}
                    {active && (
                      <motion.div 
                        layoutId="activeGlow"
                        className="absolute inset-0 rounded-lg bg-white/10 blur-sm"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Bottom */}
        <div className="p-4 border-t border-purple-900/40">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-400 hover:bg-red-950/30 hover:text-red-400 transition-all duration-300 border border-transparent hover:border-red-900/30"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </motion.button>
        </div>
      </aside>
    </>
  );
}