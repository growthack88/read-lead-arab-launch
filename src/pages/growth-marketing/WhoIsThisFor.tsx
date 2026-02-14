import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const forItems = [
  "ماركتير لسه بيبدأ — وعايز يبني أساس صح من أول يوم",
  "ماركتير شغال ومحتاج يرتّب أفكاره — عنده خبرة بس المعلومات متناثرة",
  "صاحب بيزنس أو Startup — محتاج يفهم التسويق بنفسه",
  "Performance Marketer — شاطر في Ads بس عايز يفهم الصورة الكبيرة",
  "صاحب Agency أو Team Lead — عايز يبني فريق Growth متوازن",
  "Product Manager — عايز يفهم PLG والنمو",
  "طالب أو خريج — عايز يدخل سوق العمل بمعرفة عملية",
];

const notForItems = [
  'بتدور على "خلطة سرية" تكسب مليون في شهر',
  "مش مستعد تقرأ وتطبق",
  "خبير +15 سنة وقرأت كل حاجة",
];

const WhoIsThisFor = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-5xl mx-auto px-4 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500">WHO IS THIS FOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">الكيت دي ليك لو...</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {forItems.map((item) => (
            <div key={item} className="bg-[#141414] border border-white/5 rounded-2xl p-5 flex items-start gap-3">
              <span className="text-emerald-400 text-lg">✅</span>
              <p className="text-neutral-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-4">
          <p className="text-neutral-500 text-sm font-medium">مش ليك لو:</p>
          {notForItems.map((item) => (
            <p key={item} className="text-neutral-500 text-sm">❌ {item}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
