import React from "react";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import SocialProofSection from "@/components/SocialProofSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  // Featured products - limited to 5 as requested
  const featuredProducts = [
    {
      title: "Startup Builder Kit",
      link: "/startup-kit",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png",
      description: "كل الأدوات اللي تساعدك تبدأ شركتك الناشئة"
    },
    {
      title: "كتاب القيادة والإدارة الفعالة",
      imageSrc: "/lovable-uploads/69091bf9-ba1b-4ced-82df-547bff4a1812.png",
      description: "تعلم مهارات القيادة الفعالة والادارة الناجحة"
    },
    {
      title: "سلسلة التسويق الحديث",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png",
      description: "استراتيجيات تسويق رقمي فعالة للمبتدئين"
    },
    {
      title: "كتاب التطوير الذاتي",
      imageSrc: "/lovable-uploads/69091bf9-ba1b-4ced-82df-547bff4a1812.png",
      description: "خطوات عملية لتطوير مهاراتك الشخصية"
    },
    {
      title: "قواعد النجاح المؤسسي",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png",
      description: "أساسيات بناء مؤسسة ناجحة ومستدامة"
    }
  ];
  
  // New kits section data
  const newKits = [
    {
      title: "حزمة المسوق الرقمي",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png",
      description: "أدوات تساعدك على إنشاء حملات تسويقية ناجحة",
      buttonText: "اكتشف الآن"
    },
    {
      title: "كيت تخطيط المشاريع",
      imageSrc: "/lovable-uploads/69091bf9-ba1b-4ced-82df-547bff4a1812.png",
      description: "نماذج وأدوات لتخطيط مشاريعك بطريقة احترافية",
      buttonText: "اكتشف الآن"
    },
    {
      title: "حزمة المدير المحترف",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png",
      description: "أدوات تساعدك على إدارة فريقك بكفاءة",
      buttonText: "اكتشف الآن"
    },
  ];
  
  // New packages section data
  const newPackages = [
    {
      title: "باقة المبتدئ",
      imageSrc: "/lovable-uploads/69091bf9-ba1b-4ced-82df-547bff4a1812.png",
      description: "كل ما تحتاجه لبدء رحلتك في عالم الأعمال",
      buttonText: "اكتشف الآن"
    },
    {
      title: "باقة المحترف",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png",
      description: "أدوات متقدمة لتطوير مهاراتك المهنية",
      buttonText: "اكتشف الآن"
    },
    {
      title: "باقة الشركات",
      imageSrc: "/lovable-uploads/69091bf9-ba1b-4ced-82df-547bff4a1812.png",
      description: "حلول متكاملة للشركات الصغيرة والمتوسطة",
      buttonText: "اكتشف الآن"
    },
  ];
  
  // Updated New books section data with the uploaded book covers
  const newBooks = [
    {
      title: "سلسلة إدارة حياتك المهنية",
      imageSrc: "/lovable-uploads/438f3ead-8d32-4c2c-8c1d-f6bdea33c7d3.png",
      description: "تخطيط وتطوير مسارك الوظيفي باحترافية",
      buttonText: "اكتشف الآن"
    },
    {
      title: "سلسلة التسويق الحديث",
      imageSrc: "/lovable-uploads/e02202fa-1c1f-4c69-9eeb-d8a406d41e9a.png",
      description: "استراتيجيات وأدوات التسويق في العصر الرقمي",
      buttonText: "اكتشف الآن"
    },
    {
      title: "سلسلة القيادة وإدارة الفعالة",
      imageSrc: "/lovable-uploads/7b271e77-fc40-4b05-a14f-f093c1f9cdb4.png",
      description: "استراتيجيات فعالة للقيادة وإدارة الناجحة",
      buttonText: "اكتشف الآن"
    },
    {
      title: "سلسلة النتاجية بلا حدود",
      imageSrc: "/lovable-uploads/167ced76-30d4-4269-a2d7-3f25b31cbe18.png",
      description: "كتابة التخطيط الفعال وزيادة إنتاجيتك",
      buttonText: "اكتشف الآن"
    },
    {
      title: "سلسلة تطوير الذات والنمو الشخصي",
      imageSrc: "/lovable-uploads/247722eb-0ea5-4d90-bf5b-52a81145490e.png",
      description: "رحلة لتطوير مهاراتك وتحقيق النمو الشخصي",
      buttonText: "اكتشف الآن"
    },
    {
      title: "سلسلة فن البيع و��لشراء",
      imageSrc: "/lovable-uploads/1522fafc-8928-4f3e-9cf7-4d6f2c0617df.png",
      description: "تقنيات احترافية للبيع والتفاوض وخدمة العملاء",
      buttonText: "اكتشف الآن"
    },
    {
      title: "سلسلة فن ريادة الأعمال",
      imageSrc: "/lovable-uploads/8b7decb8-2edd-41e2-acb7-f8ca9ffd7014.png",
      description: "مهارات وأدوات بناء المشاريع الناجحة",
      buttonText: "اكتشف الآن"
    },
    {
      title: "سلسلة قواعد النجاح المؤسسي",
      imageSrc: "/lovable-uploads/8376e2d7-8776-42f1-a5dd-e4e3b2d93df8.png",
      description: "بناء ثقافة مؤسسية ناجحة وبيئة عمل محفزة",
      buttonText: "اكتشف الآن"
    },
  ];
  
  // All products - kept for reference but not displaying these in the featured section
  const products = [
    {
      title: "Startup Journal",
      tagline: "حوّل فكرتك لمشروع حقيقي بخطوات عملية",
      link: "/startup-kit"
    },
    {
      title: "قواعد النجاح المؤسسي",
      tagline: "ابنِ ثقافة نجاح مستدامة في شركتك",
    },
    {
      title: "سلسلة التسويق الحديث",
      tagline: "تعلّم التسويق العصري بشكل عملي",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png"
    },
    {
      title: "فن البيع والشراء",
      tagline: "زود مبيعاتك بأساليب بيع فعّالة ومجربة",
      imageSrc: "/lovable-uploads/69091bf9-ba1b-4ced-82df-547bff4a1812.png"
    },
    {
      title: "فن ريادة الأعمال",
      tagline: "تعلّم أسرار الريادة والنجاح في البيزنس",
    },
    {
      title: "إدارة حياتك المهنية",
      tagline: "خطّط لمستقبلك المهني بخطوات واضحة",
    },
    {
      title: "كتاب التطوير الذاتي",
      tagline: "اكتشف أفضل نسخة من نفسك",
    },
    {
      title: "إنتاجية بلا حدود",
      tagline: "ضاعف إنتاجيتك وحقق أهدافك أسرع",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png"
    },
    {
      title: "كتاب القيادة والإدارة الفعالة",
      tagline: "كن قائد مُلهم ومدير مؤثر",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 border-b sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            <nav className="space-x-6 rtl">
              <a href="#" className="text-rtl-dark hover:text-rtl-teal">
                الرئيسية
              </a>
              <a href="#products" className="text-rtl-dark hover:text-rtl-teal">
                المنتجات
              </a>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal">
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
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* New Kits Section */}
        <section id="new-kits" className="py-16 bg-white" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              🟢 الكيتس الجديدة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newKits.map((kit, index) => (
                <ProductCard
                  key={index}
                  title={kit.title}
                  index={index}
                  imageSrc={kit.imageSrc}
                  description={kit.description}
                  buttonText={kit.buttonText}
                />
              ))}
            </div>
          </div>
        </section>

        {/* New Packages Section */}
        <section id="new-packages" className="py-16 bg-gray-50" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              📦 الباقات الجديدة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newPackages.map((pack, index) => (
                <ProductCard
                  key={index}
                  title={pack.title}
                  index={index}
                  imageSrc={pack.imageSrc}
                  description={pack.description}
                  buttonText={pack.buttonText}
                />
              ))}
            </div>
          </div>
        </section>

        {/* New Books Section - Updated with more books */}
        <section id="new-books" className="py-16 bg-white" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              📚 الكتب الجديدة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newBooks.map((book, index) => (
                <ProductCard
                  key={index}
                  title={book.title}
                  index={index}
                  imageSrc={book.imageSrc}
                  description={book.description}
                  buttonText={book.buttonText}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Trust Badges */}
        <TrustBadgesSection />

        {/* Final CTA */}
        <FinalCTASection />
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

export default Index;
