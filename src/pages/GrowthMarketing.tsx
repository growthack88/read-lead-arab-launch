import SEO from "@/components/SEO";
import TopBar from "./growth-marketing/TopBar";
import HeroSection from "./growth-marketing/HeroSection";
import StatsBar from "./growth-marketing/StatsBar";
import ProblemSection from "./growth-marketing/ProblemSection";
import SolutionSection from "./growth-marketing/SolutionSection";
import BooksSection from "./growth-marketing/BooksSection";
import ToolkitSection from "./growth-marketing/ToolkitSection";
import SystemSection from "./growth-marketing/SystemSection";
import WhoIsThisFor from "./growth-marketing/WhoIsThisFor";
import TransformationSection from "./growth-marketing/TransformationSection";
import TestimonialsSection from "./growth-marketing/TestimonialsSection";
import OfferStackSection from "./growth-marketing/OfferStackSection";
import HowItWorksSection from "./growth-marketing/HowItWorksSection";

import FAQSection from "./growth-marketing/FAQSection";
import FinalCTASection from "./growth-marketing/FinalCTASection";
import Footer from "./growth-marketing/Footer";

const GrowthMarketing = () => {
  return (
    <div dir="rtl" lang="ar" className="bg-[#0a0a0a] min-h-screen font-ibm-plex-arabic text-white scroll-smooth">
      <SEO
        title="Growth Marketing Kit — 3 كتب + 9 أدوات = نظام تسويق كامل"
        description="3 كتب مطبوعة + نسخ رقمية + بونصات + 9 أدوات مطبوعة — كل اللي محتاجه عشان تبني ماكينة نمو. 1,499 ج.م بدل 5,497 ج.م"
      />
      <TopBar />
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <SolutionSection />
      <BooksSection />
      <ToolkitSection />
      <SystemSection />
      <WhoIsThisFor />
      <TransformationSection />
      <TestimonialsSection />
      <OfferStackSection />
      <HowItWorksSection />
      
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default GrowthMarketing;
