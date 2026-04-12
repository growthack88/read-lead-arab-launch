import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Logo from "@/components/Logo";

/* ─── Scroll-triggered fade ─── */
function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, vis } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Kit data ─── */
const KITS = [
  {
    id: "startup-kit",
    emoji: "🚀",
    nameAr: "ريادة الأعمال",
    tagline: "من فكرة لـ Startup حقيقي",
    desc: "كتاب + جورنال + أدوات تخطيط مطبوعة",
    saas: "StartupKit Pro",
    tools: "67",
    accent: "#3A86FF",
    price: "999",
  },
  {
    id: "sales-marketing-kit",
    emoji: "📈",
    nameAr: "المبيعات والتسويق",
    tagline: "ابني ماكينة مبيعات",
    desc: "كتابين + أدوات مبيعات وتسويق مطبوعة",
    saas: "DuckDash",
    tools: "35",
    accent: "#169380",
    best: true,
    price: "999",
  },
  {
    id: "productivity-kit",
    emoji: "⏱️",
    nameAr: "الإنتاجية",
    tagline: "وقتك هو رأسمالك",
    desc: "كتاب + جورنال + أدوات إنتاجية مطبوعة",
    saas: "DuckDoro",
    tools: "∞",
    accent: "#7C3AED",
    price: "999",
  },
  {
    id: "ecommerce",
    emoji: "🛒",
    nameAr: "التجارة الإلكترونية",
    tagline: "متجرك — من الصفر للربح",
    desc: "كتاب + 12 إطار عمل + أدوات تخطيط",
    saas: "Duckmerce",
    tools: "64",
    accent: "#0D9488",
    price: "999",
  },
  {
    id: "growth-marketing",
    emoji: "🔥",
    nameAr: "الـ Growth",
    tagline: "النمو مش صدفة — النمو نظام",
    desc: "3 كتب + 9 أدوات + 21 بونص رقمي",
    saas: "DuckDash",
    tools: "35",
    accent: "#F4C95D",
    premium: true,
    price: "1,499",
  },
];

const STATS = [
  { val: "2,270+", label: "طلب اتباع" },
  { val: "1,300+", label: "ملخص كتاب" },
  { val: "220+", label: "أداة رقمية" },
  { val: "7+", label: "كتب منشورة" },
];

