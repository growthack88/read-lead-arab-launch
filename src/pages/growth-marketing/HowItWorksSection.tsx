import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { n: "1", title: "اطلب البوكس", desc: "اضغط على زرار الطلب واختار طريقة الدفع" },
  { n: "2", title: "البونصات توصلك بعد الاستلام", desc: "Blueprints, Assessment, AI Prompts, الفيديوهات — على الإيميل بعد ما تستلم البوكس" },
  { n: "3", title: "البوكس يوصلك لحد البيت", desc: "3 كتب مطبوعة + 9 أدوات مطبوعة — في بوكس واحد بالشحن" },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-5xl mx-auto px-4 space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">3 خطوات وبس</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#141414] border border-white/5 rounded-2xl p-8 text-center space-y-4">
              <span className="inline-flex w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 items-center justify-center text-xl font-bold">{s.n}</span>
              <h3 className="text-white font-bold text-lg">{s.title}</h3>
              <p className="text-neutral-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
