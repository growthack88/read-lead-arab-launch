import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  { quote: "ده مش كتاب.. ده نظام تشغيل كامل للشركة. طبقناه في أسبوعين وشفنا نتائج فورية.", name: "أحمد محمود", role: "Founder — SaaS Startup" },
  { quote: "أخيرًا فهمت يعني إيه Growth Team. الـ Frameworks دي مش موجودة في المحتوى العربي.", name: "منى السيد", role: "Head of Marketing" },
  { quote: "بعد ما قريت الكتاب، غيّرت كل استراتيجية الـ Growth. من Random Campaigns لـ Systematic Approach.", name: "سارة أحمد", role: "Product Manager" },
  { quote: "كنت بصرف آلاف على Ads بدون نظام. بعد تطبيق الـ Growth Loops، قللت الـ CAC بنسبة 50%.", name: "ياسمين حسن", role: "Digital Marketing Manager" },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500">SOCIAL PROOF</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">شوف رأي اللي جرّبوا</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#141414] border border-white/5 rounded-2xl p-6 space-y-4">
              <p className="text-neutral-300 italic text-lg leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-neutral-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
