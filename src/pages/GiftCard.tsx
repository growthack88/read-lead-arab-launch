import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Gift, BookOpen, Brain, Rocket, Clock, Check, X, ChevronDown, Users, Briefcase, Building2, GraduationCap, Sparkles, HelpCircle } from "lucide-react";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CTA_LINK = "https://readtolead.store/products/read-to-lead-gift-card";

const priceCheckoutLinks: Record<string, string> = {
  "250": "https://si51ve-s6.myshopify.com/cart/42757109317737:1?channel=buy_button",
  "500": "https://si51ve-s6.myshopify.com/cart/42757109153897:1?channel=buy_button",
  "1000": "https://si51ve-s6.myshopify.com/cart/42757109186665:1?channel=buy_button",
  "1500": "https://si51ve-s6.myshopify.com/cart/42757109219433:1?channel=buy_button",
  "2000": "https://si51ve-s6.myshopify.com/cart/42757109252201:1?channel=buy_button",
  "3000": "https://si51ve-s6.myshopify.com/cart/42757109284969:1?channel=buy_button",
  "5000": "https://si51ve-s6.myshopify.com/cart/42757109350505:1?channel=buy_button",
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

// Confetti particle component
const ConfettiParticle = ({ delay, x, color }: { delay: number; x: number; color: string }) => (
  <motion.div
    className="absolute w-3 h-3 rounded-sm"
    style={{ backgroundColor: color, left: `${x}%` }}
    initial={{ y: -20, opacity: 1, rotate: 0, scale: 1 }}
    animate={{ 
      y: '100vh', 
      opacity: [1, 1, 0], 
      rotate: [0, 360, 720],
      scale: [1, 0.8, 0.5]
    }}
    transition={{ 
      duration: 4, 
      delay, 
      ease: "easeIn"
    }}
  />
);

// Floating gift component
const FloatingGift = ({ delay, x, size }: { delay: number; x: number; size: number }) => (
  <motion.div
    className="absolute text-gift-accent"
    style={{ left: `${x}%` }}
    initial={{ y: -50, opacity: 0, scale: 0 }}
    animate={{ 
      y: ['0%', '120vh'],
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 1, 0.5],
      rotate: [0, 15, -15, 0]
    }}
    transition={{ 
      duration: 5,
      delay,
      ease: "easeInOut"
    }}
  >
    <Gift size={size} />
  </motion.div>
);

