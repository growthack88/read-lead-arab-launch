import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-4xl mx-auto px-4 space-y-8">
        <p className="text-sm uppercase tracking-wider text-neutral-500">THE PROBLEM</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">لو ده حالك… يبقى أنت في المكان الصح</h2>

        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
          <p>بتقرأ محتوى تسويقي كتير… بس لسه مش عارف تربط الخيوط ببعض.</p>
          <p>عندك معلومات متفرقة عن Meta Ads هنا، وSEO هناك، وContent Marketing في مكان تالت — بس مفيش نظام واضح بيربطهم.</p>
          <p>بتصرف وقت في Trial & Error كتير. بتجرب حاجات من غير Framework. بتبني حملات من غير Strategy. النتيجة؟ Burnout وميزانية بتروح.</p>
          <p>والأصعب من كده — مش عارف تبدأ منين. هل المشكلة في الاستراتيجية؟ في الـ Funnel؟ في الـ Offer؟ ولّا فيك أنت شخصياً كـ Marketer؟</p>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 space-y-3">
          <p className="text-xl text-white font-bold">الحقيقة؟ المشكلة مش إنك محتاج معلومات أكتر.</p>
          <p className="text-xl text-emerald-400 font-bold">المشكلة إنك محتاج نظام.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
