import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import SEO from "@/components/SEO";
import QuantitySelector from "@/components/QuantitySelector";

const StartupKit = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shopifyBaseUrl = "https://si51ve-s6.myshopify.com/cart";
  const productVariantId = "42288739254377";

  return (
    <div className="min-h-screen bg-[#F2F5F4] font-tajawal" dir="rtl">
      <SEO 
        title="Startup Builder Kit | كيت تأسيس الشركات الناشئة"
        description="كل الأدوات اللي هتحتاجها عشان تبدأ شركتك الناشئة من الفكرة للتنفيذ – كتاب، أدوات، وجورنال عملي من Read to Lead."
        image="/assets/startup-kit-banner.jpg"
        url="https://land.readtolead.store/startup-kit"
      />
      
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3735] leading-tight">
                Startup Builder Kit | مجموعة بناء الشركات الناشئة
              </h1>
              <p className="text-lg text-[#2D3735]/70 leading-relaxed">
                كل أدوات التخطيط والتنفيذ اللي محتاجها علشان تبدأ شركتك الناشئة صح — من الفكرة لحد التنفيذ.
              </p>
              <div className="bg-white p-6 rounded-[18px] border border-[#169380]/10 shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <p className="font-bold text-[#2D3735] mb-3">📦 Startup Builder Kit هي باكج ذكية بتجمع بين:</p>
                <ul className="space-y-2 pr-2">
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">•</span>
                    <span>أدوات عملية تساعدك تطبّق خططك</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">•</span>
                    <span>محتوى تعليمي موجّه لريادة الأعمال</span>
                  </li>
                  <li className="flex gap-3 text-[#2D3735]/80">
                    <span className="text-[#169380]">•</span>
                    <span>جورنال تفاعلي توثق فيه رحلتك الريادية</span>
                  </li>
                </ul>
                <p className="mt-4 text-[#2D3735]/70">
                  بتساعدك تبدأ مشروعك بأسلوب منظم ومدروس بدل ما تفضل تلف في دايرة "أنا مش عارف أبدأ منين!"
                </p>
              </div>
              
              {/* Hero CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#pricing"
                  className="bg-[#F4C95D] text-[#2D3735] px-8 py-4 rounded-[14px] text-lg font-bold hover:bg-[#F4C95D]/90 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(244,201,93,0.3)] text-center"
                >
                  اطلب الآن
                </a>
                <a 
                  href="#features"
                  className="bg-transparent border-2 border-[#3A86FF] text-[#3A86FF] px-8 py-4 rounded-[14px] text-lg font-bold hover:bg-[#3A86FF] hover:text-white transition-all text-center"
                >
                  تعرف على المحتويات
                </a>
              </div>
            </div>

            {/* Left Column - Image */}
            <div className="order-1 md:order-2">
              <img
                src="/lovable-uploads/490e51b9-80e9-4446-8503-53b301967b9f.png"
                alt="Startup Builder Kit"
                className="w-full rounded-[18px] shadow-[0_4px_20px_rgba(22,147,128,0.15)] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Under-Hero Banner Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <img 
            src="/lovable-uploads/921eaf2a-dd81-467b-8243-83fe1feccc62.png" 
            alt="Startup Kit Components" 
            className="rounded-[18px] shadow-[0_4px_20px_rgba(22,147,128,0.1)] w-full object-contain aspect-[2/1]" 
          />
        </div>
      </section>

      {/* Benefits & Target Audience Section */}
      <section className="py-16 bg-[#D9E4E1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Right Column (target audience) */}
            <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10">
              <h2 className="text-2xl font-bold mb-5 text-[#2D3735]">
                🎯 المجموعة دي مناسبة لمين؟
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span>أي حد عنده فكرة وعايز يبدأ مشروع</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span>طلاب، مستقلين، أو موظفين بيحلموا بشغل خاص</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span>رواد أعمال مبتدئين عايزين خطة منظمة</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span>Accelerator أو Incubator Programs</span>
                </li>
              </ul>
            </div>

            {/* Left Column (benefits) */}
            <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10">
              <h2 className="text-2xl font-bold mb-5 text-[#2D3735]">
                🧠 إزاي هتساعدك في الواقع؟
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span>بدل ما تبدأ من الصفر، كل حاجة جاهزة لك</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span>توفر عليك وقت التجريب والغلط</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span>تساعدك تفكر زي رائد أعمال، مش هاوي</span>
                </li>
                <li className="flex gap-3 text-[#2D3735]/80">
                  <span className="text-[#169380]">✅</span>
                  <span>توثّق خطواتك وتخلّي عندك رؤية واضحة لمشروعك</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Components Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2D3735]">
              ✨ إيه اللي بيميز الكيت دي عن أي حاجة تانية؟
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10 hover:shadow-[0_4px_20px_rgba(22,147,128,0.12)] transition-all">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3 text-[#2D3735]">Toolkit عملي</h3>
                <p className="text-[#2D3735]/70">أكتر من 20 نموذج استراتيجي زي نموذج العمل، SWOT، خطة تسويق، تحليل السوق، وتمويل</p>
              </div>
              
              <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10 hover:shadow-[0_4px_20px_rgba(22,147,128,0.12)] transition-all">
                <div className="text-4xl mb-4">📘</div>
                <h3 className="text-xl font-bold mb-3 text-[#2D3735]">كتاب شامل</h3>
                <p className="text-[#2D3735]/70">"فن ريادة الأعمال" بيوجهك خطوة بخطوة من توليد الفكرة لإطلاق المشروع</p>
              </div>
              
              <div className="bg-[#28B9A8]/15 p-6 rounded-[18px] shadow-[0_2px_12px_rgba(22,147,128,0.06)] border border-[#169380]/10 hover:shadow-[0_4px_20px_rgba(22,147,128,0.12)] transition-all">
                <div className="text-4xl mb-4">📓</div>
                <h3 className="text-xl font-bold mb-3 text-[#2D3735]">Startup Journal</h3>
                <p className="text-[#2D3735]/70">كتاب تفاعلي تكتب فيه تخطيطك ومراحل تقدمك وتطور شغلك بنفسك</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside the Kit (Books List) */}
      <section className="py-16 bg-[#F2F5F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#2D3735]">
              📚 الكتب العشرون المتضمنة في الكيت
            </h2>
            
            <div className="bg-white rounded-[18px] p-6 md:p-8 shadow-[0_2px_12px_rgba(22,147,128,0.06)] mb-6">
              <h3 className="text-xl font-bold mb-4 text-[#169380]">📘 كتب التخطيط، النماذج، والاستراتيجية</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١. من الصفر إلى الواحد – بيتر ثيل وبليك ماسترز</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٢. البناء للتشيد والاستدامة – جيمس س. كولينز</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٣. معدلات الذكاء للنمو – تيفاني بوفا</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٤. أسوأ نموذج عمل في العالم – داني شومان</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٥. اكتب خطة عملك – طاقم عمل Entrepreneur Media</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٦. الكتاب المقدس لريادة الأعمال – أندرو رومانس</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٧. تأثير اليعسوب – جينيفر آكر وآندي سميث</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٨. شركات الفرد الواحد – بول جارفيس</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٩. النمو السريع بالشكل الصحيح – فال رايت</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٠. مرحلة تحضير الأعمال – راشيل هوفستيتر</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-[18px] p-6 md:p-8 shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
              <h3 className="text-xl font-bold mb-4 text-[#169380]">📙 كتب النمو، القيادة، وريادة الأعمال</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١١. الجنون مجاملة – ليندا روتنبرغ</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٢. فكر كرائد أعمال تصرف كمدير تنفيذي – بيفرلي إي جونز</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٣. لا تقسم الفرق أبداً – كريستوفر فوس وتال راس</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٤. محركات نمو الشركات الناشئة – شون إليس ومورغان براون</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٥. التوسع – فيرن هارنيش</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٦. قانون مور – أرنولد ثاكري، ديفيد بروك، راشيل جونز</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٧. ضائع ومؤسس – راند فيشكن</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٨. ما وراء ريادة الأعمال 2.0 – جيم كولينز وبيل ليزير</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">١٩. النمو الخاطف والسريع – ريد هوفمان وكريس ييه</li>
                <li className="border-b border-[#D9E4E1] pb-2 text-[#2D3735]/80">٢٠. من جيد إلى عظيم – جيمس كولينز</li>
              </ul>
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

              {/* Price Block */}
              <div className="bg-[#0F7468] rounded-[18px] p-8 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <span className="text-5xl md:text-6xl font-bold text-[#F4C95D]">999 جنيه</span>
                  <span className="text-xl line-through text-white/50">السعر السابق: 2000 جنيه</span>
                  <span className="inline-block bg-[#EE6C4D] text-white px-4 py-1.5 rounded-full text-sm font-bold mt-2">
                    وفّر 50%
                  </span>
                </div>
              </div>

              <p className="text-[#2D3735]/70 mb-6">
                🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين
              </p>
              
              <QuantitySelector
                baseCheckoutUrl={shopifyBaseUrl}
                productVariantId={productVariantId}
                buttonText="🛒 اطلب Startup Builder Kit الآن"
                price="999"
              />
              
              <p className="mt-6 text-[#2D3735]/60">📦 أول خطوة حقيقية تبدأ بيها رحلتك الريادية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#169380]">❤️ بيقولوا عنها إيه؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F2F5F4] p-6 rounded-[18px] border-2 border-[#169380]/20 shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <p className="text-[#2D3735]/80 mb-4 leading-relaxed">"كنت حيران أبدأ منين… الكيت رتبتلي كل حاجة، حسيت فعلاً إني بدأت صح."</p>
                <p className="font-bold text-[#169380]">– أحمد</p>
              </div>
              <div className="bg-[#F2F5F4] p-6 rounded-[18px] border-2 border-[#169380]/20 shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                <p className="text-[#2D3735]/80 mb-4 leading-relaxed">"النماذج والكتاب مع بعض خلوني أفهم السوق وأكتب خطة لأول مرة في حياتي!"</p>
                <p className="font-bold text-[#169380]">– رنا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#D9E4E1]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2D3735]">
              📌 الأسئلة الشائعة – Startup Kit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">١. إيه هو Startup Kit؟</p>
                  <p className="text-[#2D3735]/70">
                    Startup Kit هو صندوق أدوات متكامل بيساعد أي حد عنده فكرة مشروع يبدأ صح. جواه أدوات عملية، كروت، نوت بوك، وتمبلتس بتساعدك تحوّل فكرتك لخطة واضحة وخطوات تنفيذية.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">٢. مين اللي ممكن يستخدم Startup Kit؟</p>
                  <p className="text-[#2D3735]/70">
                    أي شخص عنده فكرة مشروع أو لسه في بداية رحلته كرائد أعمال – سواء طالب، موظف عايز يفتح مشروع جانبي، أو حتى مؤسس بدأ ولسه محتاج يجهز خطته.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">٣. هو منتج رقمي ولا فعلي؟</p>
                  <p className="text-[#2D3735]/70">
                    الـ Startup Kit منتج فعلي ملموس – هيوصلك لحد باب بيتك. ممكن كمان يكون في نسخ رقمية لبعض الأدوات قريب.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">٤. إيه اللي موجود جوّه الكيت؟</p>
                  <p className="text-[#2D3735]/70">
                    ✅ كروت بتساعدك تفكر في فكرتك من كل الزوايا<br />
                    ✅ تمبلت Business Model Canvas<br />
                    ✅ جورنال منظمة لكتابة وتخطيط كل خطوة<br />
                    ✅ Tools تخلّيك تبني خطة تسويق، منتج، وتمويل
                  </p>
                </div>

                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">٥. هل في شرح لطريقة استخدام الأدوات؟</p>
                  <p className="text-[#2D3735]/70">
                    أيوه طبعًا. كل أداة معاها إرشادات بسيطة بتوضح إزاي تستخدمها خطوة بخطوة.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">٦. هل لازم أكون دارس بزنس عشان أستفيد؟</p>
                  <p className="text-[#2D3735]/70">
                    لأ خالص. الأدوات معمولة بلغة بسيطة وسهلة علشان تساعدك تفكّر وتشتغل على مشروعك حتى لو معندكش خلفية بزنس.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">٧. الكيت ده هيساعدني أوصل لإيه؟</p>
                  <p className="text-[#2D3735]/70">
                    • تفهم فكرتك بوضوح<br />
                    • تحط خطة واقعية<br />
                    • تتجنب الأخطاء اللي بيقع فيها ناس كتير<br />
                    • تبدأ بطريقة منظمة وواثقة
                  </p>
                </div>

                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">٨. بيوصل خلال قد إيه؟</p>
                  <p className="text-[#2D3735]/70">
                    التوصيل بيتم خلال ٣–٥ أيام عمل داخل مصر
                  </p>
                </div>

                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">٩. إزاي أطلبه؟</p>
                  <p className="text-[#2D3735]/70">
                    سهل جدًا! ممكن تطلبه من خلال الموقع الرسمي هنا أو تبعتلنا على الإنبوكس على السوشيال ميديا.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-[14px] shadow-[0_2px_12px_rgba(22,147,128,0.06)]">
                  <p className="font-bold text-[#0F7468] mb-2">١٠. لو عندي أسئلة أكتر؟</p>
                  <p className="text-[#2D3735]/70">
                    احنا دايمًا موجودين. ابعتلنا على الايميل أو الواتساب، وهنجاوبك فورًا: hi@readtolead.store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[#2D3735] text-white mb-20">
        <p>© جميع الحقوق محفوظة Read to Lead</p>
      </footer>

      {/* Sticky Purchase Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#D9E4E1] shadow-[0_-4px_20px_rgba(22,147,128,0.08)] py-3 px-4 z-50">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <p className="font-bold text-[#2D3735]">Startup Builder Kit</p>
              <p className="text-sm text-[#2D3735]/60">مجموعة بناء الشركات الناشئة</p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-2xl font-bold text-[#169380]">999 جنيه</p>
              <p className="text-xs text-[#2D3735]/50 line-through">2000 جنيه</p>
            </div>
          </div>
          <a
            href="#pricing"
            className="bg-[#F4C95D] text-[#2D3735] px-6 py-3 rounded-[14px] font-bold hover:bg-[#F4C95D]/90 transition-all shadow-[0_4px_20px_rgba(244,201,93,0.3)]"
          >
            📦 اطلب الآن
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartupKit;
