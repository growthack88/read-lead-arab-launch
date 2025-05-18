
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  tagline: string;
  color?: string;
  index: number;
  link?: string;
  imageSrc?: string;
}

const ProductCard = ({ title, tagline, color = "bg-rtl-teal", index, link, imageSrc }: ProductCardProps) => {
  // If link is provided, render as a Link, otherwise render as a div
  if (link) {
    return (
      <Link
        to={link}
        className={`rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ${!imageSrc ? color : ''}`}
      >
        <div className="h-full flex flex-col">
          {imageSrc && (
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className={`p-6 flex-1 flex flex-col justify-between ${imageSrc ? 'bg-white' : ''}`}>
            <h3 className="font-bold text-xl mb-2 text-right">{title}</h3>
            <p className="text-gray-600 text-right">{tagline}</p>
          </div>
        </div>
      </Link>
    );
  }
  
  // Render as a div when no link is provided
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ${!imageSrc ? color : ''}`}
    >
      <div className="h-full flex flex-col">
        {imageSrc && (
          <div className="w-full aspect-[4/3] overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className={`p-6 flex-1 flex flex-col justify-between ${imageSrc ? 'bg-white' : ''}`}>
          <h3 className="font-bold text-xl mb-2 text-right">{title}</h3>
          <p className="text-gray-600 text-right">{tagline}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
