
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  tagline?: string;
  color?: string;
  index: number;
  link?: string;
  imageSrc?: string;
}

const ProductCard = ({ title, tagline, color = "bg-rtl-teal", index, link, imageSrc }: ProductCardProps) => {
  // Card content with hover effect
  const cardContent = (
    <div className="relative w-full h-full group">
      {/* Image with proper aspect ratio */}
      <div className="w-full aspect-[2/1] overflow-hidden">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full ${color}`}></div>
        )}
      </div>
      
      {/* Title overlay that shows on hover */}
      <div className="absolute top-0 right-0 p-3 bg-black bg-opacity-60 rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-bold text-lg text-white text-right">
          {title}
        </h3>
      </div>
    </div>
  );

  const cardClassName = "rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg";

  // Conditionally render Link or div
  if (link) {
    return (
      <Link to={link} className={cardClassName}>
        {cardContent}
      </Link>
    );
  }

  // Render as a div when no link is provided
  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  );
};

export default ProductCard;
