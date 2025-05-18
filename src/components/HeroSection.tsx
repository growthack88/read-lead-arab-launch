
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rtl-dark mb-6">
            نخبة الكتب والكيتس اللي هتغيّر تفكيرك… وتكبر بيزنسك
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            كتب حديثة، كيتس عملية، وتجميعات مختارة تساعدك تحقق نقلة في شغلك وحياتك — بخطوات واضحة وسهلة تبدأ بيها النهاردة.
          </p>
          
          {/* Highlight Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-sm mb-8">
            <div className="bg-[#F1F5F9] rounded-lg px-4 py-3 text-right shadow-sm">
              🔹 كيتات جديدة كليًا لمجالات ريادة الأعمال، التسويق، وإدارة الوقت
            </div>
            <div className="bg-[#F1F5F9] rounded-lg px-4 py-3 text-right shadow-sm">
              🔹 باقات كتب حديثة مترتبة على حسب هدفك
            </div>
            <div className="bg-[#F1F5F9] rounded-lg px-4 py-3 text-right shadow-sm">
              🔹 إصدارات جديدة أول مرة تُنشر من Read to Lead
            </div>
          </div>
          
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
