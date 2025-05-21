
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SalesBook = () => {
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
      <main className="py-8 pb-24">
        {/* Hero Section - Two-Column Layout */}
        <section className="bg-gradient-to-br from-white to-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
              {/* Column 1: Text Content */}
              <div className="space-y-4 text-right order-2 md:order-1">
                <h1 className="text-3xl md:text-4xl font-bold text-rtl-dark mb-4">
                  🟢 كتاب فن البيع والشراء | أسرار المبيعات المضاعفة
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-4">
                  خلاصة أهم 20 كتاب في عالم المبيعات والتفاوض لتزويد مبيعاتك وتعلم فن إقناع العملاء وإتمام الصفقات بنجاح.
                </p>
                <p className="text-base text-gray-600 mb-8">
                  📦 كتاب "فن البيع والشراء" هو دليلك العملي لاحتراف مهارات البيع والتفاوض. جمعنالك فيه خلاصة أساليب وتكتيكات أنجح خبراء المبيعات في العالم، من فهم نفسية العميل وبناء الثقة، لتقنيات الإقناع وإتمام الصفقات، وحتى بناء علاقات طويلة الأمد مع العملاء.
                </p>
              </div>
              
              {/* Column 2: Product Image */}
              <div className="order-1 md:order-2">
                <img
                  src="/lovable-uploads/5c5f5a23-f2a9-4f9c-a649-c931ff471217.png"
                  alt="كتاب فن البيع والشراء"
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
                    <li>✅ مندوبي المبيعات اللي عايزين يضاعفوا أرقامهم وعمولاتهم</li>
                    <li>✅ رواد الأعمال اللي بيحتاجوا يحسنوا مهارات البيع لمنتجاتهم</li>
                    <li>✅ أصحاب المتاجر والمحلات اللي عايزين يزودوا مبيعاتهم</li>
                    <li>✅ مديري المبيعات اللي بيطوروا استراتيجيات البيع لفرقهم</li>
                    <li>✅ المفاوضين في مختلف المجالات اللي بيسعوا لعقد صفقات أفضل</li>
                    <li>✅ أي شخص بيعمل في مجال يتطلب إقناع الآخرين</li>
                  </ul>
                </div>
                
                {/* Benefits Column */}
                <div className="space-y-2 text-right h-full">
                  <h2 className="text-2xl font-bold mb-6 text-rtl-dark">
                    🧠 إزاي الكتاب هيفيدك؟
                  </h2>
                  <ul className="list-none space-y-3 pr-4">
                    <li>• هتتعلم كيفية فهم احتياجات العميل الحقيقية والبيع لحل مشاكله</li>
                    <li>• هتكتشف تقنيات التفاوض المتقدمة اللي تضمن لك أفضل الصفقات</li>
                    <li>• هتفهم كيفية تجاوز اعتراضات العملاء والرد عليها باحترافية</li>
                    <li>• هتتعرف على أسرار لغة الجسد وتأثيرها في عملية البيع</li>
                    <li>• هتتعلم بناء علاقات طويلة الأمد مع العملاء تضمن الولاء والتكرار</li>
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
                    🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين
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
                  🟢 جاهز تضاعف مبيعاتك وتتقن فن الإقناع؟
                </h2>
              </div>
              <div className="mb-6">
                <Button
                  className="w-full max-w-md mx-auto bg-[#0D9488] hover:bg-[#0D9488]/80 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب فن البيع والشراء الآن
                </Button>
              </div>
              <p className="text-gray-700 mt-4">
                الخطوة الجاية في احتراف المبيعات تبدأ من هنا
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
                  20 ملخص لأهم الكتب العالمية الخاصة بالبيع والتفاوض:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" dir="rtl">
                    <li>عادة نمو الإيرادات – أليكس غولدفاين</li>
                    <li>الكتاب المقدس للمبيعات – جيفري غيتومر</li>
                    <li>علم البيع – ديفيد هوفيلد</li>
                    <li>البيع – فريدريك إكلوند</li>
                    <li>التحليلات التنبؤية – إيريك سيغل</li>
                    <li>معادل المبيعات – جيب بلونت</li>
                    <li>إدارة المبيعات المبسطة – مايك واينبرغ</li>
                    <li>البيع للشركات الكبرى – جيل كونراث</li>
                    <li>البيع غير المرئي – هاري بيكويث</li>
                    <li>البيع لغرض نبيل – ليزا ماكليود</li>
                  </ol>
                </div>
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" start={11} dir="rtl">
                    <li>البيانات الصغيرة – مارتن ليندستروم</li>
                    <li>المكالمات الذكية – أرت سوبزاك</li>
                    <li>محفزات الحديث – جاي باير، دانيال ليمين</li>
                    <li>البيع الاستراتيجي الجديد – روبرت ميلر، ستيفن هيمان، تاد توليجا</li>
                    <li>سيكولوجية البيع – برايان تريسي</li>
                    <li>مبدأ كعكة الحظ – برناديت جيوا</li>
                    <li>فقط استمع – مارك جولستون</li>
                    <li>هل جذبت انتباهك – سام هورن</li>
                    <li>فن التأثير على أي شخص – نيال كاسيدي</li>
                    <li>بيع الدماغ – ديفيد لويس</li>
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
                  ❓ الأسئلة الشائعة – كتاب فن البيع والشراء
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">١. إيه هو كتاب فن البيع والشراء؟</h3>
                    <p>هو كتاب بيجمع خلاصة أهم 20 كتاب عالمي في مجال المبيعات والتفاوض، بيقدمهم بلغة بسيطة وأسلوب تطبيقي عملي.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٢. مين ممكن يستفيد منه؟</h3>
                    <p>أي شخص بيشتغل أو ناوي يشتغل في المبيعات أو التسويق أو التفاوض، من مبتدئ إلى محترف.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٣. الكتاب ده بيحل أي مشاكل؟</h3>
                    <p>بيساعدك تتجاوز اعتراضات العملاء، تتعامل مع الضغط النفسي في البيع، وتحقق أهدافك البيعية بثقة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٤. إيه اللي بيميز الكتاب ده؟</h3>
                    <p>
                      ✔️ ملخصات مركّزة لأشهر كتب المبيعات<br/>
                      ✔️ تطبيقات عملية وأساليب مجربة<br/>
                      ✔️ استراتيجيات تفاوض وإقناع احترافية<br/>
                      ✔️ روتين تطوير مستمر للمبيعات
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٥. هل الكتاب مناسب للمبتدئين؟</h3>
                    <p>تمامًا! هتلاقي فيه خطوات واضحة تبدأ بيها حتى لو ماعندكش أي خبرة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٦. إزاي الكتاب بيساعدني فعليًا؟</h3>
                    <p>
                      • تكتسب مهارات تفاوض فعالة<br/>
                      • تبني ثقة سريعة مع العملاء<br/>
                      • تفهم سلوك الشراء وتتنبأ بالاعتراضات<br/>
                      • تزود معدل إتمام الصفقات
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٧. هل الكتاب نظري ولا عملي؟</h3>
                    <p>الكتاب عملي جدًا، كل فكرة فيه معمولة علشان تطبقها فورًا في شغلك.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٨. الكتاب مكتوب بأي لغة؟</h3>
                    <p>اللغة العربية البسيطة، مع استخدام مصطلحات مهنية إنجليزية عند اللزوم.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٩. هل الكتاب بيناسب كل القطاعات؟</h3>
                    <p>أيوه، ينفع للمبيعات المباشرة، B2B، B2C، التسويق العقاري، المنتجات الرقمية، وغيرها.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">١٠. إزاي أطلب الكتاب؟</h3>
                    <p>اطلبه من خلال الموقع أو ابعتلنا على الواتساب، وهيوصل لحد بابك.</p>
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
                  اطلب الكتاب دلوقتي وابدأ رحلة احتراف المبيعات
                </h2>
              </div>
              <div className="mb-6">
                <Button
                  className="w-full max-w-md mx-auto bg-[#0D9488] hover:bg-[#0D9488]/90 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب فن البيع والشراء الآن
                </Button>
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
        <Button className="bg-[#0D9488] text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
          <ShoppingCart className="ml-2 h-5 w-5" /> 📦 اطلب الآن
        </Button>
        <div className="font-bold text-lg">
          السعر: 400 جنيه
        </div>
      </div>
    </div>
  );
};

export default SalesBook;
