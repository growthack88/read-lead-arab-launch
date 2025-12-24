import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Gift, BookOpen, Brain, Rocket, Clock, Check, X, ChevronDown, Users, Briefcase, Building2, GraduationCap, Sparkles } from "lucide-react";
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
    transition: { staggerChildren: 0.15 }
  }
};

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gift-dark via-gift-primary to-gift-primary-light overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-72 h-72 bg-gift-accent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gift-accent rounded-full blur-3xl"></div>
    </div>
    
    <div className="container mx-auto px-4 py-20 relative z-10">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p 
          className="text-gift-accent text-lg md:text-xl mb-4"
          variants={fadeInUp}
        >
          لكل اللي بيدوّر على هدية ليها معنى — مش مجرد شكل
        </motion.p>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          variants={fadeInUp}
        >
          مش هدية… دي <span className="text-gift-accent">بداية جديدة.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          كارت هدية Read to Lead — لأن الشخص اللي يستاهل، يستاهل هدية تبني… مش هدية تتنسى.
        </motion.p>
        
        <motion.p 
          className="text-lg text-white/70 mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          سواء صديق، زميل، موظف، أو حتى نفسك… كارت Read to Lead بيفتح الباب لكتب، أدوات، ومحتوى يغيّر التفكير ويبدأ رحلة تطوير حقيقية.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 text-white/80 mb-10"
          variants={fadeInUp}
        >
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> يختار اللي يناسبه بالضبط</span>
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> يُرسل فورًا كهدية رقمية</span>
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> صالح على كل منتجات Read to Lead</span>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <a 
            href="#pricing" 
            className="inline-flex items-center gap-3 bg-gift-accent hover:bg-gift-accent-light text-gift-dark font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Gift className="w-6 h-6" />
            اختر قيمة الكارت وابدأ
          </a>
          <p className="text-white/60 mt-4 text-sm">بدون شحن. بدون انتظار. هدية رقمية فورية.</p>
        </motion.div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-white/50" />
    </div>
  </section>
);

