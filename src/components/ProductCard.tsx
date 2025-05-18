
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
  const Component = link ? Link : "div";
  const componentProps = link ? { to: link } : {};

  return (
    <Component
      {...componentProps}
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
    </Component>
  );
};

export default ProductCard;
