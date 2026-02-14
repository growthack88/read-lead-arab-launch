import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const without = [
  "بتتفرج على كورسات عشوائية وبتستنى حاجة تثبت",
  "بتقدم على أدوار مش مبنية لطريقة تفكيرك",
  "مش عارف تطوّر إيه الأول — كل حاجة مهمة",
  "بتصرف ميزانية على حملات من غير نظام",
  "بتبدأ كل مشروع من صفحة فاضية",
  "بتستخدم AI بـ prompts عامة مش بتوفرلك وقت",
];

const withKit = [
  "عندك 3 كتب بتغطي المعرفة + النظام + الشخصية",
  "15 دور مصنفين 🟢🟡🔴 حسب ملاءمتك الطبيعية",
  "Skill Gaps محددة بدقة مع أولويات تطوير واضحة",
  "Growth Machine System بتبني عليه — مش بتخمن",
  "9 أدوات مطبوعة تبدأ بيها فوراً — مفيش صفحة فاضية",
  "+405K AI Prompt مخصصة لنمطك ودورك وصناعتك",
];

const TransformationSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-6xl mx-auto px-4 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500">TRANSFORMATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">من تايه في الكورسات... لماركتير عنده نظام</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-8 space-y-4">
            <h3 className="text-red-400 font-bold text-lg">✕ من غير الكيت</h3>
            {without.map((item) => (
              <p key={item} className="text-neutral-400 text-sm">{item}</p>
            ))}
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-8 space-y-4">
            <h3 className="text-emerald-400 font-bold text-lg">✓ مع الكيت</h3>
            {withKit.map((item) => (
              <p key={item} className="text-neutral-300 text-sm">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
