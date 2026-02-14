import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { num: "3", label: "كتب مطبوعة + رقمية", color: "bg-gradient-to-l from-emerald-400 to-blue-400 bg-clip-text text-transparent" },
  { num: "9", label: "أدوات تسويق مطبوعة", color: "text-purple-400" },
  { num: "+21", label: "أصل رقمي بونص", color: "text-emerald-400" },
  { num: "70%", label: "توفير عن الشراء المنفصل", color: "text-amber-400" },
];

const StatsBar = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((s) => (
          <div key={s.num} className="bg-[#141414] border border-white/5 rounded-2xl p-6 text-center">
            <div className={`text-5xl font-bold mb-2 ${s.color}`}>{s.num}</div>
            <p className="text-sm text-neutral-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
