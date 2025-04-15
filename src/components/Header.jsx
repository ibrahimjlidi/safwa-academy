import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-[#fdfae6] border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2 text-green-800 font-bold text-xl">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        أكاديمية الصفوة
      </div>

      {/* Nav */}
      <nav className="flex gap-4 text-sm mt-3 md:mt-0">
        <a href="#" className="text-gray-700 hover:text-green-700">الرئيسية</a>
        <a href="#" className="text-gray-700 hover:text-green-700">من نحن</a>
        <a href="#" className="text-gray-700 hover:text-green-700">هيئة التدريس</a>
        <a href="#" className="text-gray-700 hover:text-green-700">اتصل بنا</a>
      </nav>

      {/* Social Icons */}
      <div className="flex gap-3 mt-3 md:mt-0 text-green-800">
        <FaFacebookF className="hover:text-green-600 cursor-pointer" />
        <FaTwitter className="hover:text-green-600 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
