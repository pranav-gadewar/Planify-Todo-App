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
//     <div className="max-w-6xl mx-auto space-y-10">

//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-white">
//           Dashboard
//         </h1>

//         <p className="text-gray-400 mt-2">
//           Manage your tasks and stay productive with Planify.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid md:grid-cols-3 gap-6">

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
//       <div className="flex gap-4">

//         <Link
//           href="/dashboard/addTask"
//           className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition"
//         >
//           <Plus size={18} />
//           Add Task
//         </Link>

//         <Link
//           href="/dashboard/tasks"
//           className="px-6 py-3 rounded-lg border border-purple-900/40 text-gray-300 hover:bg-purple-900/30 transition"
//         >
//           View All Tasks
//         </Link>

//       </div>

//       {/* Recent Tasks */}
//       <div className="bg-black/40 border border-purple-900/40 rounded-xl">

//         <div className="p-6 border-b border-purple-900/40">
//           <h2 className="text-xl font-semibold text-white">
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
//               className="flex items-center justify-between p-6 hover:bg-purple-900/20 transition"
//             >

//               <div className="flex items-center gap-4">

//                 {task.completed ? (
//                   <CheckCircle2 className="text-green-400" size={20} />
//                 ) : (
//                   <Circle className="text-purple-400" size={20} />
//                 )}

//                 <span
//                   className={`${
//                     task.completed
//                       ? "line-through text-gray-500"
//                       : "text-gray-200"
//                   }`}
//                 >
//                   {task.title}
//                 </span>

//               </div>

//               <span
//                 className={`text-xs px-3 py-1 rounded-full ${
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
import { CheckCircle2, Circle, Plus } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import Link from "next/link";

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

      const q = query(
        collection(db, "tasks"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      const taskList: Task[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, "id">),
      }));

      setTasks(taskList.slice(0, 5));

      const completedTasks = taskList.filter((t) => t.completed).length;

      setTotal(taskList.length);
      setCompleted(completedTasks);
    });

    return () => unsubscribe();
  }, []);

  const pending = total - completed;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Manage your tasks and stay productive with Planify.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-black/40 border border-purple-900/40 p-6 rounded-xl">
          <p className="text-gray-400 text-sm">Total Tasks</p>
          <h2 className="text-3xl font-bold text-white mt-2">
            {total}
          </h2>
        </div>

        <div className="bg-black/40 border border-purple-900/40 p-6 rounded-xl">
          <p className="text-gray-400 text-sm">Completed</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            {completed}
          </h2>
        </div>

        <div className="bg-black/40 border border-purple-900/40 p-6 rounded-xl">
          <p className="text-gray-400 text-sm">Pending</p>
          <h2 className="text-3xl font-bold text-yellow-400 mt-2">
            {pending}
          </h2>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4">

        <Link
          href="/dashboard/addTask"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition"
        >
          <Plus size={18} />
          Add Task
        </Link>

        <Link
          href="/dashboard/tasks"
          className="flex items-center justify-center px-6 py-3 rounded-lg border border-purple-900/40 text-gray-300 hover:bg-purple-900/30 transition"
        >
          View All Tasks
        </Link>

      </div>

      {/* Recent Tasks */}
      <div className="bg-black/40 border border-purple-900/40 rounded-xl overflow-hidden">

        <div className="p-5 sm:p-6 border-b border-purple-900/40">
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Recent Tasks
          </h2>
        </div>

        <div className="divide-y border-purple-900/40">

          {tasks.length === 0 && (
            <div className="p-6 text-gray-400">
              No tasks yet.
            </div>
          )}

          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 sm:p-6 hover:bg-purple-900/20 transition"
            >

              {/* Left */}
              <div className="flex items-center gap-4 min-w-0">

                {task.completed ? (
                  <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                ) : (
                  <Circle className="text-purple-400 shrink-0" size={20} />
                )}

                <span
                  className={`truncate ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-200"
                  }`}
                >
                  {task.title}
                </span>

              </div>

              {/* Priority */}
              <span
                className={`text-xs px-3 py-1 rounded-full w-fit ${
                  task.priority === "High"
                    ? "bg-red-500/20 text-red-400"
                    : task.priority === "Medium"
                    ? "bg-purple-500/20 text-purple-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
              >
                {task.priority}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}