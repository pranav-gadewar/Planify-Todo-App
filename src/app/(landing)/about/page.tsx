"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-blue-950 text-white relative overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-600/30 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-600/30 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* Hero Section */}
        <section className="text-center mb-28">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            About Planify
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Planify is a modern task management platform designed to help individuals stay organized,
            focused, and productive. Built with simplicity and performance in mind, Planify allows you
            to track your tasks, organize priorities, and maintain clarity in your daily workflow.
          </p>
        </section>

        {/* What is Planify */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Why Planify Exists</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Many task management apps become complicated with unnecessary features.
              Planify was created to keep productivity simple, fast, and distraction-free.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The goal is to help you focus on what truly matters — completing meaningful tasks
              and building consistent productivity habits every day.
            </p>
          </div>

          <div className="bg-black/40 border border-purple-700/30 p-8 rounded-2xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-6 text-purple-400">Core Principles</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><CheckCircle className="text-blue-400" size={20} /> Simplicity first</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-blue-400" size={20} /> Clean and distraction-free UI</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-blue-400" size={20} /> Fast performance</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-blue-400" size={20} /> Personal productivity focus</li>
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="mb-28">
          <h2 className="text-3xl font-semibold text-center mb-14">What Planify Helps You Do</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black/40 border border-purple-700/30 rounded-2xl p-8 hover:border-purple-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Organize Tasks</h3>
              <p className="text-gray-300 leading-relaxed">
                Create, manage, and track tasks effortlessly with a clean interface designed
                to keep your workflow simple.
              </p>
            </div>

            <div className="bg-black/40 border border-blue-700/30 rounded-2xl p-8 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Focus on Priorities</h3>
              <p className="text-gray-300 leading-relaxed">
                Highlight important tasks and ensure that your daily goals stay aligned with
                your long-term productivity.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-700/30 rounded-2xl p-8 hover:border-purple-500 transition">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Stay Consistent</h3>
              <p className="text-gray-300 leading-relaxed">
                Build better productivity habits by consistently tracking and completing
                your tasks each day.
              </p>
            </div>

          </div>
        </section>

        <section className="text-center mb-24 mt-20 px-4">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
            The Vision
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            Planify aims to become a{" "}
            <span className="text-white font-medium">lightweight productivity companion</span>{" "}
            that blends simplicity, speed, and thoughtful design. Instead of overwhelming users
            with features, Planify focuses on helping people{" "}
            <span className="text-white font-medium">take action</span> and maintain{" "}
            <span className="text-white font-medium">clarity</span> in their daily work.
          </p>
        </section>

        <div className="w-full flex justify-center items-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-7xl"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 rounded-2xl blur-2xl opacity-30"></div>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
              <Image
                src="/about/about dashboard.png" // 👉 replace with your image path
                alt="Dashboard Preview"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Vision Section */}
        {/* <section className="text-center mb-28 mt-16">
          <h2 className="text-5xl font-semibold mb-6">The Vision</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Planify aims to become a lightweight productivity companion that blends simplicity,
            speed, and thoughtful design. Instead of overwhelming users with features, Planify
            focuses on helping people take action and maintain clarity in their daily work.
          </p>
        </section> */}

        {/* CTA */}
        <section className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-xl">
            <div className="bg-black px-10 py-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Start Organizing Your Tasks</h3>
              <p className="text-gray-400 mb-6">Take control of your productivity with Planify.</p>

              <Link href="/auth/login" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Login to Planify <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}