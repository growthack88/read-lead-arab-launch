
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
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png"
    },
    {
      title: "كتاب القيادة والإدارة الفعالة",
      imageSrc: "/lovable-uploads/69091bf9-ba1b-4ced-82df-547bff4a1812.png"
    },
    {
      title: "سلسلة التسويق الحديث",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png"
    },
    {
      title: "كتاب التطوير الذاتي",
      imageSrc: "/lovable-uploads/69091bf9-ba1b-4ced-82df-547bff4a1812.png"
    },
    {
      title: "قواعد النجاح المؤسسي",
      imageSrc: "/lovable-uploads/4a3afe5b-8ee2-4362-8f08-1f86ff2159cd.png"
    }
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

        {/* Featured Products Section */}
        <section id="featured-products" className="py-16 bg-gray-50" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              منتجاتنا المميزة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  index={index}
                  link={product.link}
                  imageSrc={product.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid - Original Product Section */}
        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 rtl">
              منتجاتنا المميزة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  tagline={product.tagline}
                  color="bg-rtl-teal"
                  index={index}
                  link={product.link}
                  imageSrc={product.imageSrc}
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
