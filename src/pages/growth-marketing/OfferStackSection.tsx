import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CHECKOUT_URL = "https://si51ve-s6.myshopify.com/cart/42908397895785:1?channel=buy_button";

const items = [
  { label: "📘 كتاب Building Growth Machine (مطبوع + رقمي)", value: "999 ج.م" },
  { label: "🎁 بونص BGM (5 فيديوهات + 5 Blueprints + AI Prompts)", value: "مجاناً", free: true },
  { label: "📗 كتاب GrowthDNA (مطبوع + رقمي)", value: "999 ج.م" },
  { label: "🎁 بونص GrowthDNA (Assessment + 7 أدلة + 10 Playbooks + خطة 90 يوم)", value: "مجاناً", free: true },
  { label: "📙 كتاب التسويق ببساطة (مطبوع + رقمي)", value: "500 ج.م" },
  { label: "📊 Marketing Strategy Toolkit — 9 أدوات مطبوعة", value: "999 ج.م" },
  { label: "🤖 بونص رقمي إضافي", value: "1,000 ج.م" },
];

const OfferStackSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} id="order">
      <div className="container max-w-5xl mx-auto px-4 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-wider text-neutral-500">COMPLETE PACKAGE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">كل ده في بوكس واحد</h2>
        </div>

        {/* Offer table */}
        <div className="bg-[#141414] border border-emerald-500/20 rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className="flex justify-between items-center px-6 py-4 border-b border-white/5 last:border-b-0">
              <span className="text-neutral-300 text-sm md:text-base">{item.label}</span>
              <span className={`font-bold text-sm whitespace-nowrap ${item.free ? "text-emerald-400" : "text-neutral-400"}`}>{item.value}</span>
            </div>
          ))}
          <div className="flex justify-between items-center px-6 py-4 bg-white/5">
            <span className="text-white font-bold">القيمة الإجمالية</span>
            <span className="text-white font-bold text-lg">5,497 ج.م</span>
          </div>
        </div>

        {/* Bonus screenshots - side by side */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-emerald-400 text-center">📎 لمحة من البونصات الرقمية اللي هتوصلك</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-colors">
              <img src="/lovable-uploads/bonus-gm-access.png" alt="Building Growth Machine — بونص رقمي" className="w-full h-64 object-cover object-top" />
              <div className="bg-[#141414] px-4 py-3 text-center">
                <p className="text-sm text-neutral-300 font-medium">بونص Building Growth Machine</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-colors">
              <img src="/lovable-uploads/bonus-growthdna-access.png" alt="GrowthDNA — بونص رقمي" className="w-full h-64 object-cover object-top" />
              <div className="bg-[#141414] px-4 py-3 text-center">
                <p className="text-sm text-neutral-300 font-medium">بونص GrowthDNA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing + CTA */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="text-2xl text-red-400 line-through">5,497 ج.م</span>
            <span className="text-5xl font-bold text-emerald-400">1,499 ج.م</span>
          </div>
          <span className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium">وفّر أكتر من 70%</span>
          <div>
            <a
              href={CHECKOUT_URL}
              className="inline-block bg-gradient-to-l from-emerald-500 to-emerald-600 text-white font-bold text-lg px-12 py-5 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-emerald-500/20"
            >
              🛒 اطلب البوكس دلوقتي — 1,499 ج.م
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStackSection;
