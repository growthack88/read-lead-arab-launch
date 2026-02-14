import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CHECKOUT_URL = "https://si51ve-s6.myshopify.com/cart/42908397895785:1?channel=buy_button";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 bg-gradient-to-b from-[#0a0a0a] via-emerald-950/20 to-[#0a0a0a] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-4xl mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white">مش محتاج تقرأ 100 كتاب.</h2>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-l from-emerald-400 to-blue-400 bg-clip-text text-transparent">
          محتاج الـ 3 الصح + الأدوات اللي تخليك تنفذ.
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-300">
          <span className="bg-white/5 border border-white/5 rounded-full px-4 py-2">📚 المعرفة + النظام + الشخصية</span>
          <span className="bg-white/5 border border-white/5 rounded-full px-4 py-2">🎁 Assessment + Playbooks + AI Prompts</span>
          <span className="bg-white/5 border border-white/5 rounded-full px-4 py-2">🛠️ 9 أدوات تنفذ بيها من النهاردة</span>
        </div>

        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          الفرق بين الماركتير اللي بيتوه والماركتير اللي بيبني — إن الثاني عنده نظام. الكيت دي هي النظام.
        </p>

        <div className="space-y-3">
          <p className="text-2xl text-red-400 line-through">5,497 ج.م</p>
          <p className="text-5xl font-bold text-emerald-400">1,499 ج.م فقط</p>
        </div>

        <a
          href={CHECKOUT_URL}
          className="inline-block bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold text-xl px-14 py-5 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
        >
          🛒 اطلب الـ Growth Marketing Kit دلوقتي
        </a>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-400">
          <span>✅ 3 كتب مطبوعة + نسخ رقمية</span>
          <span>✅ 9 أدوات مطبوعة في البوكس</span>
          <span>✅ بونص رقمي — وصول فوري</span>
          <span>✅ شحن لحد باب البيت</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
