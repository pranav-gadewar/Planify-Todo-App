// "use client";

// import { useEffect, useState } from "react";
// import {
//   collection,
//   getDocs,
//   orderBy,
//   query,
//   Timestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import { deleteDoc, doc } from "firebase/firestore";

// import { auth, db } from "@/lib/firebase";
// import { where } from "firebase/firestore";

// interface Task {
//   id: string;
//   title: string;
//   description: string;
//   priority: string;
//   completed: boolean;
//   createdAt: Timestamp;
// }

// export default function TasksPage() {
//   const [tasksByDate, setTasksByDate] = useState<Record<string, Task[]>>({});
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const handleResetStatus = async (taskId: string) => {
//     try {
//       await updateDoc(doc(db, "tasks", taskId), {
//         completed: false,
//       });

//       setTasksByDate((prev) => {
//         const updated = { ...prev };
//         Object.keys(updated).forEach((date) => {
//           updated[date] = updated[date].map((task) =>
//             task.id === taskId ? { ...task, completed: false } : task,
//           );
//         });
//         return updated;
//       });
//     } catch (error) {
//       console.error("Error resetting task:", error);
//     }
//   };

//   const handleDelete = async (taskId: string) => {
//     const confirmDelete = confirm("Are you sure you want to delete this task?");
//     if (!confirmDelete) return;

//     try {
//       await deleteDoc(doc(db, "tasks", taskId));
//       setTasksByDate((prev) => {
//         const updated = { ...prev };
//         Object.keys(updated).forEach((date) => {
//           updated[date] = updated[date].filter((task) => task.id !== taskId);
//           if (updated[date].length === 0) delete updated[date];
//         });
//         return updated;
//       });
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const user = auth.currentUser;
//       if (!user) {
//         setLoading(false);
//         return;
//       }

//       const q = query(
//         collection(db, "tasks"),
//         where("userId", "==", user.uid),
//         orderBy("createdAt", "desc"),
//       );

//       const snapshot = await getDocs(q);
//       const tasks: Task[] = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Task, "id">),
//       }));

//       const grouped: Record<string, Task[]> = {};
//       tasks.forEach((task) => {
//         const date = task.createdAt
//           ? task.createdAt.toDate().toLocaleDateString()
//           : "No Date";
//         if (!grouped[date]) grouped[date] = [];
//         grouped[date].push(task);
//       });

//       setTasksByDate(grouped);
//       setLoading(false);
//     };

//     fetchTasks();
//   }, []);

//   if (loading) return <p className="p-6 md:p-10 text-gray-400">Loading tasks...</p>;

//   return (
//     <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
//       <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center sm:text-left">
//         Tasks
//       </h1>

//       {Object.keys(tasksByDate).length === 0 && (
//         <p className="text-gray-500">No tasks found.</p>
//       )}

//       {Object.keys(tasksByDate).map((date) => (
//         <div key={date} className="mb-8 md:mb-10">
//           <h2 className="text-lg md:text-xl font-semibold text-purple-400 mb-4 px-1">
//             {date}
//           </h2>

//           {/* Mobile Card View (Visible on small screens) */}
//           <div className="grid grid-cols-1 gap-4 md:hidden">
//             {tasksByDate[date].map((task) => (
//               <div 
//                 key={task.id} 
//                 className="bg-black/40 border border-purple-900/40 rounded-xl p-5 space-y-4"
//               >
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-white font-bold text-lg">{task.title}</h3>
//                   <span className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${
//                     task.priority === "High" ? "bg-red-500/20 text-red-400" :
//                     task.priority === "Medium" ? "bg-purple-500/20 text-purple-400" :
//                     "bg-blue-500/20 text-blue-400"
//                   }`}>
//                     {task.priority}
//                   </span>
//                 </div>
                
//                 <p className="text-gray-400 text-sm line-clamp-3">{task.description}</p>
                
//                 <div className="flex items-center gap-2">
//                    <div className={`px-3 py-1 text-xs rounded-full ${
//                       task.completed ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
//                     }`}>
//                     {task.completed ? "Completed" : "Pending"}
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-2 pt-2 border-t border-purple-900/20">
//                   <button
//                     onClick={() => router.push(`/dashboard/tasks/edit/${task.id}`)}
//                     className="flex-1 px-3 py-2 text-xs bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleResetStatus(task.id)}
//                     className="flex-1 px-3 py-2 text-xs bg-yellow-500/20 text-yellow-400 rounded-lg"
//                   >
//                     Reset
//                   </button>
//                   <button
//                     onClick={() => handleDelete(task.id)}
//                     className="flex-1 px-3 py-2 text-xs bg-red-500/20 text-red-400 rounded-lg"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Desktop Table View (Visible on md screens and up) */}
//           <div className="hidden md:block overflow-hidden bg-black/40 border border-purple-900/40 rounded-xl">
//             <div className="overflow-x-auto">
//               <table className="w-full text-left border-collapse">
//                 <thead className="border-b border-purple-900/40 text-gray-300 bg-purple-900/10">
//                   <tr>
//                     <th className="p-4 font-semibold">Title</th>
//                     <th className="p-4 font-semibold">Description</th>
//                     <th className="p-4 font-semibold">Priority</th>
//                     <th className="p-4 font-semibold">Status</th>
//                     <th className="p-4 font-semibold text-right">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tasksByDate[date].map((task) => (
//                     <tr
//                       key={task.id}
//                       className="border-b border-purple-900/20 hover:bg-purple-900/20 transition"
//                     >
//                       <td className="p-4 text-white font-medium">{task.title}</td>
//                       <td className="p-4 text-gray-400 max-w-xs truncate">{task.description}</td>
//                       <td className="p-4">
//                         <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                             task.priority === "High" ? "bg-red-500/20 text-red-400" :
//                             task.priority === "Medium" ? "bg-purple-500/20 text-purple-400" :
//                             "bg-blue-500/20 text-blue-400"
//                         }`}>
//                           {task.priority}
//                         </span>
//                       </td>
//                       <td className="p-4">
//                         <div className={`px-3 py-1 text-xs rounded-full w-fit ${
//                             task.completed ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
//                         }`}>
//                           {task.completed ? "Completed" : "Pending"}
//                         </div>
//                       </td>
//                       <td className="p-4">
//                         <div className="flex justify-end gap-2">
//                           <button
//                             onClick={() => router.push(`/dashboard/tasks/edit/${task.id}`)}
//                             className="px-3 py-1.5 text-xs bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white hover:opacity-80"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleResetStatus(task.id)}
//                             className="px-3 py-1.5 text-xs bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30"
//                           >
//                             Reset
//                           </button>
//                           <button
//                             onClick={() => handleDelete(task.id)}
//                             className="px-3 py-1.5 text-xs bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { deleteDoc, doc } from "firebase/firestore";

import { auth, db } from "@/lib/firebase";
import { where } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
  createdAt: Timestamp;
}

