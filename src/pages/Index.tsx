
import React from "react";
import SEO from "@/components/SEO";
import Logo from "@/components/Logo";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import SocialProofSection from "@/components/SocialProofSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import FinalCTASection from "@/components/FinalCTASection";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    title: "Startup Builder Kit",
    subtitle: "مجموعة بناء الشركات الناشئة",
    imageSrc: "/lovable-uploads/490e51b9-80e9-4446-8503-53b301967b9f.png",
    description: "أدوات ومحتوى لبناء شركتك الناشئة بمنهجية صحيحة",
    buttonText: "اكتشف الآن",
    link: "/startup-kit",
    checkoutLink: "https://si51ve-s6.myshopify.com/cart/42288739254377:1?channel=buy_button",
    currentPrice: "999 جنيه",
    comparePrice: 2000
  },
  {
    id: 2,
    title: "Sales & Marketing Kit",
    subtitle: "مجموعة التسويق والمبيعات",
    imageSrc: "/lovable-uploads/85ccfc20-77b8-4b0f-abfe-3455983bfa07.png",
    description: "أدوات تسويقية احترافية لزيادة المبيعات وجذب العملاء",
    buttonText: "اكتشف الآن",
    link: "/sales-marketing-kit",
    checkoutLink: "https://si51ve-s6.myshopify.com/cart/42289431150697:1?channel=buy_button",
    currentPrice: "999 جنيه",
    comparePrice: "2000 جنيه"
  },
  {
    id: 3,
    title: "Productivity Kit",
    subtitle: "مجموعة الإنتاجية وتطوير الذات",
    imageSrc: "/lovable-uploads/productivity-kit-card.jpg",
    description: "أدوات لإدارة وقتك بفعالية وتطوير قدراتك الشخصية",
    buttonText: "اكتشف الآن",
    link: "/productivity-kit",
    checkoutLink: "https://si51ve-s6.myshopify.com/cart/42289428791401:1?channel=buy_button",
    currentPrice: "999 جنيه",
    comparePrice: "2000 جنيه"
  }
];

