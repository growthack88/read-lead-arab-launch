import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import SEO from "@/components/SEO";
import QuantitySelector from "@/components/QuantitySelector";

const HRManagerKit = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const shopifyBaseUrl = "https://si51ve-s6.myshopify.com/cart";
  const productVariantId = "42626019164265";

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="HR Manager Toolkit | نظام الموارد البشرية الجاهز" 
        description="حوّل الفوضى الإدارية لنظام احترافي جاهز — في 10 أدوات بس من Read to Lead."
        image="/lovable-uploads/hr-manager-toolkit-hero.jpg"
        url="https://land.readtolead.store/hr-manager-kit"
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
                HR Manager Toolkit | نظام الموارد البشرية الجاهز لإدارة الفريق بوضوح واحتراف
              </h1>
              <p className="text-lg text-gray-700 font-medium">
                حوّل الفوضى الإدارية لنظام احترافي جاهز — في 10 أدوات بس.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="font-medium mb-2">لو الأوراق متبعترة، والمتابعات مش واضحة، والفريق محتاج تنظيم من غير وجع دماغ...</p>
                <p className="text-gray-700">
                  التول كيت ده معمول مخصوص علشانك. من Read to Lead، جيبنالك نظام موارد بشرية متكامل بيوحد كل حاجة في مكان واحد: الحضور، الأداء، التدريب، التطوير، وحتى التواصل.
                </p>
              </div>
            </div>

            {/* Left Column - Image */}
            <div className="order-1 md:order-2 flex items-stretch">
              <img 
                src="/lovable-uploads/hr-manager-toolkit-hero-new.jpg" 
                alt="HR Manager Toolkit" 
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
            src="/lovable-uploads/hr-manager-toolkit-hero.jpg" 
            alt="HR Manager Toolkit Components" 
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
                  <span>مديري الموارد البشرية اللي عايزين أدوات عملية تنظم الفريق وتوثق كل حاجة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>قادة الفرق اللي عايزين رؤية واضحة لأداء الموظفين والتدريب</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أصحاب الشركات الصغيرة والمتوسطة اللي عايزين نظام HR جاهز بدون برامج معقدة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>المستشارين والمدربين اللي محتاجين نماذج جاهزة للاستخدام مع العملاء</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أي مدير بيحب يشوف الشغل ماشي بخطة مش بعشوائية</span>
                </li>
              </ul>
            </div>

            {/* Left Column (benefits) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                🧠 إيه اللي هتاخده من HR Manager Toolkit؟
              </h2>
              <p className="font-medium mb-2">نظام موارد بشرية كامل في إيدك:</p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>إدارة حضور الموظفين شهريًا</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>تنظيم التوظيف والمقابلات والتقييمات</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>متابعة الأداء وخطط التحسين</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>تحديد احتياجات التدريب والتطوير بوضوح</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>تنظيم برامج الإرشاد والمسار المهني</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>بدل ما تبدأ كل مرة من الصفر — عندك كل حاجة جاهزة</span>
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
            <p className="text-center text-lg mb-8 font-medium">10 أدوات جاهزة للطباعة والاستخدام الفوري:</p>

            <div className="space-y-4">
              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">1️⃣ Monthly Attendance (الحضور الشهري)</h3>
                  <p className="text-gray-700">جدول لتتبع حضور الموظفين يوميًا لـ31 يوم.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">2️⃣ Applicant Database (قاعدة بيانات المتقدمين)</h3>
                  <p className="text-gray-700">نموذج شامل لترتيب بيانات المرشحين — الاسم، المصدر، الخبرات، الملاحظات.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">3️⃣ Team Alignment Map (خريطة توافق الفريق)</h3>
                  <p className="text-gray-700">أداة لتوحيد الفريق حول الأهداف والموارد والمخاطر المشتركة.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">4️⃣ Performance Improvement Plan (خطة تحسين الأداء)</h3>
                  <p className="text-gray-700">نموذج واضح لتحديد مشاكل الأداء وخطط التحسين والتوقيتات.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">5️⃣ Compensation Analysis (تحليل التعويضات)</h3>
                  <p className="text-gray-700">مقارنة رواتب ومزايا داخلية وسوقية لعدالة التقييم.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">6️⃣ Training Needs Analysis (تحليل احتياجات التدريب)</h3>
                  <p className="text-gray-700">أداة تحدد الفجوات المهارية وتقترح تدريبات مناسبة.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">7️⃣ Employee Disciplinary Action Template (إجراءات تأديبية)</h3>
                  <p className="text-gray-700">نموذج لتوثيق الإنذارات والمخالفات بدقة.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">8️⃣ Conference/Training Session Schedule (جدول المؤتمرات والدورات)</h3>
                  <p className="text-gray-700">تنظيم مواعيد التدريب والمؤتمرات يوميًا بوضوح.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">9️⃣ Employee Mentorship Program Effectiveness (فعالية الإرشاد الوظيفي)</h3>
                  <p className="text-gray-700">تتبع نجاح برامج التوجيه بين الموظفين.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">🔟 Career Development Plan Template (خطة التطوير الوظيفي)</h3>
                  <p className="text-gray-700">أداة لبناء مسار مهني واضح لكل موظف من التحليل للتنفيذ.</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-rtl-teal/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🎁 كمان هتلاقي جوّا الباكدج:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>📙</span>
                  <span><strong>كتاب قواعد النجاح المؤسسي:</strong> علشان تبني ثقافة قوية وثابتة جوّه شركتك.</span>
                </li>
                <li className="flex gap-2">
                  <span>📗</span>
                  <span><strong>كتاب إدارة حياتك المهنية:</strong> علشان تطوّر مسارك المهني بخطة واضحة ومتوازنة.</span>
                </li>
                <li className="flex gap-2">
                  <span>📓</span>
                  <span><strong>Notebook + To-Do List:</strong> لمتابعة المهام اليومية وتدوين الأفكار بسرعة.</span>
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
              🚀 ليه HR Manager Toolkit مختلف؟
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2">جاهز للتطبيق فورًا</h3>
                  <p>كل نموذج معمول للاستخدام اليومي بدون تعديل.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold mb-2">يناسب أي شركة</h3>
                  <p>صغير، متوسط، أو تيم ناشئ.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-2">مطبوع ومنظم</h3>
                  <p>خامات ممتازة، تقفيل احترافي، سهل الاستخدام.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-2">عملي ومباشر</h3>
                  <p>بعيد عن التنظير – كل ورقة = أداة فعالة.</p>
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
              <p className="text-lg font-bold mb-4">تعيين موظف جديد؟</p>
              <p className="text-gray-700 leading-relaxed">
                ابدأ بـ<strong>Applicant Database</strong> → اعمل المقابلات → استخدم <strong>Team Alignment Map</strong> لمواءمة الأهداف → حدّد <strong>Training Needs</strong> → راقب الأداء بـ<strong>PIP</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                كل مرحلة متغطية بنموذج جاهز.
              </p>
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
                  <strong>المنتج:</strong> منتج مطبوع كامل – يشمل 2 كتاب + 10 أدوات مميزة + Notebook + Todo list
                </p>
                <div className="text-2xl font-bold text-rtl-teal mb-2">السعر: 999 جنيه</div>
                <p className="text-gray-600 mb-6">
                  🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين
                </p>
                <QuantitySelector 
                  baseCheckoutUrl={shopifyBaseUrl} 
                  productVariantId={productVariantId}
                  buttonText="🛒 اطلب HR Manager Toolkit الآن"
                  price="999"
                />
                <p className="mt-4 text-gray-600">📦 ونظّم كل خطوة من أول الحضور لحد التطوير</p>
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
                <p className="font-bold mb-2">1) هل ينفع أستخدمه في أي شركة؟</p>
                <p className="text-gray-600">
                  أيوه، معمول عشان يشتغل في أي مجال وأي حجم فريق.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">2) هل التول كيت ورقي ولا رقمي؟</p>
                <p className="text-gray-600">
                  النسخة الحالية مَطبوعة وجاهزة للاستخدام.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">3) هل فيه أمثلة داخل النماذج؟</p>
                <p className="text-gray-600">
                  أيوه، كل نموذج فيه مثال عملي مبسّط.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">4) هل مناسب للـHR المبتدئ؟</p>
                <p className="text-gray-600">
                  تمام، الأدوات واضحة وسهلة الفهم والتطبيق.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold mb-2">5) إزاي أطلب التول كيت؟</p>
                <p className="text-gray-600">
                  من الموقع أو واتساب رسمي.. التوصيل خلال ٢–٤ أيام.
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

export default HRManagerKit;
