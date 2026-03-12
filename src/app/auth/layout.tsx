import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-white to-blue-50 relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <Navbar />

      {/* Center Auth Content */}
      <main className="flex  items-center justify-center">
        <div className="w-full relative">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}