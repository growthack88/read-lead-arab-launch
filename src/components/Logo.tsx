
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M0 80h200v-10c-33.3-15-66.7-15-100 0S33.3 85 0 70V80z"
          fill="#0D9488"
        />
        <path
          d="M0 70c33.3 15 66.7 15 100 0s66.7-15 100 0V35c-33.3-15-66.7-15-100 0s-66.7 15-100 0v35z"
          fill="#0D9488"
        />
        <path
          d="M100 35c-16.7-7.5-33.3-7.5-50 0s-33.3 7.5-50 0v-5c16.7 7.5 33.3 7.5 50 0s33.3-7.5 50 0 33.3 7.5 50 0 33.3-7.5 50 0v5c-16.7-7.5-33.3-7.5-50 0s-33.3 7.5-50 0z"
          fill="#D1D5DB"
        />
        <circle cx="100" cy="20" r="20" fill="#0D9488" />
      </svg>
      <span className="text-rtl-teal text-2xl font-bold">Read To Lead</span>
    </div>
  );
};

export default Logo;
