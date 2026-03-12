// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { auth } from "@/lib/firebase";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { Mail, Send, ArrowLeft } from "lucide-react";
// import { FirebaseError } from "firebase/app";

// export default function ResetPasswordPage() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleReset = async () => {
//     if (!email) {
//       setErrorMsg("Please enter your email address.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setErrorMsg("");

//       await sendPasswordResetEmail(auth, email);

//       setSuccess(true);
//       setEmail("");
//     } catch (error) {
//       const err = error as FirebaseError;

//       console.error(err);

//       if (err.code === "auth/user-not-found") {
//         setErrorMsg("No account found with this email.");
//       } else if (err.code === "auth/invalid-email") {
//         setErrorMsg("Please enter a valid email.");
//       } else {
//         setErrorMsg("Failed to send reset email. Try again.");
//       }
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-blue-950 px-6">
//       <div
//         className="w-full max-w-md rounded-2xl border border-white/10 
//         bg-white/5 backdrop-blur-lg p-8 shadow-2xl"
//       >
//         {/* Back to Login */}
//         <Link
//           href="/auth/login"
//           className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition"
//         >
//           <ArrowLeft size={16} />
//           Back to Login
//         </Link>

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-white mb-6 text-center">
//           Reset Password
//         </h1>

//         {/* Header */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500">
//             <Mail size={22} className="text-white" />
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold text-white">
//               Forgot your password?
//             </h2>
//             <p className="text-gray-400 text-sm">
//               Enter your email and we’ll send you a reset link.
//             </p>
//           </div>
//         </div>

//         {/* Success Message */}
//         {success && (
//           <div className="mb-5 text-green-400 text-sm bg-green-500/10 border border-green-500/20 p-3 rounded-lg">
//             Reset email sent successfully. Please check your inbox.
//           </div>
//         )}

//         {/* Error Message */}
//         {errorMsg && (
//           <div className="mb-5 text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
//             {errorMsg}
//           </div>
//         )}

//         {/* Email Input */}
//         <div className="mb-6">
//           <label className="text-sm text-gray-300">Email Address</label>

//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full mt-2 p-3 rounded-lg  bg-black/40 border border-white/10  text-white outline-none  focus:border-purple-500 transition"
//           />
//         </div>

//         {/* Reset Button */}
//         <button
//           onClick={handleReset}
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-2  bg-gradient-to-r from-purple-600 to-blue-500  hover:opacity-90 transition text-white py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
//         >
//           <Send size={18} />
//           {loading ? "Sending..." : "Send Reset Link"}
//         </button>

//         {/* Bottom Login Link */}
//         <p className="text-center text-gray-400 text-sm mt-6">
//           Remember your password?{" "}
//           <Link
//             href="/auth/login"
//             className="text-purple-400 hover:text-purple-300 font-medium"
//           >
//             Go to Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Mail, Send, ArrowLeft } from "lucide-react";
import { FirebaseError } from "firebase/app";
import toast, { Toaster } from "react-hot-toast";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleReset = async () => {
    if (!email) {
      setErrorMsg("Please enter your email address.");
      toast.error("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);
      setErrorMsg("");

      await sendPasswordResetEmail(auth, email);

      setSuccess(true);
      setEmail("");

      toast.success("Reset email sent successfully");
    } catch (error) {
      const err = error as FirebaseError;

      console.error(err);

      if (err.code === "auth/user-not-found") {
        setErrorMsg("No account found with this email.");
        toast.error("No account found with this email.");
      } else if (err.code === "auth/invalid-email") {
        setErrorMsg("Please enter a valid email.");
        toast.error("Please enter a valid email.");
      } else {
        setErrorMsg("Failed to send reset email. Try again.");
        toast.error("Failed to send reset email. Try again.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-blue-950 px-6">
      
      {/* Toast Container */}
      <Toaster position="top-right" />

      <div
        className="w-full max-w-md rounded-2xl border border-white/10  bg-white/5 backdrop-blur-lg p-8 shadow-2xl"
      >
        {/* Back to Login */}
        <Link
          href="/auth/login"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Reset Password
        </h1>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500">
            <Mail size={22} className="text-white" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Forgot your password?
            </h2>
            <p className="text-gray-400 text-sm">
              Enter your email and we’ll send you a reset link.
            </p>
          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-5 text-green-400 text-sm bg-green-500/10 border border-green-500/20 p-3 rounded-lg">
            Reset email sent successfully. Please check your inbox.
          </div>
        )}

        {/* Error Message */}
        {errorMsg && (
          <div className="mb-5 text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
            {errorMsg}
          </div>
        )}

        {/* Email Input */}
        <div className="mb-6">
          <label className="text-sm text-gray-300">Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 p-3 rounded-lg  bg-black/40 border border-white/10  text-white outline-none  focus:border-purple-500 transition"
          />
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2  bg-gradient-to-r from-purple-600 to-blue-500  hover:opacity-90 transition text-white py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send size={18} />
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {/* Bottom Login Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Go to Login
          </Link>
        </p>
      </div>
    </div>
  );
}