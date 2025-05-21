import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Book } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductivityBook = () => {
  // Shopify checkout link for Productivity Book
  const shopifyCheckoutLink = "https://si51ve-s6.myshopify.com/cart/42047911362665:1?channel=buy_button";

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="كتاب إنتاجية بلا حدود | Read to Lead"
        description="ملخصات لأهم كتب الإنتاجية وأساليب تنظيم الوقت في كتاب واحد عملي وسهل التطبيق."
        image="/assets/book-productivity.jpg"
        url="https://land.readtolead.store/productivity-book"
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

      {/* Main Content */}
      <main className="py-8 pb-24">
        {/* Hero Section - Converted to Two-Column Layout */}
        <section className="bg-gradient-to-br from-white to-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
              {/* Column 1: Text Content */}
              <div className="space-y-4 text-right order-2 md:order-1">
                <h1 className="text-3xl md:text-4xl font-bold text-rtl-dark mb-4">
                  🟢 كتاب إنتاجية بلا حدود | طريقك للعمل الذكي
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-4">
                  خلاصة أهم 20 كتاب في الإنتاجية والتنظيم هتغير طريقة شغلك وتوفر وقتك وتضاعف إنجازك.
                </p>
                <p className="text-base text-gray-600 mb-8">
                  📦 كتاب "إنتاجية بلا حدود" جمعنا فيه خلاصة تجارب أنجح خبراء الإنتاجية في العالم. مش مجرد نصائح، دي أنظمة كاملة هتغير طريقتك في الشغل والحياة، وتخليك تنجز أكتر بمجهود أقل.
                </p>
              </div>
              
              {/* Column 2: Product Image */}
              <div className="order-1 md:order-2">
                <img
                  src="/lovable-uploads/b346efb8-3583-4174-b3c9-14d5cef23ec9.png"
                  alt="كتاب إنتاجية بلا حدود"
                  className="w-full h-auto rounded-xl shadow-lg object-cover max-w-md mx-auto"
                  style={{ aspectRatio: "2/1" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* Target Audience and Benefits Section - MERGED */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Target Audience Column */}
                <div className="space-y-2 text-right h-full">
                  <h2 className="text-2xl font-bold mb-6 text-rtl-dark">
                    🎯 الكتاب ده مناسب لمين؟
                  </h2>
                  <ul className="list-none space-y-3 pr-4">
                    <li>✅ الموظفين اللي عايزين يحسنوا أداءهم ويزيدوا فرص ترقيتهم</li>
                    <li>✅ رواد الأعمال اللي بيتعاملوا مع مهام كتيرة في وقت محدود</li>
                    <li>✅ الفريلانسرز اللي بيتعاملوا مع مشاريع متعددة</li>
                    <li>✅ المديرين اللي محتاجين يديروا فرقهم بكفاءة أعلى</li>
                    <li>✅ الطلبة اللي بيدوروا على طرق أفضل للمذاكرة والتحصيل</li>
                    <li>✅ أي شخص حاسس إن اليوم بيخلص من غير ما ينجز اللي عايزه</li>
                  </ul>
                </div>
                
                {/* Benefits Column */}
                <div className="space-y-2 text-right h-full">
                  <h2 className="text-2xl font-bold mb-6 text-rtl-dark">
                    🧠 إزاي الكتاب هيفيدك؟
                  </h2>
                  <ul className="list-none space-y-3 pr-4">
                    <li>• هتتعلم إزاي تستخدم طريقة الـ Time Blocking لزيادة التركيز وتقليل التشتت</li>
                    <li>• هتكتشف تقنيات إدارة الطاقة مش بس إدارة الوقت، لأن الطاقة أهم من الوقت</li>
                    <li>• هتتعلم استراتيجيات عملية لتقليل المهام غير المهمة وتركز على اللي بيعمل فرق</li>
                    <li>• إزاي تشتغل بذكاء وليس بجهد!</li>
                    <li>• هتتعلم تشتغل ساعات أقل بإنتاجية أعلى.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* Price section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-rtl-dark text-right">
                💸 السعر والمزايا
              </h2>
              <div className="bg-rtl-teal/10 rounded-xl p-8">
                <div className="flex justify-between items-center flex-wrap">
                  <div>
                    <p className="text-lg">السعر السابق: <span className="line-through text-gray-500">500 جنيه</span></p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rtl-teal">السعر: 400 جنيه</h3>
                  </div>
                </div>
                <div className="mt-6 text-right">
                  <p className="text-gray-700">
                    🚚 شحن خلال ١-٣ أيام | 💳 الدفع عند الاستلام أو أونلاين
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                  🟢 جاهز تضاعف إنتاجيتك وتنجز أكتر بوقت أقل؟
                </h2>
              </div>
              <div className="mb-6">
                <a
                  href={shopifyCheckoutLink}
                  className="w-full max-w-md mx-auto bg-yellow-500 hover:bg-yellow-600 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform inline-flex items-center justify-center"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب إنتاجية بلا حدود الآن
                </a>
              </div>
              <p className="text-gray-700 mt-4">
                الخطوة الجاية في تطوير نفسك تبدأ من هنا
              </p>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* Book Summaries Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-right mb-8">
                <h2 className="text-2xl font-bold mb-2 text-rtl-dark">
                  📚 إيه اللي هتلاقيه جوا الكتاب؟
                </h2>
                <p className="text-gray-700">
                  20 ملخص لأهم الكتب العالمية الخاصة بالإنتاجية:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" dir="rtl">
                    <li>10 أيام كاملة لضمان قراءة سريعة – معهد برينستون وأبي ماركس بيلي</li>
                    <li>18 دقيقة – بيتر بريغمان</li>
                    <li>التروس الخمسة – جيريمي كوبيشك وستيف كوكرام</li>
                    <li>أن تكون جاهلاً – مارك هيرست</li>
                    <li>ممل ورائع – مانوش زومورودي</li>
                    <li>عمليات التنفس – مايكل تاونسند ويليامز</li>
                    <li>لا تفعل شيئًا – سيليست هيدلي</li>
                    <li>لحظات من التوقف المؤقت – روبرت بوينتون</li>
                    <li>قم بعملك – ستيفن بريسفيلد</li>
                    <li>أسقط الكرة – تيفاني دوفو</li>
                  </ol>
                </div>
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" start={11} dir="rtl">
                    <li>تقليل الجهد – غريغ ماكيون</li>
                    <li>حرية التركيز – مايكل هايت</li>
                    <li>جيمبا كايزن – ماساكي ايماي</li>
                    <li>احصل على حياة – ريك هيوز</li>
                    <li>عادات عالية الأداء – بريندون بيرشارد</li>
                    <li>أنا أعرف كيف تقومين بهذا – لورا فاندركام</li>
                    <li>تعلم مثل المحترفين – باربرا أوكلي وأولاف شيوي</li>
                    <li>اصنع الوقت – جيك ناب وجون زيراتسكي</li>
                    <li>الضوضاء – جوزيف ماكورماك</li>
                    <li>على مدار الساعة – لورا فاندركام</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-right mb-8">
                <h2 className="text-2xl font-bold text-rtl-dark">
                  ❓ الأسئلة الشائعة – كتاب إنتاجية بلا حدود
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">١. إيه هو كتاب إنتاجية بلا حدود؟</h3>
                    <p>هو كتاب بيجمع خلاصة أهم 20 كتاب عالمي في مجال الإنتاجية والتنظيم، بيقدمهم في شكل مبسط وعملي يمكن تطبيقه على طول.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٢. مين ممكن يستفيد منه؟</h3>
                    <p>أي شخص عايز يستغل وقته بشكل أفضل سواء كان موظف، مدير، رائد أعمال، فريلانسر، أو حتى طالب.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٣. الكتاب ده بيحل أي مشاكل؟</h3>
                    <p>بيحل مشاكل تأجيل المهام، التشتت، ضياع الوقت، الإرهاق، قلة الإنتاجية، وصعوبة التوازن بين الشغل والحياة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٤. إيه اللي بيميز الكتاب ده؟</h3>
                    <p>
                      ✔️ ملخص لأشهر 20 كتاب في الإنتاجية<br/>
                      ✔️ تطبيقات عملية مش مجرد نظريات<br/>
                      ✔️ أنظمة وروتين يومي جاهز للتطبيق<br/>
                      ✔️ استراتيجيات مجربة من خبراء عالميين
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٥. هل الكتاب مناسب للمبتدئين؟</h3>
                    <p>تمامًا! مشروح بلغة بسيطة، والأفكار متدرجة من الأساسيات للأفكار المتقدمة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٦. إزاي الكتاب بيساعدني فعليًا؟</h3>
                    <p>
                      • تبني نظام إنتاجية خاص بيك<br/>
                      • تتخلص من عادات مضيعة للوقت<br/>
                      • تحسن تركيزك في العمل<br/>
                      • تحقق توازن أفضل بين الشغل والحياة
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٧. هل الكتاب نظري ولا عملي؟</h3>
                    <p>الكتاب يجمع بين النظرية والتطبيق، كل فكرة فيه متبوعة بخطوات عملية للتنفيذ.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٨. الكتاب مكتوب بأي لغة؟</h3>
                    <p>الكتاب مكتوب بالعربية البسيطة والمفهومة، مع الاحتفاظ بالمصطلحات الأجنبية المهمة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٩. هل الكتاب مناسب للشركات؟</h3>
                    <p>أيوه، ممكن للشركات تستخدمه لتدريب الموظفين وتحسين إنتاجية الفريق بشكل عام.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">١٠. إزاي أطلب الكتاب؟</h3>
                    <p>اطلبه من خلال الموقع أو تواصل معانا، وهيوصل لحد بابك.</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                  اطلب الكتاب دلوقتي وابدأ رحلة الإنتاجية
                </h2>
              </div>
              <div className="mb-6">
                <a
                  href={shopifyCheckoutLink}
                  className="w-full max-w-md mx-auto bg-rtl-teal hover:bg-rtl-teal/90 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform inline-flex items-center justify-center"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب إنتاجية بلا حدود الآن
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with centered logo */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center w-full mb-4">
              <Logo className="mx-auto" />
            </div>
            <p className="text-gray-600 mb-4 text-center">© 2025 جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
      
      {/* Sticky Purchase Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-3 px-4 z-50 flex justify-between items-center md:px-8">
        <a href={shopifyCheckoutLink} className="bg-[#0D9488] text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity inline-flex items-center gap-2">
          <ShoppingCart className="ml-2 h-5 w-5" /> 📦 اطلب الآن
        </a>
        <div className="font-bold text-lg">
          السعر: 400 جنيه
        </div>
      </div>
    </div>
  );
};

export default ProductivityBook;