/* ─── Component ─── */
const OnlineHome = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="min-h-screen font-tajawal" dir="rtl" style={{ background: "#F2F5F4" }}>
      <SEO
        title="Read to Lead — كتب + أدوات + تطبيقات = نظام تعلّم متكامل"
        description="كل كيت يوصلك بكتب مطبوعة وأدوات عملية، ومعاه اشتراك مجاني 6 أشهر في تطبيق رقمي يساعدك تطبّق اللي اتعلمته"
        url="https://readtolead.online"
      />

      {/* ══════ Utility bar ══════ */}
      <div
        className="text-center text-xs py-1.5"
        style={{ background: "#D9E4E1", color: "#2D3735", opacity: 0.7 }}
      >
        myreadtolead.com &nbsp;·&nbsp; المتجر &nbsp;·&nbsp; التطبيق &nbsp;·&nbsp; B2B &nbsp;·&nbsp;
        <span className="font-bold" style={{ color: "#169380" }}>الكيتات + SaaS</span>
      </div>

      {/* ══════ Announcement bar ══════ */}
      <div
        className="text-center py-2.5 text-sm font-bold"
        style={{ background: "#F4C95D", color: "#2D3735" }}
      >
        🎁 شحن مجاني + 6 أشهر SaaS مجاناً مع كل كيت — عرض محدود
      </div>

      {/* ══════ Navigation ══════ */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "rgba(242,245,244,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #D9E4E1",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-14">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#2D3735" }}>
            <a href="#kits" className="hover:text-[#169380] transition-colors font-medium">الكيتات</a>
            <a href="#how" className="hover:text-[#169380] transition-colors font-medium">إزاي بيشتغل</a>
            <a
              href="#allaccess"
              className="font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "#F4C95D",
                color: "#2D3735",
                padding: "8px 20px",
                borderRadius: 10,
                boxShadow: "0 2px 8px rgba(244,201,93,0.25)",
              }}
            >
              All-Access $99
            </a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          HERO — clean, light, typographic
      ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
        {/* Subtle pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(22,147,128,0.04) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Decorative circle */}
        <div
          className="absolute"
          style={{
            top: "8%", left: "50%", transform: "translateX(-50%)",
            width: 500, height: 500, borderRadius: "50%",
            border: "1px solid rgba(22,147,128,0.06)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "14%", left: "50%", transform: "translateX(-50%)",
            width: 340, height: 340, borderRadius: "50%",
            border: "1px solid rgba(22,147,128,0.04)",
          }}
        />

        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          {/* Overline */}
          <Fade>
            <div
              className="text-xs font-bold tracking-[3px] mb-6"
              style={{ color: "#169380" }}
            >
              نظام تعلّم متكامل
            </div>
          </Fade>

          {/* Headline — stacked typographic treatment */}
          <Fade delay={0.12}>
            <h1 className="leading-tight mb-0">
              <span
                className="block font-light"
                style={{ fontSize: "clamp(28px, 5.5vw, 56px)", color: "#2D3735", opacity: 0.6 }}
              >
                كتب
              </span>
              <span
                className="block font-light"
                style={{ fontSize: "clamp(22px, 3.5vw, 36px)", color: "#D9E4E1", margin: "4px 0" }}
              >
                +
              </span>
              <span
                className="block font-light"
                style={{ fontSize: "clamp(28px, 5.5vw, 56px)", color: "#2D3735", opacity: 0.6 }}
              >
                أدوات
              </span>
              <span
                className="block font-light"
                style={{ fontSize: "clamp(22px, 3.5vw, 36px)", color: "#D9E4E1", margin: "4px 0" }}
              >
                +
              </span>
              <span
                className="block font-extrabold"
                style={{ fontSize: "clamp(32px, 6.5vw, 68px)", color: "#169380" }}
              >
                تطبيقات
              </span>
            </h1>
          </Fade>

          {/* Divider */}
          <Fade delay={0.24}>
            <div className="mx-auto my-8" style={{ width: 60, height: 2, background: "#28B9A8", borderRadius: 1 }} />
          </Fade>

          {/* Sub copy */}
          <Fade delay={0.32}>
            <p
              className="text-lg mx-auto mb-10 font-light leading-relaxed"
              style={{ color: "#2D3735", opacity: 0.65, maxWidth: 520 }}
            >
              كل كيت يوصلك بكتب وأدوات مطبوعة
              <br />
              ومعاه <span className="font-bold" style={{ color: "#169380" }}>6 أشهر مجاناً</span> على تطبيق رقمي يساعدك تطبّق
            </p>
          </Fade>

          {/* CTA */}
          <Fade delay={0.4}>
            <a
              href="#kits"
              className="inline-block font-bold text-base transition-all duration-200 hover:scale-105 active:scale-[0.98]"
              style={{
                background: "#F4C95D",
                color: "#2D3735",
                padding: "14px 44px",
                borderRadius: 14,
                boxShadow: "0 4px 20px rgba(244,201,93,0.3)",
              }}
            >
              اختار كيتك ↓
            </a>
          </Fade>

          {/* Scroll indicator */}
          <Fade delay={0.55}>
            <div className="mt-16 flex flex-col items-center gap-2">
              <span className="text-[10px] tracking-[2px]" style={{ color: "#28B9A8" }}>SCROLL</span>
              <div style={{ width: 1, height: 36, background: "linear-gradient(180deg, #28B9A8, transparent)" }} />
            </div>
          </Fade>
        </div>
      </section>

      {/* ══════ Stats bar ══════ */}
      <section style={{ borderTop: "1px solid #D9E4E1", borderBottom: "1px solid #D9E4E1", background: "#fff" }}>
        <div className="container mx-auto px-6 py-7 flex justify-around flex-wrap gap-4">
          {STATS.map((s, i) => (
            <Fade key={i} delay={i * 0.08}>
              <div className="text-center" style={{ minWidth: 100 }}>
                <div className="text-3xl font-extrabold" style={{ color: "#169380" }}>{s.val}</div>
                <div className="text-xs mt-1" style={{ color: "#2D3735", opacity: 0.5 }}>{s.label}</div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          KIT SELECTOR
      ══════════════════════════════════════════════════ */}
      <section id="kits" className="py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Fade>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#2D3735" }}>
                اختار <span style={{ color: "#169380" }}>مسارك</span>
              </h2>
              <p className="text-base font-light" style={{ color: "#2D3735", opacity: 0.55, maxWidth: 440, margin: "0 auto" }}>
                كل كيت = كتب مطبوعة + أدوات عملية + تطبيق رقمي مجاني 6 أشهر
              </p>
            </div>
          </Fade>

          {/* Kit rows */}
          <div className="flex flex-col gap-3">
            {KITS.map((kit, i) => {
              const isH = hovered === kit.id;
              return (
                <Fade key={kit.id} delay={i * 0.06}>
                  <Link
                    to={`/${kit.id}`}
                    onMouseEnter={() => setHovered(kit.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="block transition-all duration-300"
                    style={{
                      background: isH ? "#fff" : "rgba(255,255,255,0.6)",
                      border: `1px solid ${isH ? "#28B9A8" : "#D9E4E1"}`,
                      borderRadius: 16,
                      padding: "20px 24px",
                      boxShadow: isH ? "0 8px 32px rgba(22,147,128,0.08)" : "0 1px 3px rgba(0,0,0,0.02)",
                      transform: isH ? "translateY(-2px)" : "translateY(0)",
                      textDecoration: "none",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Badges */}
                    {kit.best && (
                      <span
                        className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md text-white"
                        style={{ background: "#169380" }}
                      >
                        ⭐ الأكثر مبيعاً
                      </span>
                    )}
                    {kit.premium && (
                      <span
                        className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md"
                        style={{ background: "#EE6C4D", color: "#fff" }}
                      >
                        🔥 Premium
                      </span>
                    )}

                    <div className="flex items-center gap-5">
                      {/* Icon */}
                      <div
                        className="shrink-0 flex items-center justify-center text-2xl transition-transform duration-300"
                        style={{
                          width: 56, height: 56, borderRadius: 14,
                          background: `${kit.accent}10`,
                          border: `1px solid ${kit.accent}25`,
                          transform: isH ? "scale(1.08)" : "scale(1)",
                        }}
                      >
                        {kit.emoji}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-lg font-bold" style={{ color: "#2D3735" }}>
                          {kit.nameAr}
                        </div>
                        <div className="text-sm mb-2" style={{ color: "#2D3735", opacity: 0.5 }}>
                          {kit.tagline}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <span
                            className="text-[10px] px-2.5 py-1 rounded-md"
                            style={{ background: "#D9E4E1", color: "#2D3735" }}
                          >
                            📦 {kit.desc}
                          </span>
                          <span
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-md"
                            style={{ background: `${kit.accent}12`, color: kit.accent }}
                          >
                            💻 {kit.saas} — {kit.tools} أداة رقمية — 6 أشهر مجاناً
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="shrink-0 text-center" style={{ minWidth: 72 }}>
                        <div className="text-2xl font-extrabold" style={{ color: "#169380" }}>
                          {kit.price}
                        </div>
                        <div className="text-[10px]" style={{ color: "#2D3735", opacity: 0.4 }}>ج.م</div>
                      </div>

                      {/* Arrow */}
                      <div
                        className="shrink-0 flex items-center justify-center text-lg font-bold transition-all duration-300"
                        style={{
                          width: 40, height: 40, borderRadius: 10,
                          background: isH ? "#F4C95D" : "rgba(22,147,128,0.06)",
                          color: isH ? "#2D3735" : "#169380",
                        }}
                      >
                        ←
                      </div>
                    </div>
                  </Link>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW IT WORKS — 3 steps
      ══════════════════════════════════════════════════ */}
      <section id="how" className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-[900px] mx-auto">
          <Fade>
            <h2 className="text-3xl font-extrabold text-center mb-14" style={{ color: "#2D3735" }}>
              <span className="font-light" style={{ opacity: 0.4 }}>3 خطوات.</span>{" "}
              <span style={{ color: "#169380" }}>كده وبس.</span>
            </h2>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "①", title: "اختار", desc: "اختار الكيت المناسب لمجالك واهتمامك", icon: "🎯" },
              { num: "②", title: "استلم", desc: "الكيت يوصلك لحد بيتك خلال 3-7 أيام", icon: "📦" },
              { num: "③", title: "فعّل", desc: "فعّل تطبيقك الرقمي المجاني وابدأ طبّق", icon: "💻" },
            ].map((step, i) => (
              <Fade key={i} delay={i * 0.12}>
                <div
                  className="text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: "#F2F5F4",
                    border: "1px solid #D9E4E1",
                  }}
                >
                  <div className="text-4xl mb-5">{step.icon}</div>
                  <div
                    className="text-xs font-bold tracking-[2px] mb-2"
                    style={{ color: "#169380" }}
                  >
                    {step.num}
                  </div>
                  <div className="text-xl font-bold mb-2" style={{ color: "#2D3735" }}>
                    {step.title}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: "#2D3735", opacity: 0.55 }}>
                    {step.desc}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TWO BOXES concept
      ══════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-[960px] mx-auto">
          <Fade>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3" style={{ color: "#2D3735" }}>
              كل كيت = <span style={{ color: "#169380" }}>صندوقين</span> مش واحد
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#2D3735", opacity: 0.45, maxWidth: 420, margin: "0 auto" }}>
              صندوق حقيقي يوصلك + مساحة عمل رقمية تفتحها
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Physical */}
            <Fade delay={0.08}>
              <div
                className="rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-md"
                style={{ background: "#fff", border: "1px solid #D9E4E1" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">📦</span>
                  <span className="text-lg font-bold" style={{ color: "#2D3735" }}>اللي هيوصلك</span>
                </div>
                <div className="text-sm leading-[2.2]" style={{ color: "#2D3735", opacity: 0.6 }}>
                  ✦ كتب مطبوعة بملخصات أهم الكتب العالمية<br />
                  ✦ أدوات وتمبلتات عملية مطبوعة<br />
                  ✦ جورنال تفاعلي لتوثيق رحلتك<br />
                  ✦ دفتر + أدوات مكتبية
                </div>
                <div
                  className="mt-5 text-center text-xs font-semibold py-2.5 rounded-xl"
                  style={{ background: "#F2F5F4", color: "#2D3735" }}
                >
                  🚚 توصيل مجاني — 3 إلى 7 أيام
                </div>
              </div>
            </Fade>

            {/* Digital */}
            <Fade delay={0.16}>
              <div
                className="rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-300 hover:shadow-md"
                style={{
                  background: "linear-gradient(135deg, rgba(22,147,128,0.03), rgba(40,185,168,0.06))",
                  border: "1px solid rgba(22,147,128,0.15)",
                }}
              >
                {/* Glow */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: -40, left: -40, width: 160, height: 160,
                    borderRadius: "50%", background: "rgba(22,147,128,0.05)",
                    filter: "blur(50px)",
                  }}
                />
                <div className="relative flex items-center gap-3 mb-5">
                  <span className="text-3xl">💻</span>
                  <span className="text-lg font-bold" style={{ color: "#2D3735" }}>اللي هتفتحه</span>
                </div>
                <div className="relative text-sm leading-[2.2]" style={{ color: "#2D3735", opacity: 0.6 }}>
                  ✦ تطبيق ويب بأدوات رقمية متخصصة<br />
                  ✦ لوحة تحكم ذكية لمجالك<br />
                  ✦ أدوات تخطيط وتحليل وتنفيذ<br />
                  ✦ اشتغل من أي مكان — موبايل أو لابتوب
                </div>
                <div
                  className="relative mt-5 text-center text-xs font-bold py-2.5 rounded-xl"
                  style={{ background: "rgba(22,147,128,0.08)", color: "#169380" }}
                >
                  🎁 6 أشهر مجاناً — قيمتها $19/سنة
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ALL-ACCESS BANNER
      ══════════════════════════════════════════════════ */}
      <section id="allaccess" className="px-6 pb-20">
        <Fade>
          <div
            className="max-w-[960px] mx-auto rounded-3xl text-center relative overflow-hidden"
            style={{
              background: "#0F7468",
              padding: "56px 40px",
            }}
          >
            {/* Corner decorations */}
            <div
              className="absolute"
              style={{
                top: 0, right: 0, width: 100, height: 100,
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "0 0 0 32px",
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: 0, left: 0, width: 100, height: 100,
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "0 32px 0 0",
              }}
            />

            <div className="text-[10px] tracking-[3px] font-semibold mb-4" style={{ color: "#F4C95D" }}>
              DIGITAL ONLY
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-snug text-white">
              مش محتاج كيت؟
              <br />
              <span style={{ color: "#F4C95D" }}>افتح كل الأدوات الرقمية</span>
            </h2>
            <p className="text-base mb-8 leading-relaxed mx-auto" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 460 }}>
              220+ أداة في 6 تطبيقات — StartupKit Pro, DuckDash, Duckmerce, Growth OS, FreeDuckter, DuckDoro
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-5xl font-extrabold" style={{ color: "#F4C95D" }}>$99</span>
              <span className="text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>/سنة</span>
              <span
                className="text-sm line-through mr-2"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                $114
              </span>
            </div>
            <a
              href="/duckverse"
              className="inline-block font-bold text-base transition-all duration-200 hover:scale-105 active:scale-[0.98]"
              style={{
                background: "#F4C95D",
                color: "#2D3735",
                padding: "14px 44px",
                borderRadius: 14,
                boxShadow: "0 4px 20px rgba(244,201,93,0.3)",
              }}
            >
              اشترك الآن
            </a>
          </div>
        </Fade>
      </section>

      {/* ══════ Author ══════ */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid #D9E4E1" }}>
        <Fade>
          <div className="max-w-[520px] mx-auto text-center">
            <div
              className="mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
              style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "rgba(22,147,128,0.08)",
                border: "2px solid rgba(22,147,128,0.15)",
                color: "#169380",
              }}
            >
              م
            </div>
            <div className="text-lg font-bold" style={{ color: "#2D3735" }}>محمود عمر</div>
            <div className="text-sm mt-1 leading-relaxed" style={{ color: "#2D3735", opacity: 0.45 }}>
              7+ كتب منشورة · 15+ سنة خبرة في الـ Growth · مؤسس Growth Hack Academy · مؤسس Read to Lead
            </div>
          </div>
        </Fade>
      </section>

      {/* ══════ Footer ══════ */}
      <footer className="px-6 py-8" style={{ borderTop: "1px solid #D9E4E1" }}>
        <div className="max-w-[900px] mx-auto flex justify-between items-center flex-wrap gap-4 text-xs" style={{ color: "#2D3735", opacity: 0.4 }}>
          <span>© 2026 Read to Lead — جميع الحقوق محفوظة</span>
          <div className="flex gap-5">
            <a href="https://myreadtolead.com" className="hover:opacity-100 transition-opacity" style={{ color: "#2D3735", textDecoration: "none" }}>الموقع الرئيسي</a>
            <a href="https://readtolead.store" className="hover:opacity-100 transition-opacity" style={{ color: "#2D3735", textDecoration: "none" }}>المتجر</a>
            <a href="https://readtolead.ae" className="hover:opacity-100 transition-opacity" style={{ color: "#2D3735", textDecoration: "none" }}>التطبيق</a>
            <a href="https://b2b.myreadtolead.com" className="hover:opacity-100 transition-opacity" style={{ color: "#2D3735", textDecoration: "none" }}>B2B</a>
          </div>
          <a href="https://wa.me/201XXXXXXXXX" className="font-semibold" style={{ color: "#169380", textDecoration: "none" }}>
            تواصل عبر واتساب
          </a>
        </div>
      </footer>

      {/* ══════ Sticky bottom CTA ══════ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 py-3 px-4"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid #D9E4E1",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.04)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <p className="font-bold text-sm" style={{ color: "#2D3735" }}>Read to Lead</p>
              <p className="text-xs" style={{ color: "#2D3735", opacity: 0.4 }}>كتب + أدوات + تطبيقات</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xl font-extrabold" style={{ color: "#169380" }}>من 999 ج.م</p>
            </div>
          </div>
          <a
            href="#kits"
            className="font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-[0.98]"
            style={{
              background: "#F4C95D",
              color: "#2D3735",
              padding: "10px 28px",
              borderRadius: 12,
              boxShadow: "0 4px 16px rgba(244,201,93,0.25)",
            }}
          >
            📦 اختار كيتك
          </a>
        </div>
      </div>

      {/* Bottom spacer for sticky bar */}
      <div className="h-16" />
    </div>
  );
};

export default OnlineHome;