// Celebration overlay component
const CelebrationOverlay = () => {
  const [showCelebration, setShowCelebration] = useState(true);
  
  const confettiColors = ['#F4C95D', '#169380', '#28B9A8', '#EE6C4D', '#3A86FF', '#F2F5F4'];
  const confettiParticles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    x: Math.random() * 100,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
  }));
  
  const floatingGifts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: Math.random() * 1.5,
    x: Math.random() * 100,
    size: 24 + Math.random() * 24
  }));

  useEffect(() => {
    const timer = setTimeout(() => setShowCelebration(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showCelebration && (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Confetti particles */}
          {confettiParticles.map((particle) => (
            <ConfettiParticle 
              key={particle.id} 
              delay={particle.delay} 
              x={particle.x} 
              color={particle.color}
            />
          ))}
          
          {/* Floating gifts */}
          {floatingGifts.map((gift) => (
            <FloatingGift 
              key={gift.id} 
              delay={gift.delay} 
              x={gift.x} 
              size={gift.size}
            />
          ))}
          
          {/* Center sparkle burst */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 2, 3], opacity: [1, 0.8, 0] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Sparkles className="w-32 h-32 text-gift-accent" />
          </motion.div>
          
          {/* Radial burst effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gift-accent/20"
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: '200vw', height: '200vw', opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Hero Section - Dark #0F7468 with gradient from #169380
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gift-secondary via-gift-primary to-gift-secondary-light overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-72 h-72 bg-gift-accent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gift-neutral-light rounded-full blur-3xl"></div>
    </div>
    
    {/* Animated floating gifts in background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-gift-accent/20"
          style={{ 
            left: `${15 + i * 15}%`, 
            top: `${20 + (i % 3) * 25}%` 
          }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        >
          <Gift size={40 + i * 8} />
        </motion.div>
      ))}
    </div>
    
    <div className="container mx-auto px-4 py-20 relative z-10">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gift-neutral-light mb-8 leading-tight"
          variants={fadeInUp}
        >
          دي مش هدية… دي <span className="text-gift-accent">بداية.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gift-neutral-light/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          كارت هدية Read to Lead — لأن الشخص اللي يستاهل، يستاهل هدية تبني… مش هدية تتنسى.
        </motion.p>
        
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" variants={fadeInUp}>
          <a 
            href="#pricing" 
            className="inline-flex items-center gap-3 bg-gift-accent hover:bg-gift-accent/90 text-gift-neutral-dark font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Gift className="w-6 h-6" />
            اختر قيمة الكارت وابدأ
          </a>
          <a 
            href="#how-it-works" 
            className="inline-flex items-center gap-2 border-2 border-gift-neutral-light/30 text-gift-neutral-light hover:bg-gift-neutral-light/10 font-medium py-4 px-8 rounded-full text-lg transition-all duration-300"
          >
            إزاي بتشتغل؟
          </a>
        </motion.div>
        
        <motion.p 
          className="text-gift-neutral-light/50 mt-6 text-sm"
          variants={fadeInUp}
        >
          بدون شحن. بدون انتظار. هدية رقمية فورية.
        </motion.p>
      </motion.div>
    </div>
    
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-gift-neutral-light/40" />
    </div>
  </section>
);

// Problem Section - Light #F2F5F4 background with cards
const problemCards = [
  { text: "شوكولاتة" },
  { text: "عطر" },
  { text: "مج مكتوب عليه كلمتين" },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-gift-neutral-light">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-neutral-dark mb-12 text-center"
          variants={fadeInUp}
        >
          ليه معظم الهدايا مش بتفرق؟
        </motion.h2>
        
        <motion.div 
          className="grid sm:grid-cols-3 gap-4 mb-8"
          variants={staggerContainer}
        >
          {problemCards.map((card, index) => (
            <motion.div 
              key={index}
              className="bg-gift-neutral-soft rounded-2xl p-6 text-center"
              variants={fadeInUp}
            >
              <p className="text-lg text-gift-neutral-dark font-medium">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-xl text-gift-neutral-dark/70 text-center mb-8"
          variants={fadeInUp}
        >
          مش وحشين… بس <span className="text-gift-primary font-bold">بيتنسوا.</span>
        </motion.p>
        
        <motion.div 
          className="bg-gift-secondary rounded-3xl p-8 md:p-10 text-gift-neutral-light"
          variants={fadeInUp}
        >
          <p className="text-xl font-bold text-gift-accent mb-4">والأصعب؟</p>
          <p className="text-lg leading-relaxed opacity-90">
            إنك تفضل تدوّر كل مرة على "هدية مختلفة"… وكل مرة تلاقي نفسك بتختار أي حاجة عشان الوقت ضيق.
            <br /><br />
            مش لأنك مش مهتم. لكن لأن الاختيارات الحقيقية المميزة… <span className="text-gift-accent font-bold">نادرة.</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Emotional Transition Section - Clean white with large whitespace
const EmotionalTransitionSection = () => (
  <section className="py-32 md:py-40 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gift-neutral-dark leading-tight">
          ماذا لو الهدية كانت <span className="text-gift-primary">بداية</span>؟
        </h2>
      </motion.div>
    </div>
  </section>
);

// Value Translation Section - Grid of 4 cards
const benefits = [
  {
    icon: BookOpen,
    title: "كتب تغيّر منظور",
    description: "ملخصات وكتب عربية مبنية تفتح العقل وتبني طريقة تفكير جديدة."
  },
  {
    icon: Brain,
    title: "أدوات تفكير عملية",
    description: "أدوات، Frameworks، وتمارين تطبيقية يقدر يستخدمها فورًا."
  },
  {
    icon: Rocket,
    title: "دافع للتطوير والنمو",
    description: "هدية بتتحول لساعات من القراءة وخطوات حقيقية للأمام."
  },
  {
    icon: Clock,
    title: "بداية سنة جديدة أقوى",
    description: "التوقيت مثالي. سنة جديدة = قرارات جديدة = نوايا للتغيير."
  }
];

const BenefitsSection = () => (
  <section className="py-24 md:py-32 bg-gift-neutral-light">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gift-neutral-dark mb-4 text-center"
          variants={fadeInUp}
        >
          أنت مش بتدي فلوس…
        </motion.h2>
        <motion.p 
          className="text-2xl text-gift-primary font-bold mb-16 text-center"
          variants={fadeInUp}
        >
          أنت بتدي:
        </motion.p>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-gift-neutral-soft rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-gift-secondary-light rounded-full flex items-center justify-center mb-5 group-hover:bg-gift-primary transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gift-neutral-dark mb-3 group-hover:text-gift-primary transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gift-neutral-dark/70 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Pricing Section - Dark #0F7468 background
const pricingTiers = [
  { value: "250", label: "E£250", description: "لفتة ذكية وبداية خفيفة", ideal: "هدية بسيطة ومعبّرة" },
  { value: "500", label: "E£500", description: "هدية محترمة وواضحة", ideal: "زميل أو صديق" },
  { value: "1000", label: "E£1,000", description: "هدية قوية ومؤثرة", ideal: "مناسبة مهمة", featured: true },
  { value: "1500", label: "E£1,500", description: "استثمار حقيقي", ideal: "شخص قريب جدًا" },
  { value: "2000", label: "E£2,000", description: "هدية قيادية مميزة", ideal: "مدير أو شريك" },
  { value: "3000", label: "E£3,000", description: "باقة شاملة للتطوير", ideal: "رحلة تعلّم كاملة" },
  { value: "5000", label: "E£5,000", description: "الهدية الأقوى", ideal: "للشركات والقادة" }
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 bg-gift-secondary">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-neutral-light mb-4 text-center"
          variants={fadeInUp}
        >
          اختر القيمة اللي تناسبك
        </motion.h2>
        <motion.p 
          className="text-xl text-gift-neutral-light/70 mb-16 text-center"
          variants={fadeInUp}
        >
          أنت بتختار القيمة… وهم يختاروا الرحلة.
        </motion.p>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={staggerContainer}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={index}
              className={`rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl bg-white ${
                tier.featured 
                  ? 'ring-4 ring-gift-accent relative' 
                  : ''
              }`}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gift-accent text-gift-neutral-dark text-xs font-bold px-4 py-1 rounded-full">
                    الأكثر اختيارًا
                  </span>
                </div>
              )}
              <div className="text-center">
                <p className="text-3xl font-bold text-gift-primary mb-2">
                  {tier.label}
                </p>
                <p className="text-lg font-bold text-gift-neutral-dark mb-1">
                  {tier.description}
                </p>
                <p className="text-sm text-gift-neutral-dark/60 mb-6">
                  {tier.ideal}
                </p>
                <a 
                  href={priceCheckoutLinks[tier.value]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    tier.featured
                      ? 'bg-gift-accent text-gift-neutral-dark hover:bg-gift-accent/90'
                      : 'bg-gift-primary text-white hover:bg-gift-primary/90'
                  }`}
                >
                  اختر هذا الكارت
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 bg-gift-neutral-light/10 backdrop-blur-sm rounded-2xl p-6 text-center"
          variants={fadeInUp}
        >
          <p className="text-gift-neutral-light">
            💡 <span className="font-bold">ملاحظة:</span> الكارت صالح على كل منتجات Read to Lead — الشخص اللي بيستلم الهدية هو اللي بيقرر.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Urgency Section - Yellow #F4C95D background
const UrgencySection = () => (
  <section className="py-20 md:py-24 bg-gift-accent">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gift-neutral-dark mb-8"
          variants={fadeInUp}
        >
          هل الوقت ده مناسب؟
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          variants={staggerContainer}
        >
          {[
            "بداية سنة جديدة",
            "موسم الهدايا",
            "التوقيت المثالي"
          ].map((point, index) => (
            <motion.div 
              key={index}
              className="bg-white/40 backdrop-blur-sm rounded-xl px-6 py-3"
              variants={fadeInUp}
            >
              <p className="text-gift-neutral-dark font-medium">{point}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.a 
          href="#pricing"
          className="inline-flex items-center gap-3 bg-gift-secondary hover:bg-gift-secondary/90 text-gift-neutral-light font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-xl"
          variants={fadeInUp}
        >
          <Gift className="w-6 h-6" />
          اشترِ الآن
        </motion.a>
      </motion.div>
    </div>
  </section>
);

// FAQ Section - Light #F2F5F4 background
const faqs = [
  {
    question: "طيب لو الشخص مش بيقرأ كتير؟",
    answer: "كارت Read to Lead مش بس كتب. فيه أدوات، ملخصات قصيرة، ومحتوى عملي لأي حد عايز يطوّر نفسه — حتى لو مش قارئ تقليدي."
  },
  {
    question: "لو عايز أهدي لأكتر من شخص؟",
    answer: "ممكن تشتري أكتر من كارت بسهولة. ولو شركة أو فريق كبير، تواصل معانا لعروض Bulk Orders مخصصة."
  },
  {
    question: "الكارت صالح لمدة قد إيه؟",
    answer: "الكارت ليه صلاحية طويلة — والشخص يقدر يستخدمه في أي وقت يناسبه. مفيش ضغط."
  },
  {
    question: "إيه الفرق بين كارت Read to Lead وGift Card عادي؟",
    answer: "كارت عادي = فلوس. كارت Read to Lead = رسالة. أنت بتدي فرصة للتعلّم والتطوير وبداية جديدة."
  },
  {
    question: "ممكن أهدي نفسي؟",
    answer: "أكيد! أحيانًا أفضل هدية هي اللي بتديها لنفسك. كارت Read to Lead = commitment لنفسك."
  }
];

const FAQSection = () => (
  <section className="py-24 md:py-32 bg-gift-neutral-light">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gift-neutral-dark mb-12 text-center"
          variants={fadeInUp}
        >
          أسئلة مهمة
        </motion.h2>
        
        <motion.div variants={fadeInUp}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border border-gift-neutral-soft"
              >
                <AccordionTrigger className="text-right text-lg font-bold text-gift-neutral-dark hover:text-gift-primary py-5 [&[data-state=open]]:text-gift-primary">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gift-accent-blue flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gift-neutral-dark/70 leading-relaxed pb-5 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Summary Section
const SummarySection = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gift-neutral-dark mb-12 text-center"
          variants={fadeInUp}
        >
          في النهاية…
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-gift-neutral-light rounded-2xl p-8 border border-gift-neutral-soft"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-gift-neutral-dark/50 mb-6">كارت Read to Lead مش:</h3>
            <ul className="space-y-4">
              {["هدية شكل", "اختيار سريع وخلاص", "حاجة هتتنسى بعد أسبوع"].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-gift-neutral-dark/60">
                  <X className="w-5 h-5 text-gift-accent-coral flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gift-primary rounded-2xl p-8 text-white"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-gift-accent mb-6">كارت Read to Lead هو:</h3>
            <ul className="space-y-4">
              {["رسالة من القلب", "تأثير يفضل", "بداية جديدة لشخص يستاهل"].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Check className="w-5 h-5 text-gift-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-2xl md:text-3xl font-bold text-gift-primary text-center mt-12"
          variants={fadeInUp}
        >
          🎁 اختَر هدية تِفضل… مش تِتنسى.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// Final CTA Section
const FinalCTASection = () => (
  <section className="py-24 md:py-32 bg-gradient-to-br from-gift-secondary via-gift-primary to-gift-secondary-light">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.p 
          className="text-xl text-gift-neutral-light/80 mb-6"
          variants={fadeInUp}
        >
          جاهز تهدي هدية ليها قيمة حقيقية؟
        </motion.p>
        
        <motion.a 
          href="#pricing"
          className="inline-flex items-center gap-3 bg-gift-accent hover:bg-gift-accent/90 text-gift-neutral-dark font-bold py-5 px-12 rounded-full text-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Gift className="w-7 h-7" />
          اشترِ كارت هدية Read to Lead الآن
        </motion.a>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-10 text-gift-neutral-light/70"
          variants={fadeInUp}
        >
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> هدية رقمية فورية</span>
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> صالح على كل المنتجات</span>
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> المُهدى له يختار رحلته</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// How It Works Section
const steps = [
  { number: "1", title: "اختر قيمة الكارت", description: "من E£250 لـ E£5,000" },
  { number: "2", title: "ادفع أونلاين", description: "عملية سهلة وآمنة" },
  { number: "3", title: "الكارت يُرسل فورًا", description: "هدية رقمية جاهزة" },
  { number: "4", title: "يبدأ رحلته", description: "يختار اللي يناسبه" }
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gift-neutral-dark mb-16 text-center"
          variants={fadeInUp}
        >
          كيف تعمل الهدية؟
        </motion.h2>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              variants={fadeInUp}
            >
              <div className="bg-gift-neutral-light rounded-2xl p-6 text-center h-full hover:shadow-lg transition-all duration-300 border border-gift-neutral-soft">
                <div className="w-14 h-14 bg-gift-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gift-neutral-dark mb-2">{step.title}</h3>
                <p className="text-gift-neutral-dark/60 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-3 transform -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-gift-primary/30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-center mt-10 text-gift-neutral-dark/70"
          variants={fadeInUp}
        >
          💳 الكارت صالح على كل منتجات Read to Lead — المُهدى له يختار رحلته بنفسه.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// Sticky Mobile CTA
const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-gift-secondary/95 backdrop-blur-md border-t border-gift-primary/20 p-4 z-50 md:hidden">
    <div className="flex items-center justify-between gap-4">
      <div className="text-gift-neutral-light">
        <p className="text-sm opacity-80">🎁 كارت هدية Read to Lead</p>
        <p className="text-gift-accent font-bold">ابدأ من E£250</p>
      </div>
      <a 
        href="#pricing"
        className="bg-gift-accent hover:bg-gift-accent/90 text-gift-neutral-dark font-bold py-3 px-6 rounded-xl transition-all duration-300 whitespace-nowrap"
      >
        اشترِ الآن
      </a>
    </div>
  </div>
);

// Main Component
const GiftCard = () => {
  return (
    <div className="font-tajawal" dir="rtl">
      <SEO 
        title="كارت هدية Read to Lead | هدية تِبقى مش تِتنسى"
        description="هدية رقمية فورية بدون شحن — يختار المستلم كتبه وكيتاته من Read to Lead. من E£250 لـ E£5,000."
        canonicalUrl="https://land.readtolead.store/gift-card"
      />
      
      {/* Celebration animation on page load */}
      <CelebrationOverlay />
      
      <HeroSection />
      <ProblemSection />
      <EmotionalTransitionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PricingSection />
      <UrgencySection />
      <FAQSection />
      <SummarySection />
      <FinalCTASection />
      <StickyMobileCTA />
    </div>
  );
};

export default GiftCard;
