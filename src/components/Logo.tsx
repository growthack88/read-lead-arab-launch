
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/logo.png" 
        alt="Read To Lead Logo" 
        className="w-32 h-auto mx-4"
      />
    </div>
  );
};

export default Logo;
