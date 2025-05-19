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

const StartupKit = () => {
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
        {/* Hero Section - UPDATED with kit description moved here */}
        <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1 text-right">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rtl-dark mb-4 text-center">
                    🟢 Startup Builder Kit | مجموعة بناء الشركات الناشئة
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 text-right">
                    كل أدوات التخطيط والتنفيذ اللي محتاجها علشان تبدأ شركتك الناشئة صح — من الفكرة لحد التنفيذ.
                  </p>
                  
                  {/* Kit description content moved from separate section to hero */}
                  <div dir="rtl" className="space-y-2 pr-4 text-base text-[#1A1F2C] mb-8">
                    <p>📦 <strong>Startup Builder Kit</strong> هي باكج ذكية بتجمع بين:</p>
                    <ul className="list-none space-y-1">
                      <li>• أدوات عملية تساعدك تطبّق خططك</li>
                      <li>• محتوى تعليمي موجّه لريادة الأعمال</li>
                      <li>• جورنال تفاعلي توثق فيه رحلتك الريادية</li>
                    </ul>
                    <p className="bg-rtl-teal/10 p-4 rounded-lg border border-rtl-teal/20">
                      بتساعدك تبدأ مشروعك بأسلوب منظم ومدروس بدل ما تفضل تلف في دايرة "أنا مش عارف أبدأ منين!"
                    </p>
                  </div>
                  
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
                    {/* Replaced AspectRatio with direct image that preserves dimensions */}
                    <img 
                      src="/lovable-uploads/490e51b9-80e9-4446-8503-53b301967b9f.png" 
                      alt="Startup Builder Kit صورة المنتج" 
                      className="w-full h-auto rounded-xl shadow-lg object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Secondary Product Image Banner */}
        <section className="bg-white py-6">
          <div dir="rtl" className="container mx-auto px-4">
            <div className="w-full max-w-5xl mx-auto my-8">
              <img
                src="/lovable-uploads/16a9f8b7-5b4e-4981-960a-0717c90cffe5.png"
                alt="Startup Builder Kit Expanded Visual"
                className="w-full h-auto rounded-xl shadow-lg object-contain"
              />
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* COMBINED SECTION: Benefits and Target Audience */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <section dir="rtl" className="text-right my-8">
                <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-rtl-dark">🧠 الفوائد و الجمهور المستهدف</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Column 1: Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-rtl-dark">🧠 إزاي هتساعدك في الواقع؟</h3>
                    <ul className="list-none space-y-4 pr-4">
                      <li>✅ بدل ما تبدأ من الصفر، كل حاجة جاهزة لك</li>
                      <li>✅ توفر عليك وقت التجريب والغلط</li>
                      <li>✅ تساعدك تفكر زي رائد أعمال، مش هاوي</li>
                      <li>✅ توثّق خطواتك وتخلّي عندك رؤية واضحة لمشروعك</li>
                    </ul>
                  </div>
                  {/* Column 2: Target Audience */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-rtl-dark">🎯 المجموعة دي مناسبة لمين؟</h3>
                    <ul className="list-disc space-y-4 pr-4">
                      <li>أي حد عنده فكرة وعايز يبدأ مشروع</li>
                      <li>طلاب، مستقلين، أو موظفين بيحلموا بشغل خاص</li>
                      <li>رواد أعمال مبتدئين عايزين خطة منظمة</li>
                      <li>Accelerator أو Incubator Programs</li>
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

        {/* What makes this kit special section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                ✨ إيه اللي بيميز الكيت دي عن أي حاجة تانية؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">Toolkit عملي</h3>
                        <p>أكتر من 20 نموذج استراتيجي زي نموذج العمل، SWOT، خطة تسويق، تحليل السوق، وتمويل</p>
                      </div>
                      <span className="text-3xl flex-shrink-0">🔧</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">كتاب شامل</h3>
                        <p>فن ريادة الأعمال" بيوجهك خطوة بخطوة من توليد الفكرة لإطلاق المشروع"</p>
                      </div>
                      <span className="text-3xl flex-shrink-0">📘</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">Startup Journal</h3>
                        <p>كتاب تفاعلي تكتب فيه تخطيطك ومراحل تقدمك وتطور شغلك بنفسك</p>
                      </div>
                      <span className="text-3xl flex-shrink-0">📓</span>
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

        {/* Book List Section - TWO COLUMNS with UPDATED HEADINGS */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center flex items-center justify-center gap-3">
                <Book className="h-6 w-6 text-rtl-teal" />
                <span>📚 الكتب العشرون المتضمنة في الكيت:</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column - UPDATED HEADING */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-center text-rtl-teal">📘 كتب التخطيط، النماذج، والاستراتيجية</h3>
                  <ul dir="rtl" className="space-y-1 pr-4 text-right">
                    <li className="border-b pb-2">1. من الصفر إلى الواحد – بيتر ثيل وبليك ماسترز</li>
                    <li className="border-b pb-2">2. البناء للتشيد والاستدامة – جيمس س. كولينز</li>
                    <li className="border-b pb-2">3. معدلات الذكاء للنمو – تيفاني بوفا</li>
                    <li className="border-b pb-2">4. أسوأ نموذج عمل في العالم – داني شومان</li>
                    <li className="border-b pb-2">5. اكتب خطة عملك – طاقم عمل Entrepreneur Media</li>
                    <li className="border-b pb-2">6. الكتاب المقدس لريادة الأعمال – أندرو رومانس</li>
                    <li className="border-b pb-2">7. تأثير اليعسوب – جينيفر آكر وآندي سميث</li>
                    <li className="border-b pb-2">8. شركات الفرد الواحد – بول جارفيس</li>
                    <li className="border-b pb-2">9. النمو السريع بالشكل الصحيح – فال رايت</li>
                    <li>10. مرحلة تحضير الأعمال – راشيل هوفستيتر</li>
                  </ul>
                </div>
                
                {/* Second Column - UPDATED HEADING */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-center text-rtl-teal">📙 كتب النمو، القيادة، وريادة الأعمال</h3>
                  <ul dir="rtl" className="space-y-1 pr-4 text-right">
                    <li className="border-b pb-2">11. الجنون مجاملة – ليندا روتنبرغ</li>
                    <li className="border-b pb-2">12. فكر كرائد أعمال تصرف كمدير تنفيذي – بيفرلي إي جونز</li>
                    <li className="border-b pb-2">13. لا تقسم الفرق أبداً – كريستوفر فوس وتال راس</li>
                    <li className="border-b pb-2">14. محركات نمو الشركات الناشئة – شون إليز ومورغان براون</li>
                    <li className="border-b pb-2">15. التوسع – فيرن هارنيش</li>
                    <li className="border-b pb-2">16. قانون مور – أرنولد ثاكري، ديفيد بروك، راشيل جونز</li>
                    <li className="border-b pb-2">17. ضائع ومؤسس – راند فيشكن</li>
                    <li className="border-b pb-2">18. ما وراء ريادة الأعمال 2.0 – جيم كولينز وبيل ليزير</li>
                    <li className="border-b pb-2">19. النمو الخاطف والسريع – ريد هوفمان وكريس ييه</li>
                    <li>20. من جيد إلى عظيم – جيمس كولينز</li>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                💸 السعر والمزايا
              </h2>
              <div className="bg-rtl-teal/10 rounded-xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 text-rtl-dark">السعر: 1250 جنيه</h3>
                <p className="text-xl mb-2">🚚 شحن خلال 2-4 أيام | 💳 الدفع عند الاستلام أو أونلاين</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main CTA Section - UPDATED */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-rtl-dark">🟢 مستعد تبدأ شركتك؟</h2>
              <Button
                variant="yellow"
                className="px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 mx-auto flex items-center justify-center gap-3 w-full md:w-auto"
              >
                <ShoppingCart className="ml-2 h-6 w-6" />
                🛒 اطلب المجموعة الآن
              </Button>
              <p className="text-lg font-medium mt-6 text-rtl-dark">📦 أول خطوة حقيقية تبدأ بيها رحلتك الريادية</p>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                ❤️ بيقولوا عنها إيه؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-scale shadow-md">
                  <CardContent className="p-6">
                    <p className="text-lg mb-4 text-right">"كنت حيران أبدأ منين… الكيت رتبتلي كل حاجة، حسيت فعلاً إني بدأت صح."</p>
                    <p className="font-bold text-right">– أحمد</p>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md">
                  <CardContent className="p-6">
                    <p className="text-lg mb-4 text-right">"النماذج والكتاب مع بعض خلوني أفهم السوق وأكتب خطة لأول مرة في حياتي!"</p>
                    <p className="font-bold text-right">– رنا</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* REPLACE: Questions Section with FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <section dir="rtl" className="text-right max-w-6xl mx-auto mt-12 space-y-6 border-t pt-8">
                <h2 className="text-xl font-bold text-center mb-6">📌 الأسئلة الشائعة – Startup Kit</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Column 1 */}
                  <div className="space-y-4 h-full">
                    <div className="space-y-1">
                      <p className="font-semibold">١. إيه هو Startup Kit؟</p>
                      <p>Startup Kit هو صندوق أدوات متكامل بيساعد أي حد عنده فكرة مشروع يبدأ صح. جواه أدوات عملية، كروت، نوت بوك، وتمبلتس بتساعدك تحوّل فكرتك لخطة واضحة وخطوات تنفيذية.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٢. مين اللي ممكن يستخدم Startup Kit؟</p>
                      <p>أي شخص عنده فكرة مشروع أو لسه في بداية رحلته كرائد أعمال – سواء طالب، موظف عايز يفتح مشروع جانبي، أو حتى مؤسس بدأ ولسه محتاج يجهز خطته.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٣. هو منتج رقمي ولا فعلي؟</p>
                      <p>الـ Startup Kit منتج فعلي ملموس – هيوصلك لحد باب بيتك. ممكن كمان يكون في نسخ رقمية لبعض الأدوات قريب.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٤. إيه اللي موجود جوّه الكيت؟</p>
                      <ul className="list-none space-y-1 pr-4">
                        <li>✅ كروت بتساعدك تفكر في فكرتك من كل الزوايا</li>
                        <li>✅ تمبلت Business Model Canvas</li>
                        <li>✅ جورنال منظمة لكتابة وتخطيط كل خطوة</li>
                        <li>✅ Tools تخلّيك تبني خطة تسويق، منتج، وتمويل</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٥. هل في شرح لطريقة استخدام الأدوات؟</p>
                      <p>أيوه طبعًا. كل أداة معاها إرشادات بسيطة بتوضح إزاي تستخدمها خطوة بخطوة.</p>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4 h-full">
                    <div className="space-y-1">
                      <p className="font-semibold">٦. هل لازم أكون دارس بزنس عشان أستفيد؟</p>
                      <p>لأ خالص. الأدوات معمولة بلغة بسيطة وسهلة علشان تساعدك تفكّر وتشتغل على مشروعك حتى لو معندكش خلفية بزنس.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٧. الكيت ده هيساعدني أوصل لإيه؟</p>
                      <ul className="list-disc pr-4 space-y-1">
                        <li>تفهم فكرتك بوضوح</li>
                        <li>تحط خطة واقعية</li>
                        <li>تتجنب الأخطاء اللي بيقع فيها ناس كتير</li>
                        <li>تبدأ بطريقة منظمة وواثقة</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٨. بيوصل خلال قد إيه؟</p>
                      <p>التوصيل بيتم خلال ٣–٥ أيام عمل داخل مصر</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٩. إزاي أطلبه؟</p>
                      <p>سهل جدًا! ممكن تطلبه من خلال الموقع الرسمي هنا أو تبعتلنا على الإنبوكس على السوشيال ميديا.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">١٠. لو عندي أسئلة أكتر؟</p>
                      <p>احنا دايمًا موجودين. ابعتلنا على الايميل أو الواتساب، وهنجاوبك فورًا: <strong>hi@readtolead.store</strong></p>
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

export default StartupKit;
