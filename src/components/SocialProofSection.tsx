
import React from "react";

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-gray-50 rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-rtl-dark mb-10">
            انضم لآلاف القراء ورواد الأعمال اللي غيروا حياتهم مع Read to Lead
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">✅</div>
              <div className="font-bold text-xl mb-1">+5000 عميل سعيد</div>
              <p className="text-gray-600">ثقة آلاف العملاء في منتجاتنا</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl text-rtl-yellow mb-2">⭐⭐⭐⭐⭐</div>
              <div className="font-bold text-xl mb-1">تقييمات عالية</div>
              <p className="text-gray-600">منتجات مجربة وفعالة</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2">📚</div>
              <div className="font-bold text-xl mb-1">كتب عملية وكيتس حصرية</div>
              <p className="text-gray-600">محتوى مختار بعناية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
