
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart } from 'lucide-react';

interface QuantitySelectorProps {
  baseCheckoutUrl: string;
  productVariantId: string;
  buttonText?: string;
  price?: string;
}

const QuantitySelector = ({ 
  baseCheckoutUrl, 
  productVariantId, 
  buttonText = "اطلب الآن",
  price 
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState("1");

  const handlePurchase = () => {
    const checkoutUrl = `${baseCheckoutUrl}/${productVariantId}:${quantity}?channel=buy_button`;
    window.open(checkoutUrl, '_blank');
  };

  const totalPrice = price ? parseInt(price) * parseInt(quantity) : null;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
      <div className="flex items-center gap-2">
        <label htmlFor="quantity" className="text-sm font-medium">
          الكمية:
        </label>
        <Select value={quantity} onValueChange={setQuantity}>
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {totalPrice && (
        <div className="text-sm text-gray-600">
          المجموع: {totalPrice} جنيه
        </div>
      )}
      
      <button
        onClick={handlePurchase}
        className="bg-[#0D9488] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        {buttonText}
      </button>
    </div>
  );
};

export default QuantitySelector;
