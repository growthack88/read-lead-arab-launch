import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const layers = [
  { emoji: "🧠", label: "المعرفة", book: "التسويق ببساطة", q: "إيه الأطر والمفاهيم اللي لازم أعرفها؟", color: "border-amber-500 text-amber-400" },
  { emoji: "🔧", label: "النظام", book: "Building Growth Machine", q: "إزاي أبني ماكينة نمو لشركتي؟", color: "border-blue-500 text-blue-400" },
  { emoji: "🧬", label: "الشخصية", book: "GrowthDNA", q: "أنا مين كـ Marketer وإزاي أطور نفسي؟", color: "border-emerald-500 text-emerald-400" },
  { emoji: "🛠️", label: "التنفيذ", book: "الأدوات المطبوعة", q: "أبدأ أنفذ بإيه النهاردة؟", color: "border-purple-500 text-purple-400" },
];

const SystemSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500">THE SYSTEM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">مش 3 كتب منفصلة — ده نظام واحد متكامل</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {layers.map((l) => (
            <div key={l.label} className={`bg-[#141414] border border-white/5 border-t-4 ${l.color.split(" ")[0]} rounded-2xl p-6 space-y-3`}>
              <span className="text-2xl">{l.emoji}</span>
              <p className={`font-bold ${l.color.split(" ")[1]}`}>{l.label}</p>
              <p className="text-white font-medium text-sm">{l.book}</p>
              <p className="text-neutral-500 text-sm">{l.q}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-400 text-lg">الأول تفهم المفاهيم → بعدين تبني النظام → بعدين تعرف نفسك → وتنفذ بالأدوات</p>
        <p className="text-center text-emerald-400 font-medium text-lg">ده مش تجميعة عشوائية. ده رحلة.</p>
      </div>
    </section>
  );
};

export default SystemSection;
