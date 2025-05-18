
import React from "react";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import SocialProofSection from "@/components/SocialProofSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import FinalCTASection from "@/components/FinalCTASection";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Index = () => {
  // New kits section data - UPDATED with specific kits and kit images
  const newKits = [
    {
      title: "Startup Kit",
      imageSrc: "/lovable-uploads/2bcb0011-1478-4447-a8aa-cf255f4c7aa1.png",
      description: "كل الأدوات اللي تساعدك تبدأ شركتك الناشئة بنجاح",
      buttonText: "اكتشف الآن",
      link: "/startup-kit"
    },
    {
      title: "Productivity Kit",
      imageSrc: "/lovable-uploads/2f62bf47-4320-4e55-9c82-f20875cfde4e.png",
      description: "أدوات تساعدك على زيادة إنتاجيتك وإدارة وقتك بكفاءة",
      buttonText: "اكتشف الآن"
    },
    {
      title: "Sales & Marketing Kit",
      imageSrc: "/lovable-uploads/85ccfc20-77b8-4b0f-abfe-3455983bfa07.png",
      description: "أدوات تسويقية احترافية لزيادة المبيعات وجذب العملاء",
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
  
  // New books section data with the uploaded book covers
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
      title: "سلسلة فن البيع والشراء",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header with better navigation */}
      <header className="py-4 border-b sticky top-0 bg-white/95 backdrop-blur-sm z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            
            {/* Enhanced navigation with NavigationMenu component */}
            <NavigationMenu className="rtl">
              <NavigationMenuList className="flex space-x-1 space-x-reverse">
                {["الرئيسية", "المنتجات", "من نحن", "تواصل معنا"].map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item === "المنتجات" ? "#products" : "#"}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors",
                        "hover:bg-rtl-teal/10 hover:text-rtl-teal focus:bg-rtl-teal/10 focus:text-rtl-teal focus:outline-none"
                      )}
                    >
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* New Kits Section - UPDATED with new kit images */}
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
                  link={kit.link}
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
