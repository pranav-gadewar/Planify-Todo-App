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
      </div>
    </section>
  );
}
