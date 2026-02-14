import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = [
  { n: 1, title: "Marketing Mix Canvas (7Ps)", desc: "تحليل كامل للعرض بتاعك" },
  { n: 2, title: "Ideal Customer Profile (ICP)", desc: "بروفايل العميل المثالي" },
  { n: 3, title: "Customer Persona Builder", desc: "شخصية العميل بالتفصيل" },
  { n: 4, title: "Customer Journey Map", desc: "رحلة العميل الكاملة" },
  { n: 5, title: "Content Planning Matrix", desc: "خطة محتوى منظمة" },
  { n: 6, title: "Campaign Planner", desc: "مخطط الحملة التسويقية" },
  { n: 7, title: "SWOT Analysis Worksheet", desc: "تحليل SWOT" },
  { n: 8, title: "SMART Goals Framework", desc: "أهداف واضحة وقابلة للقياس" },
  { n: 9, title: "Competitive Analysis Matrix", desc: "تحليل المنافسين" },
];

const ToolkitSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">📊 الأدوات التنفيذية: Marketing Strategy Toolkit</h2>
          <p className="text-lg text-neutral-300">9 أدوات مطبوعة جاهزة — في البوكس</p>
          <span className="inline-block bg-purple-500/10 text-purple-400 text-sm px-3 py-1 rounded-full">القيمة لوحدها: 999 ج.م</span>
        </div>

        <div className="space-y-3 text-lg text-neutral-300">
          <p>الكتب بتديك المعرفة. الأدوات بتخليك تنفذ.</p>
          <p>مش PDF بتتحمّل — دي أدوات مطبوعة فعلياً موجودة في البوكس جاهزة تستخدمها فوراً.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tools.map((t) => (
            <div key={t.n} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-start gap-4 hover:border-white/10 transition">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">{t.n}</span>
              <div>
                <p className="text-white font-medium">{t.title}</p>
                <p className="text-neutral-500 text-sm">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
          <span>✅ مطبوعة ومصممة — جاهزة في البوكس</span>
          <span>✅ تنفع تستخدمها فوراً مع فريقك</span>
          <span>✅ تنفع لأي بيزنس — Startup أو شركة كبيرة</span>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