export default function TasksPage() {
  const [tasksByDate, setTasksByDate] = useState<Record<string, Task[]>>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleResetStatus = async (taskId: string) => {
    try {
      await updateDoc(doc(db, "tasks", taskId), {
        completed: false,
      });

      setTasksByDate((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((date) => {
          updated[date] = updated[date].map((task) =>
            task.id === taskId ? { ...task, completed: false } : task,
          );
        });
        return updated;
      });

      toast.success("Task status reset to pending");
    } catch (error) {
      console.error("Error resetting task:", error);
      toast.error("Failed to reset task");
    }
  };

  const handleDelete = async (taskId: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "tasks", taskId));
      setTasksByDate((prev) => {
        const updated = { ...prev };
        Object.keys(updated).forEach((date) => {
          updated[date] = updated[date].filter((task) => task.id !== taskId);
          if (updated[date].length === 0) delete updated[date];
        });
        return updated;
      });

      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const user = auth.currentUser;
      if (!user) {
        setLoading(false);
        return;
      }

      const q = query(
        collection(db, "tasks"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc"),
      );

      const snapshot = await getDocs(q);
      const tasks: Task[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, "id">),
      }));

      const grouped: Record<string, Task[]> = {};
      tasks.forEach((task) => {
        const date = task.createdAt
          ? task.createdAt.toDate().toLocaleDateString()
          : "No Date";
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(task);
      });

      setTasksByDate(grouped);
      setLoading(false);
    };

    fetchTasks();
  }, []);

  if (loading) return <p className="p-6 md:p-10 text-gray-400">Loading tasks...</p>;

  return (
    <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center sm:text-left">
        Tasks
      </h1>

      {Object.keys(tasksByDate).length === 0 && (
        <p className="text-gray-500">No tasks found.</p>
      )}

      {Object.keys(tasksByDate).map((date) => (
        <div key={date} className="mb-8 md:mb-10">
          <h2 className="text-lg md:text-xl font-semibold text-purple-400 mb-4 px-1">
            {date}
          </h2>

          {/* Mobile Card View */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {tasksByDate[date].map((task) => (
              <div
                key={task.id}
                className="bg-black/40 border border-purple-900/40 rounded-xl p-5 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-bold text-lg">{task.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${
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

                <p className="text-gray-400 text-sm line-clamp-3">
                  {task.description}
                </p>

                <div className="flex items-center gap-2">
                  <div
                    className={`px-3 py-1 text-xs rounded-full ${
                      task.completed
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-purple-900/20">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/tasks/edit/${task.id}`)
                    }
                    className="flex-1 px-3 py-2 text-xs bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleResetStatus(task.id)}
                    className="flex-1 px-3 py-2 text-xs bg-yellow-500/20 text-yellow-400 rounded-lg"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="flex-1 px-3 py-2 text-xs bg-red-500/20 text-red-400 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden bg-black/40 border border-purple-900/40 rounded-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="border-b border-purple-900/40 text-gray-300 bg-purple-900/10">
                  <tr>
                    <th className="p-4 font-semibold">Title</th>
                    <th className="p-4 font-semibold">Description</th>
                    <th className="p-4 font-semibold">Priority</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tasksByDate[date].map((task) => (
                    <tr
                      key={task.id}
                      className="border-b border-purple-900/20 hover:bg-purple-900/20 transition"
                    >
                      <td className="p-4 text-white font-medium">
                        {task.title}
                      </td>
                      <td className="p-4 text-gray-400 max-w-xs truncate">
                        {task.description}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            task.priority === "High"
                              ? "bg-red-500/20 text-red-400"
                              : task.priority === "Medium"
                              ? "bg-purple-500/20 text-purple-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {task.priority}
                        </span>
                      </td>
                      <td className="p-4">
                        <div
                          className={`px-3 py-1 text-xs rounded-full w-fit ${
                            task.completed
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {task.completed ? "Completed" : "Pending"}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() =>
                              router.push(`/dashboard/tasks/edit/${task.id}`)
                            }
                            className="px-3 py-1.5 text-xs bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white hover:opacity-80"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleResetStatus(task.id)}
                            className="px-3 py-1.5 text-xs bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30"
                          >
                            Reset
                          </button>
                          <button
                            onClick={() => handleDelete(task.id)}
                            className="px-3 py-1.5 text-xs bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}