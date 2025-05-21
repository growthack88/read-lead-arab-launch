
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import SEO from "@/components/SEO";

const StartupKit = () => {
  // Function to scroll back to top when navigating between sections
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="Startup Builder Kit | كيت تأسيس الشركات الناشئة"
        description="كل الأدوات اللي هتحتاجها عشان تبدأ شركتك الناشئة من الفكرة للتنفيذ – كتاب، أدوات، وجورنال عملي من Read to Lead."
        image="/assets/startup-kit-banner.jpg"
        url="https://land.readtolead.store/startup-kit"
      />
      
      {/* Header */}
      <header className="py-4 border-b sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            <nav className="space-x-6 flex flex-row-reverse">
              <a href="/" className="text-rtl-dark hover:text-rtl-teal mr-6">
                الرئيسية
              </a>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal mr-6">
                المنتجات
              </a>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal mr-6">
                من نحن
              </a>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal">
                تواصل معنا
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto rtl">
            {/* Right Column - Text */}
            <div className="space-y-4 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-rtl-dark">
                🟢 Startup Builder Kit | مجموعة بناء الشركات الناشئة
              </h1>
              <p className="text-lg text-gray-700 font-medium">
                كل أدوات التخطيط والتنفيذ اللي محتاجها علشان تبدأ شركتك الناشئة صح — من الفكرة لحد التنفيذ.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="font-medium">📦 Startup Builder Kit هي باكج ذكية بتجمع بين:</p>
                <ul className="space-y-1 mt-2 pr-5">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>أدوات عملية تساعدك تطبّق خططك</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>محتوى تعليمي موجّه لريادة الأعمال</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>جورنال تفاعلي توثق فيه رحلتك الريادية</span>
                  </li>
                </ul>
                <p className="mt-2 text-gray-700">
                  بتساعدك تبدأ مشروعك بأسلوب منظم ومدروس بدل ما تفضل تلف في دايرة "أنا مش عارف أبدأ منين!"
                </p>
              </div>
            </div>

            {/* Left Column - Image */}
            <div className="order-1 md:order-2">
              <img
                src="/lovable-uploads/490e51b9-80e9-4446-8503-53b301967b9f.png"
                alt="Startup Builder Kit"
                className="aspect-[2/1] rounded-xl shadow-lg object-contain w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Under-Hero Banner Section */}
      <section className="my-8">
        <div className="container mx-auto px-4">
          <img 
            src="/lovable-uploads/921eaf2a-dd81-467b-8243-83fe1feccc62.png" 
            alt="Startup Kit Components" 
            className="rounded-lg shadow-md w-full object-contain aspect-[2/1]" 
          />
        </div>
      </section>

      {/* Benefits & Target Audience Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto rtl">
            {/* Right Column (target audience) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                🎯 المجموعة دي مناسبة لمين؟
              </h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أي حد عنده فكرة وعايز يبدأ مشروع</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>طلاب، مستقلين، أو موظفين بيحلموا بشغل خاص</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>رواد أعمال مبتدئين عايزين خطة منظمة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>Accelerator أو Incubator Programs</span>
                </li>
              </ul>
            </div>

            {/* Left Column (benefits) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                🧠 إزاي هتساعدك في الواقع؟
              </h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>بدل ما تبدأ من الصفر، كل حاجة جاهزة لك</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>توفر عليك وقت التجريب والغلط</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>تساعدك تفكر زي رائد أعمال، مش هاوي</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>توثّق خطواتك وتخلّي عندك رؤية واضحة لمشروعك</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Components Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rtl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rtl-dark">
              ✨ إيه اللي بيميز الكيت دي عن أي حاجة تانية؟
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🔧</div>
                  <h3 className="text-xl font-bold mb-2">Toolkit عملي</h3>
                  <p>أكتر من 20 نموذج استراتيجي زي نموذج العمل، SWOT، خطة تسويق، تحليل السوق، وتمويل</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">📘</div>
                  <h3 className="text-xl font-bold mb-2">كتاب شامل</h3>
                  <p>"فن ريادة الأعمال" بيوجهك خطوة بخطوة من توليد الفكرة لإطلاق المشروع</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">📓</div>
                  <h3 className="text-xl font-bold mb-2">Startup Journal</h3>
                  <p>كتاب تفاعلي تكتب فيه تخطيطك ومراحل تقدمك وتطور شغلك بنفسك</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside the Kit (Books List) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rtl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-rtl-dark">
              📚 الكتب العشرون المتضمنة في الكيت
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">📘 كتب التخطيط، النماذج، والاستراتيجية</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pr-4">
                <li className="border-b pb-2">١. من الصفر إلى الواحد – بيتر ثيل وبليك ماسترز</li>
                <li className="border-b pb-2">٢. البناء للتشيد والاستدامة – جيمس س. كولينز</li>
                <li className="border-b pb-2">٣. معدلات الذكاء للنمو – تيفاني بوفا</li>
                <li className="border-b pb-2">٤. أسوأ نموذج عمل في العالم – داني شومان</li>
                <li className="border-b pb-2">٥. اكتب خطة عملك – طاقم عمل Entrepreneur Media</li>
                <li className="border-b pb-2">٦. الكتاب المقدس لريادة الأعمال – أندرو رومانس</li>
                <li className="border-b pb-2">٧. تأثير اليعسوب – جينيفر آكر وآندي سميث</li>
                <li className="border-b pb-2">٨. شركات الفرد الواحد – بول جارفيس</li>
                <li className="border-b pb-2">٩. النمو السريع بالشكل الصحيح – فال رايت</li>
                <li className="border-b pb-2">١٠. مرحلة تحضير الأعمال – راشيل هوفستيتر</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">📙 كتب النمو، القيادة، وريادة الأعمال</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pr-4">
                <li className="border-b pb-2">١١. الجنون مجاملة – ليندا روتنبرغ</li>
                <li className="border-b pb-2">١٢. فكر كرائد أعمال تصرف كمدير تنفيذي – بيفرلي إي جونز</li>
                <li className="border-b pb-2">١٣. لا تقسم الفرق أبداً – كريستوفر فوس وتال راس</li>
                <li className="border-b pb-2">١٤. محركات نمو الشركات الناشئة – شون إليز ومورغان براون</li>
                <li className="border-b pb-2">١٥. التوسع – فيرن هارنيش</li>
                <li className="border-b pb-2">١٦. قانون مور – أرنولد ثاكري، ديفيد بروك، راشيل جونز</li>
                <li className="border-b pb-2">١٧. ضائع ومؤسس – راند فيشكن</li>
                <li className="border-b pb-2">١٨. ما وراء ريادة الأعمال 2.0 – جيم كولينز وبيل ليزير</li>
                <li className="border-b pb-2">١٩. النمو الخاطف والسريع – ريد هوفمان وكريس ييه</li>
                <li className="border-b pb-2">٢٠. من جيد إلى عظيم – جيمس كولينز</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center rtl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-rtl-dark">
              💸 السعر والمزايا
            </h2>

            <div className="bg-rtl-teal/10 p-8 rounded-2xl shadow-sm mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-rtl-teal">السعر: 1250 جنيه</span>
                  <span className="text-lg line-through text-gray-500">السعر السابق: 1400 جنيه</span>
                </div>
                <p className="text-gray-600 mb-6">
                  🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين
                </p>
                <Button
                  variant="custom"
                  size="lg"
                  className="px-6 py-3 rounded-lg hover:scale-105 transition text-lg bg-[#0D9488] text-white flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  🛒 اطلب Startup Builder Kit الآن
                </Button>
                <p className="mt-4 text-gray-600">📦 أول خطوة حقيقية تبدأ بيها رحلتك الريادية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rtl">
            <h2 className="text-2xl font-bold text-center mb-8">❤️ بيقولوا عنها إيه؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-700 mb-4">"كنت حيران أبدأ منين… الكيت رتبتلي كل حاجة، حسيت فعلاً إني بدأت صح."</p>
                <p className="font-bold text-rtl-teal">– أحمد</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-700 mb-4">"النماذج والكتاب مع بعض خلوني أفهم السوق وأكتب خطة لأول مرة في حياتي!"</p>
                <p className="font-bold text-rtl-teal">– رنا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rtl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-rtl-dark">
              📌 الأسئلة الشائعة – Startup Kit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-bold">١. إيه هو Startup Kit؟</p>
                  <p className="text-gray-600">
                    Startup Kit هو صندوق أدوات متكامل بيساعد أي حد عنده فكرة مشروع يبدأ صح. جواه أدوات عملية، كروت، نوت بوك، وتمبلتس بتساعدك تحوّل فكرتك لخطة واضحة وخطوات تنفيذية.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold">٢. مين اللي ممكن يستخدم Startup Kit؟</p>
                  <p className="text-gray-600">
                    أي شخص عنده فكرة مشروع أو لسه في بداية رحلته كرائد أعمال – سواء طالب، موظف عايز يفتح مشروع جانبي، أو حتى مؤسس بدأ ولسه محتاج يجهز خطته.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold">٣. هو منتج رقمي ولا فعلي؟</p>
                  <p className="text-gray-600">
                    الـ Startup Kit منتج فعلي ملموس – هيوصلك لحد باب بيتك. ممكن كمان يكون في نسخ رقمية لبعض الأدوات قريب.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold">٤. إيه اللي موجود جوّه الكيت؟</p>
                  <p className="text-gray-600">
                    ✅ كروت بتساعدك تفكر في فكرتك من كل الزوايا<br />
                    ✅ تمبلت Business Model Canvas<br />
                    ✅ جورنال منظمة لكتابة وتخطيط كل خطوة<br />
                    ✅ Tools تخلّيك تبني خطة تسويق، منتج، وتمويل
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold">٥. هل في شرح لطريقة استخدام الأدوات؟</p>
                  <p className="text-gray-600">
                    أيوه طبعًا. كل أداة معاها إرشادات بسيطة بتوضح إزاي تستخدمها خطوة بخطوة.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-bold">٦. هل لازم أكون دارس بزنس عشان أستفيد؟</p>
                  <p className="text-gray-600">
                    لأ خالص. الأدوات معمولة بلغة بسيطة وسهلة علشان تساعدك تفكّر وتشتغل على مشروعك حتى لو معندكش خلفية بزنس.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold">٧. الكيت ده هيساعدني أوصل لإيه؟</p>
                  <p className="text-gray-600">
                    • تفهم فكرتك بوضوح<br />
                    • تحط خطة واقعية<br />
                    • تتجنب الأخطاء اللي بيقع فيها ناس كتير<br />
                    • تبدأ بطريقة منظمة وواثقة
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold">٨. بيوصل خلال قد إيه؟</p>
                  <p className="text-gray-600">
                    التوصيل بيتم خلال ٣–٥ أيام عمل داخل مصر
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold">٩. إزاي أطلبه؟</p>
                  <p className="text-gray-600">
                    سهل جدًا! ممكن تطلبه من خلال الموقع الرسمي هنا أو تبعتلنا على الإنبوكس على السوشيال ميديا.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold">١٠. لو عندي أسئلة أكتر؟</p>
                  <p className="text-gray-600">
                    احنا دايمًا موجودين. ابعتلنا على الايميل أو الواتساب، وهنجاوبك فورًا: hi@readtolead.store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Purchase Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t z-50 px-4 py-3 flex justify-between items-center rtl shadow-md">
        <Button
          className="bg-[#0D9488] text-white px-5 py-2 rounded-md hover:opacity-90 flex items-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          📦 اطلب الآن
        </Button>
        <span className="font-bold text-[#0D9488]">السعر: 1250 جنيه</span>
      </div>
      
      {/* Simple Footer */}
      <footer className="py-6 text-center border-t mb-16">
        <p className="text-gray-600">© جميع الحقوق محفوظة Read to Lead</p>
      </footer>
    </div>
  );
};

export default StartupKit;
