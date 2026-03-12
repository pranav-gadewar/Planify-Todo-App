// "use client";

// import { useEffect, useState } from "react";
// import { CheckCircle2, Circle, Plus } from "lucide-react";
// import { auth, db } from "@/lib/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   Timestamp,
// } from "firebase/firestore";
// import Link from "next/link";

// interface Task {
//   id: string;
//   title: string;
//   completed: boolean;
//   priority: string;
//   createdAt?: Timestamp;
//   userId: string;
// }

// export default function DashboardPage() {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [total, setTotal] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (!user) return;

//       const q = query(
//         collection(db, "tasks"),
//         where("userId", "==", user.uid)
//       );

//       const snapshot = await getDocs(q);

//       const taskList: Task[] = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Task, "id">),
//       }));

//       setTasks(taskList.slice(0, 5));

//       const completedTasks = taskList.filter((t) => t.completed).length;

//       setTotal(taskList.length);
//       setCompleted(completedTasks);
//     });

//     return () => unsubscribe();
//   }, []);

//   const pending = total - completed;

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

//       {/* Header */}
//       <div>
//         <h1 className="text-2xl sm:text-3xl font-bold text-white">
//           Dashboard
//         </h1>

//         <p className="text-gray-400 mt-2 text-sm sm:text-base">
//           Manage your tasks and stay productive with Planify.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         <div className="bg-black/40 border border-purple-900/40 p-6 rounded-xl">
//           <p className="text-gray-400 text-sm">Total Tasks</p>
//           <h2 className="text-3xl font-bold text-white mt-2">
//             {total}
//           </h2>
//         </div>

//         <div className="bg-black/40 border border-purple-900/40 p-6 rounded-xl">
//           <p className="text-gray-400 text-sm">Completed</p>
//           <h2 className="text-3xl font-bold text-green-400 mt-2">
//             {completed}
//           </h2>
//         </div>

//         <div className="bg-black/40 border border-purple-900/40 p-6 rounded-xl">
//           <p className="text-gray-400 text-sm">Pending</p>
//           <h2 className="text-3xl font-bold text-yellow-400 mt-2">
//             {pending}
//           </h2>
//         </div>

//       </div>

//       {/* Quick Actions */}
//       <div className="flex flex-col sm:flex-row gap-4">

//         <Link
//           href="/dashboard/addTask"
//           className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition"
//         >
//           <Plus size={18} />
//           Add Task
//         </Link>

//         <Link
//           href="/dashboard/tasks"
//           className="flex items-center justify-center px-6 py-3 rounded-lg border border-purple-900/40 text-gray-300 hover:bg-purple-900/30 transition"
//         >
//           View All Tasks
//         </Link>

//       </div>

//       {/* Recent Tasks */}
//       <div className="bg-black/40 border border-purple-900/40 rounded-xl overflow-hidden">

//         <div className="p-5 sm:p-6 border-b border-purple-900/40">
//           <h2 className="text-lg sm:text-xl font-semibold text-white">
//             Recent Tasks
//           </h2>
//         </div>

//         <div className="divide-y border-purple-900/40">

//           {tasks.length === 0 && (
//             <div className="p-6 text-gray-400">
//               No tasks yet.
//             </div>
//           )}

//           {tasks.map((task) => (
//             <div
//               key={task.id}
//               className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 sm:p-6 hover:bg-purple-900/20 transition"
//             >

//               {/* Left */}
//               <div className="flex items-center gap-4 min-w-0">

//                 {task.completed ? (
//                   <CheckCircle2 className="text-green-400 shrink-0" size={20} />
//                 ) : (
//                   <Circle className="text-purple-400 shrink-0" size={20} />
//                 )}

//                 <span
//                   className={`truncate ${
//                     task.completed
//                       ? "line-through text-gray-500"
//                       : "text-gray-200"
//                   }`}
//                 >
//                   {task.title}
//                 </span>

//               </div>

//               {/* Priority */}
//               <span
//                 className={`text-xs px-3 py-1 rounded-full w-fit ${
//                   task.priority === "High"
//                     ? "bg-red-500/20 text-red-400"
//                     : task.priority === "Medium"
//                     ? "bg-purple-500/20 text-purple-400"
//                     : "bg-blue-500/20 text-blue-400"
//                 }`}
//               >
//                 {task.priority}
//               </span>

