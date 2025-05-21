
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-24 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          {/* Hero Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rtl-dark mb-6">
            نخبة الكتب والأدوات التي سترتقي بحياتك وتُنمي أعمالك
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            مجموعة مختارة بعناية من أقوى الكتب والحقائب التعليمية المصممة لمساعدتك على تحقيق النجاح المهني والشخصي من خلال خطوات واضحة ومباشرة.
          </p>
          
          {/* CTA/Highlight Line */}
          <p className="text-md md:text-lg font-medium text-rtl-teal mb-8">
            حقائب تعليمية جديدة | مجموعات كتب حصرية | إصدارات حديثة
          </p>
          
          <a
            href="#kits"
            className="bg-[#0D9488] text-white font-bold py-3 px-6 rounded-xl text-lg hover:scale-105 transition-all inline-flex items-center"
          >
            اكتشف المنتجات الآن 🚀
            <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
