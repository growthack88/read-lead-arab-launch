import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import QuantitySelector from "@/components/QuantitySelector";

const AllInOne = () => {
  const shopifyBaseUrl = "https://si51ve-s6.myshopify.com/cart";
  const bundleVariantId = "BUNDLE_VARIANT_ID"; // Replace with actual bundle variant ID

  const allKits = [
    {
      title: "Startup Kit",
      imageSrc: "/lovable-uploads/2bcb0011-1478-4447-a8aa-cf255f4c7aa1.png",
      description: "كل الأدوات اللي تساعدك تبدأ شركتك الناشئة بنجاح",
      buttonText: "عرض التفاصيل",
      link: "/startup-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42288739254377:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
    {
      title: "Project Leader Toolkit",
      imageSrc: "/lovable-uploads/project-leader-toolkit-banner.jpg",
      description: "من الفكرة للتنفيذ — كل أداة تحتاجها علشان تمشي المشروع خطوة بخطوة",
      buttonText: "عرض التفاصيل",
      link: "/project-leader-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42626010775657:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
    {
      title: "HR Manager Toolkit",
      imageSrc: "/lovable-uploads/hr-manager-toolkit-hero-new.jpg",
      description: "حوّل الفوضى الإدارية لنظام احترافي جاهز — في 10 أدوات بس",
      buttonText: "عرض التفاصيل",
      link: "/hr-manager-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42626019164265:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
    {
      title: "Productivity Kit",
      imageSrc: "/lovable-uploads/9473f670-3be5-4be6-9b5d-89ff248bbfb7.png",
      description: "أدوات تساعدك على زيادة إنتاجيتك وإدارة وقتك بكفاءة",
      buttonText: "عرض التفاصيل",
      link: "/productivity-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42289428791401:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
    {
      title: "Sales & Marketing Kit",
      imageSrc: "/lovable-uploads/85ccfc20-77b8-4b0f-abfe-3455983bfa07.png",
      description: "أدوات تسويقية احترافية لزيادة المبيعات وجذب العملاء",
      buttonText: "عرض التفاصيل",
      link: "/sales-marketing-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42289431150697:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    }
  ];

  return (
    <>
      <SEO
        title="الباقة الشاملة - جميع الصناديق التطبيقية | RTL Vision"
        description="احصل على جميع الصناديق التطبيقية الخمسة في باقة واحدة شاملة بسعر مخفض. كل ما تحتاجه لإدارة أعمالك باحترافية."
        image="/lovable-uploads/2bcb0011-1478-4447-a8aa-cf255f4c7aa1.png"
      />

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
                <Logo />
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-gray-700 hover:text-rtl-teal transition-colors">
                  الرئيسية
                </Link>
                <Link to="/#kits" className="text-gray-700 hover:text-rtl-teal transition-colors">
                  الصناديق
                </Link>
                <a href="#buy" className="bg-rtl-teal text-white px-6 py-2 rounded-md hover:bg-rtl-teal/90 transition-colors">
                  اشتري الآن
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-rtl-teal/10 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rtl-dark mb-6">
                الباقة الشاملة
                <span className="block text-rtl-teal mt-2">All-in-One Bundle</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                احصل على جميع الصناديق التطبيقية الخمسة في باقة واحدة شاملة
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-rtl-teal">3,995 جنيه</p>
                  <p className="text-gray-500 line-through text-xl mt-1">10,000 جنيه</p>
                  <p className="text-green-600 font-semibold mt-2">وفّر 6,005 جنيه (60%)</p>
                </div>
              </div>
              <a 
                href="#buy"
                className="inline-block bg-rtl-teal text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-rtl-teal/90 transition-all hover:scale-105 shadow-lg"
              >
                احصل على الباقة الشاملة الآن
              </a>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-rtl-dark mb-4">
                ما تحصل عليه في الباقة الشاملة
              </h2>
              <p className="text-xl text-gray-600">
                5 صناديق تطبيقية احترافية بسعر باقة واحدة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" dir="rtl">
              {allKits.map((kit, index) => (
                <ProductCard
                  key={index}
                  title={kit.title}
                  imageSrc={kit.imageSrc}
                  description={kit.description}
                  buttonText={kit.buttonText}
                  link={kit.link}
                  currentPrice={kit.currentPrice}
                  comparePrice={kit.comparePrice}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-rtl-dark text-center mb-12">
                لماذا تختار الباقة الشاملة؟
              </h2>
              <div className="grid md:grid-cols-2 gap-8" dir="rtl">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-rtl-teal/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-rtl-dark mb-3">وفّر 60% من السعر</h3>
                  <p className="text-gray-600">
                    بدلاً من دفع 10,000 جنيه لشراء كل صندوق على حدة، احصل على الكل بـ 3,995 جنيه فقط
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-rtl-teal/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-rtl-dark mb-3">حل شامل متكامل</h3>
                  <p className="text-gray-600">
                    كل ما تحتاجه لإدارة أعمالك من البداية إلى النجاح - في باقة واحدة
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-rtl-teal/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-rtl-dark mb-3">جاهز للاستخدام فوراً</h3>
                  <p className="text-gray-600">
                    نماذج وأدوات جاهزة للتطبيق مباشرة - لا حاجة لإعداد أو تخصيص معقد
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-rtl-teal/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-rtl-dark mb-3">تحديثات مستمرة</h3>
                  <p className="text-gray-600">
                    احصل على تحديثات وإضافات جديدة لجميع الصناديق بدون تكلفة إضافية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purchase Section */}
        <section id="buy" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-rtl-teal/5 to-white border-2 border-rtl-teal/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-rtl-dark mb-4">
                احصل على الباقة الشاملة الآن
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                جميع الصناديق الخمسة في باقة واحدة شاملة
              </p>
              
              <div className="mb-8">
                <div className="inline-block bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-5xl font-bold text-rtl-teal mb-2">3,995 جنيه</p>
                  <p className="text-gray-500 line-through text-2xl mb-2">10,000 جنيه</p>
                  <p className="text-green-600 font-semibold text-lg">وفّر 6,005 جنيه</p>
                </div>
              </div>

              <QuantitySelector
                baseCheckoutUrl={shopifyBaseUrl}
                productVariantId={bundleVariantId}
                buttonText="اطلب الباقة الشاملة الآن"
                price="3995"
              />

              <p className="text-sm text-gray-500 mt-6">
                ✓ دفع آمن عبر Shopify | ✓ توصيل فوري بعد الدفع | ✓ دعم فني مستمر
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1F2C] text-white text-center py-4">
          <p>© 2025 جميع الحقوق محفوظة Read to Lead</p>
        </footer>

        {/* Sticky Purchase Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-3 px-4 z-40">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <p className="font-bold text-rtl-dark">الباقة الشاملة</p>
                <p className="text-sm text-gray-600">5 صناديق بسعر واحد</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-rtl-teal">3,995 جنيه</p>
                <p className="text-xs text-gray-500 line-through">10,000 جنيه</p>
              </div>
            </div>
            <a
              href="#buy"
              className="bg-rtl-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-rtl-teal/90 transition-all"
            >
              اطلب الآن
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllInOne;
