'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-black">me</span>
          <span className="text-blue-600">Hub</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="#home" className="hover:text-blue-600 transition">Home</Link>
          <Link href="#courses" className="hover:text-blue-600 transition">Courses</Link>
        </nav>

        {/* Register Button */}
        <Link href="#register">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold transition">
            Register Now
          </button>
        </Link>
      </div>
    </header>
  );
}
