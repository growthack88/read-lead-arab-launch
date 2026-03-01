
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import SEO from "@/components/SEO";
import QuantitySelector from "@/components/QuantitySelector";
import { ChevronDown, ChevronUp } from "lucide-react";

const shopifyBaseUrl = "https://si51ve-s6.myshopify.com/cart";
const productVariantId = "42289431150697";

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
const FAQItem = ({ q, a }: { q: string; a: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#162040] border border-white/5 rounded-[14px] p-5 cursor-pointer hover:border-white/10 transition-colors" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-bold text-white text-sm md:text-base">{q}</h3>
        {open ? <ChevronUp className="w-5 h-5 text-[#0D9488] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#0D9488] shrink-0" />}
      </div>
      {open && <div className="mt-3 text-sm text-white/70 leading-relaxed">{a}</div>}
    </div>
  );
};

const getCheckoutUrl = (qty: number) =>
  `${shopifyBaseUrl}/${productVariantId}:${qty}?channel=buy_button`;

/* ─── Tools data ─── */
const toolSections = [
  {
    title: "Foundation",
    color: "#F59E0B",
    tools: [
      "👤 Buyer Persona — تحديد العميل المثالي",
      "🏢 ICP Builder — بناء ملف الشركة المثالية",
      "🔍 Competitor Analysis — تحليل المنافسين",
      "💎 Value Proposition — صياغة القيمة",
      "🎯 Brand Positioning — التموضع في السوق",
      "💬 Messaging Framework — إطار الرسائل",
      "🗺️ Customer Journey — رحلة العميل",
      "📊 Market Sizing — حجم السوق TAM/SAM/SOM",
      "🎙️ Voice & Tone — هوية الصوت والنبرة",
    ],
  },
  {
    title: "Strategy",
    color: "#3B82F6",
    tools: [
      "📋 SWOT Analysis — تحليل نقاط القوة والضعف",
      "📐 SOSTAC Planner — إطار التخطيط التسويقي",
      "📈 AIDA Funnel — نموذج الجذب والتحويل",
      "🔄 Marketing Funnel — تصميم القمع التسويقي",
      "📡 Channel Strategy — استراتيجية القنوات",
      "🎯 OKRs — الأهداف والنتائج الرئيسية",
      "🧪 Experiment Lab — معمل التجارب",
      "💰 Unit Economics — اقتصاديات الوحدة",
      "📊 ROI Calculator — حاسبة العائد",
    ],
  },
  {
    title: "Campaigns",
    color: "#22C55E",
    tools: [
      "🚀 Campaign Builder — بناء الحملات",
      "📅 Content Calendar — تقويم المحتوى",
      "✍️ Ad Copy Workshop — ورشة كتابة الإعلانات",
      "📧 Email Sequences — سلاسل البريد الإلكتروني",
      "🖥️ Landing Page Planner — تخطيط صفحات الهبوط",
      "📱 Social Planner — تخطيط السوشيال ميديا",
      "💼 Sales Pipeline — خط أنابيب المبيعات",
      "📨 Outreach Sequences — سلاسل التواصل",
      "🎤 Sales Scripts — سكربتات المبيعات",
    ],
  },
  {
    title: "Analytics",
    color: "#8B5CF6",
    tools: [
      "📊 KPI Dashboard — لوحة المؤشرات الرئيسية",
      "📈 ROI Calculator — حاسبة العائد على الاستثمار",
      "💰 Unit Economics — تحليل LTV:CAC",
      "🔄 Funnel Analytics — تحليل القمع التسويقي",
      "📋 Weekly Review — المراجعة الأسبوعية",
      "✅ Marketing Audit — تدقيق تسويقي شامل",
      "📄 Report Generator — مولّد التقارير",
    ],
  },
];

const marketingBooks = [
  "البقرة البنفسجية — سيث غودين",
  "هذا هو التسويق — سيث غودين",
  "إطلاق العنان لفيروس الأفكار — سيث غودين",
  "كل المسوقين كاذبون — سيث غودين",
  "شخصيات المشترين — أديل ريفيلا",
  "قواعد المحتوى — آن هاندلي، سي سي شابمان",
  "قم بتنسيق ذلك — ستيفن روزنباوم",
  "تناول السمكة الكبيرة — آدم مورغان",
  "اللعنة على تسويق المحتوى — راندي فريش",
  "الفشل بسرعة — ريان بابينو، جون كرومبولتز",
  "الحصول على كل ما لديك — جاي إبراهام",
  "تسويق اختراقات النمو — ريان هوليداي",
  "مرحبًا، اسمي رائع — أليكساندرا واتكينز",
  "مرحبا، اضغط على هذا — لوك سوليفان، سام بينيت",
  "الجاذب الحقيقي — غاري فاينرتشوك",
  "كوتلر في التسويق — فيليب كوتلر",
  "التسويق فوق الضوضاء — ليندا بوبكي",
  "كتابة الإعلانات المقنعة — أندي ماسلين",
  "لا تفقد أي عميل — جوي كولمان",
  "كيف تنمو العلامات التجارية — بايرون شارب",
];

