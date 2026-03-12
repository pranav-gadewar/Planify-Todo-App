// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { doc, setDoc, serverTimestamp } from "firebase/firestore";
// import { CheckCircle2 } from "lucide-react"; // Added for a cleaner UI

// export default function SignupPage() {
//   const router = useRouter();

//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     setLoading(true);
//     setError("");

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await setDoc(doc(db, "users", user.uid), {
//         name,
//         username,
//         phone,
//         email,
//         role: "user",
//         createdAt: serverTimestamp(),
//       });

//       router.replace("/dashboard");
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       }
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#030014] flex selection:bg-purple-500/30 overflow-hidden">
//       {/* --- LEFT SIDE: BRANDING --- */}
//       <div className="hidden lg:flex w-1/2 relative items-center justify-center p-16 border-r border-white/5">
//         {/* Animated Background Elements */}
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-bounce [animation-duration:10s]"></div>

//         <div className="relative max-w-md z-10">
//           <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
//             Planify
//           </h1>

//           <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
//             Organize your tasks, boost productivity, and manage your daily goals
//             with a powerful modern workflow.
//           </p>

//           <ul className="space-y-5">
//             {[
//               "Smart task management",
//               "Powerful productivity tools",
//               "Real-time cloud sync",
//               "Clean minimal dashboard",
//             ].map((item) => (
//               <li key={item} className="flex items-center gap-3 text-gray-300">
//                 <CheckCircle2 className="text-purple-500 w-5 h-5" />
//                 <span className="font-medium">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* --- RIGHT SIDE: FORM --- */}
//       <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12 relative">
//         {/* Mobile-only background glow */}
//         <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black -z-10"></div>
        
//         <div className="w-full max-w-lg bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] p-8 lg:p-12 relative">
//           {/* Subtle top accent line */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

//           <div className="mb-10 text-center lg:text-left">
//             <h2 className="text-4xl font-bold text-white tracking-tight">
//               Create account
//             </h2>
//             <p className="text-gray-500 mt-3 font-medium">
//               Start organizing your life today
//             </p>
//           </div>

//           {error && (
//             <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm mb-6 animate-in fade-in slide-in-from-top-1">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSignup} className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Full name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="col-span-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
//               />

//               <input
//                 type="text"
//                 placeholder="Username"
//                 required
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
//               />

//               <input
//                 type="email"
//                 placeholder="Email address"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="col-span-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
//               />

//               <input
//                 type="password"
//                 placeholder="Confirm password"
//                 required
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:hover:scale-100"
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                   Processing...
//                 </span>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

//           <p className="text-center text-gray-500 text-sm mt-8 font-medium">
//             Already have an account?{" "}
//             <Link
//               href="/auth/login"
//               className="text-purple-400 hover:text-purple-300 transition-colors underline-offset-4 hover:underline"
//             >
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { CheckCircle2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        username,
        phone,
        email,
        role: "user",
        createdAt: serverTimestamp(),
      });

      toast.success("Account created successfully");

      router.replace("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error(err.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#030014] flex selection:bg-purple-500/30 overflow-hidden">
      
      {/* Toast Container */}
      <Toaster position="top-right" />

      {/* --- LEFT SIDE: BRANDING --- */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center p-16 border-r border-white/5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-bounce [animation-duration:10s]"></div>

        <div className="relative max-w-md z-10">
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
            Planify
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
            Organize your tasks, boost productivity, and manage your daily goals
            with a powerful modern workflow.
          </p>

          <ul className="space-y-5">
            {[
              "Smart task management",
              "Powerful productivity tools",
              "Real-time cloud sync",
              "Clean minimal dashboard",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-purple-500 w-5 h-5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- RIGHT SIDE: FORM --- */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12 relative">
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black -z-10"></div>
        
        <div className="w-full max-w-lg bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] p-8 lg:p-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Create account
            </h2>
            <p className="text-gray-500 mt-3 font-medium">
              Start organizing your life today
            </p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm mb-6 animate-in fade-in slide-in-from-top-1">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
              />

              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              />

              <input
                type="tel"
                placeholder="Phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              />

              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-2 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              />

              <input
                type="password"
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-[0_10px_20px_-10px_rgba(124,58,237,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-8 font-medium">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-purple-400 hover:text-purple-300 transition-colors underline-offset-4 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}