
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const StartupKit = () => {
  // Function to scroll back to top when navigating between sections
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto rtl">
            {/* Left Column - Text */}
            <div className="space-y-4 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl font-bold text-rtl-dark">
                🟢 Startup Builder Kit | كل ما تحتاجه لبدء مشروعك بنجاح
              </h1>
              <p className="text-lg text-gray-700 font-medium">
                مجموعة متكاملة من الأدوات العملية، الكتب، والقوالب الجاهزة لمساعدة رواد الأعمال على بناء مشروعهم بطريقة احترافية.
              </p>
              <p className="text-gray-600">
                Startup Builder Kit هي حقيبة متكاملة تجمع بين دفتر المشاريع + حقيبة أدوات الشركات الناشئة + كتاب ريادة الأعمال، لمساعدتك في كل خطوة من رحلتك الريادية، من الفكرة الأولية وحتى النمو والتوسع.
              </p>
            </div>

            {/* Right Column - Image */}
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

      {/* Benefits & Target Audience Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto rtl">
            {/* Right Column (target audience) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                🎯 الحقيبة دي مناسبة لمين؟
              </h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>رواد الأعمال في بداية الطريق</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أصحاب الشركات الناشئة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أصحاب الأفكار اللي محتاجين يحولوها لخطط عمل</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>مديري المشاريع والمنتجات الجديدة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>طلاب إدارة الأعمال وحاضنات الأعمال</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>المستثمرين المهتمين بفهم آليات بناء الشركات الناشئة</span>
                </li>
              </ul>
            </div>

            {/* Left Column (benefits) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                🧠 إزاي الحقيبة هتفيدك؟
              </h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتساعدك تحول أفكارك لخطط عمل قابلة للتنفيذ والنجاح</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتوفر لك أكتر من 20 قالب احترافي (SWOT, BMC, PESTLE وغيرها)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتساعدك تتجنب الأخطاء الشائعة للشركات الناشئة</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتعرفك على استراتيجيات التمويل والنمو المناسبة لمشروعك</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتديك خريطة طريق واضحة لكل مرحلة من مراحل بناء مشروعك</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rtl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-rtl-dark">
              📚 إيه اللي هتلاقيه جوه الحقيبة؟
            </h2>
            <p className="text-center text-lg mb-8">
              حقيبة متكاملة تجمع أدوات وموارد متنوعة لدعم رحلتك الريادية
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">📝 Startup Journal</h3>
                  <p>دفتر خاص لتسجيل وتنظيم أفكارك ومتابعة تقدمك في رحلة بناء مشروعك.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">🧰 Startup Toolkit</h3>
                  <p>مجموعة من أكثر من 20 قالب احترافي لاستراتيجيات وخطط العمل وتحليل السوق.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">📘 كتاب فن ريادة الأعمال</h3>
                  <p>خلاصة أهم 20 كتاب عالمي في ريادة الأعمال لتتعلم من تجارب أنجح الرواد.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">📊 نماذج خطط العمل</h3>
                  <p>نماذج جاهزة لخطط العمل، العروض التقديمية للمستثمرين، ودراسات الجدوى.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center rtl">
            <h2 className="text-3xl font-bold mb-6 text-rtl-dark">
              🟢 جاهز تبدأ رحلتك في بناء مشروعك الناجح؟
            </h2>

            <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-rtl-teal">السعر: 1250 جنيه</span>
                  <span className="text-lg line-through text-gray-500">السعر السابق: 1400 جنيه</span>
                </div>
                <p className="text-gray-600 mb-4">
                  🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين
                </p>
                <Button
                  variant="custom"
                  size="lg"
                  className="px-5 py-3 rounded-lg hover:scale-105 transition text-lg bg-[#0D9488] text-white"
                >
                  🛒 اطلب Startup Builder Kit الآن
                </Button>
                <p className="mt-4 text-gray-600">استثمار صغير في بداية مشروع ناجح كبير</p>
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
              ❓ الأسئلة الشائعة – Startup Builder Kit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-bold">١. إيه هي Startup Builder Kit؟</p>
                <p className="text-gray-600">
                  هي حقيبة متكاملة من الأدوات والموارد العملية اللي صممناها خصيصاً لمساعدة رواد الأعمال في بناء مشاريعهم بمنهجية احترافية.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٢. مين ممكن يستفيد منها؟</p>
                <p className="text-gray-600">
                  رواد الأعمال الجدد، أصحاب الشركات الناشئة، أصحاب الأفكار اللي محتاجين يحولوها لخطط عمل، ومديري المشاريع والمنتجات.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٣. الحقيبة دي بتحل أي مشاكل؟</p>
                <p className="text-gray-600">
                  بتحل مشكلة عدم وجود منهجية واضحة لتحويل الأفكار لمشاريع، صعوبة إعداد خطط عمل احترافية، وقلة الخبرة في مجال ريادة الأعمال.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٤. إيه اللي بيميز الحقيبة دي؟</p>
                <p className="text-gray-600">
                  ✔️ تجمع بين المحتوى النظري والأدوات العملية<br />
                  ✔️ قوالب استراتيجية جاهزة للتطبيق<br />
                  ✔️ خلاصة تجارب أنجح رواد الأعمال
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٥. هل الحقيبة مناسبة للمبتدئين؟</p>
                <p className="text-gray-600">
                  نعم، الحقيبة صممت بحيث تكون مفهومة وسهلة الاستخدام للمبتدئين، مع تقديم محتوى متقدم للخبراء أيضاً.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٦. إزاي الحقيبة بتساعدني فعلياً؟</p>
                <p className="text-gray-600">
                  توفر لك منهجية واضحة لبناء مشروعك خطوة بخطوة<br />
                  تقدم لك قوالب جاهزة توفر الوقت والجهد<br />
                  تعلمك من أخطاء وتجارب رواد الأعمال السابقين
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Purchase Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t z-50 px-4 py-3 flex justify-between items-center rtl">
        <button className="bg-[#0D9488] text-white px-4 py-2 rounded-md hover:opacity-90">
          📦 اطلب الآن
        </button>
        <span className="font-bold text-[#0D9488]">السعر: 1250 جنيه</span>
      </div>
    </div>
  );
};

export default StartupKit;