const salesBooks = [
  "عادة نمو الإيرادات — أليكس غولدفاين",
  "الكتاب المقدس للمبيعات — جيفري غيتومر",
  "علم البيع — ديفيد هوفيلد",
  "البيع — فريدريك إكلوند",
  "التحليلات التنبؤية — إيريك سيغل",
  "معادل المبيعات — جيب بلونت",
  "إدارة المبيعات المبسطة — مايك واينبرغ",
  "البيع للشركات الكبرى — جيل كونراث",
  "البيع غير المرئي — هاري بيكويث",
  "البيع لغرض نبيل — ليزا ماكليود",
  "البيانات الصغيرة — مارتن ليندستروم",
  "المكالمات الذكية — أرت سوبزاك",
  "محفزات الحديث — جاي باير، دانيال ليمين",
  "البيع الاستراتيجي الجديد — روبرت ميلر",
  "سيكولوجية البيع — برايان تريسي",
  "مبدأ كعكة الحظ — برناديت جيوا",
  "فقط استمع — مارك جولستون",
  "هل جذبت انتباهك — سام هورن",
  "فن التأثير على أي شخص — نيال كاسيدي",
  "بيع الدماغ — ديفيد لويس",
];

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "ما هي Sales & Marketing Kit؟", a: "مجموعة أدوات متكاملة لأي شخص يعمل أو يرغب في دخول مجال التسويق والمبيعات. تحتوي على نماذج جاهزة، أدوات تخطيط، كتابين كاملين، وملخصات ٤٠ كتابًا." },
  { q: "ما هو DuckDash MarketingOS؟", a: (<>منصة رقمية تحتوي على ٣٥ أداة تسويق ومبيعات تفاعلية مقسّمة إلى ٤ أقسام: Foundation، Strategy، Campaigns، Analytics. يمكنك استكشافها على{" "}<a href="https://tryduckdash.com" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] underline hover:no-underline">tryduckdash.com</a>.</>) },
  { q: "كيف أحصل على اشتراك DuckDash المجاني؟", a: "بعد إتمام طلبك، ستتلقى كود تفعيل الاشتراك المجاني لمدة ٦ أشهر في DuckDash عبر البريد الإلكتروني." },
  { q: "هل المجموعة مناسبة للمبتدئين؟", a: "تمامًا! جميع الأدوات والكتب مشروحة بلغة بسيطة ومباشرة، سواء كنت مبتدئًا أو محترفًا." },
  { q: "هل المجموعة منتج فعلي؟", a: "نعم، المجموعة منتج فعلي (ملموس) يصلك إلى المنزل، بالإضافة إلى الاشتراك الرقمي في DuckDash." },
  { q: "ما الذي يميّز هذا العرض؟", a: "تحصل على أدوات فعلية + كتابين + ملخصات ٤٠ كتابًا + ٣٥ أداة رقمية تفاعلية — كل ذلك بسعر ٩٩٩ جنيه فقط." },
  { q: "هل يمكنني استخدام DuckDash على الهاتف؟", a: "نعم، DuckDash يعمل على جميع الأجهزة — الحاسوب، الهاتف، والجهاز اللوحي — مع إمكانية تصدير ملفات PDF وPPTX." },
  { q: "ماذا يحدث بعد انتهاء ٦ أشهر المجانية؟", a: "يمكنك الاستمرار باشتراك سنوي بسعر $49 فقط في السنة، أو اختيار الوصول مدى الحياة بسعر $99 مرة واحدة." },
];

