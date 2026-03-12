// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import {
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail
// } from "firebase/auth";
// import { auth } from "@/lib/firebase";
// import { Check } from "lucide-react";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push("/dashboard");
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-gray-200 flex flex-col md:flex-row overflow-hidden relative">

//       {/* Background Glows (Matching Signup) */}
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>

//       {/* --- LEFT SIDE: LOGIN FORM --- */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-8 z-10">
//         <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
//             <p className="text-gray-400 mt-2">Enter your credentials to access your account</p>
//           </div>

//           {error && <p className="text-red-400 text-sm mb-4 bg-red-400/10 p-3 rounded-lg border border-red-400/20">{error}</p>}
//           {message && <p className="text-green-400 text-sm mb-4 bg-green-400/10 p-3 rounded-lg border border-green-400/20">{message}</p>}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="name@example.com"
//                 className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
//               />
//             </div>

//             <div>
//               <div className="flex justify-between mb-2">
//                 <label className="text-sm font-medium text-gray-400">Password</label>
//                 <Link href="/auth/forgotPassword" title="Reset your password"  className="text-xs text-purple-400 hover:underline">
//                   Forgot?
//                 </Link>
//               </div>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:opacity-90 transition shadow-lg shadow-purple-500/20 disabled:opacity-50"
//             >
//               {loading ? "Verifying..." : "Login"}
//             </button>
//           </form>

//           <p className="text-center text-gray-500 text-sm mt-8">
//             New to Planify?{" "}
//             <Link href="/auth/signup" className="text-white hover:text-purple-400 font-medium transition">
//               Create an account
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* --- RIGHT SIDE: BRANDING/FEATURES --- */}
//       <div className="hidden md:flex w-1/2 flex-col justify-center p-16 z-10 border-l border-white/5 bg-gradient-to-br from-transparent to-purple-900/10">
//         <div className="max-w-lg">
//           <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Planify
//           </h1>
//           <p className="text-xl text-gray-300 leading-relaxed mb-10">
//             Organize your tasks, boost productivity, and manage your daily goals with a powerful modern workflow.
//           </p>

//           <ul className="space-y-5">
//             {[
//               "Smart task management",
//               "Powerful productivity tools",
//               "Real-time cloud sync",
//               "Clean minimal dashboard"
//             ].map((feature, i) => (
//               <li key={i} className="flex items-center gap-4 text-gray-400 text-lg">
//                 <div className="p-1 rounded-full bg-purple-500/20 text-purple-400">
//                   <Check size={20} />
//                 </div>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Check } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col md:flex-row overflow-hidden relative">
      {/* Toast Container */}
      <Toaster position="top-right" />

      {/* Background Glows (Matching Signup) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* --- LEFT SIDE: LOGIN FORM --- */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 z-10">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-400 mt-2">
              Enter your credentials to access your account
            </p>
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-4 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
              {error}
            </p>
          )}
          {message && (
            <p className="text-green-400 text-sm mb-4 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-400">
                  Password
                </label>
                <Link
                  href="/auth/forgotPassword"
                  title="Reset your password"
                  className="text-xs text-purple-400 hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:opacity-90 transition shadow-lg shadow-purple-500/20 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Login"}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-8">
            New to Planify?{" "}
            <Link
              href="/auth/signup"
              className="text-white hover:text-purple-400 font-medium transition"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>

      {/* --- RIGHT SIDE: BRANDING/FEATURES --- */}
      <div className="hidden md:flex w-1/2 flex-col justify-center p-16 z-10 border-l border-white/5 bg-gradient-to-br from-transparent to-purple-900/10">
        <div className="max-w-lg">
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Planify
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Organize your tasks, boost productivity, and manage your daily goals
            with a powerful modern workflow.
          </p>

          <ul className="space-y-5">
            {[
              "Smart task management",
              "Powerful productivity tools",
              "Real-time cloud sync",
              "Clean minimal dashboard",
            ].map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-gray-400 text-lg"
              >
                <div className="p-1 rounded-full bg-purple-500/20 text-purple-400">
                  <Check size={20} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