//             </div>
//           ))}

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, Plus, Calendar as CalendarIcon, LayoutDashboard, ArrowRight } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy, // Added for sorting
  Timestamp,
} from "firebase/firestore";
import Link from "next/link";
import { motion } from "framer-motion"; // Added for UI enhancement

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: string;
  createdAt?: Timestamp;
  userId: string;
}

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      // Enhanced query with ordering by createdAt descending
      const q = query(
        collection(db, "tasks"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const taskList: Task[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, "id">),
      }));

      setTasks(taskList.slice(0, 10)); // Increased slice slightly for better list view

      const completedTasks = taskList.filter((t) => t.completed).length;
      setTotal(taskList.length);
      setCompleted(completedTasks);
    });

    return () => unsubscribe();
  }, []);

  const pending = total - completed;

  // Helper function to group tasks by date
  const groupTasksByDate = (tasks: Task[]) => {
    const groups: { [key: string]: Task[] } = {};
    tasks.forEach((task) => {
      const date = task.createdAt ? task.createdAt.toDate().toLocaleDateString(undefined, { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) : "No Date";
      
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(task);
    });
    return groups;
  };

  const groupedTasks = groupTasksByDate(tasks);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2 text-purple-500 mb-2">
            <LayoutDashboard size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Overview</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-2 text-base max-w-md">
            Welcome back! Here&apos;s a summary of your productivity and upcoming tasks.
          </p>
        </div>

        <div className="flex flex-row gap-3">
          <Link
            href="/dashboard/addTask"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-lg shadow-white/5"
          >
            <Plus size={18} strokeWidth={3} />
            Add Task
          </Link>
          <Link
            href="/dashboard/tasks"
            className="flex items-center justify-center px-5 py-3 rounded-xl bg-purple-600/10 border border-purple-500/30 text-purple-300 font-medium hover:bg-purple-600/20 transition-all"
          >
            View All
          </Link>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Total Tasks", value: total, color: "text-white", border: "border-white/10" },
          { label: "Completed", value: completed, color: "text-green-400", border: "border-green-500/20" },
          { label: "Pending", value: pending, color: "text-yellow-400", border: "border-yellow-500/20" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border ${stat.border} p-8 rounded-2xl relative overflow-hidden group`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={64} />
            </div>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            <h2 className={`text-4xl font-black ${stat.color} mt-3`}>
              {stat.value}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Recent Tasks Grouped by Date */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CalendarIcon size={20} className="text-purple-500" />
            Recent Activity
          </h2>
        </div>

        <div className="space-y-8">
          {Object.keys(groupedTasks).length === 0 ? (
            <div className="bg-black/20 border border-dashed border-white/10 p-12 rounded-2xl text-center text-gray-500">
              No tasks found. Click &quot;Add Task&quot; to get started.
            </div>
          ) : (
            Object.keys(groupedTasks).map((date, idx) => (
              <motion.div 
                key={date}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest px-1">
                  {date}
                </h3>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl divide-y divide-white/5 overflow-hidden shadow-xl">
                  {groupedTasks[date].map((task) => (
                    <motion.div
                      key={task.id}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 transition-all group"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="relative">
                          {task.completed ? (
                            <CheckCircle2 className="text-green-500 shrink-0" size={22} />
                          ) : (
                            <Circle className="text-white/20 shrink-0 group-hover:text-purple-400 transition-colors" size={22} />
                          )}
                        </div>

                        <span
                          className={`text-base font-medium truncate transition-all ${
                            task.completed
                              ? "line-through text-gray-500 opacity-60"
                              : "text-gray-200"
                          }`}
                        >
                          {task.title}
                        </span>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-tighter px-3 py-1 rounded-lg border ${
                            task.priority === "High"
                              ? "border-red-500/30 bg-red-500/10 text-red-400"
                              : task.priority === "Medium"
                              ? "border-purple-500/30 bg-purple-500/10 text-purple-400"
                              : "border-blue-500/30 bg-blue-500/10 text-blue-400"
                          }`}
                        >
                          {task.priority}
                        </span>
                        <ArrowRight size={16} className="text-white/0 group-hover:text-white/20 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}