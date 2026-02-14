import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BooksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-5xl mx-auto px-4 space-y-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500">WHAT'S INSIDE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">البوكس من جوه: 3 كتب + البونص بتاعهم + 9 أدوات مطبوعة</h2>
        </div>

        {/* Book 1 - BGM */}
        <div className="bg-[#141414] border border-white/5 border-r-4 border-r-blue-500 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            <img src="/lovable-uploads/gm-cover.jpg" alt="Building Growth Machine" className="w-40 h-56 object-cover rounded-xl shadow-lg flex-shrink-0 mx-auto md:mx-0" />
            <div className="space-y-6 flex-1">
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Building Growth Machine</h3>
                  <p className="text-neutral-400">ابني ماكينة نمو لشركتك</p>
                </div>
                <span className="mr-auto bg-blue-500/10 text-blue-400 text-sm px-3 py-1 rounded-full">السعر لوحده: 999 ج.م</span>
              </div>
              <p className="text-sm text-neutral-500">200+ صفحة • 10 فصول • 5 Blueprints</p>
              <p className="text-lg text-neutral-300">الكتاب اللي اتمنيت يكون موجود لما بدأت. مش فلسفة. مش تنظير. كتاب بيقولك «اعمل ده، بعدين ده، بعدين ده.»</p>
              <div className="space-y-3 text-neutral-300">
                <p>⚙️ الـ 4 Pillars: Acquisition → Activation → Retention → Monetization</p>
                <p>🎯 إزاي تحدد الـ North Star Metric — مقياس واحد يوجه الفريق كله</p>
                <p>🔄 Growth Loops بدل Funnels — نظام بيضاعف نفسه</p>
                <p>🧪 Experimentation Engine — نظام تجارب أسبوعي: Test → Learn → Scale</p>
                <p>👥 Team Operating System — أدوار واضحة وRituals أسبوعية</p>
                <p>🧠 Systems Thinking — ربط كل حاجة ببعض</p>
              </div>
              <p className="text-blue-400 font-medium">الكتاب ده للشركة. للنظام. للماكينة.</p>
              <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-6 space-y-3">
                <h4 className="text-white font-bold">🎁 البونص المجاني مع الكتاب:</h4>
                <p className="text-neutral-300">Bonus #1 — Growth Machine Video Library: 5 فيديوهات استراتيجية من Acquisition لحد Revenue</p>
                <p className="text-neutral-300">Bonus #2 — AI Prompt Library: +405K AI Prompt جاهزة — تسويق، نمو، بيع، محتوى، إعلانات</p>
                <p className="text-neutral-300">Bonus #3 — 5 Blueprints تطبيقية:</p>
                <ul className="space-y-1 text-neutral-400 text-sm pr-4">
                  <li>🔍 Digital Analytics & Tracking Blueprint</li>
                  <li>🚀 Growth Marketing Career Blueprint</li>
                  <li>🎯 Performance Marketing & Media Buying Blueprint</li>
                  <li>📱 Mobile Apps & SaaS Blueprint</li>
                  <li>📘 Performance Marketing Playbook: 2025 Edition</li>
                </ul>
                <p className="text-emerald-400 text-sm">+ كل التحديثات المستقبلية مجاناً</p>
              </div>
            </div>
          </div>
        </div>

        {/* Book 2 - GrowthDNA */}
        <div className="bg-[#141414] border border-white/5 border-r-4 border-r-emerald-500 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            <img src="/lovable-uploads/growthdna-cover.jpg" alt="GrowthDNA" className="w-40 h-56 object-cover rounded-xl shadow-lg flex-shrink-0 mx-auto md:mx-0" />
            <div className="space-y-6 flex-1">
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">GrowthDNA</h3>
                  <p className="text-neutral-400">اكتشف نوعك كـ Growth Marketer</p>
                </div>
                <span className="mr-auto bg-emerald-500/10 text-emerald-400 text-sm px-3 py-1 rounded-full">السعر لوحده: 999 ج.م</span>
              </div>
              <p className="text-sm text-neutral-500">21 أصل رقمي • 7 أنماط • 10 Playbooks</p>
              <p className="text-lg text-neutral-300">أول نظام متكامل لمسيرتك المهنية في التسويق والـ Growth. مش كتاب بس — ده نظام تشغيل كامل لكاريرك.</p>
              <div className="space-y-3 text-neutral-300">
                <p>🧬 الـ 7 Growth Archetypes — اكتشف أنت أنهي نوع</p>
                <p>📊 ليه 76% من الماركيترز حاسين إنهم تايهين</p>
                <p>🔍 نقاط قوتك وضعفك وBlindspot Map</p>
                <p>🎯 15 دور مصنفين 🟢🟡🔴 حسب ملاءمتك الطبيعية</p>
                <p>📈 إزاي تطور نفسك بناءً على طبيعتك — مش بناءً على كلام الناس</p>
              </div>
              <p className="text-emerald-400 font-medium">الكتاب ده ليك أنت. لشخصيتك. لمسارك المهني.</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["🎨 Creative Strategist", "📊 Data Strategist", "👥 Customer Experimenter", "⚙️ Technical Engineer", "🎯 Performance Optimizer", "⚡ Agile Executor", "🚀 Innovation Pioneer"].map((a) => (
                  <span key={a} className="bg-emerald-500/10 text-emerald-300 text-xs px-3 py-2 rounded-full text-center">{a}</span>
                ))}
              </div>

              <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-6 space-y-3">
                <h4 className="text-white font-bold">🎁 البونص المجاني مع الكتاب (21 أصل رقمي):</h4>
                <p className="text-neutral-300">🧭 GrowthDNA Assessment — اكتشف نمطك في دقيقتين. مبني على Big Five + علم النفس المعرفي</p>
                <p className="text-neutral-300">🧬 7 أدلة شاملة — Archetype Guides — دليل كامل لكل نمط مع الأدوار المناسبة وSkill Stack وخطة العمل</p>
                <p className="text-neutral-300">📊 10 Industry Playbooks — SaaS, E-commerce, EdTech, Fintech, Healthcare, Real Estate, F&B, FMCG, Agencies, Media</p>
                <p className="text-neutral-300">📋 خطة 90 يوم مخصصة — مبنية على الـ Archetype بتاعك + Weekly Reflection Log</p>
                <p className="text-neutral-300">🤖 مكتبة AI Prompts مخصصة — +405K prompt مقسمة بالنمط والدور والصناعة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Book 3 - Simply Marketing */}
        <div className="bg-[#141414] border border-white/5 border-r-4 border-r-amber-500 rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            <img src="/lovable-uploads/simply-marketing-cover.webp" alt="التسويق ببساطة" className="w-40 h-56 object-cover rounded-xl shadow-lg flex-shrink-0 mx-auto md:mx-0" />
            <div className="space-y-6 flex-1">
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">التسويق ببساطة</h3>
                  <p className="text-neutral-400">+70 إطار ومفهوم تسويقي في كتاب واحد</p>
                </div>
                <span className="mr-auto bg-amber-500/10 text-amber-400 text-sm px-3 py-1 rounded-full">السعر لوحده: 500 ج.م</span>
              </div>
              <p className="text-sm text-neutral-500">15 فصل • +70 Framework • 400+ صفحة</p>
              <p className="text-lg text-neutral-300">ده الكتاب اللي لو حد سألك «أقرأ إيه في التسويق؟» — ده جوابك. مش كتاب بيتكلم عن التسويق. ده كتاب بيعلمك التسويق.</p>
              <div className="space-y-3 text-neutral-300">
                <p>📚 +70 Framework من أهم الأطر التسويقية في العالم</p>
                <p>🔬 من AIDA لـ Porter's Five Forces لـ Jobs To Be Done</p>
                <p>📖 كل إطار: إيه هو، مين عمله، إمتى تستخدمه، وإزاي</p>
                <p>💡 التسويق الرقمي، المحتوى، الإعلانات، البيع، الـ Branding — كله</p>
                <p>✍️ أسلوب واضح ومباشر — نثر مش قوائم جافة</p>
              </div>
              <p className="text-amber-400 font-medium">الكتاب ده = دورة مكثفة في التسويق في 400+ صفحة.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
