"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MousePointerClick,
  Zap,
} from "lucide-react";

export default function Hero() {
  // Animation Variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030014] text-gray-200 flex flex-col justify-center">
      {/* 1. Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>
        {/* Modern Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center relative z-10">
        {/* 2. Animated Badge */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-medium mb-8 backdrop-blur-md"
        >
          <Sparkles size={14} />
          <span>Plan you tasks with Planify</span>
        </motion.div>

        {/* 3. Heading with Reveal Effect */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
        >
          Master Your Day <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Execute Your Vision
          </span>
        </motion.h1>

        {/* 4. Description */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Stop juggling tabs and start crushing goals. Planify integrates your
          workflow, tasks, and calendar into one cohesive, high-performance
          interface.
        </motion.p>

        {/* 5. Enhanced CTA Buttons */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <Link
            href="/auth/login"
            className="group relative px-8 py-4 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-all active:scale-95"
          >
            Get Started
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-gray-300 font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            About Planify
          </Link>
        </motion.div>

        {/* 6. Interactive Hero Preview Card */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-24 relative flex justify-center group"
        >
          {/* Decorative Glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative bg-[#0c0c1d]/80 backdrop-blur-2xl shadow-2xl rounded-2xl p-8 w-full max-w-[500px] border border-white/10">
            <div className="flex justify-between items-center mb-8">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">Focus Session</h3>
                <p className="text-xs text-gray-500 italic">
                  3 tasks remaining for today
                </p>
              </div>
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                <Zap size={20} fill="currentColor" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  text: "Finalize High-Fidelity UI",
                  color: "bg-purple-500",
                  done: true,
                },
                {
                  text: "Review API Documentation",
                  color: "bg-blue-500",
                  done: false,
                },
                {
                  text: "Sync with Design Team",
                  color: "bg-indigo-500",
                  done: false,
                },
              ].map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/50 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-2 h-2 rounded-full ${task.color} shadow-[0_0_10px_rgba(168,85,247,0.5)]`}
                    ></div>
                    <span
                      className={`text-sm ${task.done ? "text-gray-500 line-through" : "text-gray-200"}`}
                    >
                      {task.text}
                    </span>
                  </div>
                  <CheckCircle2
                    size={18}
                    className={task.done ? "text-green-500" : "text-gray-600"}
                  />
                </div>
              ))}
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -right-12 -bottom-6 hidden md:block animate-bounce">
              <div className="bg-blue-600 text-white p-3 rounded-xl shadow-xl flex items-center gap-2">
                <MousePointerClick size={16} />
                <span className="text-xs font-bold">1-Click Sync</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 7. Trust / Tech Stack Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={5}
          className="mt-24 pt-10 border-t border-white/5"
        >
          <p className="text-sm text-purple-400/60 mb-8 uppercase tracking-[0.3em] font-medium">
            Built for the 1% who execute
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-400 italic text-lg md:text-xl font-light">
            <span>Visionary Thinking</span>
            <span className="text-white/20">•</span>
            <span>Relentless Execution</span>
            <span className="text-white/20">•</span>
            <span>Uncompromising Focus</span>
          </div>
        </motion.div>
        
        <div className="flex flex-col justify-center items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-20 w-full max-w-5xl group"
        >
          {/* Ambient Purple Glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative overflow-hidden bg-neutral-950/50 backdrop-blur-3xl border border-white/10 shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)] rounded-[2.5rem] p-8 md:p-14">
            {/* Subtle Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10 pointer-events-none" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3"
              >
                Why use our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">ToDo App?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-neutral-400 text-lg mb-12 max-w-2xl leading-relaxed"
              >
                Built for speed, simplicity, and focus — helping you manage tasks without distractions.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-left"
              >
                {[
                  {
                    title: "Stay Organized",
                    desc: "All your tasks structured clearly so nothing gets lost.",
                  },
                  {
                    title: "Quick Task Management",
                    desc: "Add, edit, and complete tasks in seconds.",
                  },
                  {
                    title: "Deadlines & Focus",
                    desc: "Prioritize what matters and never miss important work.",
                  },
                  {
                    title: "Boost Productivity",
                    desc: "Reduce clutter and focus on completing goals faster.",
                  },
                  {
                    title: "Minimal & Clean UI",
                    desc: "Dark, distraction-free interface for better focus.",
                  },
                  {
                    title: "Accessible Anywhere",
                    desc: "Use seamlessly across devices anytime, anywhere.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group/item transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover/item:border-purple-400/50 group-hover/item:bg-purple-500/20 transition-all duration-300">
                        <CheckCircle2 className="text-purple-400 w-5 h-5 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-base group-hover/item:text-purple-300 transition-colors duration-300">
                        {item.title}
                      </p>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
        </div>
        {/* <div className="w-full flex justify-center items-center px-4 py-10 bg-neutral-950">
          <div className="w-full max-w-6xl">

            <img
              src="/poster.png" // 👉 replace with your image path
              alt="Planify Poster"
              className="w-full h-auto rounded-2xl shadow-2xl border border-neutral-800 object-cover"
            />

          </div>
        </div> */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="w-full flex justify-center items-center mt-20 px-4 py-20  overflow-hidden"
        >
          <div className="relative w-full max-w-6xl group">

            {/* Dynamic Background Glow - Purple Theme */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-500" />

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative"
            >
              {/* Floating Glass Overlay for Premium Feel */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-purple-500/30 transition-all duration-500 z-10 pointer-events-none" />

              <img
                src="/poster2.png"
                alt="Planify Poster"
                className="w-full h-auto rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] border border-neutral-800 object-cover filter saturate-[1.1] contrast-[1.02]"
              />

              {/* Subtle Bottom Light Reflection */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-purple-500/5 to-transparent rounded-b-2xl pointer-events-none" />
            </motion.div>

            {/* Decorative corner accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-violet-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          </div>
        </motion.div>
      </div>
    </section>
  );
}
