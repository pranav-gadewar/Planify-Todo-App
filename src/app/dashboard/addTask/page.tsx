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

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { auth, db } from "@/lib/firebase";
// import toast, { Toaster } from "react-hot-toast";

// export default function AddTaskPage() {
//   const router = useRouter();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("Medium");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!title) {
//       toast.error("Task title is required");
//       return;
//     }

//     const user = auth.currentUser;

//     if (!user) {
//       console.error("User not authenticated");
//       toast.error("User not authenticated");
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

//       toast.success("Task created successfully");
//       setTitle("");
//       setDescription("");
//       setPriority("Medium");

//       // router.push("/dashboard/tasks");
//     } catch (error) {
//       console.error("Error adding task:", error);
//       toast.error("Failed to create task");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="w-full">
//       {/* Toast Container */}
//       <Toaster 
//   position="top-right"
//   toastOptions={{
//     duration: 3000, // 3 seconds
//   }}
// />

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
// Added for UI enhancement
import { motion } from "framer-motion";
import { PlusCircle, Type, AlignLeft, BarChart3, ArrowLeft } from "lucide-react";

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
      setTitle("");
      setDescription("");
      setPriority("Medium");

      // router.push("/dashboard/tasks");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Failed to create task");
    }

    setLoading(false);
  };

  return (
    <div className=" mx-auto w-full px-4 py-8">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(139, 92, 246, 0.5)',
          },
        }}
      />

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Create Task
          </h1>
        </div>
        <div className="p-3 rounded-2xl bg-purple-600/10 border border-purple-500/20">
          <PlusCircle className="w-8 h-8 text-purple-500" />
        </div>
      </motion.div>

      {/* Enhanced Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="relative group bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
      >
        {/* Decorative Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/10 blur-[100px] pointer-events-none" />

        <div className="space-y-6 relative z-10">
          {/* Title Input */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-300 ml-1">
              <Type className="w-4 h-4 mr-2 text-purple-500" /> Task Title
            </label>
            <input
              type="text"
              required
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Description Input */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-300 ml-1">
              <AlignLeft className="w-4 h-4 mr-2 text-purple-500" /> Description
            </label>
            <textarea
              rows={4}
              placeholder="Add some details about this task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/10 transition-all resize-none"
            />
          </div>

          {/* Priority Select */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-300 ml-1">
              <BarChart3 className="w-4 h-4 mr-2 text-purple-500" /> Priority Level
            </label>
            <div className="relative">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              >
                <option value="High" className="bg-gray-900">🔥 High Priority</option>
                <option value="Medium" className="bg-gray-900">⚡ Medium Priority</option>
                <option value="Low" className="bg-gray-900">🍃 Low Priority</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`w-full py-4 mt-4 rounded-xl font-bold text-white transition-all shadow-lg ${
              loading 
                ? "bg-gray-700 cursor-not-allowed" 
                : "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:shadow-purple-500/25"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Processing...
              </div>
            ) : (
              "Create Task"
            )}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}