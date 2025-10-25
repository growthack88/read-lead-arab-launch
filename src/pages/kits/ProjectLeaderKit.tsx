import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import SEO from "@/components/SEO";
import QuantitySelector from "@/components/QuantitySelector";

const ProjectLeaderKit = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shopifyBaseUrl = "https://si51ve-s6.myshopify.com/cart";
  const productVariantId = "42288739254377"; // You'll need to update this with the actual variant ID

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="Project Leader Toolkit | دليل القيادة وإدارة المشاريع"
        description="من الفكرة للتنفيذ — كل أداة تحتاجها علشان تمشي المشروع خطوة بخطوة من Read to Lead."
        image="/lovable-uploads/project-leader-toolkit-hero.jpg"
        url="https://land.readtolead.store/project-leader-kit"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto rtl min-h-[500px]">
            {/* Right Column - Text */}
            <div className="space-y-4 order-2 md:order-1 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-rtl-dark">
                Project Leader Toolkit | دليل القيادة وإدارة المشاريع بوضوح ونظام
              </h1>
              <p className="text-lg text-gray-700 font-medium">
                من الفكرة للتنفيذ — كل أداة تحتاجها علشان تمشي المشروع خطوة بخطوة.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="font-medium mb-2">لو دايمًا حاسس إن المشاريع بتبدأ بحماس وتنتهي بعشوائية.. التول كيت ده معمول علشانك.</p>
                <p className="text-gray-700">
                  من Read to Lead، جايب لك باقة كاملة من القوالب والنماذج اللي بتخلي كل خطوة في المشروع واضحة، منظمة، وقابلة للتنفيذ فورًا.
                </p>
              </div>
            </div>

            {/* Left Column - Image */}
            <div className="order-1 md:order-2 flex items-stretch">
              <img
                src="/lovable-uploads/project-leader-toolkit-hero.jpg"
                alt="Project Leader Toolkit"
                className="w-full h-full min-h-[400px] md:min-h-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Under-Hero Banner Section */}
      <section className="my-8">
        <div className="container mx-auto px-4">
          <img 
            src="/lovable-uploads/project-leader-toolkit-banner.jpg" 
            alt="Project Leader Toolkit Components" 
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
                🎯 التول كيت ده مناسب لمين؟
              </h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>مديري المشاريع اللي عايزين أدوات جاهزة لتنظيم المهام والمواعيد</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>قادة الفرق اللي محتاجين يشوفوا الصورة الكاملة بوضوح</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أصحاب المشاريع اللي تعبوا من الفوضى وعايزين نظام عملي يمشّي الشغل</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>الفريلانسرز/الاستشاريين اللي بيشتغلوا مع كذا عميل وعايزين إدارة مشاريع احترافية</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أي قائد أو مدير بيحلم يمشي الشغل بنظام مش بالصدفة</span>
                </li>
              </ul>
            </div>

            {/* Left Column (benefits) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                🧠 إيه اللي هتاخده من التول كيت؟
              </h2>
              <p className="font-medium mb-2">خطة + أدوات + رؤية أوضح لكل مشروع:</p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>تخطيط واضح من أول هدف المشروع لحد النتائج النهائية</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>تحديد مسؤوليات الفريق والأولويات بدقة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>تتبع الأداء والمواعيد في مكان واحد</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>إدارة المشاريع الكبيرة بخطوات صغيرة محسوبة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>توفير وقت الميتنجز والمراجعات الكتيرة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>بدل ما تبدأ كل مشروع من الصفر — عندك نظام جاهز من أول ورقة</span>
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
              📦 إيه اللي هتلاقيه جوا الباكدج؟
            </h2>
            <p className="text-center text-lg mb-8 font-medium">9 أدوات جاهزة للاستخدام الفوري:</p>

            <div className="space-y-4">
              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">1️⃣ OKR Sheets (الأهداف والنتائج الرئيسية)</h3>
                  <p className="text-gray-700">تحدّد أهداف الشركة أو الفريق السنوية وتربطها بنتايج قابلة للقياس.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">2️⃣ Standard Operating Procedure (SOP)</h3>
                  <p className="text-gray-700">توثّق الإجراءات القياسية لأي عملية أو مشروع بخطوات واضحة ومسؤوليات محددة.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">3️⃣ Key Timelines & Deadlines</h3>
                  <p className="text-gray-700">جدول سنوي بـ12 شهر لمتابعة المواعيد النهائية والأحداث المهمة.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">4️⃣ Project Planner</h3>
                  <p className="text-gray-700">خطط مشروعك من الأهداف، الميزانية، للمعالم الرئيسية خطوة بخطوة.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">5️⃣ Project Scope Template</h3>
                  <p className="text-gray-700">حدد نطاق المشروع، مسؤوليات الفريق، وجدوله الزمني بدقة.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">6️⃣ Work Breakdown Structure (WBS)</h3>
                  <p className="text-gray-700">قسّم المشروع لمهام أصغر وهيكل تسلسلي واضح يسهل المتابعة.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">7️⃣ Gantt Chart Template</h3>
                  <p className="text-gray-700">جدول زمني بصري لتوزيع المهام أسبوع بأسبوع وتتبع التقدّم.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">8️⃣ Improvement Matrix</h3>
                  <p className="text-gray-700">تابع التحسينات واربطها بالأهداف طويلة المدى ومؤشرات الأداء.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">9️⃣ Creative Brief Template</h3>
                  <p className="text-gray-700">نموذج جاهز لتحديد أهداف المشاريع الإبداعية والجمهور والرسالة.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-rtl-teal/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🎁 كمان هتلاقي جوّه الباكدج:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>📙</span>
                  <span><strong>كتاب القيادة والإدارة الفعّالة:</strong> علشان تتعلّم تبني فريق قوي وتتعامل مع التحديات اليومية بذكاء.</span>
                </li>
                <li className="flex gap-2">
                  <span>📗</span>
                  <span><strong>كتاب تطوير الذات:</strong> علشان تحافظ على تركيزك وتحفّز نفسك وسط ضغط المشاريع.</span>
                </li>
                <li className="flex gap-2">
                  <span>📓</span>
                  <span><strong>Notebook + To-Do List:</strong> علشان تدوّن أفكارك وتتابع المهام اليومية بسهولة.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rtl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rtl-dark">
              ✨ ليه Project Leader Toolkit مختلف؟
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-2">منظم ومتكامل</h3>
                  <p>كل أداة مكملة للتانية — من التخطيط للتنفيذ للتحسين.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-2">عملي مش نظري</h3>
                  <p>كل ورقة بتتملي وتستخدم فورًا مع فريقك.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🇪🇬</div>
                  <h3 className="text-xl font-bold mb-2">مصري وبسيط</h3>
                  <p>بعيد عن تعقيد برامج الإدارة، كل حاجة على ورق واضح.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-bold mb-2">ينفع للأفراد والفرق</h3>
                  <p>سواء شغال لوحدك أو بتقود تيم، الأدوات هتشتغل معاك.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Example Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rtl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-rtl-dark">
              💡 مثال تطبيقي سريع
            </h2>
            <div className="bg-gradient-to-l from-rtl-teal/10 to-transparent p-6 rounded-xl">
              <p className="text-lg font-bold mb-4">مشروع تسويقي جديد؟</p>
              <p className="text-gray-700 leading-relaxed">
                ابدأ بـ<strong>Creative Brief Template</strong> → حدّد الرسالة → اربطها بـ<strong>OKRs</strong> → وزّع المهام في <strong>WBS</strong> → تابع التنفيذ بـ<strong>Gantt Chart</strong> → راجع النتائج بـ<strong>Improvement Matrix</strong>.
              </p>
              <p className="mt-4 font-bold text-rtl-teal">في 6 ورق بس، المشروع كله تحت السيطرة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center rtl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-rtl-dark">
              💸 السعر والمزايا
            </h2>

            <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg mb-2">
                  <strong>المنتج:</strong> منتج مطبوع كامل – يشمل 2 كتاب + 9 أدوات مميزة + Notebook + Todo list
                </p>
                <div className="text-2xl font-bold text-rtl-teal mb-2">السعر: 999 جنيه</div>
                <p className="text-gray-600 mb-6">
                  🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين
                </p>
                <QuantitySelector
                  baseCheckoutUrl={shopifyBaseUrl}
                  productVariantId={productVariantId}
                  buttonText="🛒 اطلب Project Leader Toolkit الآن"
                  price="999"
                />
                <p className="mt-4 text-gray-600">📦 خطة واحدة هتغيّر طريقة إدارتك لأي مشروع</p>
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
              ❓ الأسئلة الشائعة
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">1) هل التول كيت مناسب لكل المجالات؟</p>
                <p className="text-gray-600">
                  أيوه، قابل للتطبيق في أي نوع مشروع — تسويقي، إداري، أو إبداعي.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">2) هل الأدوات ورقية ولا رقمية؟</p>
                <p className="text-gray-600">
                  النسخة الحالية مَطبوعة وجاهزة للاستخدام الفوري.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">3) هل في أمثلة جاهزة جوّه النماذج؟</p>
                <p className="text-gray-600">
                  أيوه، كل نموذج فيه مثال تطبيقي بسيط يساعدك تملاه بسرعة.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">4) ينفع أستخدمه مع فريق؟</p>
                <p className="text-gray-600">
                  أكيد، معمول للفِرق الصغيرة والمتوسطة — كل عضو يعرف دوره بسهولة.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">5) إزاي أطلب التول كيت؟</p>
                <p className="text-gray-600">
                  من الموقع أو واتساب رسمي. التوصيل خلال ٢–٤ أيام.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Purchase Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t z-50 px-4 py-3 flex justify-between items-center rtl shadow-md">
        <span className="font-bold text-[#0D9488]">السعر: 999 جنيه</span>
        <QuantitySelector
          baseCheckoutUrl={shopifyBaseUrl}
          productVariantId={productVariantId}
          buttonText="📦 اطلب الآن"
          price="999"
        />
      </div>
      
      {/* Simple Footer */}
      <footer className="py-6 text-center border-t mb-16">
        <p className="text-gray-600">© جميع الحقوق محفوظة Read to Lead</p>
      </footer>
    </div>
  );
};

export default ProjectLeaderKit;