const Index = () => {
  // New kits section data - UPDATED with new Productivity Kit image
  const newKits = [
    {
      title: "Duckverse - ثلاثية البط",
      imageSrc: "/lovable-uploads/duckverse-card.png",
      description: "3 كتب هتغيّر طريقة شغلك بالكامل — من نفسك، لفريقك، لسوقك",
      buttonText: "اطلب الآن",
      link: "/duckverse",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42622879105129:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "1500 جنيه"
    },
    {
      title: "Startup Kit",
      imageSrc: "/lovable-uploads/2bcb0011-1478-4447-a8aa-cf255f4c7aa1.png",
      description: "كل الأدوات اللي تساعدك تبدأ شركتك الناشئة بنجاح",
      buttonText: "اطلب الآن",
      link: "/startup-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42288739254377:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
    {
      title: "Project Leader Toolkit",
      imageSrc: "/lovable-uploads/project-leader-toolkit-banner.jpg",
      description: "من الفكرة للتنفيذ — كل أداة تحتاجها علشان تمشي المشروع خطوة بخطوة",
      buttonText: "اطلب الآن",
      link: "/project-leader-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42626010775657:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
    {
      title: "HR Manager Toolkit",
      imageSrc: "/lovable-uploads/hr-manager-toolkit-hero-new.jpg",
      description: "حوّل الفوضى الإدارية لنظام احترافي جاهز — في 10 أدوات بس",
      buttonText: "اطلب الآن",
      link: "/hr-manager-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42626019164265:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
    {
      title: "Productivity Kit",
      imageSrc: "/lovable-uploads/productivity-kit-card.jpg",
      description: "أدوات تساعدك على زيادة إنتاجيتك وإدارة وقتك بكفاءة",
      buttonText: "اطلب الآن",
      link: "/productivity-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42289428791401:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
    {
      title: "Sales & Marketing Kit",
      imageSrc: "/lovable-uploads/85ccfc20-77b8-4b0f-abfe-3455983bfa07.png",
      description: "أدوات تسويقية احترافية لزيادة المبيعات وجذب العملاء",
      buttonText: "اطلب الآن",
      link: "/sales-marketing-kit",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42289431150697:1?channel=buy_button",
      currentPrice: "999 جنيه",
      comparePrice: "2000 جنيه"
    },
  ];
  
  // New books section data with pricing and updated links
  const newBooks = [
    {
      title: "سلسلة النتاجية بلا حدود",
      imageSrc: "/lovable-uploads/167ced76-30d4-4269-a2d7-3f25b31cbe18.png",
      description: "كتابة التخطيط الفعال وزيادة إنتاجيتك",
      buttonText: "اطلب الآن",
      currentPrice: "٤٠٠ جنيه",
      comparePrice: "٥٠٠ جنيه",
      link: "/productivity-book",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42047911362665:1?channel=buy_button"
    },
    {
      title: "سلسلة إدارة حياتك المهنية",
      imageSrc: "/lovable-uploads/438f3ead-8d32-4c2c-8c1d-f6bdea33c7d3.png",
      description: "تخطيط وتطوير مسارك الوظيفي باحترافية",
      buttonText: "اطلب الآن",
      currentPrice: "٤٠٠ جنيه",
      comparePrice: "٥٠٠ جنيه",
      link: "/career-book",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42047911755881:1?channel=buy_button"
    },
    {
      title: "سلسلة التسويق الحديث",
      imageSrc: "/lovable-uploads/e02202fa-1c1f-4c69-9eeb-d8a406d41e9a.png",
      description: "استراتيجيات وأدوات التسويق في العصر الرقمي",
      buttonText: "اطلب الآن",
      currentPrice: "٤٠٠ جنيه",
      comparePrice: "٥٠٠ جنيه",
      link: "/marketing-book",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42047911559273:1?channel=buy_button"
    },
    {
      title: "سلسلة القيادة والإدارة الفعالة",
      imageSrc: "/lovable-uploads/7b271e77-fc40-4b05-a14f-f093c1f9cdb4.png",
      description: "استراتيجيات فعالة للقيادة وإدارة الناجحة",
      buttonText: "اطلب الآن",
      currentPrice: "٤٠٠ جنيه",
      comparePrice: "٥٠٠ جنيه",
      link: "/leadership-book",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42047911460969:1?channel=buy_button"
    },
    {
      title: "سلسلة تطوير الذات والنمو الشخصي",
      imageSrc: "/lovable-uploads/247722eb-0ea5-4d90-bf5b-52a81145490e.png",
      description: "رحلة لتطوير مهاراتك وتحقيق النمو الشخصي",
      buttonText: "اطلب الآن",
      currentPrice: "٤٠٠ جنيه",
      comparePrice: "٥٠٠ جنيه",
      link: "/self-development-book",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42047911264361:1?channel=buy_button"
    },
    {
      title: "سلسلة فن البيع والشراء",
      imageSrc: "/lovable-uploads/1522fafc-8928-4f3e-9cf7-4d6f2c0617df.png",
      description: "تقنيات احترافية للبيع والتفاوض وخدمة العملاء",
      buttonText: "اطلب الآن",
      currentPrice: "٤٠٠ جنيه",
      comparePrice: "٥٠٠ جنيه",
      link: "/sales-book",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42047911624809:1?channel=buy_button"
    },
    {
      title: "سلسلة فن ريادة الأعمال",
      imageSrc: "/lovable-uploads/8b7decb8-2edd-41e2-acb7-f8ca9ffd7014.png",
      description: "مهارات وأدوات بناء المشاريع الناجحة",
      buttonText: "اطلب الآن",
      currentPrice: "٤٠٠ جنيه",
      comparePrice: "٥٠٠ جنيه",
      link: "/entrepreneurship-book",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42047911690345:1?channel=buy_button"
    },
    {
      title: "سلسلة قواعد النجاح المؤسسي",
      imageSrc: "/lovable-uploads/8376e2d7-8776-42f1-a5dd-e4e3b2d93df8.png",
      description: "بناء ثقافة مؤسسية ناجحة وبيئة عمل محفزة",
      buttonText: "اطلب الآن",
      currentPrice: "٤٠٠ جنيه",
      comparePrice: "٥٠٠ جنيه",
      link: "/institutional-success-book",
      checkoutLink: "https://si51ve-s6.myshopify.com/cart/42047911854185:1?channel=buy_button"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Read to Lead | كتب وكيتات تعليمية لتطوير مسارك"
        description="اكتشف أفضل الكيتات والكتب العربية لتطوير مهاراتك في التسويق، القيادة، الإنتاجية، وريادة الأعمال. شحن سريع داخل مصر."
        canonicalUrl="https://land.readtolead.store/"
        ogType="website"
      />
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
                      href={item === "المنتجات" ? "#kits" : "#"}
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

        {/* New Kits Section - UPDATED with new kit images and pricing */}
        <section id="kits" className="py-16 bg-white" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              الصناديق التطبيقية الجديدة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newKits.map((kit, index) => (
                <ProductCard
                  key={index}
                  title={kit.title}
                  index={index}
                  link={kit.link}
                  checkoutLink={kit.checkoutLink}
                  imageSrc={kit.imageSrc}
                  description={kit.description}
                  buttonText={kit.buttonText}
                  currentPrice={kit.currentPrice}
                  comparePrice={kit.comparePrice}
                />
              ))}
            </div>
          </div>
        </section>

        {/* New Books Section - Updated with prices and links */}
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
                  currentPrice={book.currentPrice}
                  comparePrice={book.comparePrice}
                  link={book.link}
                  checkoutLink={book.checkoutLink}
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

      {/* Updated Footer */}
      <footer className="bg-[#1A1F2C] text-white text-center py-4">
        <p>© 2025 جميع الحقوق محفوظة Read to Lead</p>
      </footer>
    </div>
  );
};

export default Index;
