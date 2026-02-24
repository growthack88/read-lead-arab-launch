import { useState } from "react";

const tabs = ["الرؤية الجديدة", "المنتجات", "الصفحة الرئيسية", "صفحة الكيت", "محرّك النمو", "خطة التنفيذ"];

export default function RTLVision() {
  const [tab, setTab] = useState(0);
  const [hoveredKit, setHoveredKit] = useState<number | null>(null);

  const gold = "#D4A853";
  const dark = "#0A0A0A";
  const cream = "#F9F7F2";
  const muted = "#8A8578";

  const s = {
    page: { fontFamily: "'Georgia', 'Noto Naskh Arabic', serif", background: dark, minHeight: "100vh", direction: "rtl" as const, color: "#fff" },
    heading: { fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" },
  };

  return (
    <div style={s.page}>
      {/* ===== MASTHEAD ===== */}
      <div style={{
        padding: "0 40px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: `1px solid rgba(255,255,255,0.06)`,
        background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)",
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📖</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, ...s.heading }}>Read to Lead</div>
            <div style={{ fontSize: 9, color: muted, letterSpacing: 3, textTransform: "uppercase" }}>Vision Document v2.0</div>
          </div>
        </div>
        <div style={{
          background: `linear-gradient(135deg, ${gold}, #C09030)`, color: dark,
          padding: "6px 20px", borderRadius: 6, fontSize: 10,
          fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
        }}>Enhanced Reading Experience</div>
      </div>

      {/* ===== TAB BAR ===== */}
      <div style={{
        display: "flex", gap: 0, padding: "0 40px",
        borderBottom: `1px solid rgba(255,255,255,0.06)`,
      }}>
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            padding: "16px 24px", border: "none", background: "transparent",
            color: tab === i ? gold : "rgba(255,255,255,0.3)",
            fontSize: 13, fontWeight: 600, cursor: "pointer",
            borderBottom: tab === i ? `2px solid ${gold}` : "2px solid transparent",
            transition: "all 0.3s",
            fontFamily: "inherit",
          }}>{t}</button>
        ))}
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "48px 40px" }}>

        {/* ======================== TAB 0: VISION ======================== */}
        {tab === 0 && (
          <div>
            {/* HERO */}
            <div style={{ marginBottom: 80 }}>
              <div style={{ fontSize: 10, color: gold, letterSpacing: 4, marginBottom: 20, textTransform: "uppercase", fontWeight: 700 }}>التحوّل الاستراتيجي</div>
              <h1 style={{ fontSize: 56, fontWeight: 400, lineHeight: 1.15, ...s.heading, marginBottom: 28, maxWidth: 700 }}>
                لم نعد نبيع <span style={{ color: gold, fontStyle: "italic" }}>كتباً</span>
                <br />
                نحن نبيع <span style={{ color: gold, fontStyle: "italic" }}>تجربة تعلّم متكاملة</span>
              </h1>
              <div style={{ width: 60, height: 1, background: gold, marginBottom: 28 }} />
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 2, maxWidth: 580, ...s.heading }}>
                كل مجموعة تجمع بين كتب متخصصة مختارة بعناية، وأدوات رقمية تطبيقية، وتطبيق ذكي يرافق القارئ في رحلة تطوّره المهني.
              </p>
            </div>

            {/* 3 PILLARS — asymmetric */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 2, marginBottom: 80 }}>
              {[
                { num: "01", icon: "📚", title: "المعرفة", sub: "Knowledge Layer", desc: "كتب مختارة بعناية فائقة — سلسلة Simply، سلسلة Duck، كتب النمو والأداء. خلاصة أكثر من ٦٠ كتاباً عالمياً في مجالات ريادة الأعمال والإنتاجية والمبيعات.", bg: "rgba(108,92,231,0.08)", accent: "#6c5ce7" },
                { num: "02", icon: "🛠️", title: "التطبيق", sub: "Application Layer", desc: "أدوات رقمية SaaS مرافقة لكل مجموعة — StartupKit Pro للريادة، DuckDoro للإنتاجية، DuckDash للتسويق والمبيعات. اشتراك سنوي مجاني مع كل كيت.", bg: "rgba(0,184,148,0.08)", accent: "#00b894" },
                { num: "03", icon: "📱", title: "الاستمرارية", sub: "Continuity Layer", desc: "تطبيق Read to Lead للهاتف — ملخصات يومية، متابعة التقدّم، توصيات مخصّصة حسب اهتمامات القارئ. مشمول مع كل عملية شراء.", bg: "rgba(212,168,83,0.08)", accent: gold },
              ].map((p, i) => (
                <div key={i} style={{
                  background: p.bg, padding: "40px 32px",
                  borderRadius: i === 0 ? "16px 0 0 16px" : i === 2 ? "0 16px 16px 0" : 0,
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 20, left: 20, fontSize: 64, fontWeight: 200, color: "rgba(255,255,255,0.03)", ...s.heading }}>{p.num}</div>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{p.icon}</div>
                  <div style={{ fontSize: 10, color: p.accent, letterSpacing: 3, marginBottom: 6, fontWeight: 700 }}>{p.sub}</div>
                  <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, ...s.heading }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.9 }}>{p.desc}</div>
                </div>
              ))}
            </div>

            {/* BEFORE / AFTER — editorial split */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: 0, marginBottom: 80 }}>
              <div style={{ padding: "40px 36px", background: "rgba(255,255,255,0.02)", borderRadius: "16px 0 0 16px" }}>
                <div style={{ fontSize: 10, color: "#e74c3c", letterSpacing: 3, marginBottom: 16, fontWeight: 700 }}>النموذج الحالي</div>
                {[
                  "متجر كتب تقليدي — منافسة مباشرة مع المكتبات الكبرى",
                  "العميل يشتري مرة واحدة ولا يعود — لا ولاء ولا تكرار",
                  "تسعير بالجنيه المصري — غير مهيّأ لسوق الخليج",
                  "لا إيرادات متكررة — كل شهر يبدأ من الصفر",
                  "صفحات هبوط على Lovable — غير قابلة للتوسّع",
                  "لا تمييز حقيقي عن Amazon أو Jamalon",
                ].map((t, i) => (
                  <div key={i} style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 10, lineHeight: 1.7, paddingRight: 16, borderRight: "1px solid rgba(231,76,60,0.2)" }}>{t}</div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 1, height: "100%", background: "rgba(255,255,255,0.06)", position: "relative" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: gold, color: dark, width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 900 }}>←</div>
                </div>
              </div>
              <div style={{ padding: "40px 36px", background: "rgba(212,168,83,0.04)", borderRadius: "0 16px 16px 0" }}>
                <div style={{ fontSize: 10, color: gold, letterSpacing: 3, marginBottom: 16, fontWeight: 700 }}>النموذج الجديد</div>
                {[
                  "منصة تجربة قراءة محسّنة — كتب + أدوات SaaS + تطبيق ذكي",
                  "العميل يعود يومياً — لديه أداة رقمية يستخدمها باستمرار",
                  "تسعير بالريال السعودي — استراتيجية GCC-first",
                  "إيرادات متكررة من تجديد اشتراكات SaaS بعد السنة المجانية",
                  "موقع واحد متكامل على readtolead.store",
                  "المنصة العربية الوحيدة التي تربط الكتب بأدوات تطبيق عملية",
                ].map((t, i) => (
                  <div key={i} style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 10, lineHeight: 1.7, paddingRight: 16, borderRight: `1px solid ${gold}30` }}>{t}</div>
                ))}
              </div>
            </div>

            {/* POSITIONING STATEMENT */}
            <div style={{ position: "relative", padding: "60px 48px", background: `linear-gradient(135deg, rgba(212,168,83,0.06), rgba(212,168,83,0.02))`, borderRadius: 20, border: `1px solid ${gold}15` }}>
              <div style={{ position: "absolute", top: 24, right: 32, fontSize: 120, color: `${gold}08`, fontFamily: "Georgia", lineHeight: 1 }}>"</div>
              <div style={{ fontSize: 10, color: gold, letterSpacing: 4, marginBottom: 20, fontWeight: 700 }}>البيان التسويقي</div>
              <p style={{ fontSize: 24, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", ...s.heading, fontStyle: "italic", maxWidth: 700 }}>
                Read to Lead — المنصة العربية الأولى التي تحوّل القراءة من معرفة نظرية إلى تطبيق عملي، من خلال مجموعات كتب متخصصة مقرونة بأدوات رقمية تمكّنك من تطبيق ما تعلّمته فوراً.
              </p>
              <div style={{ marginTop: 32, display: "flex", gap: 32 }}>
                {[
                  { l: "الجمهور المستهدف", v: "روّاد أعمال ومهنيون طموحون في دول الخليج — ٢٥ إلى ٤٠ عاماً" },
                  { l: "التصنيف", v: "Enhanced Reading Experience Platform" },
                  { l: "الشعار", v: "اقرأ. طبّق. تطوّر." },
                ].map((item, i) => (
                  <div key={i} style={{ flex: 1 }}>
                    <div style={{ fontSize: 9, color: muted, letterSpacing: 2, marginBottom: 6, fontWeight: 700 }}>{item.l}</div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================== TAB 1: PRODUCTS ======================== */}
        {tab === 1 && (
          <div>
            <div style={{ marginBottom: 56 }}>
              <div style={{ fontSize: 10, color: gold, letterSpacing: 4, marginBottom: 16, fontWeight: 700 }}>منظومة المنتجات</div>
              <h2 style={{ fontSize: 42, fontWeight: 400, lineHeight: 1.2, ...s.heading, marginBottom: 16 }}>
                ثلاث مجموعات.<br /><span style={{ color: gold }}>ثلاث أدوات رقمية.</span><br />تطبيق واحد يجمعها.
              </h2>
            </div>

            {/* 3 KITS — premium cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3, marginBottom: 48 }}>
              {[
                { name: "كيت ريادة الأعمال", en: "Startup Builder Kit", icon: "🚀", color: "#6c5ce7", saas: "StartupKit Pro", url: "startupkitpro.com", books: "٥ كتب", tools: "٦٧ أداة", price: "٢٤٩", old: "٤٩٩", desc: "خلاصة ٢٠ كتاباً عالمياً في بناء الشركات الناشئة، مع منصة أدوات متكاملة تشمل نموذج العمل التجاري، حاسبة اقتصاديات الوحدة، ومُعدّ العروض التقديمية للمستثمرين." },
                { name: "كيت الإنتاجية", en: "Productivity OS Kit", icon: "⚡", color: "#00b894", saas: "DuckDoro", url: "duckdoro.com", books: "٤ كتب", tools: "نظام متكامل", price: "١٩٩", old: "٣٩٩", desc: "منهجية علمية لإدارة الوقت والتركيز العميق، مع نظام تشغيل إنتاجية رقمي يشمل مؤقّت ذكي، تفريغ ذهني، وسجل إنجازات يومي." },
                { name: "كيت المبيعات والتسويق", en: "Sales & Marketing Kit", icon: "📊", color: "#e17055", saas: "DuckDash", url: "tryduckdash.com", books: "٥ كتب", tools: "لوحة تحكّم", price: "٢٤٩", old: "٤٩٩", desc: "استراتيجيات مبيعات وتسويق نمو مستخلصة من أفضل الممارسات العالمية، مع لوحة تحكّم رقمية لمتابعة مؤشرات الأداء وقمع المبيعات." },
              ].map((kit, i) => (
                <div key={i}
                  onMouseEnter={() => setHoveredKit(i)}
                  onMouseLeave={() => setHoveredKit(null)}
                  style={{
                    background: hoveredKit === i ? `${kit.color}08` : "rgba(255,255,255,0.02)",
                    padding: "40px 28px", position: "relative", overflow: "hidden",
                    borderRadius: i === 0 ? "20px 0 0 20px" : i === 2 ? "0 20px 20px 0" : 0,
                    transition: "all 0.4s", cursor: "pointer",
                    border: `1px solid ${hoveredKit === i ? kit.color + '30' : 'rgba(255,255,255,0.04)'}`,
                  }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: kit.color, opacity: hoveredKit === i ? 1 : 0, transition: "opacity 0.3s" }} />
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{kit.icon}</div>
                  <div style={{ fontSize: 9, color: kit.color, letterSpacing: 3, marginBottom: 6, fontWeight: 700 }}>{kit.en}</div>
                  <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 14, ...s.heading }}>{kit.name}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.9, marginBottom: 24, minHeight: 100 }}>{kit.desc}</p>
                  
                  <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                    <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 14px", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>📚 {kit.books}</div>
                    <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 14px", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>🛠️ {kit.tools}</div>
                    <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 14px", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>📱 التطبيق</div>
                  </div>

                  <div style={{
                    background: `linear-gradient(135deg, ${kit.color}15, ${kit.color}08)`,
                    borderRadius: 10, padding: "14px 16px", marginBottom: 24,
                    border: `1px solid ${kit.color}20`,
                  }}>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>🎁 مشمول مع المجموعة</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: kit.color }}>اشتراك سنوي مجاني — {kit.saas}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace", marginTop: 2 }}>{kit.url}</div>
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 36, fontWeight: 300, ...s.heading }}>{kit.price}</span>
                    <span style={{ fontSize: 13, color: muted }}>ر.س</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.15)", textDecoration: "line-through" }}>{kit.old}</span>
                  </div>
                  <button style={{
                    width: "100%", padding: "14px 0", background: kit.color, color: "#fff",
                    border: "none", borderRadius: 10, fontSize: 14, fontWeight: 700,
                    cursor: "pointer", transition: "transform 0.2s",
                  }}>اطلب المجموعة الآن</button>
                </div>
              ))}
            </div>

            {/* MEGA BUNDLE */}
            <div style={{
              background: `linear-gradient(135deg, ${gold}08, rgba(255,255,255,0.02))`,
              borderRadius: 20, padding: "48px 40px", marginBottom: 48,
              border: `1px solid ${gold}20`, display: "flex", alignItems: "center", gap: 48,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, color: gold, letterSpacing: 4, marginBottom: 12, fontWeight: 700 }}>المجموعة الشاملة — وفّر ٦٠٪</div>
                <div style={{ fontSize: 36, fontWeight: 400, ...s.heading, marginBottom: 14 }}>كل شيء في حزمة واحدة</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, marginBottom: 24 }}>
                  جميع الكتب + جميع أدوات SaaS + تطبيق Read to Lead — العرض الأقوى لمن يريد التميّز في كل المجالات.
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontSize: 48, fontWeight: 300, ...s.heading, color: gold }}>٤٩٩</span>
                  <span style={{ fontSize: 16, color: muted }}>ر.س</span>
                  <span style={{ fontSize: 16, color: "rgba(255,255,255,0.15)", textDecoration: "line-through", marginRight: 8 }}>١,٢٠٠</span>
                </div>
              </div>
              <button style={{
                background: gold, color: dark, border: "none",
                padding: "18px 40px", borderRadius: 12, fontSize: 16,
                fontWeight: 800, cursor: "pointer", whiteSpace: "nowrap",
              }}>اطلب الحزمة الشاملة ←</button>
            </div>

            {/* INDIVIDUAL BOOKS */}
            <div>
              <div style={{ fontSize: 10, color: muted, letterSpacing: 4, marginBottom: 12, fontWeight: 700 }}>المكتبة</div>
              <div style={{ fontSize: 28, ...s.heading, marginBottom: 8 }}>الكتب المنفردة</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 28 }}>كل كتاب يتضمّن اشتراك ٣ أشهر مجاني في تطبيق Read to Lead</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
                {[
                  { name: "Simply Marketing", s: "سلسلة Simply", p: "٧٩", c: "#3498db" },
                  { name: "Simply Sales", s: "سلسلة Simply", p: "٧٩", c: "#3498db" },
                  { name: "Simply Productivity", s: "سلسلة Simply", p: "٧٩", c: "#3498db" },
                  { name: "Simply Leadership", s: "سلسلة Simply", p: "٧٩", c: "#3498db" },
                  { name: "Duckting", s: "سلسلة Duck 🦆", p: "٨٩", c: gold },
                  { name: "Duckship", s: "سلسلة Duck 🦆", p: "٨٩", c: gold },
                  { name: "Ducktivity", s: "سلسلة Duck 🦆", p: "٨٩", c: gold },
                  { name: "GrowthDNA", s: "كتب النمو", p: "٩٩", c: "#e17055" },
                ].map((b, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.02)", padding: "24px 16px",
                    textAlign: "center", borderRadius: i === 0 ? "12px 0 0 0" : i === 3 ? "0 12px 0 0" : i === 4 ? "0 0 0 12px" : i === 7 ? "0 0 12px 0" : 0,
                    border: "1px solid rgba(255,255,255,0.03)",
                  }}>
                    <div style={{ width: 48, height: 64, background: `${b.c}10`, borderRadius: 4, margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: `1px solid ${b.c}20` }}>📕</div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{b.name}</div>
                    <div style={{ fontSize: 10, color: muted, marginBottom: 6 }}>{b.s}</div>
                    <div style={{ fontSize: 18, fontWeight: 300, ...s.heading }}>{b.p} <span style={{ fontSize: 10, color: muted }}>ر.س</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================== TAB 2: HOMEPAGE WIREFRAME ======================== */}
        {tab === 2 && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 10, color: gold, letterSpacing: 4, marginBottom: 12, fontWeight: 700 }}>واجهة المستخدم</div>
              <h2 style={{ fontSize: 36, fontWeight: 400, ...s.heading, marginBottom: 8 }}>الصفحة الرئيسية</h2>
              <p style={{ fontSize: 13, color: muted }}>تصميم أبيض نظيف — Flat Arabic White — مُحسَّن لسوق دول الخليج</p>
            </div>

            <div style={{
              background: cream, borderRadius: 24, overflow: "hidden",
              border: "1px solid #E8E4DB", color: dark,
              boxShadow: "0 40px 120px rgba(0,0,0,0.3)",
            }}>
              {/* NAV */}
              <div style={{ padding: "16px 36px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", borderBottom: "1px solid #F0EDE6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>📖</div>
                  <span style={{ fontSize: 15, fontWeight: 700, color: dark, ...s.heading }}>Read to Lead</span>
                </div>
                <div style={{ display: "flex", gap: 28, fontSize: 13, color: "#999" }}>
                  {["الرئيسية", "المجموعات", "المكتبة", "التطبيق"].map((t, i) => (
                    <span key={i} style={{ fontWeight: i === 0 ? 700 : 400, color: i === 0 ? dark : "#999" }}>{t}</span>
                  ))}
                </div>
                <div style={{ background: dark, color: "#fff", padding: "8px 18px", borderRadius: 8, fontSize: 11, fontWeight: 700 }}>حمّل التطبيق</div>
              </div>

              {/* HERO */}
              <div style={{ padding: "72px 48px 56px", textAlign: "center", background: "#fff" }}>
                <div style={{ fontSize: 9, color: gold, letterSpacing: 4, marginBottom: 20, fontWeight: 700 }}>ENHANCED READING EXPERIENCE</div>
                <h1 style={{ fontSize: 48, fontWeight: 400, color: dark, lineHeight: 1.2, margin: "0 auto 16px", maxWidth: 480, ...s.heading }}>
                  اقرأ. طبّق. تطوّر.
                </h1>
                <p style={{ fontSize: 16, color: "#999", margin: "0 auto 8px", maxWidth: 420, lineHeight: 1.6 }}>
                  ليست مجرد كتب — تجربة تعلّم متكاملة تحوّل المعرفة إلى أدوات عملية
                </p>
                <p style={{ fontSize: 13, color: "#bbb", margin: "0 auto 32px", maxWidth: 400, lineHeight: 1.8 }}>
                  كل مجموعة تضم كتباً متخصصة + أدوات SaaS رقمية + تطبيق ذكي للهاتف
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                  <button style={{ background: dark, color: "#fff", border: "none", padding: "14px 32px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>استكشف المجموعات ←</button>
                  <button style={{ background: "#F5F3EE", color: "#666", border: "none", padding: "14px 32px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>▶ كيف تعمل التجربة</button>
                </div>
              </div>

              {/* TRUST */}
              <div style={{ padding: "14px 36px", background: cream, display: "flex", justifyContent: "center", gap: 40, fontSize: 11, color: "#bbb" }}>
                {["📦 توصيل لجميع دول الخليج", "⭐ أكثر من ٢,٠٠٠ قارئ", "🔒 دفع آمن ومضمون", "🔄 ضمان استرجاع ١٤ يوماً"].map((t, i) => <span key={i}>{t}</span>)}
              </div>

              {/* KITS */}
              <div style={{ padding: "48px 36px", background: "#fff" }}>
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                  <div style={{ fontSize: 9, color: gold, letterSpacing: 4, marginBottom: 8, fontWeight: 700 }}>المجموعات التطبيقية</div>
                  <h2 style={{ fontSize: 28, fontWeight: 500, color: dark, ...s.heading, marginBottom: 6 }}>اختر المجموعة التي تناسبك</h2>
                  <p style={{ fontSize: 13, color: "#bbb" }}>كل مجموعة = كتب + أداة SaaS مجانية لمدة سنة + تطبيق</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                  {[
                    { ar: "كيت ريادة الأعمال", en: "Startup Kit", icon: "🚀", color: "#6c5ce7", saas: "StartupKit Pro", price: "٢٤٩" },
                    { ar: "كيت الإنتاجية", en: "Productivity Kit", icon: "⚡", color: "#00b894", saas: "DuckDoro", price: "١٩٩" },
                    { ar: "كيت المبيعات والتسويق", en: "Sales & Marketing Kit", icon: "📊", color: "#e17055", saas: "DuckDash", price: "٢٤٩" },
                  ].map((kit, i) => (
                    <div key={i} style={{ border: "1.5px solid #F0EDE6", borderRadius: 16, padding: 28, textAlign: "center", background: "#fff" }}>
                      <div style={{ fontSize: 40, marginBottom: 14 }}>{kit.icon}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: dark, marginBottom: 2, ...s.heading }}>{kit.ar}</div>
                      <div style={{ fontSize: 10, color: "#bbb", marginBottom: 14, letterSpacing: 1 }}>{kit.en}</div>
                      <div style={{ background: `${kit.color}08`, borderRadius: 8, padding: "8px 14px", display: "inline-block", fontSize: 11, color: kit.color, fontWeight: 700, marginBottom: 16, border: `1px solid ${kit.color}15` }}>
                        🎁 + {kit.saas} مجاناً لمدة سنة
                      </div>
                      <div style={{ fontSize: 30, fontWeight: 400, color: dark, marginBottom: 14, ...s.heading }}>
                        {kit.price} <span style={{ fontSize: 12, color: "#ccc" }}>ر.س</span>
                      </div>
                      <button style={{ width: "100%", background: kit.color, color: "#fff", border: "none", padding: "12px 0", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>اطلب الآن</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* HOW IT WORKS */}
              <div style={{ padding: "48px 36px", background: cream }}>
                <h2 style={{ fontSize: 24, fontWeight: 500, color: dark, textAlign: "center", marginBottom: 32, ...s.heading }}>كيف تعمل تجربة Read to Lead؟</h2>
                <div style={{ display: "flex", justifyContent: "center", gap: 0, alignItems: "flex-start" }}>
                  {[
                    { n: "١", t: "اطلب المجموعة", d: "توصيل مباشر إلى باب منزلك", icon: "📦" },
                    { n: "٢", t: "اقرأ الكتب", d: "محتوى عملي مختار بعناية", icon: "📚" },
                    { n: "٣", t: "فعّل الأداة الرقمية", d: "اشتراك SaaS مجاني لمدة سنة", icon: "🛠️" },
                    { n: "٤", t: "طبّق وتابع تقدّمك", d: "من التطبيق في أي وقت ومكان", icon: "📱" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ textAlign: "center", width: 140 }}>
                        <div style={{ width: 52, height: 52, borderRadius: 14, background: dark, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", fontSize: 22 }}>{item.icon}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: dark, marginBottom: 2 }}>{item.t}</div>
                        <div style={{ fontSize: 10, color: "#bbb" }}>{item.d}</div>
                      </div>
                      {i < 3 && <div style={{ color: "#ddd", fontSize: 16, padding: "0 8px", marginTop: -30 }}>←</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* APP SECTION */}
              <div style={{ padding: "48px 40px", background: dark, display: "flex", gap: 36, alignItems: "center", color: "#fff" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 9, color: gold, letterSpacing: 4, marginBottom: 12, fontWeight: 700 }}>تطبيق الهاتف</div>
                  <div style={{ fontSize: 28, fontWeight: 400, marginBottom: 12, ...s.heading }}>تطبيق Read to Lead</div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 2, marginBottom: 20 }}>
                    مشمول مع كل مجموعة وكل كتاب. ملخصات يومية، متابعة التقدّم في القراءة، وتوصيات مخصّصة حسب اهتماماتك المهنية.
                  </p>
                  <div style={{ display: "flex", gap: 10 }}>
                    <div style={{ background: "#fff", color: dark, padding: "10px 20px", borderRadius: 8, fontSize: 12, fontWeight: 700 }}>🍎 App Store</div>
                    <div style={{ background: "rgba(255,255,255,0.08)", color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 12, fontWeight: 700, border: "1px solid rgba(255,255,255,0.1)" }}>🤖 Google Play</div>
                  </div>
                </div>
                <div style={{ width: 150, height: 260, background: "rgba(255,255,255,0.03)", borderRadius: 28, border: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, flexShrink: 0 }}>📱</div>
              </div>

              {/* FOOTER */}
              <div style={{ padding: "18px 36px", background: "#fff", borderTop: "1px solid #F0EDE6", textAlign: "center", fontSize: 11, color: "#ccc" }}>
                © ٢٠٢٦ Read to Lead — تجربة قراءة محسّنة | 🇸🇦 🇦🇪 🇰🇼 🇧🇭 🇶🇦 🇴🇲
              </div>
            </div>
          </div>
        )}

        {/* ======================== TAB 3: KIT PAGE ======================== */}
        {tab === 3 && (
          <div>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 10, color: gold, letterSpacing: 4, marginBottom: 12, fontWeight: 700 }}>صفحة المنتج</div>
              <h2 style={{ fontSize: 36, fontWeight: 400, ...s.heading }}>صفحة بيع المجموعة</h2>
              <p style={{ fontSize: 13, color: muted }}>مُحسَّنة للتحويل — إطار PASTOR + إبراز أداة SaaS</p>
            </div>
            <div style={{ background: cream, borderRadius: 24, overflow: "hidden", border: "1px solid #E8E4DB", color: dark, boxShadow: "0 40px 120px rgba(0,0,0,0.3)" }}>
              {/* Mini nav */}
              <div style={{ padding: "14px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", borderBottom: "1px solid #F0EDE6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: gold, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>📖</div>
                  <span style={{ fontSize: 14, fontWeight: 700, ...s.heading }}>Read to Lead</span>
                </div>
                <div style={{ display: "flex", gap: 20, fontSize: 12, color: "#bbb" }}>
                  {["المجموعات", "المكتبة", "التطبيق"].map((t, i) => <span key={i}>{t}</span>)}
                </div>
              </div>

              {/* PRODUCT HERO */}
              <div style={{ padding: "40px 36px", display: "flex", gap: 32, background: "#fff" }}>
                <div style={{ width: 340, minHeight: 320, background: cream, borderRadius: 16, border: "1px solid #E8E4DB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ textAlign: "center", color: "#ccc" }}><div style={{ fontSize: 64, marginBottom: 8 }}>🚀📚</div><div style={{ fontSize: 11 }}>صور المجموعة والكتب</div></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 9, color: "#6c5ce7", letterSpacing: 3, marginBottom: 8, fontWeight: 700 }}>STARTUP BUILDER KIT</div>
                  <h1 style={{ fontSize: 32, fontWeight: 500, color: dark, margin: "0 0 12px", ...s.heading }}>كيت ريادة الأعمال</h1>
                  <p style={{ fontSize: 14, color: "#888", lineHeight: 1.9, marginBottom: 20 }}>
                    خمسة كتب متخصصة + اشتراك سنوي في StartupKit Pro + تطبيق Read to Lead — كل ما تحتاجه لبناء شركتك الناشئة بمنهجية صحيحة.
                  </p>
                  {["📚 خمسة كتب في ريادة الأعمال — خلاصة ٢٠ كتاباً عالمياً", "🛠️ اشتراك سنوي مجاني في StartupKit Pro (بقيمة $١٢٠/سنة)", "📱 اشتراك تطبيق Read to Lead لمدة سنة كاملة", "📋 ٦٧ أداة جاهزة — نموذج العمل، النموذج المالي، العرض التقديمي", "📦 توصيل مجاني لجميع دول الخليج"].map((f, i) => (
                    <div key={i} style={{ padding: "8px 0", fontSize: 13, color: "#666", borderBottom: i < 4 ? "1px solid #F5F3EE" : "none" }}>{f}</div>
                  ))}
                  <div style={{ background: cream, borderRadius: 14, padding: 22, marginTop: 20 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: 40, fontWeight: 400, color: dark, ...s.heading }}>٢٤٩</span>
                      <span style={{ fontSize: 14, color: "#bbb" }}>ر.س</span>
                      <span style={{ fontSize: 14, color: "#ddd", textDecoration: "line-through" }}>٤٩٩</span>
                      <span style={{ background: "#e74c3c", color: "#fff", padding: "3px 12px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>خصم ٥٠٪</span>
                    </div>
                    <button style={{ width: "100%", padding: "16px 0", background: "#6c5ce7", color: "#fff", border: "none", borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: "pointer" }}>اطلب المجموعة — التوصيل مجاني ←</button>
                    <div style={{ textAlign: "center", fontSize: 10, color: "#bbb", marginTop: 8 }}>🔒 دفع آمن | 🔄 ضمان ١٤ يوماً | 📦 ٣-٥ أيام عمل</div>
                  </div>
                </div>
              </div>

              {/* SAAS BANNER */}
              <div style={{ margin: "0 36px 32px", background: "linear-gradient(135deg, #6c5ce7, #a29bfe)", borderRadius: 16, padding: 28, color: "#fff", display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, opacity: 0.7, marginBottom: 4 }}>🎁 مشمول مع المجموعة</div>
                  <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, ...s.heading }}>اشتراك سنوي مجاني في StartupKit Pro</div>
                  <div style={{ fontSize: 12, opacity: 0.8, lineHeight: 1.8 }}>٦٧ أداة عملية — نموذج العمل التجاري، حاسبة اقتصاديات الوحدة، مُعدّ العروض التقديمية، تحليل SWOT، النموذج المالي. طبّق ما تقرأه مباشرة.</div>
                </div>
                <div style={{ width: 130, height: 90, background: "rgba(255,255,255,0.12)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, opacity: 0.6, flexShrink: 0 }}>لقطة من الأداة</div>
              </div>

              {/* REVIEWS */}
              <div style={{ padding: "0 36px 32px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 500, color: dark, marginBottom: 16, textAlign: "center", ...s.heading }}>⭐⭐⭐⭐⭐ آراء العملاء</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  {[
                    { name: "محمد — الرياض 🇸🇦", text: "أفضل استثمار في تطوير الذات. الكتب عملية والأداة الرقمية ساعدتني في تطبيق كل ما تعلّمته." },
                    { name: "نورة — دبي 🇦🇪", text: "المجموعة غيّرت أسلوب عملي بالكامل. StartupKit Pro أصبحت أداة يومية لا أستغني عنها." },
                    { name: "عبدالله — الكويت 🇰🇼", text: "التوصيل سريع وجودة المحتوى استثنائية. طلبت مجموعة الإنتاجية أيضاً." },
                  ].map((r, i) => (
                    <div key={i} style={{ background: cream, borderRadius: 12, padding: 18, border: "1px solid #E8E4DB" }}>
                      <div style={{ fontSize: 10, color: gold, marginBottom: 8 }}>⭐⭐⭐⭐⭐</div>
                      <div style={{ fontSize: 12, color: "#666", lineHeight: 1.8, marginBottom: 8 }}>"{r.text}"</div>
                      <div style={{ fontSize: 10, color: "#bbb", fontWeight: 700 }}>{r.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================== TAB 4: GROWTH ======================== */}
        {tab === 4 && (
          <div>
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontSize: 10, color: gold, letterSpacing: 4, marginBottom: 12, fontWeight: 700 }}>محرّك النمو</div>
              <h2 style={{ fontSize: 42, fontWeight: 400, ...s.heading }}>Growth Engine</h2>
              <p style={{ fontSize: 14, color: muted, lineHeight: 1.8 }}>دورة نمو ذاتية التغذية: كتب ← تفعيل SaaS ← استخدام يومي ← إحالات عضوية</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, marginBottom: 48 }}>
              {/* LOOP */}
              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "20px 0 0 20px", padding: "40px 32px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 20 }}>🔄 دورة النمو الأساسية</div>
                <div style={{ textAlign: "center", lineHeight: 3, fontSize: 14 }}>
                  {[
                    { t: "شراء المجموعة", c: "#6c5ce7", sub: "Physical Product" },
                    { t: "تفعيل أداة SaaS", c: "#00b894", sub: "Digital Activation" },
                    { t: "استخدام يومي للأداة", c: "#e17055", sub: "Retention" },
                    { t: "مشاركة النتائج", c: gold, sub: "Organic Referral" },
                    { t: "عملاء جدد يشترون", c: "#6c5ce7", sub: "Loop Restart ↩" },
                  ].map((step, i) => (
                    <div key={i}>
                      <span style={{ color: step.c, fontWeight: 700 }}>{step.t}</span>
                      <span style={{ fontSize: 9, color: muted, marginRight: 8 }}>{step.sub}</span>
                      {i < 4 && <div style={{ color: "rgba(255,255,255,0.1)", fontSize: 16 }}>↓</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* ECONOMICS */}
              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "0 20px 20px 0", padding: "40px 32px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 20 }}>📊 اقتصاديات الوحدة</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {[
                    { l: "متوسط قيمة الطلب", v: "~٢٣٠ ر.س" },
                    { l: "تكلفة البضاعة", v: "~٧٠ ر.س" },
                    { l: "هامش الربح", v: "~٧٠٪" },
                    { l: "تكلفة الاستحواذ", v: "< ٥٠ ر.س" },
                    { l: "القيمة الدائمة (سنة)", v: "~٣٥٠ ر.س" },
                    { l: "LTV : CAC", v: "٧ : ١ ✓" },
                  ].map((m, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: 14 }}>
                      <div style={{ fontSize: 10, color: muted, marginBottom: 4 }}>{m.l}</div>
                      <div style={{ fontSize: 22, fontWeight: 300, ...s.heading }}>{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FUNNEL TABLE */}
            <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 20, padding: "32px 28px", marginBottom: 48 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 20 }}>🎯 قمع الحملة الإعلانية — سوق الخليج</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead><tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  {["المرحلة", "القناة", "الهدف", "الميزانية", "الرسالة"].map((h, i) => (
                    <th key={i} style={{ padding: "12px 10px", textAlign: "right", fontWeight: 700, color: muted, fontSize: 10, letterSpacing: 1 }}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {[
                    ["الوعي", "Meta + Snap + TikTok", "مشاهدات وتفاعل", "٤٠٪", "ليست مجرد كتب — تجربة تعلّم متكاملة"],
                    ["الاهتمام", "إعادة استهداف + Google", "زيارات الصفحة", "٣٠٪", "اقرأ وطبّق بأداة SaaS مجانية"],
                    ["التحويل", "DPA + بريد + رسائل", "الشراء", "٢٠٪", "خصم ٥٠٪ + أداة SaaS هدية"],
                    ["ما بعد الشراء", "بريد + واتساب", "تفعيل وبيع إضافي", "١٠٪", "فعّل اشتراكك الآن"],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                      {row.map((cell, j) => <td key={j} style={{ padding: "14px 10px", color: j === 0 ? "#fff" : "rgba(255,255,255,0.4)", fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* RETENTION */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
              {[
                { t: "تجديد اشتراك SaaS", icon: "🔄", d: "بعد انتهاء السنة المجانية، يتحوّل العميل إلى مشترك شهري أو سنوي — إيرادات متكررة مستدامة.", m: "$٤—١٢ شهرياً", c: "#6c5ce7" },
                { t: "بيع مجموعات إضافية", icon: "📦", d: "عميل كيت ريادة الأعمال ← عرض كيت الإنتاجية بخصم ٣٠٪ — زيادة القيمة الدائمة للعميل.", m: "+٣٠٪ قيمة دائمة", c: "#00b894" },
                { t: "تفاعل التطبيق", icon: "📱", d: "إشعارات يومية بملخصات وتوصيات ← عودة مستمرة للتطبيق ← ولاء طويل الأمد للعلامة.", m: "هدف DAU: ٢٥٪", c: gold },
              ].map((s2, i) => (
                <div key={i} style={{
                  background: `${s2.c}08`, padding: "36px 24px",
                  borderRadius: i === 0 ? "20px 0 0 20px" : i === 2 ? "0 20px 20px 0" : 0,
                  border: `1px solid ${s2.c}10`,
                }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{s2.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{s2.t}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.9, marginBottom: 14 }}>{s2.d}</div>
                  <div style={{ background: s2.c, color: "#fff", padding: "5px 14px", borderRadius: 6, display: "inline-block", fontSize: 11, fontWeight: 700 }}>{s2.m}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================== TAB 5: IMPLEMENTATION ======================== */}
        {tab === 5 && (
          <div>
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontSize: 10, color: gold, letterSpacing: 4, marginBottom: 12, fontWeight: 700 }}>خطة التنفيذ</div>
              <h2 style={{ fontSize: 42, fontWeight: 400, ...s.heading }}>من الرؤية إلى الإطلاق</h2>
            </div>

            {/* SITEMAP */}
            <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 20, padding: "36px 32px", marginBottom: 32, border: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 20 }}>🗺️ خريطة الموقع</div>
              <div style={{ fontFamily: "'Courier New', monospace", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 2.4 }}>
                <div style={{ color: gold, fontWeight: 700 }}>readtolead.store</div>
                <div style={{ paddingRight: 24 }}>
                  <div>├─ <span style={{ color: "#fff" }}>/</span> <span style={{ color: muted }}>الرئيسية — Hero + المجموعات + التطبيق + المكتبة</span></div>
                  <div>├─ <span style={{ color: "#6c5ce7" }}>/kits/startup</span> <span style={{ color: muted }}>كيت ريادة الأعمال + StartupKit Pro</span></div>
                  <div>├─ <span style={{ color: "#00b894" }}>/kits/productivity</span> <span style={{ color: muted }}>كيت الإنتاجية + DuckDoro</span></div>
                  <div>├─ <span style={{ color: "#e17055" }}>/kits/sales-marketing</span> <span style={{ color: muted }}>كيت المبيعات + DuckDash</span></div>
                  <div>├─ <span style={{ color: gold }}>/kits/everything</span> <span style={{ color: muted }}>المجموعة الشاملة</span></div>
                  <div>├─ <span style={{ color: "#fff" }}>/library</span> <span style={{ color: muted }}>المكتبة — Simply + Duck + Growth</span></div>
                  <div>├─ <span style={{ color: "#fff" }}>/app</span> <span style={{ color: muted }}>صفحة تطبيق Read to Lead</span></div>
                  <div>└─ /about · /gift-card · /faq</div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, marginBottom: 32 }}>
              {/* TECH */}
              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "20px 0 0 20px", padding: "36px 28px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 20 }}>🔧 القرارات التقنية</div>
                {[
                  { l: "المنصة", v: "Shopify — إعادة تصميم الثيم على readtolead.store" },
                  { l: "صفحات الهبوط", v: "نقل من Lovable إلى صفحات Shopify مخصّصة" },
                  { l: "العملة", v: "الريال السعودي كعملة أساسية — اكتشاف تلقائي لدولة الخليج" },
                  { l: "الدفع", v: "Tamara + Tabby (تقسيط) + Apple Pay + بطاقة ائتمان" },
                  { l: "الشحن", v: "أرامكس / SMSA — جميع دول الخليج الست — ٣ إلى ٥ أيام" },
                  { l: "ربط SaaS", v: "كود قسيمة فريد في بريد ما بعد الشراء" },
                  { l: "التتبّع", v: "Meta Pixel + Snap Pixel + GA4 + GTM Server-side" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                    <span style={{ fontSize: 9, color: gold, fontWeight: 700, minWidth: 80, letterSpacing: 1 }}>{item.l}</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{item.v}</span>
                  </div>
                ))}
              </div>

              {/* CHECKLIST */}
              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "0 20px 20px 0", padding: "36px 28px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 20 }}>📋 قائمة الإطلاق — المرحلة الأولى</div>
                {[
                  "إعادة تصميم readtolead.store وفق الإطار الجديد",
                  "تحويل التسعير من الجنيه المصري إلى الريال السعودي",
                  "ربط كل مجموعة بأداة SaaS المقابلة (نظام قسائم)",
                  "إنشاء صفحة التطبيق مع روابط App Store و Google Play",
                  "إعداد مناطق الشحن لدول الخليج الست",
                  "تفعيل التقسيط عبر Tamara و Tabby",
                  "إعداد Meta Pixel + Snap Pixel + Conversions API",
                  "إطلاق حملة التوعية الأولى — ٥٠٠ ر.س يومياً",
                  "تصميم تسلسل بريد الترحيب → تفعيل SaaS",
                  "إعداد رسائل واتساب: متابعة الشراء + بيع إضافي",
                ].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 0", borderBottom: i < 9 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                    <div style={{ width: 18, height: 18, borderRadius: 5, border: `1.5px solid ${gold}40`, flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "24px 40px", textAlign: "center" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.15)", letterSpacing: 2 }}>READ TO LEAD — VISION DOCUMENT v2.0 — CONFIDENTIAL</div>
      </div>
    </div>
  );
}
