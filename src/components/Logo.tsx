
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/d7252681-006f-44a5-b25f-262065c6a1da.png" 
        alt="Read To Lead Logo" 
        className="w-36 h-auto"
      />
    </Link>
  );
};

export default Logo;
