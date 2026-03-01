
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import SEO from "@/components/SEO";
import QuantitySelector from "@/components/QuantitySelector";
import { ChevronDown, ChevronUp } from "lucide-react";

const shopifyBaseUrl = "https://si51ve-s6.myshopify.com/cart";
const productVariantId = "42288739254377";

/* ─── scroll-reveal hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, cls: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" };
}

/* ─── reusable section wrapper ─── */
const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const { ref, cls } = useReveal();
  return (
    <section id={id} ref={ref} className={`transition-all duration-700 ${cls} ${className}`}>
      {children}
    </section>
  );
};

/* ─── FAQ item ─── */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-[14px] p-5 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-[#2D3735] text-sm md:text-base">{q}</h3>
        {open ? <ChevronUp className="w-5 h-5 text-[#169380] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#169380] shrink-0" />}
      </div>
      {open && <p className="mt-3 text-sm text-[#2D3735]/80 leading-relaxed whitespace-pre-line">{a}</p>}
    </div>
  );
};

const StartupKitPro = () => {
  return (
    <div dir="rtl" className="font-tajawal bg-white text-[#2D3735] min-h-screen">
      <SEO
        title="Startup Builder Kit + StartupKit Pro | مجموعة بناء الشركات الناشئة + منصة رقمية"
        description="جميع الأدوات التي تحتاجها لتأسيس شركتك الناشئة من الفكرة إلى التنفيذ — كتاب، أدوات عملية، جورنال تفاعلي، بالإضافة إلى 6 أشهر مجانية من منصة StartupKit Pro الرقمية بـ 67 أداة متكاملة."
        image="/assets/startup-kit-banner.jpg"
        url="https://land.readtolead.store/startupkitpro"
      />

      {/* ══════════ 1. HEADER ══════════ */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-[#169380] transition">الرئيسية</Link>
            <a href="#features" className="hover:text-[#169380] transition">المزايا</a>
            <a href="#inside" className="hover:text-[#169380] transition">المحتويات</a>
            <a href="#saas" className="hover:text-[#169380] transition">المنصة الرقمية</a>
            <a href="#pricing" className="hover:text-[#169380] transition">الأسعار</a>
          </nav>
        </div>
      </header>

      {/* ══════════ 2. HERO ══════════ */}
      <Section className="bg-[#F2F5F4] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* text — right on desktop */}
            <div className="space-y-6 order-1">
              {/* badge */}
              <span className="inline-flex items-center gap-2 bg-white border border-[#169380]/20 rounded-full px-4 py-1.5 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#169380] animate-pulse" />
                جديد — كتاب + منصة رقمية في باقة واحدة
              </span>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Startup Builder Kit |
                <br />
                <span className="text-[#169380]">مجموعة بناء الشركات الناشئة</span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-[#2D3735]/80 max-w-xl">
                جميع أدوات التخطيط والتنفيذ التي تحتاجها لتأسيس شركتك الناشئة بالطريقة الصحيحة — من الفكرة وحتى التنفيذ. والآن تأتي مع{" "}
                <span className="font-bold text-[#169380]">6 أشهر مجانية</span>{" "}
                من منصة StartupKit Pro الرقمية بـ 67 أداة متكاملة.
              </p>

              {/* info box */}
              <div className="bg-white border border-[#D9E4E1] rounded-[18px] p-5 space-y-3 text-sm leading-relaxed">
                <p className="font-bold">📦 Startup Builder Kit باقة ذكية تجمع بين:</p>
                <ul className="space-y-1 pr-1">
                  <li>• أدوات عملية تساعدك على تطبيق خططك فوراً</li>
                  <li>• محتوى تعليمي موجّه لريادة الأعمال من خلاصة 20 كتاباً عالمياً</li>
                  <li>• جورنال تفاعلي لتوثيق رحلتك الريادية خطوة بخطوة</li>
                  <li>• 6 أشهر وصول مجاني لمنصة StartupKit Pro الرقمية (67 أداة)</li>
                </ul>
                <p className="text-[#2D3735]/70">تساعدك على بدء مشروعك بأسلوب منظّم ومدروس بدلاً من الدوران في حلقة "لا أعرف من أين أبدأ".</p>
              </div>

              {/* stat chips */}
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="bg-white border border-[#D9E4E1] rounded-full px-4 py-2">📚 20 كتاباً ملخّصاً</span>
                <span className="bg-white border border-[#D9E4E1] rounded-full px-4 py-2">⚡ 67 أداة رقمية</span>
                <span className="bg-white border border-[#D9E4E1] rounded-full px-4 py-2">🎁 6 أشهر SaaS مجاناً</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="#pricing" className="bg-[#F4C95D] text-[#2D3735] px-8 py-4 rounded-[14px] font-bold hover:scale-105 transition-all shadow-[0_4px_20px_rgba(244,201,93,0.3)]">
                  🚀 اطلب الباقة الكاملة
                </a>
                <a href="#inside" className="border-2 border-[#3A86FF] text-[#3A86FF] px-8 py-4 rounded-[14px] font-bold hover:bg-[#3A86FF]/10 transition-all">
                  تعرّف على المحتويات
                </a>
                <a href="https://startupkitpro.lovable.app/demo" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center border-2 border-[#169380] text-[#169380] px-8 py-4 rounded-[14px] font-bold hover:bg-[#169380] hover:text-white hover:scale-105 transition-all">
                  💻 جرّب المنصة الرقمية مجاناً
                </a>
              </div>
            </div>

            {/* visual — left on desktop */}
            <div className="order-2 flex flex-col items-center gap-0 relative">
              {/* card 1 */}
              <div className="bg-white border-2 border-[rgba(244,201,93,0.25)] rounded-[18px] p-6 w-full max-w-sm space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#F4C95D]/20 flex items-center justify-center text-xl">📘</span>
                  <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#F4C95D] font-bold">BOOK KIT</span>
                </div>
                <h3 className="font-bold text-lg">Startup Builder Kit</h3>
                <p className="text-sm text-[#2D3735]/70">كتاب + أدوات + جورنال — خلاصة 20 كتاباً عالمياً في ريادة الأعمال</p>
              </div>

              {/* connector */}
              <div className="w-12 h-12 rounded-full bg-[#169380] flex items-center justify-center text-white text-2xl font-bold -my-4 z-10 shadow-lg">+</div>

              {/* card 2 */}
              <div className="bg-white border-2 border-[rgba(22,147,128,0.25)] rounded-[18px] p-6 w-full max-w-sm space-y-3 relative overflow-hidden">
                {/* ribbon */}
                <div className="absolute top-3 left-3 bg-[#169380] text-white text-xs font-bold px-3 py-1 rounded-full">🎁 مجاناً مع المجموعة</div>
                <div className="flex items-center gap-3 mt-4">
                  <span className="w-10 h-10 rounded-full bg-[#169380]/20 flex items-center justify-center text-xl">💻</span>
                  <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#169380] font-bold">SAAS — 6 MONTHS FREE</span>
                </div>
                <h3 className="font-bold text-lg">StartupKit Pro</h3>
                <p className="text-sm text-[#2D3735]/70">67 أداة رقمية — من Business Model Canvas إلى Investor Pitch Deck</p>
                <span className="inline-block bg-[#169380]/10 text-[#169380] text-xs font-bold px-3 py-1 rounded-full">🎁 6 أشهر مجاناً — قيمته $49</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ 3. BANNER IMAGE ══════════ */}
      <Section className="py-12">
        <div className="container mx-auto px-4">
          <img
            src="/lovable-uploads/921eaf2a-dd81-467b-8243-83fe1feccc62.png"
            alt="Startup Builder Kit"
            className="w-full rounded-[18px] shadow-brand-soft aspect-[2/1] object-contain"
            loading="lazy"
          />
        </div>
      </Section>

      {/* ══════════ 4. PROBLEM ══════════ */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-10 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">الكتب وحدها لا تكفي. والبرمجيات وحدها لا تكفي.</h2>
            <p className="text-lg text-[#2D3735]/70">تحتاج إلى النظامين معاً لتنتقل من الفكرة إلى التنفيذ فعلياً.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "📖", title: "قرأت الكتاب... ثم ماذا؟", desc: "معلومات كثيرة دون أدوات تطبيق عملية. تنتهي من القراءة وتعود إلى نقطة الصفر." },
              { icon: "🔧", title: "أدوات متفرقة وغير مترابطة", desc: "تبحث عن نموذج هنا وجدول هناك. كل أداة منفصلة عن الأخرى دون تكامل." },
              { icon: "💸", title: "برمجيات مكلفة وغير مُعرّبة", desc: "الأدوات الاحترافية أسعارها مرتفعة ومصمّمة للأسواق الغربية، لا لمنطقتنا." },
            ].map((c) => (
              <div key={c.title} className="bg-[#FEF2F2] border border-[#FEE2E2] rounded-[18px] p-6 text-right space-y-3">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-sm text-[#2D3735]/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ 5. KIT FEATURES ══════════ */}
      <Section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">✨ ما الذي يميّز هذه المجموعة عن غيرها؟</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🔧", title: "Toolkit عملي", desc: "أكثر من 20 نموذجاً استراتيجياً: نموذج العمل، SWOT، خطة التسويق، تحليل السوق، والتمويل" },
              { icon: "📘", title: "كتاب شامل", desc: "\"فن ريادة الأعمال\" — يرشدك خطوة بخطوة من توليد الفكرة إلى إطلاق المشروع" },
              { icon: "📓", title: "Startup Journal", desc: "دفتر تفاعلي تكتب فيه خططك وتوثّق مراحل تقدّمك وتطوّر مشروعك بنفسك" },
            ].map((c) => (
              <div key={c.title} className="bg-[#28B9A8]/15 rounded-[18px] p-6 text-right space-y-3 hover:shadow-brand-soft transition-shadow">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-sm text-[#2D3735]/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ EXPLORE APP BANNER ══════════ */}
      <Section className="py-16 bg-gradient-to-l from-[#0F7468] to-[#169380] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">🖥️ استكشف المنصة الرقمية بنفسك</h2>
            <p className="text-white/80 leading-relaxed">شاهد الأدوات الـ 67 وجرّب النسخة التجريبية قبل الشراء.<br />المنصة متاحة بالعربية والإنجليزية — بالكامل.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://startupkitpro.lovable.app/demo" target="_blank" rel="noopener noreferrer" className="bg-[#F4C95D] text-[#2D3735] px-8 py-4 rounded-[14px] font-bold hover:scale-105 transition-all shadow-[0_4px_20px_rgba(244,201,93,0.3)] animate-[pulse_3s_ease-in-out_infinite]">
                🚀 جرّب النسخة التجريبية
              </a>
              <a href="https://startupkitpro.lovable.app" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-[14px] font-bold hover:bg-white hover:text-[#0F7468] hover:scale-105 transition-all">
                📖 تصفّح المنصة الكاملة
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ 6. WHAT'S INSIDE ══════════ */}
      <Section id="inside" className="py-16 md:py-24 bg-[#D9E4E1]">
        <div className="container mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">📦 ماذا تحتوي الباقة؟</h2>
            <p className="text-[#2D3735]/70">كتاب مطبوع + منصة رقمية = نظام متكامل يعمل معاً</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* physical */}
            <div className="bg-white border-2 border-[#F4C95D]/30 rounded-[18px] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📘</span>
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#F4C95D] font-bold">PART 1</span>
              </div>
              <h3 className="font-bold text-lg">الكتاب والأدوات المطبوعة</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "كتاب \"فن ريادة الأعمال\" — خلاصة 20 كتاباً عالمياً",
                  "Startup Journal تفاعلي لتوثيق رحلتك الريادية",
                  "نموذج Business Model Canvas مطبوع",
                  "نماذج SWOT، خطة تسويق، وتحليل السوق",
                  "بطاقات التفكير الاستراتيجي والتخطيط",
                  "أدوات التمويل وخطة العمل المالية",
                  "إرشادات مفصّلة لاستخدام كل أداة خطوة بخطوة",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-[#F4C95D] font-bold">✓</span>{t}</li>
                ))}
              </ul>
            </div>

            {/* SaaS */}
            <div className="bg-white border-2 border-[#169380]/30 rounded-[18px] p-6 space-y-4 relative overflow-hidden">
              <div className="absolute top-3 left-3 bg-[#169380] text-white text-xs font-bold px-3 py-1 rounded-full">🎁 مجاناً مع المجموعة</div>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl">💻</span>
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-wider text-[#169380] font-bold">PART 2 — FREE</span>
              </div>
              <h3 className="font-bold text-lg">StartupKit Pro — 6 أشهر</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "67 أداة رقمية متكاملة عبر 5 أقسام",
                  "Business Model Canvas تفاعلي بالعربية والإنجليزية",
                  "Financial Projections مع رسوم بيانية تلقائية",
                  "Investor Pipeline — نظام CRM بـ 6 مراحل",
                  "Pitch Deck Generator جاهز للمستثمرين",
                  "Readiness Score — نسبة جاهزية شركتك للاستثمار",
                  "Cross-Tool Data Bridge — نقل البيانات بين الأدوات تلقائياً",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-[#169380] font-bold">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ 7. HOW IT WORKS ══════════ */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">⚡ من الطلب إلى التطبيق في 4 خطوات</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { n: "01", icon: "📦", title: "اطلب الباقة", desc: "اطلب المجموعة من الموقع — يصلك التوصيل حتى باب المنزل" },
              { n: "02", icon: "📖", title: "اقرأ الكتاب", desc: "ابدأ بالقراءة وطبّق ما تعلّمته على الأدوات المطبوعة" },
              { n: "03", icon: "🔑", title: "فعّل المنصة الرقمية", desc: "استخدم كود التفعيل داخل الكتاب وسجّل في StartupKit Pro" },
              { n: "04", icon: "🚀", title: "ابنِ شركتك", desc: "طبّق كل أداة تعلّمتها رقمياً وابنِ خطتك المتكاملة" },
            ].map((s) => (
              <div key={s.n} className="bg-[#F2F5F4] rounded-[18px] p-6 text-center space-y-3 relative">
                <span className="font-['JetBrains_Mono'] text-5xl font-bold text-[#169380]/15 absolute top-3 left-4">{s.n}</span>
                <span className="text-3xl block pt-4">{s.icon}</span>
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-sm text-[#2D3735]/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ 8. SAAS DEEP DIVE ══════════ */}
      <Section id="saas" className="py-16 md:py-24 bg-[#0F7468] text-white">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#F4C95D] font-bold">StartupKit Pro — Deep Dive</span>
            <h2 className="text-2xl md:text-4xl font-bold">المنصة الرقمية التي تحوّل كتابك إلى خطة عمل حقيقية</h2>
            <p className="text-white/70">ليست مجرد نماذج جاهزة — بل منصة متكاملة تتصل فيها كل أداة بالأخرى تلقائياً.</p>
          </div>

          {/* browser frame */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1A1A2E] rounded-t-[18px] px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 bg-white/10 rounded-md px-3 py-1 text-xs text-white/50 font-['Space_Grotesk'] text-center" dir="ltr">startupkitpro.lovable.app</div>
            </div>
            <div className="bg-[#1A1A2E] rounded-b-[18px] p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-8">5 أقسام. 67 أداة. نظام واحد متكامل.</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { emoji: "🏗️", name: "Foundation", color: "#F59E0B", count: "11 أداة" },
                  { emoji: "📋", name: "Planning", color: "#3B82F6", count: "21 أداة" },
                  { emoji: "🚀", name: "Launch", color: "#22C55E", count: "14 أداة" },
                  { emoji: "📈", name: "Growth", color: "#F97316", count: "10 أداة" },
                  { emoji: "💰", name: "Financials", color: "#8B5CF6", count: "11 أداة" },
                ].map((s) => (
                  <div key={s.name} className="bg-white/5 border border-white/10 rounded-[14px] p-4 space-y-2">
                    <span className="text-2xl">{s.emoji}</span>
                    <p className="font-['Space_Grotesk'] font-bold text-sm" style={{ color: s.color }} dir="ltr">{s.name}</p>
                    <p className="text-white/60 text-xs">{s.count}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-right">
                {[
                  { icon: "🔗", title: "Cross-Tool Data Bridge", desc: "نموذج العمل يغذّي خطة الإطلاق، والبيانات المالية تبني عرض المستثمرين تلقائياً" },
                  { icon: "🌍", title: "عربي + إنجليزي بالكامل", desc: "كل أداة وكل واجهة وكل دليل استخدام — متاح بالعربية والإنجليزية" },
                  { icon: "📊", title: "Readiness Score", desc: "نسبة جاهزية شركتك للاستثمار — تُحدَّث تلقائياً مع كل خطوة تنجزها" },
                  { icon: "🎯", title: "Investor-Ready Decks", desc: "نماذج عروض تقديمية بصيغ STV, Flat6Labs, 500 Global MENA" },
                ].map((f) => (
                  <div key={f.title} className="bg-white/5 border border-white/10 rounded-[14px] p-5 space-y-2">
                    <span className="text-xl">{f.icon}</span>
                    <h4 className="font-bold">{f.title}</h4>
                    <p className="text-white/60 text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA row inside browser */}
              <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://startupkitpro.lovable.app/demo" target="_blank" rel="noopener noreferrer" className="bg-[#F4C95D] text-[#2D3735] px-8 py-4 rounded-[14px] font-bold hover:scale-105 transition-all shadow-[0_4px_20px_rgba(244,201,93,0.3)]">
                    🚀 جرّب النسخة التجريبية الآن
                  </a>
                  <a href="https://startupkitpro.lovable.app" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-[14px] font-bold hover:bg-white hover:text-[#2D3735] hover:scale-105 transition-all">
                    🔗 افتح المنصة الكاملة
                  </a>
                </div>
                <p className="text-white/40 text-xs text-center">المنصة متاحة للتصفّح — لا يلزم تسجيل حساب للنسخة التجريبية</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ 9. TARGET AUDIENCE ══════════ */}
      <Section className="py-16 md:py-24 bg-[#F2F5F4]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#28B9A8]/10 rounded-[18px] p-6 space-y-4">
              <h3 className="font-bold text-lg">🎯 لمن هذه المجموعة؟</h3>
              <ul className="space-y-2 text-sm">
                {["كل من لديه فكرة مشروع ويرغب في الانطلاق","الطلاب والمستقلون والموظفون الذين يطمحون لعمل خاص","رواد الأعمال المبتدئون الباحثون عن خطة منظّمة","برامج Accelerator و Incubator","المؤسسون الذين يجهّزون Pitch Deck للمستثمرين"].map(t=>(
                  <li key={t} className="flex items-start gap-2"><span className="text-[#169380]">✅</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#28B9A8]/10 rounded-[18px] p-6 space-y-4">
              <h3 className="font-bold text-lg">🧠 كيف ستساعدك في الواقع؟</h3>
              <ul className="space-y-2 text-sm">
                {["بدلاً من البدء من الصفر — كل شيء جاهز لك","توفّر عليك وقت التجريب والأخطاء المكلفة","تساعدك على التفكير كرائد أعمال محترف","توثّق خطواتك وتمنحك رؤية واضحة لمشروعك","تبني عرضاً تقديمياً جاهزاً للمستثمرين"].map(t=>(
                  <li key={t} className="flex items-start gap-2"><span className="text-[#169380]">✅</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ 10. VALUE STACK ══════════ */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-xl space-y-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">💎 القيمة الحقيقية لو اشتريت كل عنصر على حدة</h2>
          <div className="bg-[#F2F5F4] rounded-[18px] overflow-hidden text-sm">
            {[
              { item: "📚 Startup Builder Kit (كتاب + أدوات + جورنال)", price: "999 جنيه" },
              { item: "⚡ StartupKit Pro — اشتراك 6 أشهر", price: "$49 (~2,400 جنيه)" },
              { item: "🎁 نماذج وأدوات إضافية", price: "500 جنيه" },
            ].map((r) => (
              <div key={r.item} className="flex justify-between items-center px-5 py-3 border-b border-[#D9E4E1]">
                <span>{r.item}</span>
                <span className="font-bold whitespace-nowrap mr-4">{r.price}</span>
              </div>
            ))}
            <div className="flex justify-between items-center px-5 py-4 font-bold text-base bg-[#169380]/10">
              <span>القيمة الإجمالية</span>
              <span className="text-[#169380]">3,899+ جنيه</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-[#2D3735]/70">أنت تدفع فقط:</p>
            <p className="text-4xl font-extrabold text-[#169380]">999 جنيه</p>
            <p className="text-sm text-[#2D3735]/60">أي توفير يتجاوز 74% من القيمة الحقيقية</p>
            <a href="https://startupkitpro.lovable.app/demo" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#169380] font-medium text-sm underline hover:no-underline">
              👀 شاهد ما الذي ستحصل عليه رقمياً — جرّب المنصة التجريبية
            </a>
          </div>
        </div>
      </Section>

      {/* ══════════ 11. BOOKS LIST ══════════ */}
      <Section className="py-16 md:py-24 bg-[#F2F5F4]">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">📚 الكتب العشرون المتضمَّنة في المجموعة</h2>

          {/* card 1 */}
          <div className="bg-white rounded-[18px] p-6 space-y-4">
            <h3 className="font-bold text-[#169380]">📘 كتب التخطيط والنماذج والاستراتيجية</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                "١. من الصفر إلى الواحد – بيتر ثيل وبليك ماسترز",
                "٢. البناء للتشييد والاستدامة – جيمس س. كولينز",
                "٣. معدلات الذكاء للنمو – تيفاني بوفا",
                "٤. أسوأ نموذج عمل في العالم – داني شومان",
                "٥. اكتب خطة عملك – طاقم عمل Entrepreneur Media",
                "٦. الكتاب المقدس لريادة الأعمال – أندرو رومانس",
                "٧. تأثير اليعسوب – جينيفر آكر وآندي سميث",
                "٨. شركات الفرد الواحد – بول جارفيس",
                "٩. النمو السريع بالشكل الصحيح – فال رايت",
                "١٠. مرحلة تحضير الأعمال – راشيل هوفستيتر",
              ].map((b) => <p key={b}>{b}</p>)}
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white rounded-[18px] p-6 space-y-4">
            <h3 className="font-bold text-[#169380]">📙 كتب النمو والقيادة وريادة الأعمال</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                "١١. الجنون مجاملة – ليندا روتنبرغ",
                "١٢. فكّر كرائد أعمال تصرّف كمدير تنفيذي – بيفرلي إي جونز",
                "١٣. لا تقسم الفرق أبداً – كريستوفر فوس وتال راس",
                "١٤. محركات نمو الشركات الناشئة – شون إليس ومورغان براون",
                "١٥. التوسع – فيرن هارنيش",
                "١٦. قانون مور – أرنولد ثاكري وديفيد بروك وراشيل جونز",
                "١٧. ضائع ومؤسس – راند فيشكن",
                "١٨. ما وراء ريادة الأعمال 2.0 – جيم كولينز وبيل ليزير",
                "١٩. النمو الخاطف والسريع – ريد هوفمان وكريس ييه",
                "٢٠. من جيد إلى عظيم – جيمس كولينز",
              ].map((b) => <p key={b}>{b}</p>)}
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ 12. PRICING ══════════ */}
      <Section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-[#169380] to-[#28B9A8]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[18px] p-8 md:p-12 max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">🚀 هل أنت مستعد لبناء نظامك؟</h2>
              <p className="text-[#2D3735]/70">كتاب يعلّمك + منصة رقمية تساعدك على التطبيق = نتائج حقيقية</p>
            </div>

            <div className="bg-[#F2F5F4] rounded-[14px] p-5 text-sm space-y-2 text-right">
              <p>📚 Startup Builder Kit — كتاب + أدوات + جورنال</p>
              <p>⚡ StartupKit Pro — 6 أشهر مجاناً (67 أداة رقمية)</p>
            </div>

            <div className="bg-[#0F7468] rounded-[14px] p-6 text-white space-y-3">
              <p className="text-[#F4C95D] text-4xl md:text-5xl font-extrabold">999 جنيه</p>
              <p className="text-white/40 line-through">بدلاً من 3,899+ جنيه</p>
              <span className="inline-block bg-[#EE6C4D] text-white text-xs font-bold px-4 py-1.5 rounded-full">وفّر أكثر من 74%</span>
            </div>

            <p className="text-sm text-[#2D3735]/60">🚚 الشحن خلال ٢–٤ أيام عمل | 💳 الدفع عند الاستلام أو عبر الإنترنت</p>

            <QuantitySelector
              baseCheckoutUrl={shopifyBaseUrl}
              productVariantId={productVariantId}
              buttonText="🛒 اطلب الباقة الكاملة الآن"
              price="999"
            />

            <p className="text-xs text-[#2D3735]/50">📦 الكتاب يصلك إلى المنزل + كود تفعيل المنصة الرقمية في الداخل</p>
          </div>
        </div>
      </Section>

      {/* ══════════ 13. TESTIMONIALS ══════════ */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#169380]">❤️ ماذا يقول عملاؤنا؟</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: "كنت حائراً من أين أبدأ… المجموعة نظّمت لي كل شيء، وشعرت فعلاً أنني بدأت بالطريقة الصحيحة.", name: "أحمد" },
              { quote: "النماذج والكتاب معاً ساعداني على فهم السوق وكتابة خطة عمل لأول مرة في حياتي!", name: "رنا" },
            ].map((t) => (
              <div key={t.name} className="bg-[#F2F5F4] rounded-[18px] p-6 space-y-4">
                <p className="text-[#2D3735]/80 italic leading-relaxed">"{t.quote}"</p>
                <p className="font-bold text-[#169380]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ 14. FAQ ══════════ */}
      <Section className="py-16 md:py-24 bg-[#D9E4E1]">
        <div className="container mx-auto px-4 max-w-5xl space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">❓ الأسئلة الشائعة</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "ما هو Startup Kit؟", a: "Startup Kit هو صندوق أدوات متكامل يساعد أي شخص لديه فكرة مشروع على البدء بالطريقة الصحيحة. يحتوي على أدوات عملية وبطاقات ودفتر ملاحظات ونماذج تساعدك على تحويل فكرتك إلى خطة واضحة وخطوات تنفيذية." },
              { q: "مَن يمكنه الاستفادة من Startup Kit؟", a: "أي شخص لديه فكرة مشروع أو في بداية رحلته الريادية — سواء كان طالباً أو موظفاً يرغب في مشروع جانبي أو مؤسساً يحتاج إلى تجهيز خطته." },
              { q: "هل هو منتج رقمي أم مادّي؟", a: "المجموعة منتج مادّي ملموس يصلك حتى باب منزلك. بالإضافة إلى ذلك، تحصل على 6 أشهر وصول مجاني لمنصة StartupKit Pro الرقمية عبر كود التفعيل داخل الكتاب." },
              { q: "ما الذي تحتويه المجموعة؟", a: "✅ بطاقات التفكير الاستراتيجي من جميع الزوايا\n✅ نموذج Business Model Canvas\n✅ جورنال منظّم لكتابة وتخطيط كل خطوة\n✅ أدوات بناء خطة التسويق والمنتج والتمويل\n✅ كود تفعيل StartupKit Pro (67 أداة رقمية)" },
              { q: "هل يوجد شرح لطريقة استخدام الأدوات؟", a: "نعم بالتأكيد. كل أداة مرفقة بإرشادات مفصّلة توضّح كيفية استخدامها خطوة بخطوة." },
              { q: "هل يجب أن أكون دارساً للأعمال؟", a: "لا على الإطلاق. الأدوات مصمّمة بلغة بسيطة وسهلة لتساعدك على التفكير والعمل على مشروعك حتى لو لم تكن لديك خلفية في إدارة الأعمال." },
              { q: "ما النتائج التي سأحقّقها؟", a: "• فهم واضح لفكرتك ونموذج عملك\n• خطة واقعية قابلة للتنفيذ\n• تجنّب الأخطاء الشائعة التي يقع فيها كثيرون\n• انطلاقة منظّمة وواثقة لمشروعك\n• Pitch Deck جاهز للمستثمرين (عبر المنصة الرقمية)" },
              { q: "ما مدة التوصيل؟", a: "التوصيل يتم خلال ٢–٤ أيام عمل داخل مصر. الدفع عند الاستلام أو عبر الإنترنت." },
              { q: "كيف أطلب المجموعة؟", a: "يمكنك الطلب مباشرة من خلال الموقع عبر زر \"اطلب الباقة الكاملة\" أو التواصل معنا عبر وسائل التواصل الاجتماعي." },
              
              { q: "كيف أُفعّل المنصة الرقمية؟", a: "بعد استلام المجموعة، سيتم التواصل معك وتفعيل اشتراكك على المنصة الرقمية — ستحصل على 6 أشهر وصول كامل فوراً." },
              
              { q: "هل المنصة الرقمية متاحة بالعربية؟", a: "نعم! جميع الأدوات الـ 67 متاحة بالعربية والإنجليزية — مصمّمة خصيصاً لرواد الأعمال في المنطقة العربية." },
              { q: "هل يمكن شراء المنصة الرقمية بشكل منفصل؟", a: "بالتأكيد، يمكنك الاشتراك مباشرة من startupkitpro.lovable.app بسعر $49/سنة. لكن مع الباقة تحصل على 6 أشهر مجاناً بالإضافة إلى الكتاب والأدوات المطبوعة." },
            ].map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ 15. FOOTER ══════════ */}
      <footer className="bg-[#2D3735] text-white py-10 mb-20 text-center">
        <p className="text-sm text-white/60">© جميع الحقوق محفوظة Read to Lead</p>
      </footer>

      {/* ══════════ 16. STICKY BAR ══════════ */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D9E4E1] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 py-3 px-4">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block space-y-0.5">
            <p className="font-bold text-sm">Startup Builder Kit + StartupKit Pro</p>
            <p className="text-xs text-[#2D3735]/60">كتاب + 6 أشهر منصة رقمية مجاناً</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-lg font-extrabold text-[#169380]">999 جنيه</span>
              <span className="text-xs text-[#2D3735]/40 line-through mr-2">3,899+ جنيه</span>
            </div>
            <a href="https://startupkitpro.lovable.app/demo" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block text-[#169380] font-medium text-sm hover:underline whitespace-nowrap">
              جرّب المنصة ←
            </a>
            <a href="#pricing" className="bg-[#F4C95D] text-[#2D3735] px-6 py-3 rounded-[14px] font-bold hover:scale-105 transition-all shadow-[0_4px_20px_rgba(244,201,93,0.3)] whitespace-nowrap text-sm">
              📦 اطلب الآن
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupKitPro;
