// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="w-full border-t border-purple-100 bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-16">

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

//           {/* Logo + Description */}
//           <div>
//             <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//               Planify
//             </Link>

//             <p className="mt-4 text-gray-600 text-sm leading-relaxed">
//               Planify helps you organize daily tasks, stay productive, and
//               manage your work effortlessly with a clean and intuitive
//               task management system.
//             </p>
//           </div>

//           {/* Product */}
//           <div>
//             <h3 className="font-semibold text-black mb-4">Product</h3>
//             <ul className="space-y-3 text-sm text-gray-600">
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   Tasks
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   Dashboard
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="font-semibold text-black mb-4">Resources</h3>
//             <ul className="space-y-3 text-sm text-gray-600">
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   Documentation
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   Support
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   Guides
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="font-semibold text-black mb-4">Legal</h3>
//             <ul className="space-y-3 text-sm text-gray-600">
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-purple-600 transition">
//                   License
//                 </Link>
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="mt-16 border-t border-purple-100 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

//           <p>
//             © {new Date().getFullYear()} Planify. All rights reserved.
//           </p>

//           <div className="flex items-center gap-6 mt-4 md:mt-0">
//             <Link href="#" className="hover:text-purple-600 transition">
//               Twitter
//             </Link>
//             <Link href="#" className="hover:text-purple-600 transition">
//               GitHub
//             </Link>
//             <Link href="#" className="hover:text-purple-600 transition">
//               LinkedIn
//             </Link>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-purple-900/40 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Planify
            </Link>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Planify helps you organize daily tasks, stay productive, and
              manage your work effortlessly with a clean and intuitive
              task management system.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Tasks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  License
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-purple-900/40 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Planify. All rights reserved.
          </p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-purple-400 transition">
              Twitter
            </Link>
            <Link href="#" className="hover:text-purple-400 transition">
              GitHub
            </Link>
            <Link href="#" className="hover:text-purple-400 transition">
              LinkedIn
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}