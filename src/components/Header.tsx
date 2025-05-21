
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
            <Link to="/startup-kit" className="text-rtl-dark hover:text-rtl-teal mr-6">
              الكيتس
            </Link>
            <Link to="/productivity-book" className="text-rtl-dark hover:text-rtl-teal mr-6">
              الكتب
            </Link>
            <Link to="#" className="text-rtl-dark hover:text-rtl-teal">
              تواصل معنا
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
