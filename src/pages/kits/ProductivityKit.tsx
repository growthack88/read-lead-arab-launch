import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const ProductivityKit = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="Productivity Kit | كيت الإنتاجية وتطوير الذات"
        description="مجموعة الإنتاجية المتكاملة لزيادة كفاءة عملك وإدارة وقتك بفاعلية - كتب، أدوات، وتقنيات عملية من Read to Lead."
        image="https://land.readtolead.store/assets/productivity-kit-banner.jpg"
        url="https://land.readtolead.store/productivity-kit"
      />
      
      {/* Header */}
      <header className="py-4 border-b sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <Logo />
            </Link>
            <nav className="space-x-6 flex flex-row-reverse">
              <Link to="/" className="text-rtl-dark hover:text-rtl-teal mr-6">
                الرئيسية
              </Link>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal mr-6">
                المنتجات
              </a>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal mr-6">
                من نحن
              </a>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal">
                تواصل معنا
              </a>
            </nav>
          </div>
        </div>
      </header>

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

        {/* New kits section data - UPDATED with new Productivity Kit image */}
        <section id="new-kits" className="py-16 bg-white" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              محتويات الكيت
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ul>
                <li>كتاب إنتاجية بلا حدود</li>
                <li>قلم أنيق</li>
                <li>نوت بوك</li>
              </ul>
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
                  <a href="#" className="text-gray-300 hover:text-white">
                    الرئيسية
                  </a>
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
            <p className="text-gray-400">© 2024 جميع الحقوق محفوظة Read to Lead</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductivityKit;
