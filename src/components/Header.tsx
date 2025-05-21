
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-4 border-b sticky top-0 bg-white/80 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="space-x-6 flex flex-row-reverse">
            <Link to="/" className="text-rtl-dark hover:text-rtl-teal mr-6">
              الرئيسية
            </Link>
            <a 
              href="#kits" 
              className="text-rtl-dark hover:text-[#0D9488] transition mr-6"
            >
              المنتجات
            </a>
            <a 
              href="https://readtolead.store/pages/%D9%85%D9%86-%D9%86%D8%AD%D9%86"
              className="text-rtl-dark hover:text-[#0D9488] transition mr-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              من نحن
            </a>
            <a 
              href="https://readtolead.store/pages/contact"
              className="text-rtl-dark hover:text-[#0D9488] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              تواصل معنا
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