// Problem Section
const ProblemSection = () => (
  <section className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-primary mb-8 text-center"
          variants={fadeInUp}
        >
          ليه معظم الهدايا مش بتفرق؟
        </motion.h2>
        
        <motion.div 
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-8"
          variants={fadeInUp}
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            كلنا اتعودنا على الهدايا التقليدية. شوكولاتة. عطر. مج مكتوب عليه كلمتين.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            مش وحشين… بس <span className="text-gift-primary font-bold">بيتنسوا.</span>
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            بعد أسبوع، الهدية بتبقى في درج. مفيش أثر. مفيش فرق. مفيش حاجة اتغيّرت.
            <br />
            والشخص اللي كنت عايز تقوله "أنا مهتم بيك" — مقدرش يحس بالرسالة.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gift-dark rounded-3xl p-8 md:p-12 text-white"
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

// Solution Section
const SolutionSection = () => (
  <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-primary mb-8"
          variants={fadeInUp}
        >
          ماذا لو الهدية كانت <span className="text-gift-accent">بداية</span> مش نهاية؟
        </motion.h2>
        
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          variants={fadeInUp}
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            كارت هدية Read to Lead مش مجرد مبلغ مالي.
          </p>
          <p className="text-2xl text-gift-primary font-bold mb-6">
            هو رسالة.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            رسالة بتقول: <span className="text-gift-accent font-bold">"أنا شايفك. أنا مهتم بنموّك. أنا عايزك تبقى أحسن."</span>
          </p>
          <div className="h-px w-24 bg-gift-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            الشخص اللي بيستلم الكارت مش بياخد فلوس. بياخد باب مفتوح لكتب تغيّر منظوره، أدوات تساعده يفكّر، ومحتوى يخليه يبدأ سنة جديدة بطاقة مختلفة.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Benefits Section
const benefits = [
  {
    icon: BookOpen,
    title: "كتب تغيّر منظور",
    description: "مش أي كتب. ملخصات وكتب عربية مبنية تفتح العقل وتبني طريقة تفكير جديدة. الشخص اللي بيستلم الهدية بيختار الكتاب اللي يناسب رحلته — مش أنت اللي بتفرض عليه."
  },
  {
    icon: Brain,
    title: "أدوات تفكير عملية",
    description: "مش كلام نظري. أدوات، Frameworks، وتمارين تطبيقية يقدر يستخدمها فورًا في شغله أو حياته. النتيجة؟ تفكير أوضح. قرارات أحسن."
  },
  {
    icon: Rocket,
    title: "دافع للتطوير والنمو",
    description: "الهدية دي مش بتتحط في درج. بتتحول لساعات من القراءة، insights جديدة، وخطوات حقيقية للأمام. هدية بتستمر أثرها — مش بتتنسى بعد يومين."
  },
  {
    icon: Clock,
    title: "بداية سنة جديدة أقوى",
    description: "التوقيت مثالي. سنة جديدة = قرارات جديدة = نوايا حقيقية للتغيير. كارت Read to Lead بيدي الشخص السبب يبدأ فعلًا — مش بس يتمنى."
  }
];

const BenefitsSection = () => (
  <section className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-primary mb-4 text-center"
          variants={fadeInUp}
        >
          أنت مش بتدي فلوس…
        </motion.h2>
        <motion.p 
          className="text-2xl text-gift-accent font-bold mb-16 text-center"
          variants={fadeInUp}
        >
          أنت بتدي:
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gift-accent/30"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gift-primary rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gift-primary mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Emotional Quote Section
const EmotionalQuoteSection = () => (
  <section className="py-24 md:py-32 bg-gift-dark relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gift-accent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gift-primary-light rounded-full blur-3xl"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.p 
          className="text-gift-accent text-xl mb-8"
          variants={fadeInUp}
        >
          ❤️ الرسالة اللي بتوصل مع كل كارت
        </motion.p>
        
        <motion.blockquote 
          className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
          variants={fadeInUp}
        >
          "أنا شايفك. ومهتم بنموّك. ومستقبلك يستاهل الاستثمار ده."
        </motion.blockquote>
        
        <motion.p 
          className="text-xl text-white/70"
          variants={fadeInUp}
        >
          مش محتاج تقولها بالكلام. الهدية بتقولها عنك.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// Audience Tabs Section
interface AudienceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  occasions: string;
  note?: string;
}

const audienceData: Record<string, AudienceItem> = {
  friends: {
    icon: Users,
    title: "للأصدقاء",
    content: `الصديق الحقيقي مش اللي بيجيبلك هدية "لطيفة". هو اللي بيجيبلك هدية تقول: "أنا مهتم بنموّك ومستقبلك."

كارت Read to Lead هو الهدية اللي بتفضل في الذاكرة — لأنها بتفضل في التفكير.`,
    occasions: "عيد ميلاد، تخرج، خطوبة، بداية مشروع، أو بدون مناسبة — بس عشان الشخص يستاهل."
  },
  colleagues: {
    icon: Briefcase,
    title: "لزملاء العمل والمديرين",
    content: `نسيت هدايا الشوكولاتة والـ Gift Baskets التقليدية.

لفتة ذكية ومختلفة بتقول: "أنت شخص بيفكّر، وأنا قدّرت كده." تناسب End of Year، Performance Reviews، أو حتى Thank You بسيط.`,
    occasions: "أي حد في الفريق بيستحق يتقدّر بطريقة مختلفة."
  },
  employees: {
    icon: Building2,
    title: "للموظفين والفرق",
    content: `هدية تعكس ثقافة التطوير والتعلّم في الشركة.

بدل هدايا نمطية، قدّم لفريقك هدية تحفيزية تقول: "احنا شركة بتستثمر في الناس."`,
    occasions: "End-of-year rewards، Performance bonuses، Onboarding gifts، Team appreciation",
    note: "💡 للشركات: تواصل معانا لعروض الـ Bulk Orders."
  },
  entrepreneurs: {
    icon: GraduationCap,
    title: "للطلاب ورواد الأعمال الجدد",
    content: `أفضل استثمار في شخص بادئ رحلته؟ مش فلوس. مش "نصائح".

هو المعرفة والأدوات اللي تخليه يبني عقلية قيادية من البداية. كارت Read to Lead = دفعة قوية في أول الطريق.`,
    occasions: ""
  }
};

const AudienceSection = () => (
  <section className="py-20 md:py-32 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-primary mb-4 text-center"
          variants={fadeInUp}
        >
          🎯 الهدية المثالية لـ:
        </motion.h2>
        
        <motion.div variants={fadeInUp} className="mt-12">
          <Tabs defaultValue="friends" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
              {Object.entries(audienceData).map(([key, data]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="data-[state=active]:bg-gift-primary data-[state=active]:text-white bg-white border border-gray-200 rounded-xl py-4 px-6 text-gift-primary font-bold transition-all"
                >
                  <data.icon className="w-5 h-5 ml-2" />
                  {data.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(audienceData).map(([key, data]) => (
              <TabsContent key={key} value={key}>
                <motion.div 
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gift-accent/20 rounded-2xl flex items-center justify-center">
                      <data.icon className="w-7 h-7 text-gift-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gift-primary">{data.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-6">{data.content}</p>
                  {data.occasions && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-gift-primary font-bold mb-2">مثالي لـ:</p>
                      <p className="text-gray-600">{data.occasions}</p>
                    </div>
                  )}
                  {data.note && (
                    <p className="mt-4 text-gift-accent font-bold">{data.note}</p>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// How It Works Section
const steps = [
  { number: "1", title: "اختر قيمة الكارت", description: "من E£250 لـ E£5,000 — أنت بتختار القيمة اللي تناسبك." },
  { number: "2", title: "ادفع أونلاين في ثواني", description: "عملية سهلة وآمنة. بدون تعقيد." },
  { number: "3", title: "الكارت يُرسل فورًا", description: "هدية رقمية جاهزة — ممكن تبعتها مباشرة للشخص اللي بتهديه." },
  { number: "4", title: "المُهدى له يبدأ رحلته", description: "يختار الكتب والأدوات اللي تناسبه بالضبط من كل منتجات Read to Lead." }
];

const HowItWorksSection = () => (
  <section className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-primary mb-16 text-center"
          variants={fadeInUp}
        >
          🚀 كيف تعمل الهدية؟
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              variants={fadeInUp}
            >
              <div className="bg-gray-50 rounded-3xl p-6 text-center h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gift-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gift-primary mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -left-3 transform -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-gift-accent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={fadeInUp}
        >
          <p className="text-xl text-gray-600 mb-4">بدون شحن. بدون انتظار. بدون تعقيد.</p>
          <p className="text-gift-primary font-bold">💳 الكارت صالح على كل منتجات Read to Lead — المُهدى له يختار رحلته بنفسه.</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Pricing Section
const pricingTiers = [
  { value: "250", label: "E£250", description: "لفتة ذكية وبداية خفيفة", ideal: "هدية بسيطة ومعبّرة — أول خطوة" },
  { value: "500", label: "E£500", description: "هدية محترمة وواضحة", ideal: "زميل، صديق، أو Thank You مميز" },
  { value: "1000", label: "E£1,000", description: "هدية قوية ومؤثرة", ideal: "مناسبة مهمة — عيد ميلاد، تخرج، ترقية", featured: true },
  { value: "1500", label: "E£1,500", description: "استثمار حقيقي في شخص", ideal: "شخص قريب جدًا أو موظف متميز" },
  { value: "2000", label: "E£2,000", description: "هدية قيادية مميزة", ideal: "مدير، شريك، أو شخص مؤثر في حياتك" },
  { value: "3000", label: "E£3,000", description: "باقة شاملة للتطوير", ideal: "لشخص عايز يبدأ رحلة تعلّم كاملة" },
  { value: "5000", label: "E£5,000", description: "الهدية الأقوى", ideal: "للشركات، للقادة، أو لشخص يستحق الأفضل", premium: true }
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-primary mb-4 text-center"
          variants={fadeInUp}
        >
          💳 اختر القيمة اللي تناسبك
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-16 text-center"
          variants={fadeInUp}
        >
          أنت بتختار القيمة… وهم يختاروا الرحلة.
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={index}
              className={`rounded-3xl p-6 transition-all duration-300 hover:shadow-xl ${
                tier.premium 
                  ? 'bg-gift-dark text-white col-span-full md:col-span-2 lg:col-span-1' 
                  : tier.featured 
                    ? 'bg-gift-primary text-white ring-4 ring-gift-accent' 
                    : 'bg-white border border-gray-200'
              }`}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <p className={`text-3xl font-bold mb-2 ${tier.premium || tier.featured ? 'text-gift-accent' : 'text-gift-primary'}`}>
                  {tier.label}
                </p>
                <p className={`text-lg font-bold mb-2 ${tier.premium || tier.featured ? 'text-white' : 'text-gray-800'}`}>
                  {tier.description}
                </p>
                <p className={`text-sm mb-6 ${tier.premium || tier.featured ? 'text-white/70' : 'text-gray-500'}`}>
                  {tier.ideal}
                </p>
                <a 
                  href={priceCheckoutLinks[tier.value]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    tier.premium || tier.featured
                      ? 'bg-gift-accent text-gift-dark hover:bg-gift-accent-light'
                      : 'bg-gift-primary text-white hover:bg-gift-primary-light'
                  }`}
                >
                  اختر هذا الكارت
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 bg-gift-accent/10 rounded-2xl p-6 text-center"
          variants={fadeInUp}
        >
          <p className="text-gift-primary">
            💡 <span className="font-bold">ملاحظة مهمة:</span> الكارت صالح على كل منتجات Read to Lead. يعني الشخص اللي بيستلم الهدية هو اللي بيقرر يصرفها إزاي — مش أنت. ده بيخلي الهدية مش بس كريمة… لكن كمان ذكية.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Urgency Section
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
          className="text-3xl md:text-4xl font-bold text-gift-dark mb-8"
          variants={fadeInUp}
        >
          ⚡ ليه الوقت ده بالذات؟
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-8"
          variants={staggerContainer}
        >
          {[
            "بداية سنة جديدة — الناس بتبدأ بقرارات ونوايا للتغيير",
            "موسم الهدايا — الكل بيدوّر على حاجة مختلفة",
            "التوقيت المثالي — هدية بداية السنة بتفضل في الذاكرة"
          ].map((point, index) => (
            <motion.div 
              key={index}
              className="bg-white/30 backdrop-blur-sm rounded-xl px-6 py-3"
              variants={fadeInUp}
            >
              <p className="text-gift-dark font-medium">{point}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-2xl font-bold text-gift-dark"
          variants={fadeInUp}
        >
          🎁 أفضل وقت تهدي هدية ليها معنى وتأثير؟ <span className="underline decoration-4 decoration-gift-dark">دلوقتي.</span>
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// FAQ Section
const faqs = [
  {
    question: "طيب لو الشخص مش بيقرأ كتير؟",
    answer: "كارت Read to Lead مش بس كتب. فيه أدوات، ملخصات قصيرة، ومحتوى عملي لأي حد عايز يطوّر نفسه — حتى لو مش قارئ تقليدي. والأهم: هو اللي بيختار — يعني هيختار اللي يناسب أسلوبه."
  },
  {
    question: "لو عايز أهدي لأكتر من شخص؟",
    answer: "ممكن تشتري أكتر من كارت بسهولة. ولو شركة أو فريق كبير، تواصل معانا لعروض Bulk Orders مخصصة."
  },
  {
    question: "الكارت صالح لمدة قد إيه؟",
    answer: "الكارت ليه صلاحية طويلة — والشخص يقدر يستخدمه في أي وقت يناسبه. مفيش ضغط. مفيش استعجال."
  },
  {
    question: "إيه الفرق بين كارت Read to Lead وGift Card عادي؟",
    answer: "كارت عادي = فلوس. كارت Read to Lead = رسالة. أنت مش بتدي مبلغ مالي. أنت بتدي فرصة للتعلّم، التطوير، وبداية جديدة. ده اللي بيخلي الهدية مختلفة — ومؤثرة."
  },
  {
    question: "ممكن أهدي نفسي؟",
    answer: "أكيد! أحيانًا أفضل هدية هي اللي بتديها لنفسك. كارت Read to Lead = commitment لنفسك إنك تبدأ رحلة تطوير حقيقية."
  }
];

const FAQSection = () => (
  <section className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-primary mb-12 text-center"
          variants={fadeInUp}
        >
          ❓ أسئلة مهمة
        </motion.h2>
        
        <motion.div variants={fadeInUp}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-right text-lg font-bold text-gift-primary hover:text-gift-primary-light py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
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
  <section className="py-20 md:py-32 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gift-primary mb-12 text-center"
          variants={fadeInUp}
        >
          🧠 في النهاية…
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-white rounded-3xl p-8 border border-gray-200"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gray-400 mb-6">كارت Read to Lead مش:</h3>
            <ul className="space-y-4">
              {["هدية شكل", "اختيار سريع وخلاص", "حاجة هتتنسى بعد أسبوع"].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-gray-500">
                  <X className="w-6 h-6 text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gift-primary rounded-3xl p-8 text-white"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-gift-accent mb-6">كارت Read to Lead هو:</h3>
            <ul className="space-y-4">
              {["رسالة من القلب", "تأثير يفضل", "بداية جديدة لشخص يستاهل"].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <Check className="w-6 h-6 text-gift-accent" />
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
  <section className="py-20 md:py-32 bg-gradient-to-br from-gift-primary via-gift-primary-light to-gift-dark">
    <div className="container mx-auto px-4">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.p 
          className="text-xl text-white/80 mb-6"
          variants={fadeInUp}
        >
          جاهز تهدي هدية ليها قيمة حقيقية؟
        </motion.p>
        
        <motion.a 
          href="#pricing"
          className="inline-flex items-center gap-3 bg-gift-accent hover:bg-gift-accent-light text-gift-dark font-bold py-5 px-12 rounded-full text-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Gift className="w-7 h-7" />
          اشترِ كارت هدية Read to Lead الآن
        </motion.a>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mt-10 text-white/70"
          variants={fadeInUp}
        >
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> هدية رقمية فورية</span>
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> صالح على كل منتجات Read to Lead</span>
          <span className="flex items-center gap-2"><Check className="w-5 h-5 text-gift-accent" /> المُهدى له يختار رحلته بنفسه</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Sticky Mobile CTA
const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-gift-dark/95 backdrop-blur-md border-t border-gift-primary-light/20 p-4 z-50 md:hidden">
    <div className="flex items-center justify-between gap-4">
      <div className="text-white">
        <p className="text-sm opacity-80">🎁 كارت هدية Read to Lead</p>
        <p className="text-gift-accent font-bold">ابدأ من E£250</p>
      </div>
      <a 
        href="#pricing"
        className="bg-gift-accent hover:bg-gift-accent-light text-gift-dark font-bold py-3 px-6 rounded-xl transition-all duration-300 whitespace-nowrap"
      >
        اشترِ الآن
      </a>
    </div>
  </div>
);

// Main Component
const GiftCard = () => {
  return (
    <div className="font-ibm-plex-arabic" dir="rtl">
      <SEO 
        title="كارت هدية Read to Lead | هدية تِفضل… مش تِتنسى"
        description="كارت هدية Read to Lead — لأن الشخص اللي يستاهل، يستاهل هدية تبني… مش هدية تتنسى. اختر من E£250 لـ E£5,000"
        url="https://land.readtolead.store/gift-card"
      />
      
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <EmotionalQuoteSection />
      <AudienceSection />
      <HowItWorksSection />
      <PricingSection />
      <UrgencySection />
      <FAQSection />
      <SummarySection />
      <FinalCTASection />
      <StickyMobileCTA />
      
      {/* Add padding at bottom for sticky CTA on mobile */}
      <div className="h-24 md:hidden"></div>
    </div>
  );
};

export default GiftCard;
