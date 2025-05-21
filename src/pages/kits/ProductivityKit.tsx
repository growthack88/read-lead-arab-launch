
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import { ShoppingCart } from "lucide-react";

const ProductivityKit = () => {
  // Shopify checkout link for Productivity Kit
  const shopifyCheckoutLink = "https://si51ve-s6.myshopify.com/cart/42289428791401:1?channel=buy_button";
  
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="Productivity Kit | كيت الإنتاجية والنمو الشخصي"
        description="أدوات وتقنيات تساعدك على إدارة وقتك وزيادة إنتاجيتك الشخصية والمهنية."
        image="/assets/productivity-kit-banner.jpg"
        url="https://land.readtolead.store/productivity-kit"
      />
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="py-16">
        {/* Hero Section */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              {/* Left Column - Text */}
              <div className="space-y-4 order-2 md:order-1 text-right">
                <h1 className="text-3xl md:text-4xl font-bold text-rtl-dark">
                  🟢 مجموعة الإنتاجية وتطوير الذات | طريقك للعمل الذكي
                </h1>
                <p className="text-lg text-gray-700 font-medium">
                  مجموعة متكاملة من الأدوات والكتب العملية لزيادة إنتاجيتك وإدارة وقتك وتطوير قدراتك الشخصية
                </p>
                <p className="text-gray-600 leading-relaxed">
                  مجموعة "الإنتاجية وتطوير الذات" هي صندوق أدوات متكامل لكل من يريد استغلال وقته بشكل أفضل وتطوير مهاراته وإمكانياته. جمعنا لك فيها خلاصة أساليب الخبراء في إدارة الوقت وتنظيم المهام وتحسين التركيز مع تطبيقات عملية تساعدك على تنفيذها في حياتك اليومية.
                </p>
                <div className="mt-6">
                  <a 
                    href={shopifyCheckoutLink}
                    className="px-6 py-3 rounded-lg hover:scale-105 transition text-lg bg-[#0D9488] text-white inline-block flex items-center gap-2 justify-center font-semibold"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    📦 اطلب Productivity Kit الآن
                  </a>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="order-1 md:order-2">
                <img
                  src="/lovable-uploads/9473f670-3be5-4be6-9b5d-89ff248bbfb7.png"
                  alt="مجموعة الإنتاجية وتطوير الذات"
                  className="aspect-[2/1] rounded-xl shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kit contents section */}
        <section id="kit-contents" className="py-16 bg-white" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              محتويات الكيت
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">كتاب إنتاجية بلا حدود</h3>
                <p className="text-gray-600">
                  دليل شامل للتخطيط الفعال وزيادة الإنتاجية في العمل والحياة
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">نوت بوك</h3>
                <p className="text-gray-600">
                  دفتر ملاحظات أنيق لتدوين أفكارك وخططك اليومية
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-3">قلم أنيق</h3>
                <p className="text-gray-600">
                  قلم عالي الجودة لكتابة ملاحظاتك وأهدافك بوضوح
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buy Now Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-rtl-dark">
                استثمر في إنتاجيتك وتطوير ذاتك اليوم
              </h2>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-rtl-teal">السعر: ٩٩٩ جنيه</span>
                    <span className="text-lg line-through text-gray-500">السعر السابق: ١٢٠٠ جنيه</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    🚚 شحن خلال ١-٣ أيام | 💳 الدفع عند الاستلام أو أونلاين
                  </p>
                  <a 
                    href={shopifyCheckoutLink}
                    className="px-6 py-3 rounded-lg hover:scale-105 transition text-lg bg-[#0D9488] text-white inline-block flex items-center gap-2 justify-center font-semibold"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    📦 اطلب Productivity Kit الآن
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-rtl-dark text-white py-10 rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Read to Lead</h3>
              <p className="text-gray-300">
                مجموعة مختارة من أقوى الكتب والكيتس التعليمية لنجاحك الشخصي والمهني
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">روابط مهمة</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <a href="#products" className="text-gray-300 hover:text-white">
                    المنتجات
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    من نحن
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">خدمة العملاء</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    الأسئلة الشائعة
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    سياسة الشحن
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-end gap-2">
                  <span>info@readtolead.com</span>
                  <span>✉️</span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>+123456789</span>
                  <span>📱</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400">© 2025 جميع الحقوق محفوظة Read to Lead</p>
          </div>
        </div>
      </footer>

      {/* Sticky Purchase Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t z-50 px-4 py-3 flex justify-between items-center shadow-md">
        <a href={shopifyCheckoutLink} className="bg-[#0D9488] text-white px-5 py-2 rounded-md hover:opacity-90 flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          📦 اطلب الآن
        </a>
        <span className="font-bold text-[#0D9488]">السعر: ٩٩٩ جنيه</span>
      </div>
    </div>
  );
};

export default ProductivityKit;
