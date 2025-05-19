import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Book, ClipboardCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductivityKit = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
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
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1 text-right">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rtl-dark mb-4 text-center">
                    🟢 Productivity Kit | مجموعة الإنتاجية وتطوير الذات
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-4 text-right">
                    كل الأدوات والكتب اللي تساعدك ترتّب يومك، تحقّق أهدافك، وتشتغل على نفسك بطريقة ذكية ومنظّمة.
                  </p>
                  <p className="text-base text-gray-600 mb-8 text-right">
                    📦 Productivity Kit هي مجموعة أدوات متكاملة بتساعدك على تحقيق أفضل أداء شخصي ومهني من خلال أدوات تنظيم الوقت وتحديد الأهداف وتحسين الإنتاجية. مثالية للموظفين، القادة، وأصحاب المشاريع اللي حابين يقللوا التشتت، ويحققوا توازن بين الشغل والحياة.
                  </p>
                  
                  <div className="text-center md:text-right">
                    <Button
                      variant="yellow"
                      className="px-8 py-6 rounded-lg text-lg"
                    >
                      <ShoppingCart className="ml-2 h-5 w-5" />
                      أضف للسلة
                    </Button>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full max-w-4xl mx-auto">
                    <img 
                      src="/lovable-uploads/114e9871-6093-4f4f-ac79-d414fc260de5.png" 
                      alt="Productivity Kit صورة المنتج" 
                      className="w-full h-auto rounded-xl shadow-lg object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* What's Inside Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                ✨ إيه اللي هتلاقيه جوّه الكيت؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">📈 Productivity & Growth Toolkit</h3>
                        <p>تتبع الوقت، أهداف SMART، خارطة طريق استراتيجية، خطة أسبوعية</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">📘 كتاب الإنتاجية</h3>
                        <p>مفاهيم إدارة الوقت، ترتيب الأولويات، وتحقيق الإنجاز</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">📕 كتاب تطوير الذات</h3>
                        <p>مهارات شخصية وعملية بخطوات عملية ومدروسة</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <section dir="rtl" className="text-right my-8">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-rtl-dark">🧠 إزاي الكيت هتفيدك؟</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Benefits */}
                  <div>
                    <ul className="list-none space-y-4 pr-4">
                      <li>✅ هيساعدك تشتغل على أولوياتك وتقلل التشتت</li>
                      <li>✅ هتحقق توازن حقيقي بين شغلك وحياتك</li>
                      <li>✅ هتطوّر نفسك وتحسن مستواك المهني</li>
                      <li>✅ هتنجز أكتر بأقل مجهود</li>
                    </ul>
                  </div>
                  
                  {/* Audience */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-rtl-dark">🎯 المجموعة دي مناسبة لمين؟</h3>
                    <ul className="list-disc space-y-4 pr-4">
                      <li>الموظفين والمديرين</li>
                      <li>أصحاب المشاريع ورواد الأعمال</li>
                      <li>الطلاب اللي بيوازنوا بين الدراسة والحياة</li>
                      <li>أي شخص بيدوّر على طريقة يرتّب بيها يومه ويشتغل بذكاء</li>
                    </ul>
                  </div>
                </div>
              </section>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                💸 السعر والمزايا
              </h2>
              <div className="bg-rtl-teal/10 rounded-xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 text-rtl-dark">السعر: ٩٩٩ جنيه</h3>
                <p className="text-xl mb-2">السعر السابق: <span className="line-through text-gray-500">١٢٠٠ جنيه</span></p>
                <p className="text-xl mb-2">🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main CTA Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-rtl-dark">🟢 مستعد تبدأ رحلتك في الإنتاجية؟</h2>
              <Button
                variant="yellow"
                className="px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 mx-auto flex items-center justify-center gap-3 w-full md:w-auto"
              >
                <ShoppingCart className="ml-2 h-6 w-6" />
                🛒 اطلب Productivity Kit الآن
              </Button>
              <p className="text-lg font-medium mt-6 text-rtl-dark">ابدأ بإدارة وقتك وتطوير نفسك من النهاردة</p>
            </div>
          </div>
        </section>

        {/* Book List Section - TWO COLUMNS */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center flex items-center justify-center gap-3">
                <Book className="h-6 w-6 text-rtl-teal" />
                <span>📚 الكتب المتضمنة</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Single column with all books */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <ul dir="rtl" className="space-y-1 pr-4 text-right">
                    <li className="border-b pb-2">1. 10 أيام للقراءة السريعة – معهد برينستون، أبي ماركس بيلي</li>
                    <li className="border-b pb-2">2. 18 دقيقة – بيتر بريغمان</li>
                    <li className="border-b pb-2">3. التروس الخمسة – كوبيشك وكوكرام</li>
                    <li className="border-b pb-2">4. أن تكون جاهلاً – مارك هيرست</li>
                    <li className="border-b pb-2">5. ممل ورائع – مانوش زومورودي</li>
                    <li className="border-b pb-2">6. عمليات التنفس – مايكل تاونسند ويليامز</li>
                    <li className="border-b pb-2">7. لا تفعل شيئًا – سيليست هيدلي</li>
                    <li className="border-b pb-2">8. لحظات من التوقف المؤقت – روبرت بوينتون</li>
                    <li className="border-b pb-2">9. قم بعملك – ستيفن بريسفيلد</li>
                    <li>10. أسقط الكرة – تيفاني دوفو</li>
                  </ul>
                </div>
                
                {/* Second column with remaining books */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <ul dir="rtl" className="space-y-1 pr-4 text-right">
                    <li className="border-b pb-2">11. تقليل الجهد – غريغ ماكيون</li>
                    <li className="border-b pb-2">12. حرية التركيز – مايكل هايت</li>
                    <li className="border-b pb-2">13. جيمبا كايزن – ماساكي ايماي</li>
                    <li className="border-b pb-2">14. احصل على حياة – ريك هيوز</li>
                    <li className="border-b pb-2">15. عادات عالية الأداء – بريندون بيرشارد</li>
                    <li className="border-b pb-2">16. أنا أعرف كيف تقومين بهذا – لورا فاندركام</li>
                    <li className="border-b pb-2">17. تعلم مثل المحترفين – باربرا أوكلي، أولاف شيوي</li>
                    <li className="border-b pb-2">18. اصنع الوقت – جيك ناب، جون زيراتسكي</li>
                    <li className="border-b pb-2">19. الضوضاء – جوزيف ماكورماك</li>
                    <li>20. على مدار الساعة – لورا فاندركام</li>
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

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <section dir="rtl" className="text-right max-w-6xl mx-auto mt-12 space-y-6 border-t pt-8">
                <h2 className="text-xl font-bold text-center mb-6">❓ الأسئلة الشائعة – Productivity Kit</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Column 1 */}
                  <div className="space-y-4 h-full">
                    <div className="space-y-1">
                      <p className="font-semibold">١. إيه هو Productivity Kit؟</p>
                      <p>هو مجموعة أدوات عملية مصممة علشان تساعدك تنظم وقتك، تحدد أهدافك، وتزيد إنتاجيتك سواء في الشغل أو في حياتك اليومية.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٢. مين اللي ممكن يستفيد منها؟</p>
                      <p>أي شخص عايز يكون أكتر تنظيمًا وكفاءة، سواء كان موظف، مدير، رائد أعمال، أو حتى طالب.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٣. إيه اللي موجود جوا الكيت؟</p>
                      <p>📌 أدوات تنظيم:</p>
                      <ul className="list-none space-y-1 pr-4">
                        <li>• خطة الأسبوع</li>
                        <li>• نموذج SMART</li>
                        <li>• تتبع الوقت</li>
                        <li>• خارطة طريق للنمو</li>
                      </ul>
                      <p>📚 كتابين:</p>
                      <ul className="list-none space-y-1 pr-4">
                        <li>• عن الإنتاجية</li>
                        <li>• عن تطوير الذات</li>
                      </ul>
                      <p>📖 + ملخصات لأكتر من ٢٠ كتاب عالمي</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٤. هل لازم أكون مشغول جدًا علشان أحتاج الكيت؟</p>
                      <p>لأ، الكيت معمول لأي شخص عايز يستخدم وقته بشكل أذكى ويعيش حياته بإنتاجية أعلى.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٥. هل في شرح لطريقة استخدام الأدوات؟</p>
                      <p>أيوه، كل أداة معاها دليل مبسط تقدر تطبقه فورًا.</p>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4 h-full">
                    <div className="space-y-1">
                      <p className="font-semibold">٦. إزاي الكيت ممكن يغير يومي؟</p>
                      <ul className="list-disc pr-4 space-y-1">
                        <li>تفهم وقتك بيروح فين</li>
                        <li>تشتغل على الأولويات</li>
                        <li>تقلل التشتت</li>
                        <li>تلاقي توازن حقيقي</li>
                        <li>تتطور ذاتيًا ومهنيًا</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٧. الكتب كاملة ولا ملخصة؟</p>
                      <p>فيها كتابين كاملين + ملخصات مركّزة لأكتر من ٢٠ كتاب عالمي.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٨. هل تنفع أستخدم الكيت مع فريقي؟</p>
                      <p>أكيد! تنفع لاجتماعات، تدريبات، ومراجعات أداء.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٩. هو منتج رقمي ولا بيوصل لحد البيت؟</p>
                      <p>منتج فعلي ملموس، بيوصل لحد بابك.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">١٠. إزاي أطلب الكيت؟</p>
                      <p>من موقعنا أو تواصل معانا على السوشيال ميديا، والتوصيل خلال أيام.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="py-6 text-center border-t">
        <p className="text-gray-600">© جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default ProductivityKit;
