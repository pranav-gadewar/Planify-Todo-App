"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
  createdAt?: Timestamp;
  userId: string;
}

export default function ViewTasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Detect logged in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Fetch tasks of this user only
  useEffect(() => {
    if (!user) return;

    const fetchTasks = async () => {
      try {
        const q = query(
          collection(db, "tasks"),
          where("userId", "==", user.uid)
        );

        const snapshot = await getDocs(q);

        const taskList: Task[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Task, "id">),
        }));

        // Pending tasks first
        taskList.sort((a, b) => Number(a.completed) - Number(b.completed));

        setTasks(taskList);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }

      setLoading(false);
    };

    fetchTasks();
  }, [user]);

  // Toggle task completion
  const toggleTask = async (task: Task) => {
    try {
      await updateDoc(doc(db, "tasks", task.id), {
        completed: !task.completed,
      });

      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id ? { ...t, completed: !t.completed } : t
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto text-gray-400">
        Loading tasks...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-white mb-8">
        View Tasks
      </h1>

      {/* Task List */}
      <div className="bg-black/40 border border-purple-900/40 rounded-xl divide-y">

        {tasks.length === 0 && (
          <div className="p-6 text-gray-400">
            No tasks found.
          </div>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between px-6 py-4 transition hover:bg-purple-900/20 ${
              task.completed ? "opacity-60" : ""
            }`}
          >

            {/* Left Section */}
            <div className="flex items-center gap-4">

              <button
                onClick={() => toggleTask(task)}
                className="transition hover:scale-110"
              >
                {task.completed ? (
                  <CheckCircle2 className="text-green-500" size={22} />
                ) : (
                  <Circle className="text-purple-400" size={22} />
                )}
              </button>

              <div>
                <h3
                  className={`font-medium ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-white"
                  }`}
                >
                  {task.title}
                </h3>

                <p
                  className={`text-sm ${
                    task.completed
                      ? "text-gray-500 line-through"
                      : "text-gray-400"
                  }`}
                >
                  {task.description}
                </p>
              </div>

            </div>

            {/* Priority Badge */}
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
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
  );
}