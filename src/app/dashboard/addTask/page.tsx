// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";

// export default function AddTaskPage() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("Medium");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title) return;

//     const user = auth.currentUser;

//     if (!user) {
//       console.error("User not authenticated");
//       return;
//     }

//     setLoading(true);

//     try {
//       await addDoc(collection(db, "tasks"), {
//         title,
//         description,
//         priority,
//         completed: false,
//         userId: user.uid,
//         createdAt: serverTimestamp(),
//       });

//       router.push("/dashboard/tasks");
//     } catch (error) {
//       console.error("Error adding task:", error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="w-full">
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-white mb-8">Add New Task</h1>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-black/40 backdrop-blur-lg border border-purple-900/40 rounded-xl p-8 space-y-6"
//       >
//         {/* Title */}
//         <div>
//           <label className="block text-sm text-gray-300 mb-2">Task Title</label>

//           <input
//             type="text"
//             required
//             placeholder="Enter task title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Description */}
//         <div>
//           <label className="block text-sm text-gray-300 mb-2">
//             Description
//           </label>

//           <textarea
//             rows={4}
//             placeholder="Enter task description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//         </div>

//         {/* Priority */}
//         <div>
//           <label className="block text-sm text-gray-300 mb-2">Priority</label>

//           <select
//             value={priority}
//             onChange={(e) => setPriority(e.target.value)}
//             className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           >
//             <option value="High">High</option>
//             <option value="Medium">Medium</option>
//             <option value="Low">Low</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition"
//         >
//           {loading ? "Creating Task..." : "Add Task"}
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import toast, { Toaster } from "react-hot-toast";

export default function AddTaskPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title) {
      toast.error("Task title is required");
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      console.error("User not authenticated");
      toast.error("User not authenticated");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "tasks"), {
        title,
        description,
        priority,
        completed: false,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });

      toast.success("Task created successfully");

      // router.push("/dashboard/tasks");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Failed to create task");
    }

    setLoading(false);
  };

  return (
    <div className="w-full">

      {/* Toast Container */}
      <Toaster position="top-right" />

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-white mb-8">Add New Task</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-black/40 backdrop-blur-lg border border-purple-900/40 rounded-xl p-8 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">Task Title</label>

          <input
            type="text"
            required
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Description
          </label>

          <textarea
            rows={4}
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">Priority</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition"
        >
          {loading ? "Creating Task..." : "Add Task"}
        </button>
      </form>
    </div>
  );
}