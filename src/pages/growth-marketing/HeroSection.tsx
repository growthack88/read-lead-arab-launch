import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CHECKOUT_URL = "https://si51ve-s6.myshopify.com/cart/42908397895785:1?channel=buy_button";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />

      <div className={`container max-w-6xl mx-auto px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <span className="inline-block text-sm border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 rounded-full px-4 py-1.5">
              لكل ماركتير، صاحب بيزنس، أو حد لسه بيبدأ في التسويق
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              كل اللي محتاجه عشان تبني ماكينة نمو حقيقية — في{" "}
              <span className="bg-gradient-to-l from-emerald-400 to-blue-400 bg-clip-text text-transparent">بوكس واحد</span>
            </h1>
            <p className="text-xl text-neutral-300">3 كتب مطبوعة + نسخ رقمية + بونص لكل كتاب + 9 أدوات تسويق مطبوعة</p>
            <p className="text-lg text-neutral-400">من الاستراتيجية... للتنفيذ... للنمو — كله في إيدك</p>

            <div className="flex items-center gap-4">
              <span className="text-2xl text-red-400 line-through">5,497 ج.م</span>
              <span className="text-4xl font-bold text-emerald-400">1,499 ج.م</span>
            </div>

            <a
              href={CHECKOUT_URL}
              className="inline-block bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
            >
              🛒 اطلب البوكس دلوقتي
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
              <span>✅ كتب مطبوعة + نسخ رقمية</span>
              <span>✅ أدوات مطبوعة في البوكس</span>
              <span>✅ بونص رقمي — وصول فوري</span>
              <span>✅ شحن لحد باب البيت</span>
            </div>
          </div>

          {/* Visual - Box Hero Image */}
          <div className="relative flex justify-center items-center">
            <img src="/lovable-uploads/growth-box-hero.jpg" alt="Growth Marketing Lead Box" className="w-full max-w-lg rounded-2xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
