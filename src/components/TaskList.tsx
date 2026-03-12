"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
  createdAt?: Timestamp;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      const snapshot = await getDocs(collection(db, "tasks"));

      const taskList: Task[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, "id">),
      }));

      // Pending tasks first
      taskList.sort((a, b) => Number(a.completed) - Number(b.completed));

      setTasks(taskList);
    };

    fetchTasks();
  }, []);

  // Toggle completion
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

  return (
    <section id="tasks" className="max-w-4xl mx-auto px-6 py-24 bg-white">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4">
          Task Preview
        </p>

        <h2 className="text-4xl font-bold text-gray-900">
          Your Tasks, Organized
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Stay productive and manage your daily work efficiently with Planify.
        </p>
      </div>

      {/* Task List */}
      <div className="bg-white border border-purple-100 rounded-xl shadow-sm divide-y">

        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between px-6 py-4 transition hover:bg-purple-50 ${
              task.completed ? "opacity-60 bg-gray-50" : ""
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
                  <Circle className="text-purple-500" size={22} />
                )}
              </button>

              <div>
                <h3
                  className={`font-medium ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-900"
                  }`}
                >
                  {task.title}
                </h3>

                <p
                  className={`text-sm ${
                    task.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-600"
                  }`}
                >
                  {task.description}
                </p>
              </div>

            </div>

            {/* Priority */}
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                task.priority === "High"
                  ? "bg-red-100 text-red-600"
                  : task.priority === "Medium"
                  ? "bg-purple-100 text-purple-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {task.priority}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}