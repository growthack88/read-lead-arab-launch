
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  tagline?: string;
  color?: string;
  index: number;
  link?: string;
  checkoutLink?: string;
  imageSrc?: string;
  description?: string;
  buttonText?: string;
  currentPrice?: string;
  comparePrice?: string;
}

const ProductCard = ({ 
  title, 
  tagline, 
  color = "bg-rtl-teal", 
  index, 
  link, 
  checkoutLink,
  imageSrc,
  description = "كل الأدوات اللي تساعدك تبدأ شركتك الناشئة",
  buttonText = "احصل عليه الآن",
  currentPrice,
  comparePrice
}: ProductCardProps) => {
  // Card content with fixed title and bottom description box
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
        
        {/* Title overlay that is always visible */}
        <div className="absolute top-0 right-0 px-3 py-2 bg-black bg-opacity-60 rounded-bl-md">
          <h3 className="font-bold text-lg text-white text-right">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Bottom description box */}
      <div className="bg-white p-4 rounded-b-xl shadow-sm">
        <p className="text-rtl-dark mb-3 text-right text-sm">
          {description}
        </p>
        
        {/* Pricing section - New */}
        {(currentPrice || comparePrice) && (
          <div className="flex flex-row-reverse justify-between items-center mb-3">
            {currentPrice && (
              <span className="text-lg font-bold text-rtl-teal">{currentPrice}</span>
            )}
            {comparePrice && (
              <span className="text-sm line-through text-gray-500">{comparePrice}</span>
            )}
          </div>
        )}
        
        <div className="flex justify-end">
          {checkoutLink ? (
            <a 
              href={checkoutLink}
              className="bg-rtl-teal text-white px-4 py-2 rounded-md text-sm hover:bg-rtl-teal/80 transition-colors"
            >
              {buttonText}
            </a>
          ) : (
            <Button 
              variant="teal" 
              size="sm" 
              className="hover:bg-rtl-teal/80 transition-colors"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  const cardClassName = "rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg";

  // If we have a link, wrap the card in a Link component
  if (link && !checkoutLink) {
    return (
      <Link to={link} className={cardClassName}>
        {cardContent}
      </Link>
    );
  }

  // Render as a div when no link is provided or when we have a checkout link
  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  );
};

export default ProductCard;
