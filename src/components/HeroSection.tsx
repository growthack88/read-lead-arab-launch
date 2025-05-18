
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rtl-dark mb-6">
            نخبة الكتب والأدوات اللي هتطور حياتك وتكبر البيزنس بتاعك
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600 mb-8">
            مجموعة مختارة من أقوى الكتب والكيتس التعليمية اللي هتساعدك تحقق النجاح العملي والشخصي بخطوات واضحة وبسيطة
          </h2>
          <a
            href="#products"
            className="inline-flex items-center bg-rtl-teal text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-200"
          >
            اكتشف كل المنتجات
            <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
