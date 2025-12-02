import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import ProductCard from "@/components/ProductCard";
import SEO from "@/components/SEO";
import QuantitySelector from "@/components/QuantitySelector";

const AllInOne = () => {
  const shopifyBaseUrl = "https://si51ve-s6.myshopify.com/cart";
  const bundleVariantId = "42641996284009";

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

      <div className="min-h-screen bg-[#F2F5F4] font-tajawal" dir="rtl">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(22,147,128,0.08)]">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
                <Logo />
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-[#2D3735] hover:text-[#169380] transition-colors font-medium">
                  الرئيسية
                </Link>
                <Link to="/#kits" className="text-[#2D3735] hover:text-[#169380] transition-colors font-medium">
                  الصناديق
                </Link>
                <a 
                  href="#buy" 
                  className="bg-[#F4C95D] text-[#2D3735] px-6 py-2.5 rounded-[14px] font-bold hover:bg-[#F4C95D]/90 transition-all shadow-[0_4px_20px_rgba(22,147,128,0.08)]"
                >
                  اشتري الآن
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#F2F5F4]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3735] mb-6 leading-tight">
                الباقة الشاملة
                <span className="block text-[#169380] mt-3">All-in-One Bundle</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#2D3735]/70 mb-10 leading-relaxed">
                احصل على جميع الصناديق التطبيقية الخمسة في باقة واحدة شاملة
              </p>
              
              {/* Price Block in Hero */}
              <div className="bg-[#0F7468] rounded-[18px] p-8 mb-10 shadow-[0_4px_20px_rgba(22,147,128,0.15)] max-w-md mx-auto">
                <p className="text-5xl md:text-6xl font-bold text-[#F4C95D] mb-2">4,300 جنيه</p>
                <p className="text-white/60 line-through text-xl mb-3">10,000 جنيه</p>
                <span className="inline-block bg-[#EE6C4D] text-white px-4 py-1.5 rounded-full text-sm font-bold">
                  وفّر 5,700 جنيه (57%)
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#buy"
                  className="w-full sm:w-auto bg-[#F4C95D] text-[#2D3735] px-10 py-4 rounded-[14px] text-lg font-bold hover:bg-[#F4C95D]/90 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(244,201,93,0.3)]"
                >
                  احصل على الباقة الشاملة الآن
                </a>
                <a 
                  href="#included"
                  className="w-full sm:w-auto bg-transparent border-2 border-[#3A86FF] text-[#3A86FF] px-10 py-4 rounded-[14px] text-lg font-bold hover:bg-[#3A86FF] hover:text-white transition-all"
                >
                  تعرف على المحتويات
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section id="included" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3735] mb-4">
                ما تحصل عليه في الباقة الشاملة
              </h2>
              <p className="text-xl text-[#2D3735]/60">
                5 صناديق تطبيقية احترافية بسعر باقة واحدة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
        <section className="py-16 bg-[#D9E4E1]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3735] text-center mb-12">
                لماذا تختار الباقة الشاملة؟
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10">
                  <div className="w-14 h-14 bg-[#169380]/10 rounded-[14px] flex items-center justify-center mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3735] mb-3">وفّر 57% من السعر</h3>
                  <p className="text-[#2D3735]/70 leading-relaxed">
                    بدلاً من دفع 10,000 جنيه لشراء كل صندوق على حدة، احصل على الكل بـ 4,300 جنيه فقط
                  </p>
                </div>

                <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10">
                  <div className="w-14 h-14 bg-[#169380]/10 rounded-[14px] flex items-center justify-center mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3735] mb-3">حل شامل متكامل</h3>
                  <p className="text-[#2D3735]/70 leading-relaxed">
                    كل ما تحتاجه لإدارة أعمالك من البداية إلى النجاح - في باقة واحدة
                  </p>
                </div>

                <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10">
                  <div className="w-14 h-14 bg-[#169380]/10 rounded-[14px] flex items-center justify-center mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3735] mb-3">جاهز للاستخدام فوراً</h3>
                  <p className="text-[#2D3735]/70 leading-relaxed">
                    نماذج وأدوات جاهزة للتطبيق مباشرة - لا حاجة لإعداد أو تخصيص معقد
                  </p>
                </div>

                <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10">
                  <div className="w-14 h-14 bg-[#169380]/10 rounded-[14px] flex items-center justify-center mb-4">
                    <span className="text-3xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3735] mb-3">تحديثات مستمرة</h3>
                  <p className="text-[#2D3735]/70 leading-relaxed">
                    احصل على تحديثات وإضافات جديدة لجميع الصناديق بدون تكلفة إضافية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purchase Section */}
        <section id="buy" className="py-16 bg-gradient-to-br from-[#169380] to-[#28B9A8]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-[18px] p-8 md:p-12 text-center shadow-[0_4px_20px_rgba(22,147,128,0.15)]">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D3735] mb-4">
                احصل على الباقة الشاملة الآن
              </h2>
              <p className="text-xl text-[#2D3735]/60 mb-8">
                جميع الصناديق الخمسة في باقة واحدة شاملة
              </p>
              
              {/* Price Block */}
              <div className="mb-8 bg-[#0F7468] rounded-[18px] p-8">
                <p className="text-5xl md:text-6xl font-bold text-[#F4C95D] mb-2">4,300 جنيه</p>
                <p className="text-white/50 line-through text-2xl mb-3">10,000 جنيه</p>
                <span className="inline-block bg-[#EE6C4D] text-white px-5 py-2 rounded-full font-bold">
                  وفّر 5,700 جنيه
                </span>
              </div>

              <QuantitySelector
                baseCheckoutUrl={shopifyBaseUrl}
                productVariantId={bundleVariantId}
                buttonText="اطلب الباقة الشاملة الآن"
                price="4300"
              />

              <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-[#2D3735]/60">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#169380]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  دفع آمن عبر Shopify
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#169380]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  توصيل فوري بعد الدفع
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#169380]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  دعم فني مستمر
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2D3735] text-white text-center py-6">
          <p className="font-tajawal">© 2025 جميع الحقوق محفوظة Read to Lead</p>
        </footer>

        {/* Sticky Purchase Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D9E4E1] shadow-[0_-4px_20px_rgba(22,147,128,0.08)] py-3 px-4 z-40">
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <p className="font-bold text-[#2D3735]">الباقة الشاملة</p>
                <p className="text-sm text-[#2D3735]/60">5 صناديق بسعر واحد</p>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-2xl font-bold text-[#169380]">4,300 جنيه</p>
                <p className="text-xs text-[#2D3735]/50 line-through">10,000 جنيه</p>
              </div>
            </div>
            <a
              href="#buy"
              className="bg-[#F4C95D] text-[#2D3735] px-6 py-3 rounded-[14px] font-bold hover:bg-[#F4C95D]/90 transition-all shadow-[0_4px_20px_rgba(244,201,93,0.3)]"
            >
              اطلب الآن
            </a>
          </div>
        </div>
        
        {/* Bottom spacing for sticky bar */}
        <div className="h-20"></div>
      </div>
    </>
  );
};

export default AllInOne;
