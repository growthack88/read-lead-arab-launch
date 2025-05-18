
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Book, ClipboardCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1 text-right">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rtl-dark mb-4">
                    🟢 Startup Builder Kit | مجموعة بناء الشركات الناشئة
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8">
                    كل أدوات التخطيط والتنفيذ اللي محتاجها علشان تبدأ شركتك الناشئة صح — من الفكرة لحد التنفيذ.
                  </p>
                  <Button
                    className="bg-rtl-teal hover:bg-rtl-teal/90 text-white px-8 py-6 rounded-lg text-lg"
                  >
                    <ShoppingCart className="ml-2 h-5 w-5" />
                    أضف للسلة
                  </Button>
                </div>
                <div className="flex-1">
                  <div className="bg-rtl-yellow bg-opacity-20 rounded-2xl p-6 flex items-center justify-center">
                    <div className="w-full h-64 bg-rtl-teal/10 rounded-xl flex items-center justify-center border-2 border-dashed border-rtl-teal">
                      <p className="text-rtl-teal font-bold">صورة المنتج الرئيسية</p>
                    </div>
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

        {/* What is this kit section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-right flex items-center justify-end gap-3">
                <span>💼 إيه هي المجموعة دي؟</span>
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                <p className="text-xl mb-6 text-right flex items-center justify-end gap-3">
                  <span><strong>Startup Builder Kit</strong> هي باكج ذكية بتجمع بين:</span>
                  <span className="text-3xl">📦</span>
                </p>
                <ul className="space-y-4 mb-6 text-lg pr-2">
                  <li className="flex items-center justify-end gap-3 text-right">
                    <span>أدوات عملية تساعدك تطبّق خططك</span>
                    <span className="text-rtl-teal text-lg">•</span>
                  </li>
                  <li className="flex items-center justify-end gap-3 text-right">
                    <span>محتوى تعليمي موجّه لريادة الأعمال</span>
                    <span className="text-rtl-teal text-lg">•</span>
                  </li>
                  <li className="flex items-center justify-end gap-3 text-right">
                    <span>جورنال تفاعلي توثق فيه رحلتك الريادية</span>
                    <span className="text-rtl-teal text-lg">•</span>
                  </li>
                </ul>
                <p className="text-xl text-right bg-rtl-teal/10 p-4 rounded-lg border border-rtl-teal/20">
                  بتساعدك تبدأ مشروعك بأسلوب منظم ومدروس بدل ما تفضل تلف في دايرة "أنا مش عارف أبدأ منين!"
                </p>
              </div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-right flex items-center justify-end gap-3">
                <span>✨ إيه اللي بيميز الكيت دي عن أي حاجة تانية؟</span>
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
                        <p>"فن ريادة الأعمال" بيوجهك خطوة بخطوة من توليد الفكرة لإطلاق المشروع</p>
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

        {/* Book List Section - TWO COLUMNS */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-right flex items-center justify-end gap-3">
                <Book className="h-6 w-6 text-rtl-teal" />
                <span>📚 الكتب العشرون المتضمنة في الكيت:</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-right text-rtl-teal">العمود الأول</h3>
                  <ol dir="rtl" className="space-y-3 text-right list-decimal list-inside mr-4">
                    <li className="border-b pb-2">من الصفر إلى الواحد – بيتر ثيل وبليك ماسترز</li>
                    <li className="border-b pb-2">البناء للتشيد والاستدامة – جيمس س. كولينز</li>
                    <li className="border-b pb-2">معدلات الذكاء للنمو – تيفاني بوفا</li>
                    <li className="border-b pb-2">أسوأ نموذج عمل في العالم – داني شومان</li>
                    <li className="border-b pb-2">اكتب خطة عملك – طاقم عمل Entrepreneur Media</li>
                    <li className="border-b pb-2">الكتاب المقدس لريادة الأعمال – أندرو رومانس</li>
                    <li className="border-b pb-2">تأثير اليعسوب – جينيفر آكر وآندي سميث</li>
                    <li className="border-b pb-2">شركات الفرد الواحد – بول جارفيس</li>
                    <li className="border-b pb-2">النمو السريع بالشكل الصحيح – فال رايت</li>
                    <li>مرحلة تحضير الأعمال – راشيل هوفستيتر</li>
                  </ol>
                </div>
                
                {/* Second Column */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-right text-rtl-teal">العمود الثاني</h3>
                  <ol dir="rtl" className="space-y-3 text-right list-decimal list-inside mr-4" start={11}>
                    <li className="border-b pb-2">الجنون مجاملة – ليندا روتنبرغ</li>
                    <li className="border-b pb-2">فكر كرائد أعمال تصرف كمدير تنفيذي – بيفرلي إي جونز</li>
                    <li className="border-b pb-2">لا تقسم الفرق أبداً – كريستوفر فوس وتال راس</li>
                    <li className="border-b pb-2">محركات نمو الشركات الناشئة – شون إليز ومورغان براون</li>
                    <li className="border-b pb-2">التوسع – فيرن هارنيش</li>
                    <li className="border-b pb-2">قانون مور – أرنولد ثاكري، ديفيد بروك، راشيل جونز</li>
                    <li className="border-b pb-2">ضائع ومؤسس – راند فيشكن</li>
                    <li className="border-b pb-2">ما وراء ريادة الأعمال 2.0 – جيم كولينز وبيل ليزير</li>
                    <li className="border-b pb-2">النمو الخاطف والسريع – ريد هوفمان وكريس ييه</li>
                    <li>من جيد إلى عظيم – جيمس كولينز</li>
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

        {/* How will it help you section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-right">
                🧠 إزاي هتساعدك في الواقع؟
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 justify-end">
                  <p className="text-lg">بدل ما تبدأ من الصفر، كل حاجة جاهزة لك</p>
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <p className="text-lg">توفر عليك وقت التجريب والغلط</p>
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <p className="text-lg">تساعدك تفكر زي رائد أعمال، مش هاوي</p>
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                </div>
                <div className="flex items-start gap-4 justify-end">
                  <p className="text-lg">توثّق خطواتك وتخلّي عندك رؤية واضحة لمشروعك</p>
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* Who is this for section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-right">
                🎯 المجموعة دي مناسبة لمين؟
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-3 justify-end">
                    <span>أي حد عنده فكرة وعايز يبدأ مشروع</span>
                    <ClipboardCheck className="h-5 w-5 text-rtl-teal flex-shrink-0" />
                  </li>
                  <li className="flex items-center gap-3 justify-end">
                    <span>طلاب، مستقلين، أو موظفين بيحلموا بشغل خاص</span>
                    <ClipboardCheck className="h-5 w-5 text-rtl-teal flex-shrink-0" />
                  </li>
                  <li className="flex items-center gap-3 justify-end">
                    <span>رواد أعمال مبتدئين عايزين خطة منظمة</span>
                    <ClipboardCheck className="h-5 w-5 text-rtl-teal flex-shrink-0" />
                  </li>
                  <li className="flex items-center gap-3 justify-end">
                    <span>Accelerator أو Incubator Programs</span>
                    <ClipboardCheck className="h-5 w-5 text-rtl-teal flex-shrink-0" />
                  </li>
                </ul>
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
              <div className="bg-rtl-teal/10 rounded-xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 text-rtl-dark">💸 السعر: 1250 جنيه</h3>
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
                className="bg-rtl-yellow hover:bg-rtl-yellow/80 text-rtl-dark px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 mx-auto flex items-center justify-center gap-3 w-full md:w-auto"
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-right">
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

        {/* Questions Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-rtl-yellow/20 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-rtl-dark">❓ أسئلة؟</h2>
                <p className="text-xl">كلمنا واتساب على [رابط أو رقم الدعم] — هنرد عليك فورًا!</p>
              </div>
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