const SalesMarketingKitBundle = () => {
  return (
    <div dir="rtl" className="font-tajawal bg-[#0A1628] text-white min-h-screen">
      <SEO
        title="مجموعة التسويق والمبيعات + DuckDash MarketingOS | عرض حصري"
        description="احصل على مجموعة التسويق والمبيعات الاحترافية مع اشتراك مجاني لمدة ٦ أشهر في DuckDash MarketingOS — ٣٥ أداة تسويقية رقمية متكاملة."
        url="https://land.readtolead.store/sales-marketing-bundle"
      />

      {/* ══════════ HEADER ══════════ */}
      <header className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur border-b border-white/5">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <a
            href="#pricing"
            className="bg-[#0D9488] text-white px-5 py-2 rounded-[14px] font-bold text-sm hover:scale-105 transition-all"
          >
            اطلب الآن
          </a>
        </div>
      </header>

      {/* ══════════ 1. HERO ══════════ */}
      <Section className="py-16 md:py-24 bg-gradient-to-b from-[#0A1628] to-[#111D35]">
        <div className="container mx-auto px-4 text-center space-y-8 max-w-4xl">
          {/* badge */}
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-sm text-white/80">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            عرض حصري — المجموعة الفعلية + نظام تسويق رقمي متكامل
          </span>

          <p className="font-['Space_Grotesk'] text-sm md:text-base uppercase tracking-widest text-white/50 font-medium">
            Sales & Marketing Kit + DuckDash MarketingOS
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            مجموعة التسويق والمبيعات
            <br />
            <span className="bg-gradient-to-l from-[#0D9488] via-[#3B82F6] to-[#F59E0B] bg-clip-text text-transparent">
              + نظام تسويق رقمي مجاني ٦ أشهر
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            مجموعة فعلية تصلك إلى المنزل تحتوي على أدوات تسويق ومبيعات احترافية، كتابين كاملين، وملخصات ٤٠ كتابًا عالميًا — بالإضافة إلى اشتراك مجاني لمدة ٦ أشهر في منصة DuckDash MarketingOS بـ ٣٥ أداة تسويقية ومبيعاتية تفاعلية.
          </p>

          {/* gift highlight */}
          <div className="inline-flex items-center gap-3 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-[14px] px-6 py-3">
            <span className="text-2xl">🎁</span>
            <span className="font-bold text-[#FBBF24]">اشتراك DuckDash لمدة ٦ أشهر مجانًا مع كل طلب</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getCheckoutUrl(1)}
              className="bg-[#0D9488] text-white px-8 py-4 rounded-[14px] font-bold hover:scale-105 transition-all shadow-[0_4px_20px_rgba(13,148,136,0.3)] text-lg"
            >
              🛒 اطلب المجموعة الكاملة — ٩٩٩ جنيه
            </a>
            <a
              href="https://tryduckdash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-[14px] font-bold hover:bg-white/10 transition-all"
            >
              🖥️ استكشف DuckDash أولًا ←
            </a>
          </div>

          {/* stats bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-white/60 pt-4">
            <span>📦 مجموعة فعلية تصلك للمنزل</span>
            <span>📘 كتابان كاملان</span>
            <span>📊 ملخصات ٤٠ كتابًا</span>
            <span>💻 ٣٥ أداة رقمية</span>
          </div>
        </div>
      </Section>

      {/* ══════════ 2. KIT CONTENTS ══════════ */}
      <Section className="py-16 md:py-24" id="contents">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold">ما الذي تحتويه هذه المجموعة؟</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🎯", title: "Sales & Revenue Toolkit", desc: "أدوات تتبع الإيرادات، استراتيجيات الإغلاق، تحليل التكاليف والعائد، ونماذج جاهزة لإدارة خط المبيعات بالكامل." },
              { icon: "📊", title: "Marketing Strategy Toolkit", desc: "أدوات 7Ps، بروفايل العميل المثالي، تخطيط المحتوى، رحلة العميل، وتحليل المنافسين بشكل عملي ومباشر." },
              { icon: "📘", title: "كتاب التسويق الحديث", desc: "استراتيجيات تسويق رقمية وتقليدية بلغة سهلة وعملية، مع أمثلة واقعية وتطبيقات فورية." },
              { icon: "📕", title: "كتاب فن البيع والشراء", desc: "تقنيات التفاوض والإغلاق وبناء علاقات مبيعات ناجحة — من الألف إلى الياء." },
            ].map((c) => (
              <div key={c.title} className="bg-[#111D35] border border-white/5 rounded-[18px] p-6 space-y-3 hover:border-white/10 hover:-translate-y-1 transition-all">
                <span className="text-3xl">{c.icon}</span>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ 3. DUCKDASH SHOWCASE ══════════ */}
      <Section className="py-16 md:py-24 bg-[#111D35]" id="duckdash">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold">DuckDash MarketingOS — نظام التسويق المتكامل</h2>
            <p className="text-white/60">٣٥ أداة تسويقية ومبيعاتية تفاعلية في مكان واحد — اشتراك مجاني ٦ أشهر مع كل طلب</p>
          </div>

          {/* Main showcase card */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-[18px] overflow-hidden border border-white/5 bg-[#162040]">
              {/* gradient top border */}
              <div className="h-1.5 bg-gradient-to-l from-[#F59E0B] via-[#0D9488] to-[#3B82F6]" />

              {/* header */}
              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🦆</span>
                  <div>
                    <h3 className="font-bold text-lg">DuckDash MarketingOS</h3>
                    <p className="text-sm text-white/50">
                      <a href="https://tryduckdash.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">tryduckdash.com</a> — ٣٥ أداة، مساحة عمل واحدة
                    </p>
                  </div>
                </div>
                <span className="bg-[#F59E0B] text-[#2D3735] text-sm font-bold px-4 py-1.5 rounded-full">٦ أشهر مجانًا</span>
              </div>

              {/* tools grid */}
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {toolSections.map((section) => (
                  <div key={section.title} className="bg-[#0A1628]/50 rounded-[14px] overflow-hidden border border-white/5">
                    <div className="px-4 py-2.5 font-bold text-sm" style={{ backgroundColor: `${section.color}15`, color: section.color }}>
                      {section.title} ({section.tools.length} tools)
                    </div>
                    <div className="p-4 space-y-2">
                      {section.tools.map((tool) => (
                        <p key={tool} className="text-xs text-white/70 leading-relaxed">{tool}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="p-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://tryduckdash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3B82F6] text-white px-6 py-3 rounded-[14px] font-bold hover:scale-105 transition-all"
                >
                  🦆 استكشف DuckDash الآن — tryduckdash.com
                </a>
                <a
                  href="https://tryduckdash.com/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/20 text-white px-6 py-3 rounded-[14px] font-bold hover:bg-white/10 transition-all"
                >
                  🎯 جرّب النسخة التجريبية مجانًا
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ 4. BENEFITS ══════════ */}
      <Section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center">كيف ستساعدك هذه المجموعة؟</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🧠", title: "أدوات عملية وذكية", desc: "نماذج جاهزة للتطبيق الفوري تساعدك على العمل بذكاء وليس بجهد أكبر" },
              { icon: "📐", title: "تخطيط دقيق للحملات", desc: "خطط حملاتك التسويقية والمبيعاتية من الصفر باستخدام أطر عمل مجربة" },
              { icon: "🎯", title: "فهم أعمق للجمهور", desc: "أدوات لبناء شخصية المشتري وفهم رحلة العميل وزيادة ولائه" },
              { icon: "📈", title: "نتائج قابلة للقياس", desc: "لوحات تحليلية وحاسبات عائد الاستثمار لقياس كل خطوة" },
              { icon: "📚", title: "محتوى شامل ومتكامل", desc: "كتابان كاملان مع ملخصات ٤٠ كتابًا من أشهر كتب التسويق والمبيعات عالميًا" },
              { icon: "💻", title: "منصة رقمية تفاعلية", desc: "DuckDash يمنحك ٣٥ أداة رقمية تعمل على أي جهاز مع إمكانية تصدير PDF وPPTX" },
            ].map((b) => (
              <div key={b.title} className="bg-[#111D35] border border-white/5 rounded-[18px] p-6 space-y-3 hover:border-white/10 hover:-translate-y-1 transition-all">
                <span className="text-3xl">{b.icon}</span>
                <h3 className="font-bold">{b.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ 5. AUDIENCE ══════════ */}
      <Section className="py-16 md:py-24 bg-[#111D35]">
        <div className="container mx-auto px-4 space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center">لمن صُمّمت هذه المجموعة؟</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "📢", title: "المسوّقون المحترفون والمستقلون" },
              { icon: "💼", title: "فرق المبيعات والشركات الناشئة" },
              { icon: "🚀", title: "روّاد الأعمال وأصحاب المشاريع" },
              { icon: "🎓", title: "الراغبون في دخول مجال التسويق والمبيعات" },
            ].map((a) => (
              <div key={a.title} className="bg-[#162040] border border-white/5 rounded-[18px] p-6 text-center space-y-3 hover:border-[#0D9488]/30 transition-colors">
                <span className="text-4xl block">{a.icon}</span>
                <h3 className="font-bold text-sm leading-relaxed">{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ 6. BOOKS LIST ══════════ */}
      <Section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center">📚 ملخصات ٤٠ كتابًا من أشهر كتب التسويق والمبيعات</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Marketing books */}
            <div className="bg-[#111D35] border border-white/5 rounded-[18px] p-6 space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">📘 كتب التسويق</h3>
              <ol className="space-y-2 text-sm text-white/70 list-decimal list-inside pr-2">
                {marketingBooks.map((b, i) => (
                  <li key={i} className="leading-relaxed">{b}</li>
                ))}
              </ol>
            </div>
            {/* Sales books */}
            <div className="bg-[#111D35] border border-white/5 rounded-[18px] p-6 space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">📕 كتب المبيعات</h3>
              <ol className="space-y-2 text-sm text-white/70 list-decimal list-inside pr-2">
                {salesBooks.map((b, i) => (
                  <li key={i} className="leading-relaxed">{b}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════ 7. PRICING ══════════ */}
      <Section className="py-16 md:py-24 bg-[#111D35]" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">قيمة استثنائية بسعر واحد</h2>
          <div className="max-w-lg mx-auto bg-[#162040] border border-white/10 rounded-[18px] p-8 space-y-6">
            {/* Value stack */}
            <div className="space-y-3">
              {[
                { icon: "📦", label: "Sales & Marketing Kit (أدوات + نماذج)" },
                { icon: "📘", label: "كتاب التسويق الحديث" },
                { icon: "📕", label: "كتاب فن البيع والشراء" },
                { icon: "📚", label: "ملخصات ٤٠ كتابًا" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-white/80">{item.label}</span>
                </div>
              ))}
              {/* DuckDash highlighted */}
              <div className="flex items-center gap-3 text-sm bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-[12px] px-4 py-3">
                <span className="text-lg">🎁</span>
                <span className="text-[#FBBF24] font-bold">DuckDash MarketingOS — ٦ أشهر مجانًا</span>
                <span className="bg-[#F59E0B] text-[#2D3735] text-xs font-bold px-2 py-0.5 rounded-full mr-auto">هدية!</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-center space-y-2 pt-4 border-t border-white/5">
              <p className="text-white/40 line-through text-lg">٢٬٠٠٠ جنيه</p>
              <p className="text-4xl md:text-5xl font-extrabold text-[#0D9488]">٩٩٩ جنيه</p>
            </div>

            {/* CTA */}
            <a
              href={getCheckoutUrl(1)}
              className="block w-full text-center bg-[#0D9488] text-white py-4 rounded-[14px] font-bold text-lg hover:scale-105 transition-all shadow-[0_4px_20px_rgba(13,148,136,0.3)]"
            >
              🛒 اطلب المجموعة الكاملة الآن — ٩٩٩ جنيه
            </a>

            <p className="text-center text-sm text-white/40">
              🚚 الشحن خلال ٢–٤ أيام عمل | 💳 الدفع عند الاستلام أو أونلاين
            </p>
          </div>
        </div>
      </Section>

      {/* ══════════ 8. FAQ ══════════ */}
      <Section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center">أسئلة شائعة حول المجموعة</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </Section>

      {/* ══════════ 9. FINAL CTA ══════════ */}
      <Section className="py-16 md:py-24 bg-gradient-to-b from-[#111D35] to-[#0A1628]">
        <div className="container mx-auto px-4 text-center space-y-8 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold">جاهز لتطوير عملك التسويقي والمبيعاتي؟</h2>
          <p className="text-white/60 text-lg">الخطوة القادمة في نمو مشروعك تبدأ من هنا</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getCheckoutUrl(1)}
              className="bg-[#0D9488] text-white px-8 py-4 rounded-[14px] font-bold hover:scale-105 transition-all shadow-[0_4px_20px_rgba(13,148,136,0.3)] text-lg"
            >
              🛒 اطلب المجموعة الكاملة — ٩٩٩ جنيه
            </a>
            <a
              href="https://tryduckdash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-[14px] font-bold hover:bg-white/10 transition-all"
            >
              🦆 استكشف DuckDash أولًا
            </a>
          </div>
        </div>
      </Section>

      {/* ══════════ 10. STICKY BAR ══════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur border-t border-white/10 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-bold text-sm">٩٩٩ جنيه <span className="text-white/50 font-normal">— شامل DuckDash ٦ أشهر مجانًا</span></p>
          </div>
          <div className="w-full sm:w-auto">
            <QuantitySelector
              baseCheckoutUrl={shopifyBaseUrl}
              productVariantId={productVariantId}
              buttonText="📦 اطلب الآن"
              price="999"
            />
          </div>
        </div>
      </div>

      {/* bottom spacer for sticky bar */}
      <div className="h-20" />
    </div>
  );
};

export default SalesMarketingKitBundle;
