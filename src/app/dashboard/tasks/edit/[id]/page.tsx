// "use client";

// import { useEffect, useState, use } from "react"; // Added 'use'
// import { useRouter } from "next/navigation";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// interface Task {
//     title: string;
//     description: string;
//     priority: string;
//     completed: boolean;
// }

// // Params is now a Promise in Next.js 15
// export default function EditTaskPage({ params }: { params: Promise<{ id: string }> }) {
//     const router = useRouter();
    
//     // Unwrap the params promise using React.use()
//     const resolvedParams = use(params);
//     const taskId = resolvedParams.id;

//     const [task, setTask] = useState<Task>({
//         title: "",
//         description: "",
//         priority: "Medium",
//         completed: false,
//     });

//     const [loading, setLoading] = useState(true);

//     // Fetch task
//     useEffect(() => {
//         const fetchTask = async () => {
//             const docRef = doc(db, "tasks", taskId);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 setTask(docSnap.data() as Task);
//             }

//             setLoading(false);
//         };

//         fetchTask();
//     }, [taskId]);

//     // Handle form change
//     const handleChange = (
//         e: React.ChangeEvent<
//             HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//         >,
//     ) => {
//         setTask({
//             ...task,
//             [e.target.name]: e.target.value,
//         });
//     };

//     // Handle checkbox
//     const handleStatusChange = () => {
//         setTask({
//             ...task,
//             completed: !task.completed,
//         });
//     };

//     // Submit update
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {
//             const docRef = doc(db, "tasks", taskId);

//             await updateDoc(docRef, {
//                 title: task.title,
//                 description: task.description,
//                 priority: task.priority,
//                 completed: task.completed,
//             });

//             router.push("/dashboard/tasks");
//         } catch (error) {
//             console.error("Error updating task:", error);
//         }
//     };

//     if (loading) {
//         return <p className="p-6 md:p-10 text-gray-400">Loading task...</p>;
//     }

//     return (
//         <div className="p-4 sm:p-6 md:p-10 max-w-2xl mx-auto w-full">
//             <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center sm:text-left">
//                 Edit Task
//             </h1>

//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-black/40 backdrop-blur-lg border border-purple-900/40 rounded-xl p-5 sm:p-8 space-y-6"
//             >
//                 {/* Title */}
//                 <div>
//                     <label className="block text-sm text-gray-300 mb-2">Task Title</label>
//                     <input
//                         name="title"
//                         value={task.title}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
//                     />
//                 </div>

//                 {/* Description */}
//                 <div>
//                     <label className="block text-sm text-gray-300 mb-2">
//                         Description
//                     </label>
//                     <textarea
//                         name="description"
//                         value={task.description}
//                         onChange={handleChange}
//                         rows={4}
//                         className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
//                     />
//                 </div>

//                 {/* Priority */}
//                 <div>
//                     <label className="block text-sm text-gray-300 mb-2">Priority</label>
//                     <select
//                         name="priority"
//                         value={task.priority}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
//                     >
//                         <option value="High">High</option>
//                         <option value="Medium">Medium</option>
//                         <option value="Low">Low</option>
//                     </select>
//                 </div>

//                 {/* Status */}
//                 <div className="flex items-center gap-3 select-none">
//                     <input
//                         type="checkbox"
//                         id="completed"
//                         checked={task.completed}
//                         onChange={handleStatusChange}
//                         className="w-5 h-5 cursor-pointer accent-purple-600"
//                     />
//                     <label htmlFor="completed" className="text-gray-300 cursor-pointer">
//                         Mark as Completed
//                     </label>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4 pt-2">
//                     <button
//                         type="submit"
//                         className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity order-1 sm:order-none"
//                     >
//                         Update Task
//                     </button>

//                     <button
//                         type="button"
//                         onClick={() => router.back()}
//                         className="w-full sm:w-auto px-6 py-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors order-2 sm:order-none"
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

"use client";

import { useEffect, useState, use } from "react"; // Added 'use'
import { useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast, { Toaster } from "react-hot-toast";

interface Task {
    title: string;
    description: string;
    priority: string;
    completed: boolean;
}

// Params is now a Promise in Next.js 15
export default function EditTaskPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    
    // Unwrap the params promise using React.use()
    const resolvedParams = use(params);
    const taskId = resolvedParams.id;

    const [task, setTask] = useState<Task>({
        title: "",
        description: "",
        priority: "Medium",
        completed: false,
    });

    const [loading, setLoading] = useState(true);

    // Fetch task
    useEffect(() => {
        const fetchTask = async () => {
            const docRef = doc(db, "tasks", taskId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setTask(docSnap.data() as Task);
                toast.success("Task loaded successfully");
            } else {
                toast.error("Task not found");
            }

            setLoading(false);
        };

        fetchTask();
    }, [taskId]);

    // Handle form change
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    // Handle checkbox
    const handleStatusChange = () => {
        setTask({
            ...task,
            completed: !task.completed,
        });
    };

    // Submit update
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const docRef = doc(db, "tasks", taskId);

            await updateDoc(docRef, {
                title: task.title,
                description: task.description,
                priority: task.priority,
                completed: task.completed,
            });

            toast.success("Task updated successfully");

            router.push("/dashboard/tasks");
        } catch (error) {
            console.error("Error updating task:", error);
            toast.error("Failed to update task");
        }
    };

    if (loading) {
        return <p className="p-6 md:p-10 text-gray-400">Loading task...</p>;
    }

    return (
        <div className="p-4 sm:p-6 md:p-10 max-w-2xl mx-auto w-full">
            <Toaster position="top-right" reverseOrder={false} />

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center sm:text-left">
                Edit Task
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-black/40 backdrop-blur-lg border border-purple-900/40 rounded-xl p-5 sm:p-8 space-y-6"
            >
                {/* Title */}
                <div>
                    <label className="block text-sm text-gray-300 mb-2">Task Title</label>
                    <input
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm text-gray-300 mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                    />
                </div>

                {/* Priority */}
                <div>
                    <label className="block text-sm text-gray-300 mb-2">Priority</label>
                    <select
                        name="priority"
                        value={task.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-purple-900/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 select-none">
                    <input
                        type="checkbox"
                        id="completed"
                        checked={task.completed}
                        onChange={handleStatusChange}
                        className="w-5 h-5 cursor-pointer accent-purple-600"
                    />
                    <label htmlFor="completed" className="text-gray-300 cursor-pointer">
                        Mark as Completed
                    </label>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity order-1 sm:order-none"
                    >
                        Update Task
                    </button>

                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-full sm:w-auto px-6 py-3 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors order-2 sm:order-none"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}