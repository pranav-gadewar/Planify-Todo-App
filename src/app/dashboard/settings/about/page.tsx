// "use client";

// import { CheckCircle, Sparkles, Rocket } from "lucide-react";

// export default function AboutSettingsPage() {
//   return (
//     <div className="px-8 py-10">

//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-white mb-8">
//         About Planify
//       </h1>

//       {/* App Info Card */}
//       <div className="max-w-4xl rounded-2xl border border-white/10 
//       bg-white/5 backdrop-blur-lg p-8 shadow-xl mb-10">

//         <div className="flex items-center gap-3 mb-4">
//           <Sparkles className="text-purple-400" />
//           <h2 className="text-xl font-semibold text-white">
//             What is Planify?
//           </h2>
//         </div>

//         <p className="text-gray-300 leading-relaxed">
//           Planify is a modern task management application designed to help
//           individuals stay organized, focused, and productive. It provides
//           a simple yet powerful interface to manage tasks, prioritize work,
//           and build consistent productivity habits.
//         </p>

//       </div>

//       {/* Core Principles */}
//       <div className="max-w-4xl rounded-2xl border border-white/10 
//       bg-white/5 backdrop-blur-lg p-8 shadow-xl mb-10">

//         <h2 className="text-xl font-semibold text-white mb-6">
//           Core Principles
//         </h2>

//         <ul className="space-y-4 text-gray-300">

//           <li className="flex items-center gap-3">
//             <CheckCircle size={20} className="text-blue-400"/>
//             Simplicity-first design
//           </li>

//           <li className="flex items-center gap-3">
//             <CheckCircle size={20} className="text-blue-400"/>
//             Clean and distraction-free interface
//           </li>

//           <li className="flex items-center gap-3">
//             <CheckCircle size={20} className="text-blue-400"/>
//             Fast and responsive performance
//           </li>

//           <li className="flex items-center gap-3">
//             <CheckCircle size={20} className="text-blue-400"/>
//             Focus on personal productivity
//           </li>

//         </ul>

//       </div>

//       {/* Features */}
//       <div className="grid md:grid-cols-3 gap-6 max-w-5xl">

//         <div className="rounded-xl border border-purple-700/30 
//         bg-black/40 p-6 hover:border-purple-500 transition">

//           <h3 className="text-lg font-semibold text-purple-400 mb-2">
//             Organize Tasks
//           </h3>

//           <p className="text-gray-400 text-sm">
//             Create, manage, and track your daily tasks using a clean
//             and intuitive interface.
//           </p>

//         </div>

//         <div className="rounded-xl border border-blue-700/30 
//         bg-black/40 p-6 hover:border-blue-500 transition">

//           <h3 className="text-lg font-semibold text-blue-400 mb-2">
//             Focus on Priorities
//           </h3>

//           <p className="text-gray-400 text-sm">
//             Highlight important tasks and ensure your workflow
//             stays aligned with your goals.
//           </p>

//         </div>

//         <div className="rounded-xl border border-purple-700/30 
//         bg-black/40 p-6 hover:border-purple-500 transition">

//           <h3 className="text-lg font-semibold text-purple-400 mb-2">
//             Stay Consistent
//           </h3>

//           <p className="text-gray-400 text-sm">
//             Build productivity habits by consistently tracking
//             and completing tasks.
//           </p>

//         </div>

//       </div>

//       {/* Vision */}
//       <div className="max-w-4xl rounded-2xl border border-white/10 
//       bg-white/5 backdrop-blur-lg p-8 shadow-xl mt-10">

//         <div className="flex items-center gap-3 mb-4">
//           <Rocket className="text-blue-400"/>
//           <h2 className="text-xl font-semibold text-white">
//             Our Vision
//           </h2>
//         </div>

//         <p className="text-gray-300 leading-relaxed">
//           Planify aims to become a lightweight productivity companion that
//           blends simplicity, speed, and thoughtful design. Instead of
//           overwhelming users with features, the goal is to help people stay
//           focused and take meaningful action every day.
//         </p>

//       </div>

//       {/* Footer Info */}
//       <p className="text-gray-500 text-sm mt-10">
//         Planify Version 1.0 • Built with Next.js, Firebase, and Tailwind CSS
//       </p>

//     </div>
//   );
// }

"use client";

import { CheckCircle, Sparkles, Rocket } from "lucide-react";

export default function AboutSettingsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">
        About Planify
      </h1>

      {/* App Info Card */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-lg p-6 sm:p-8 shadow-xl mb-10">

        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-purple-400" />
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            What is Planify?
          </h2>
        </div>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          Planify is a modern task management application designed to help
          individuals stay organized, focused, and productive. It provides
          a simple yet powerful interface to manage tasks, prioritize work,
          and build consistent productivity habits.
        </p>

      </div>

      {/* Core Principles */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-lg p-6 sm:p-8 shadow-xl mb-10">

        <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">
          Core Principles
        </h2>

        <ul className="space-y-4 text-gray-300">

          <li className="flex items-center gap-3">
            <CheckCircle size={20} className="text-blue-400"/>
            Simplicity-first design
          </li>

          <li className="flex items-center gap-3">
            <CheckCircle size={20} className="text-blue-400"/>
            Clean and distraction-free interface
          </li>

          <li className="flex items-center gap-3">
            <CheckCircle size={20} className="text-blue-400"/>
            Fast and responsive performance
          </li>

          <li className="flex items-center gap-3">
            <CheckCircle size={20} className="text-blue-400"/>
            Focus on personal productivity
          </li>

        </ul>

      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="rounded-xl border border-purple-700/30 
        bg-black/40 p-6 hover:border-purple-500 transition">

          <h3 className="text-lg font-semibold text-purple-400 mb-2">
            Organize Tasks
          </h3>

          <p className="text-gray-400 text-sm">
            Create, manage, and track your daily tasks using a clean
            and intuitive interface.
          </p>

        </div>

        <div className="rounded-xl border border-blue-700/30 
        bg-black/40 p-6 hover:border-blue-500 transition">

          <h3 className="text-lg font-semibold text-blue-400 mb-2">
            Focus on Priorities
          </h3>

          <p className="text-gray-400 text-sm">
            Highlight important tasks and ensure your workflow
            stays aligned with your goals.
          </p>

        </div>

        <div className="rounded-xl border border-purple-700/30 
        bg-black/40 p-6 hover:border-purple-500 transition">

          <h3 className="text-lg font-semibold text-purple-400 mb-2">
            Stay Consistent
          </h3>

          <p className="text-gray-400 text-sm">
            Build productivity habits by consistently tracking
            and completing tasks.
          </p>

        </div>

      </div>

      {/* Vision */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl border border-white/10 
      bg-white/5 backdrop-blur-lg p-6 sm:p-8 shadow-xl mt-10">

        <div className="flex items-center gap-3 mb-4">
          <Rocket className="text-blue-400"/>
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Our Vision
          </h2>
        </div>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          Planify aims to become a lightweight productivity companion that
          blends simplicity, speed, and thoughtful design. Instead of
          overwhelming users with features, the goal is to help people stay
          focused and take meaningful action every day.
        </p>

      </div>

      {/* Footer */}
      <p className="text-gray-500 text-xs sm:text-sm mt-10 text-center">
        Planify Version 1.0 • Built with Next.js, Firebase, and Tailwind CSS
      </p>

    </div>
  );
}