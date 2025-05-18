
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Check, Book, ClipboardCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const StartupKit = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 border-b sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Logo />
            <nav className="space-x-6 rtl">
              <a href="/" className="text-rtl-dark hover:text-rtl-teal">
                الرئيسية
              </a>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal">
                المنتجات
              </a>
              <a href="#" className="text-rtl-dark hover:text-rtl-teal">
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
        <section className="bg-gradient-to-br from-white to-gray-50 py-16 md:py-20 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-right">
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
        <section className="py-12 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark">
                💼 إيه هي المجموعة دي؟
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-xl mb-6">
                  📦 Startup Builder Kit هي باكج ذكية بتجمع بين أدوات عملية، محتوى تعليمي، وجورنال تفاعلي.
                </p>
                <p className="text-xl">
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
        <section className="py-12 bg-white rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark">
                ✨ إيه اللي بيميز الكيت دي عن أي حاجة تانية؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">🔧</span>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Toolkit عملي</h3>
                        <p>أكتر من 20 نموذج استراتيجي زي نموذج العمل، SWOT، خطة تسويق، تحليل السوق، وتمويل</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📘</span>
                      <div>
                        <h3 className="font-bold text-xl mb-2">كتاب شامل</h3>
                        <p>"فن ريادة الأعمال" بيوجهك خطوة بخطوة من توليد الفكرة لإطلاق المشروع</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📓</span>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Startup Journal</h3>
                        <p>كتاب تفاعلي تكتب فيه تخطيطك ومراحل تقدمك وتطور شغلك بنفسك</p>
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

        {/* Book List Section */}
        <section className="py-12 bg-gray-50 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark flex items-center justify-end gap-3">
                <span>📚 الكتب العشرون المتضمنة في الكيت:</span>
                <Book className="h-6 w-6 text-rtl-teal" />
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <ul className="space-y-3 text-right">
                  <li className="border-b pb-2">Zero to One - من الصفر إلى الواحد by Peter Thiel & Blake Masters - بيتر ثيل وبليك ماسترز</li>
                  <li className="border-b pb-2">Built to Last - البناء للتشيد والاستدامة by Jim Collins - جيمس س. كولينز</li>
                  <li className="border-b pb-2">Growth IQ - معدلات الذكاء للنمو by Tiffani Bova - تيفاني بوفا</li>
                  <li className="border-b pb-2">The Worst Business Model in the World - أسوأ نموذج عمل في العالم by Danny Schuman - داني شومان</li>
                  <li className="border-b pb-2">Write Your Business Plan - اكتب خطة عملك by The Staff of Entrepreneur Media, Inc - طاقم عمل Entrepreneur Media، Inc</li>
                  <li className="border-b pb-2">The Entrepreneurial Bible to Venture Capital - الكتاب المقدس لريادة الأعمال لرأس المال الاستثماري by Andrew Romans - أندرو رومانس</li>
                  <li className="border-b pb-2">The Dragonfly Effect - تأثير اليعسوب by Jennifer Aaker, Andy Smith with Carlye Adler - جينيفر آكر وآندي سميث مع كارلي أدلر</li>
                  <li className="border-b pb-2">Company of One - شركات الفرد الواحد by Paul Jarvis - بول جارفيس</li>
                  <li className="border-b pb-2">Rapid Growth, Done Right - النمو السريع بالشكل الصحيح by Val Wright - فال رايت</li>
                  <li className="border-b pb-2">Cooking Up a Business - مرحلة تحضير الأعمال by Rachel Hofstetter - راشيل هوفستيتر</li>
                  <li className="border-b pb-2">Crazy is a Compliment - الجنون مجاملة by Linda Rottenberg - ليندا روتنبرغ</li>
                  <li className="border-b pb-2">Think Like an Entrepreneur, Act Like a CEO - فكر كرائد أعمال تصرف كمدير تنفيذي by Beverly E. Jones - بيفرلي إي جونز</li>
                  <li className="border-b pb-2">Never Split the Difference - لا تقسم الفرق أبداً by Christopher Voss & Tahl Raz - تال راس وكريستوفر فوس</li>
                  <li className="border-b pb-2">Startup Growth Engines - محركات نمو الشركات الناشئة by Sean Ellis & Morgan Brown - شون إليز ومورغان براون</li>
                  <li className="border-b pb-2">Scaling Up - التوسع by Verne Harnish - فيرن هارنيش</li>
                  <li className="border-b pb-2">Moore's Law - قانون مور by Arnold Thackray, David Brock and Rachel Jones - أرنولد ثاكري، ديفيد بروك، راشيل جونز</li>
                  <li className="border-b pb-2">Lost and Founder - ضائع ومؤسس by Rand Fishkin - راند فيشكن</li>
                  <li className="border-b pb-2">Beyond Entrepreneurship 2.0 - ما وراء ريادة الأعمال 2.0 by Jim Collins and Bill Lazier - جيم كولينز وبيل ليزير</li>
                  <li className="border-b pb-2">Blitzscaling - النمو الخاطف والسريع by Reid Hoffman and Chris Yeh - ريد هوفمان وكريس ييه</li>
                  <li>Good to Great - من جيد إلى عظيم by James C. Collins - جيمس كولينز</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* How will it help you section */}
        <section className="py-12 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark">
                🧠 إزاي هتساعدك في الواقع؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                  <p className="text-lg">بدل ما تبدأ من الصفر، كل حاجة جاهزة لك</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                  <p className="text-lg">توفر عليك وقت التجريب والغلط</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                  <p className="text-lg">تساعدك تفكر زي رائد أعمال، مش هاوي</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                  <p className="text-lg">توثّق خطواتك وتخلّي عندك رؤية واضحة لمشروعك</p>
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
        <section className="py-12 bg-gray-50 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark">
                🎯 المجموعة دي مناسبة لمين؟
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <ul className="space-y-3 text-lg">
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
        <section className="py-12 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-rtl-teal/10 rounded-xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 text-rtl-dark">💸 السعر: 1250 جنيه</h3>
                <p className="text-xl mb-2">🚚 شحن خلال 2-4 أيام | 💳 الدفع عند الاستلام أو أونلاين</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 bg-gray-50 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark">
                ❤️ بيقولوا عنها إيه؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-scale shadow-md">
                  <CardContent className="p-6">
                    <p className="text-lg mb-4">"كنت حيران أبدأ منين… الكيت رتبتلي كل حاجة، حسيت فعلاً إني بدأت صح."</p>
                    <p className="font-bold text-right">– أحمد</p>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md">
                  <CardContent className="p-6">
                    <p className="text-lg mb-4">"النماذج والكتاب مع بعض خلوني أفهم السوق وأكتب خطة لأول مرة في حياتي!"</p>
                    <p className="font-bold text-right">– رنا</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-rtl-teal text-white py-16 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">🟢 مستعد تبدأ شركتك؟</h2>
              <Button
                className="inline-block bg-white text-rtl-teal px-8 py-6 rounded-lg font-bold text-lg hover:bg-rtl-yellow hover:text-rtl-dark transition-all duration-200 mb-4"
              >
                <ShoppingCart className="ml-2 h-5 w-5" />
                اطلب Startup Builder Kit دلوقتي 🛒
              </Button>
              <p className="text-lg font-medium mt-4">📦 أول خطوة حقيقية تبدأ بيها رحلتك الريادية</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-rtl-dark text-white py-10 rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Read to Lead</h3>
              <p className="text-gray-300">
                مجموعة مختارة من أقوى الكتب والكيتس التعليمية لنجاحك الشخصي والمهني
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">روابط مهمة</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    المنتجات
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    من نحن
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">خدمة العملاء</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    الأسئلة الشائعة
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    سياسة الشحن
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-end gap-2">
                  <span>info@readtolead.com</span>
                  <span>✉️</span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>+123456789</span>
                  <span>📱</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400">© 2024 جميع الحقوق محفوظة Read to Lead</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartupKit;
