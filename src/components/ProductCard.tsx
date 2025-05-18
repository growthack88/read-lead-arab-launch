
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  tagline: string;
  color: string;
  index: number;
  link?: string;
}

const ProductCard = ({ title, tagline, color, index, link = "#" }: ProductCardProps) => {
  // Generate a diverse set of colors for the cards
  const colorClasses = [
    "bg-rtl-teal",
    "bg-blue-600",
    "bg-purple-600",
    "bg-rtl-purple",
    "bg-orange-500",
    "bg-emerald-600",
    "bg-pink-600",
    "bg-amber-500",
    "bg-indigo-600",
  ];
  
  const backgroundColor = colorClasses[index % colorClasses.length];

  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover-scale group">
      <div className={`${backgroundColor} h-40 relative p-6`}>
        <div className="absolute top-6 left-6 w-16 h-16 bg-rtl-yellow rounded-full opacity-70"></div>
        <h3 className="text-white text-xl font-bold relative z-10 text-right">{title}</h3>
      </div>
      <div className="p-6 bg-white rtl">
        <p className="text-gray-600 mb-4">{tagline}</p>
        <Link
          to={link}
          className="inline-block text-rtl-teal font-bold hover:underline"
        >
          تعرّف أكتر
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
