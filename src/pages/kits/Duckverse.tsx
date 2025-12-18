import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import SEO from "@/components/SEO";
import QuantitySelector from "@/components/QuantitySelector";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Duckverse = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const shopifyBaseUrl = "https://si51ve-s6.myshopify.com/cart";
  const productVariantId = "42622879105129";
  const checkoutUrl = "https://si51ve-s6.myshopify.com/cart/42622879105129:1?channel=buy_button";

  return <div className="min-h-screen bg-[#F2F5F4] font-tajawal" dir="rtl">
      <SEO title="كتب Duckverse - ثلاثية البط | Read to Lead" description="3 كتب هتغيّر طريقة شغلك بالكامل - من نفسك، لفريقك، لسوقك. فن التبطيط، بط شيب، بط ماركتنج." image="/assets/duckverse-banner.jpg" url="https://land.readtolead.store/duckverse" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(22,147,128,0.08)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-[#2D3735] hover:text-[#169380] transition-colors font-medium">
                الرئيسية
              </a>
              <a href="#" className="text-[#2D3735] hover:text-[#169380] transition-colors font-medium">
                المنتجات
              </a>
              <a href="#" className="text-[#2D3735] hover:text-[#169380] transition-colors font-medium">
                من نحن
              </a>
              <a href="#" className="text-[#2D3735] hover:text-[#169380] transition-colors font-medium">
                تواصل معنا
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-[#F2F5F4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            {/* Right Column - Text */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="text-5xl mb-4">🦆</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3735] leading-tight">
                كتب Duckverse - ثلاثية البط
              </h1>
              <p className="text-2xl font-bold text-[#169380]">
                3 كتب هتغيّر طريقة شغلك بالكامل
              </p>
              <p className="text-xl text-[#2D3735]/80">
                من نفسك، لفريقك، لسوقك.
              </p>
              
              <div className="bg-white p-6 rounded-[18px] border border-[#169380]/10 shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <p className="text-[#2D3735]/80 mb-3">مش لازم تصرخ عشان تنجح.</p>
                <p className="text-[#2D3735]/80 mb-3">مش لازم تحرق نفسك عشان تنجز.</p>
                <p className="text-[#2D3735]/80 mb-4">ومش لازم تدوّش الناس عشان تبيع.</p>
                <p className="text-[#2D3735]/70 leading-relaxed">
                  في عالم Duckverse، البط بيشتغل بهدوء، بيقود بثقة، وبيسوّق بذكاء. والنتيجة؟ بتيجي من غير ما تتعب.
                </p>
              </div>
              
              {/* Hero CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#pricing" className="bg-[#F4C95D] text-[#2D3735] px-8 py-4 rounded-[14px] text-lg font-bold hover:bg-[#F4C95D]/90 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(244,201,93,0.3)] text-center">
                  اطلب الآن
                </a>
                <a href="#features" className="bg-transparent border-2 border-[#3A86FF] text-[#3A86FF] px-8 py-4 rounded-[14px] text-lg font-bold hover:bg-[#3A86FF] hover:text-white transition-all text-center">
                  تعرف على المحتويات
                </a>
              </div>
            </div>

            {/* Left Column - Image */}
            <div className="order-1 md:order-2">
              <img 
                src="/lovable-uploads/duckverse-hero.png" 
                alt="كتب Duckverse - ثلاثية البط"
                className="w-full rounded-[18px] shadow-[0_4px_20px_rgba(22,147,128,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Duckverse Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#2D3735]">
              🌍 إيه هو Duckverse؟
            </h2>
            <p className="text-center text-lg text-[#2D3735]/80 mb-10">
              Duckverse مش مجرد كتب — ده نظام تشغيل جديد لحياتك المهنية.
            </p>
            <p className="text-center text-[#2D3735]/70 mb-10">
              3 كتب بتكمّل بعض وبتخليك تشوف الشغل من زاوية جديدة تمامًا:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10 hover:shadow-[0_4px_20px_rgba(22,147,128,0.12)] transition-all">
                <div className="text-3xl mb-3">1️⃣</div>
                <h3 className="text-xl font-bold mb-2 text-[#2D3735]">فن التبطيط (Ducktivity)</h3>
                <p className="text-[#2D3735]/70 mb-3">ازاي تشتغل بهدوء وتنجز بذكاء.</p>
                <p className="text-[#169380] font-medium">↳ النتيجة: تبطّل تحرق نفسك</p>
              </div>
              
              <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10 hover:shadow-[0_4px_20px_rgba(22,147,128,0.12)] transition-all">
                <div className="text-3xl mb-3">2️⃣</div>
                <h3 className="text-xl font-bold mb-2 text-[#2D3735]">بط شيب (Duckship)</h3>
                <p className="text-[#2D3735]/70 mb-3">ازاي تقود فريقك بثقة وهدوء من غير صريخ ولا ضغط.</p>
                <p className="text-[#169380] font-medium">↳ النتيجة: فريقك يشتغل معاك مش ضدك</p>
              </div>
              
              <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10 hover:shadow-[0_4px_20px_rgba(22,147,128,0.12)] transition-all">
                <div className="text-3xl mb-3">3️⃣</div>
                <h3 className="text-xl font-bold mb-2 text-[#2D3735]">بط ماركتنج (Duckting)</h3>
                <p className="text-[#2D3735]/70 mb-3">ازاي تسوّق بذكاء من غير دوشة الترندات.</p>
                <p className="text-[#169380] font-medium">↳ النتيجة: براند الناس بتفتكره</p>
              </div>
            </div>

            <div className="mt-10 text-center bg-[#0F7468] p-6 rounded-[18px]">
              <p className="text-xl font-bold text-white mb-2">🔄 الرحلة الكاملة: من نفسك → لفريقك → لسوقك</p>
              <p className="text-[#F4C95D] font-medium">فلسفة واحدة: هدوء + وضوح + نتيجة. 🦆</p>
              <p className="text-white/80 mt-3 text-sm">لأن البطة اللي بتصيح في البركة مش بتصطاد سمك... بتزعج السمك.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-[#D9E4E1]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2D3735]">
            🎯 الباكدج ده مناسب لمين؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* For You */}
            <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10">
              <h3 className="text-xl font-bold mb-5 text-[#169380]">✅ ده ليك لو انت:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">🚀</span>
                  <span><strong>صاحب مشروع أو ستارتاب</strong> — عايز تطوّر نفسك وفريقك وتسويقك بأسلوب عملي وواقعي.</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">👥</span>
                  <span><strong>مدير فريق</strong> — عايز ترفع الأداء من غير ما تحرق الناس ولا تحرق نفسك.</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">💼</span>
                  <span><strong>فريلانسر</strong> — عايز نظام إنتاجية وقيادة وتسويق يخلي الشغل أخف وأوضح.</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">📈</span>
                  <span><strong>مسوّق</strong> — زهقت من كلام الكتب الكلاسيكي وحابب منهج مصري بسيط بيجيب نتيجة.</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">🎯</span>
                  <span><strong>أي حد</strong> — عايز يشتغل، يقود، ويسوّق بهدوء... بس بنِتَايج واضحة.</span>
                </li>
              </ul>
            </div>

            {/* Not For You */}
            <div className="bg-white p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#EE6C4D]/20">
              <h3 className="text-xl font-bold mb-5 text-[#EE6C4D]">❌ مش ليك لو:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#EE6C4D]">❌</span>
                  <span>بتدوّر على كتب تنمية بشرية فيها كلام حلو وبس</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#EE6C4D]">❌</span>
                  <span>مش مستعد تطبّق اللي هتقرأه</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#EE6C4D]">❌</span>
                  <span>فاكر إن النجاح = صراخ + ساعات شغل أكتر</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Books Content Section */}
      <section id="features" className="py-16 bg-[#F2F5F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#2D3735]">
              📚 محتوى Duckverse
            </h2>
            <p className="text-center text-lg text-[#2D3735]/70 mb-10">3 كتب مطبوعة في باكدج واحد:</p>

            {/* Book 1 */}
            <div className="bg-white rounded-[18px] p-6 md:p-8 shadow-[0_2px_12px_rgba(22,147,128,0.06)] mb-6 border-r-4 border-[#169380]">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">📗</span>
                <div>
                  <h3 className="text-xl font-bold text-[#2D3735]">الكتاب الأول: فن التبطيط | Ducktivity</h3>
                  <p className="text-[#169380] font-medium mt-1">اشتغل بهدوء.. وإنجز بذكاء.</p>
                </div>
              </div>
              <blockquote className="bg-[#F2F5F4] p-4 rounded-[14px] mb-4 text-[#2D3735]/70 italic">
                "البطة مش بتصحى الساعة 5... بتصحى لما جسمها يكون جاهز."
              </blockquote>
              <p className="text-[#2D3735]/70 mb-4">فلسفة الإنتاجية الهادية اللي بتخلّيك تنجز من غير ما تحرق نفسك.</p>
              <h4 className="font-bold text-[#2D3735] mb-3">🎯 هتتعلم:</h4>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>إدارة الطاقة قبل الوقت</strong> — لأن ساعة في الذروة &gt; 5 ساعات وانت مرهق</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>قاعدة السمكة الواحدة</strong> — ركّز على سمكة واحدة كبيرة بدل ما تلاحق كل السمك</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>مضاد ثقافة الطحن</strong> — النجاح مش في عدد الساعات، في جودة الإنجاز</span>
                </li>
              </ul>
              <p className="text-[#F4C95D] bg-[#0F7468] inline-block px-4 py-2 rounded-[10px] font-bold">💡 النتيجة: تخلص شغلك وعندك طاقة لحياتك.</p>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-[18px] p-6 md:p-8 shadow-[0_2px_12px_rgba(22,147,128,0.06)] mb-6 border-r-4 border-[#F4C95D]">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">📙</span>
                <div>
                  <h3 className="text-xl font-bold text-[#2D3735]">الكتاب الثاني: بط شيب | Duckship</h3>
                  <p className="text-[#169380] font-medium mt-1">قُد بذكاء مش بصوت عالي.</p>
                </div>
              </div>
              <blockquote className="bg-[#F2F5F4] p-4 rounded-[14px] mb-4 text-[#2D3735]/70 italic">
                "القيادة الحقيقية بتخلق فرق بتسبح معاك... مش بتغرق وراك."
              </blockquote>
              <p className="text-[#2D3735]/70 mb-4">اتعلم إزاي تبني ثقة بدل خوف... وسرب يشتغل معاك مش ضدك.</p>
              <h4 className="font-bold text-[#2D3735] mb-3">🎯 هتتعلم:</h4>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>البركة الآمنة</strong> — ازاي تخلق بيئة الناس فيها بتبدع مش بتخاف</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>التناغم بدل السيطرة</strong> — القائد الحقيقي بيوجّه مش بيتحكّم</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>التدريب بالسباحة مش بالمحاضرات</strong> — فريقك بيتعلم بالعمل مش بالكلام</span>
                </li>
              </ul>
              <p className="text-[#F4C95D] bg-[#0F7468] inline-block px-4 py-2 rounded-[10px] font-bold">💡 النتيجة: فريق بيشتغل بحماس من غير ما تراقبه كل ثانية.</p>
            </div>

            {/* Book 3 */}
            <div className="bg-white rounded-[18px] p-6 md:p-8 shadow-[0_2px_12px_rgba(22,147,128,0.06)] border-r-4 border-[#3A86FF]">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">📘</span>
                <div>
                  <h3 className="text-xl font-bold text-[#2D3735]">الكتاب الثالث: بط ماركتنج | Duckting™</h3>
                  <p className="text-[#169380] font-medium mt-1">سَوّق بذكاء.. من غير صُراخ.</p>
                </div>
              </div>
              <blockquote className="bg-[#F2F5F4] p-4 rounded-[14px] mb-4 text-[#2D3735]/70 italic">
                "التسويق الحقيقي مش إنك تصيح في السوق... إنك تفضل في الذاكرة."
              </blockquote>
              <p className="text-[#2D3735]/70 mb-4">ابني براند الناس تفتكره، مش حملة تِعدي.</p>
              <h4 className="font-bold text-[#2D3735] mb-3">🎯 هتتعلم:</h4>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>الموقع الذهني</strong> — ازاي تحجز مكان في دماغ عميلك قبل جيبه</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>القصة بتبيع مش المواصفات</strong> — الناس بتشتري إحساس مش منتج</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span><strong>السياق هو الملك</strong> — المحتوى مهم، بس الوقت والمكان أهم</span>
                </li>
              </ul>
              <p className="text-[#F4C95D] bg-[#0F7468] inline-block px-4 py-2 rounded-[10px] font-bold">💡 النتيجة: مبيعات مستقرة من غير ما تلاحق كل ترند.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2D3735]">
              🚀 ليه ثلاثية البط مختلفة؟
            </h2>
            <p className="text-center text-lg text-[#2D3735]/70 mb-10">لأن الأسلوب:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Other Books */}
              <div className="bg-[#F2F5F4] p-6 rounded-[18px] border border-[#EE6C4D]/20">
                <h3 className="text-xl font-bold mb-5 text-[#EE6C4D]">❌ الكتب التانية:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[#2D3735]/70">
                    <span className="text-[#EE6C4D]">❌</span>
                    <span>مترجمة من واقع أمريكي مش زينا</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/70">
                    <span className="text-[#EE6C4D]">❌</span>
                    <span>كلام نظري حلو بس مش بيتطبق</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/70">
                    <span className="text-[#EE6C4D]">❌</span>
                    <span>كل كتاب لوحده ومفيش نظام متكامل</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/70">
                    <span className="text-[#EE6C4D]">❌</span>
                    <span>تنمية بشرية فاضية وأحلام وردية</span>
                  </li>
                </ul>
              </div>

              {/* Duckverse */}
              <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] border border-[#169380]/20">
                <h3 className="text-xl font-bold mb-5 text-[#169380]">✅ ثلاثية البط:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">✅</span>
                    <span>🇪🇬 <strong>مصري وبسيط</strong> — فلسفة نابعة من واقع الشغل الحقيقي في منطقتنا.</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">✅</span>
                    <span>⚡ <strong>عملي ومباشر</strong> — كل كتاب = قصص قصيرة + أدوات تطبيق فورية.</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">✅</span>
                    <span>🔄 <strong>متكامل</strong> — من إدارة الذات → إلى القيادة → إلى التسويق.</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">✅</span>
                    <span>💯 <strong>واقعي</strong> — مفيش أوهام ولا كلام تنمية بشرية فاضي.</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center mt-8 text-[#2D3735]/70">
              البطّ فاهم إن الدنيا مش وردية... بس فاهم كمان إزاي يعوم فيها. 🦆
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-[#D9E4E1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#2D3735]">
              💡 إزاي تستخدم الباكدج؟
            </h2>
            <p className="text-center text-[#2D3735]/70 mb-10">خطوة بخطوة:</p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] flex items-center gap-4">
                <span className="text-3xl">📗</span>
                <div>
                  <span className="font-bold text-[#2D3735]">الخطوة 1: فن التبطيط</span>
                  <span className="text-[#2D3735]/70"> → نظّم نفسك وضبط طاقتك</span>
                </div>
              </div>
              <div className="text-center text-2xl text-[#169380]">↓</div>
              <div className="bg-white p-5 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] flex items-center gap-4">
                <span className="text-3xl">📙</span>
                <div>
                  <span className="font-bold text-[#2D3735]">الخطوة 2: بط شيب</span>
                  <span className="text-[#2D3735]/70"> → اتعامل صح مع فريقك</span>
                </div>
              </div>
              <div className="text-center text-2xl text-[#169380]">↓</div>
              <div className="bg-white p-5 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] flex items-center gap-4">
                <span className="text-3xl">📘</span>
                <div>
                  <span className="font-bold text-[#2D3735]">الخطوة 3: بط ماركتنج</span>
                  <span className="text-[#2D3735]/70"> → ابني براند فعّال ومبيعات مستقرة</span>
                </div>
              </div>
              <div className="text-center text-2xl text-[#169380]">↓</div>
              <div className="bg-[#0F7468] p-5 rounded-[18px] flex items-center gap-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <span className="font-bold text-[#F4C95D]">النتيجة:</span>
                  <span className="text-white"> خرجت من دايرة العشوائية.. لعالم واضح ومنظّم اسمه Duckverse</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#EE6C4D]/10 border border-[#EE6C4D]/30 p-4 rounded-[14px] text-center">
              <p className="text-[#EE6C4D] font-bold">⚠️ تحذير: لو طبّقت اللي في الكتب دي، حياتك المهنية مش هترجع زي ما كانت.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-[#169380] to-[#28B9A8]" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-[18px] p-8 md:p-12 text-center shadow-[0_4px_20px_rgba(22,147,128,0.15)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2D3735]">
                💸 السعر والمزايا
              </h2>

              <p className="text-xl font-bold text-[#2D3735] mb-4">🦆 باكدج Duckverse الكامل</p>

              {/* Price Block */}
              <div className="bg-[#0F7468] rounded-[18px] p-8 mb-6">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-xl line-through text-white/50">السعر العادي: 999 جنيه</span>
                  <span className="text-5xl md:text-6xl font-bold text-[#F4C95D]">749 جنيه بس!</span>
                  <span className="inline-block bg-[#EE6C4D] text-white px-4 py-1.5 rounded-full text-sm font-bold mt-2">
                    وفّرت 250 جنيه
                  </span>
                </div>
              </div>

              {/* What You Get */}
              <div className="text-right mb-6">
                <h3 className="font-bold text-[#2D3735] mb-3">📦 إيه اللي هتاخده:</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">✅</span>
                    <span>📚 3 كتب مطبوعة في علبة Duckverse Box واحدة</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">✅</span>
                    <span>🚚 شحن سريع خلال ٢–٤ أيام داخل مصر</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">✅</span>
                    <span>💳 الدفع مرن — عند الاستلام أو أونلاين</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">✅</span>
                    <span>📱 بونص: اشتراك ٣ شهور على تطبيق Read to Lead</span>
                  </li>
                </ul>
              </div>

              {/* Duck Guarantee */}
              <div className="bg-[#F2F5F4] p-5 rounded-[18px] mb-6 text-right">
                <h3 className="font-bold text-[#2D3735] mb-2">🛡️ ضمانة البط</h3>
                <p className="text-[#2D3735]/70 mb-2">مش متأكد؟ عادي.</p>
                <p className="text-[#2D3735]/70 mb-2">لو قرأت الكتب ومش عجبوك — كلمنا. إحنا واثقين إنك هتحب الفلسفة دي لأنها مبنية على الواقع مش الأحلام.</p>
                <p className="text-[#169380] font-medium">"البط مش بيوعد بحاجة مش هيقدر يعملها. 🦆"</p>
              </div>
              
              <QuantitySelector baseCheckoutUrl={shopifyBaseUrl} productVariantId={productVariantId} buttonText="🛒 اطلب باكدج Duckverse الآن" price="749" />
              
              <p className="mt-4 text-[#2D3735]/60">749 جنيه بس — توصيل خلال 2-4 أيام</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2D3735]">
              🟢 جاهز تدخل عالم البط الذكي؟
            </h2>
            
            <div className="bg-[#F2F5F4] p-6 rounded-[18px] mb-8">
              <h3 className="font-bold text-[#2D3735] mb-4">⏰ ليه دلوقتي؟</h3>
              <p className="text-[#2D3735]/70 mb-4">كل يوم بيعدي وانت:</p>
              <ul className="space-y-2 text-right max-w-md mx-auto">
                <li className="flex gap-3 text-[#2D3735]/70">
                  <span className="text-[#EE6C4D]">❌</span>
                  <span>بتحرق نفسك في شغل مش منظم</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/70">
                  <span className="text-[#EE6C4D]">❌</span>
                  <span>بتصارع فريقك بدل ما تقوده</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/70">
                  <span className="text-[#EE6C4D]">❌</span>
                  <span>بتلاحق ترندات تسويق مش بتجيب نتيجة</span>
                </li>
              </ul>
              <p className="mt-4 text-[#2D3735]/70">هو يوم ضايع من البِركة. 🦆</p>
            </div>

            <p className="text-lg text-[#2D3735]/80 mb-6">
              ابدأ رحلتك من التبطيط.. إلى القيادة.. إلى التسويق — بهدوء ونتايج قدام عينيك. 🦆
            </p>

            <a href="#pricing" className="inline-block bg-[#F4C95D] text-[#2D3735] px-10 py-4 rounded-[14px] text-lg font-bold hover:bg-[#F4C95D]/90 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(244,201,93,0.3)]">
              🛒 اطلب باكدج Duckverse الآن
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#D9E4E1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2D3735]">
              ❓ الأسئلة الشائعة
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-[14px] border-none shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <AccordionTrigger className="px-6 py-4 text-[#0F7468] font-bold hover:no-underline">
                  1) هل لازم أقرأ الكتب بالترتيب؟
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#2D3735]/70">
                  مستحب، بس مش شرط. كل كتاب قائم بذاته ومرتبط بالتاني. نصيحتنا: ابدأ بفن التبطيط عشان تنظم نفسك الأول.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-[14px] border-none shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <AccordionTrigger className="px-6 py-4 text-[#0F7468] font-bold hover:no-underline">
                  2) الكتب دي نظري ولا عملي؟
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#2D3735]/70">
                  عملية جدًا — كل فصل فيه أدوات وقوالب جاهزة للتطبيق. مش هتقرأ وخلاص، هتطبّق من أول أسبوع.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-[14px] border-none shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <AccordionTrigger className="px-6 py-4 text-[#0F7468] font-bold hover:no-underline">
                  3) تنفع لأي مجال شغل؟
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#2D3735]/70">
                  تمام. الفلسفة بتخدم أي مجال بيعتمد على بشر (فِرق، عملاء، وقت، تسويق). سواء tech، retail، خدمات، أو freelance — المبادئ واحدة.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-[14px] border-none shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <AccordionTrigger className="px-6 py-4 text-[#0F7468] font-bold hover:no-underline">
                  4) هل في نسخة PDF؟
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#2D3735]/70">
                  النسخة الحالية مَطبوعة ومعاها اشتراك ٣ شهور على تطبيق Read to Lead لقراءة الكتب ديجيتال. يعني بتاخد الاتنين! 📚📱
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-[14px] border-none shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <AccordionTrigger className="px-6 py-4 text-[#0F7468] font-bold hover:no-underline">
                  5) الشحن بياخد قد إيه؟
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#2D3735]/70">
                  ٢–٤ أيام داخل مصر. والدفع عند الاستلام متاح. 🚚
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* CTA after FAQ */}
            <div className="mt-10 text-center">
              <a 
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#F4C95D] text-[#2D3735] px-10 py-4 rounded-[14px] text-lg font-bold hover:bg-[#F4C95D]/90 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(244,201,93,0.3)]"
              >
                <ShoppingCart className="w-5 h-5" />
                🛒 اطلب باكدج Duckverse الآن - 749 جنيه
              </a>
              <p className="mt-3 text-[#2D3735]/60 text-sm">توصيل خلال 2-4 أيام داخل مصر</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Words Section */}
      

      {/* Footer */}
      <footer className="py-8 bg-[#2D3735]">
        <div className="container mx-auto px-4 text-center">
          <Logo />
          <p className="text-white/60 mt-4">© {new Date().getFullYear()} Read to Lead. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      {/* Sticky Checkout Banner - All Devices */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0F7468] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] z-40">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="hidden sm:flex items-center gap-3 text-white">
            <span className="text-2xl">🦆</span>
            <div>
              <p className="font-bold">باكدج Duckverse الكامل</p>
              <p className="text-[#F4C95D] font-bold">749 جنيه بس!</p>
            </div>
          </div>
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F4C95D] text-[#2D3735] px-8 py-4 rounded-[14px] text-lg font-bold hover:bg-[#F4C95D]/90 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(244,201,93,0.3)]"
          >
            <ShoppingCart className="w-5 h-5" />
            اطلب الآن
          </a>
        </div>
      </div>
      
      {/* Spacer for sticky banner */}
      <div className="h-20 sm:h-24"></div>
    </div>;
};
export default Duckverse;