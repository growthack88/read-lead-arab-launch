
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/d7252681-006f-44a5-b25f-262065c6a1da.png" 
        alt="Read To Lead Logo" 
        className="w-36 h-auto"
      />
    </div>
  );
};

export default Logo;
