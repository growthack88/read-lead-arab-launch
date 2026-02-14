import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  { border: "border-r-blue-500", q: "إيه النظام اللي لازم أبنيه؟", a: "Building Growth Machine" },
  { border: "border-r-emerald-500", q: "أنا مين كـ Growth Person؟", a: "GrowthDNA" },
  { border: "border-r-amber-500", q: "إيه الأطر والمفاهيم اللي لازم أعرفها؟", a: "التسويق ببساطة" },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-wider text-neutral-500">THE SOLUTION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">عشان كده عملنا الـ Growth Marketing Kit</h2>
          <p className="text-lg text-neutral-300">الكيت دي مش مجرد كتب تقرأها وتحطها على الرف.</p>
          <p className="text-lg text-neutral-300">دي نظام تشغيل كامل للماركتير الذكي — في بوكس واحد يوصلك لحد البيت.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.a} className={`bg-[#141414] border border-white/5 ${c.border} border-r-4 rounded-2xl p-8 space-y-4`}>
              <span className="text-2xl">🔹</span>
              <p className="text-neutral-300 text-lg">{c.q}</p>
              <p className="text-white font-bold text-xl">{c.a}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg font-medium py-4">
          <span className="text-red-400">❌ أنا تايه ومش عارف أبدأ منين</span>
          <span className="text-neutral-500 text-2xl hidden md:block">←</span>
          <span className="text-neutral-500 text-2xl md:hidden">↓</span>
          <span className="text-emerald-400">✅ أنا فاهم وعندي نظام وبنفذ</span>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
