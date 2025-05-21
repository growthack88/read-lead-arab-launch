
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CareerBook = () => {
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
                  🟢 كتاب إدارة حياتك المهنية | خريطة طريق النجاح الوظيفي
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-4">
                  خلاصة أهم 20 كتاب في التطوير المهني والوظيفي هتساعدك تبني مسار مهني ناجح وتحقق طموحاتك في عالم العمل.
                </p>
                <p className="text-base text-gray-600 mb-8">
                  📦 كتاب "إدارة حياتك المهنية" هو دليلك الشامل لتطوير مسارك المهني وتحقيق طموحاتك. جمعنالك فيه خلاصة أفكار أنجح الخبراء في التطوير الوظيفي، من بناء المهارات المطلوبة والسيرة الذاتية القوية، للتفاوض على الراتب، وحتى تحقيق التوازن بين العمل والحياة.
                </p>
              </div>
              
              {/* Column 2: Product Image */}
              <div className="order-1 md:order-2">
                <img
                  src="/lovable-uploads/998e615e-c96d-4844-9732-dcabbf7258d6.png"
                  alt="كتاب إدارة حياتك المهنية"
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
                    <li>✅ الموظفين اللي بيخططوا لمستقبلهم المهني وبيطمحوا للترقي</li>
                    <li>✅ الخريجين الجدد اللي داخلين سوق العمل وعايزين يبدأوا صح</li>
                    <li>✅ أصحاب المهارات اللي بيفكروا في تغيير مسارهم المهني</li>
                    <li>✅ المديرين اللي عايزين يطوروا مهاراتهم القيادية</li>
                    <li>✅ الفريلانسرز اللي بيسعوا لتطوير أعمالهم وزيادة دخلهم</li>
                    <li>✅ أي شخص بيحس إنه وصل لمرحلة ركود في حياته المهنية</li>
                  </ul>
                </div>
                
                {/* Benefits Column */}
                <div className="space-y-2 text-right h-full">
                  <h2 className="text-2xl font-bold mb-6 text-rtl-dark">
                    🧠 إزاي الكتاب هيفيدك؟
                  </h2>
                  <ul className="list-none space-y-3 pr-4">
                    <li>• هتتعلم إزاي تكتشف مهاراتك وتطورها بما يتناسب مع سوق العمل</li>
                    <li>• هتفهم أسرار المقابلات الشخصية والسيرة الذاتية المميزة</li>
                    <li>• هتعرف إزاي تبني شبكة علاقات مهنية قوية تدعم مسارك الوظيفي</li>
                    <li>• هتكتشف استراتيجيات التفاوض على الراتب والمزايا الوظيفية</li>
                    <li>• هتتعلم إزاي تحقق التوازن بين نجاحك المهني وحياتك الشخصية</li>
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
                  🟢 جاهز تاخد السيطرة على مستقبلك المهني؟
                </h2>
              </div>
              <div className="mb-6">
                <Button
                  className="w-full max-w-md mx-auto bg-[#0D9488] hover:bg-[#0D9488]/80 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب إدارة حياتك المهنية الآن
                </Button>
              </div>
              <p className="text-gray-700 mt-4">
                الخطوة الجاية في مسارك الوظيفي تبدأ من هنا
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
                  20 ملخص لأهم الكتب العالمية الخاصة بالتطوير المهني:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" dir="rtl">
                    <li>المديرة الفتاة – صوفيا أموروسو</li>
                    <li>سرقة العرض – مايكل بورت</li>
                    <li>ست قبعات للتفكير – إدوارد دي بونو</li>
                    <li>المنسحب – جون أكوف</li>
                    <li>أفكار المتمردين – ماثيو سيد</li>
                    <li>تحريك الصندوق – سيث غودين</li>
                    <li>لا تحصل على وظيفة حقيقية – سكوت جيربر</li>
                    <li>الفتيات اللطيفات لا يحصلن على مكتب في الزاوية – لويس فرانكل</li>
                    <li>60 ثانية ويتم توظيفك – روبن ريان</li>
                    <li>عمل فقط لا يوجد لعب – ديل سايدبوتوم</li>
                  </ol>
                </div>
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" start={11} dir="rtl">
                    <li>قهوة غداء قهوة – ألانا مولر</li>
                    <li>إعادة تدوير وظيفتك – أنّا ميلر</li>
                    <li>يتم الاستخفاف بالبشر – جيوفري كولفين</li>
                    <li>كل شيء ممكن – روب هارتنت</li>
                    <li>أربع ثوان – بيتر بريغمان</li>
                    <li>قم بإزعاج نفسك – ويتني جونسون</li>
                    <li>كن حيث تكون قدميك – سكوت أونيل</li>
                    <li>أن تصبح ستيف جوبز – برينت شلندر، ريك تيتزيلي</li>
                    <li>التركيز – أل رييس</li>
                    <li>ابدأ بنفسك – (أضف عنوان مخصص إذا رغبت)</li>
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
                  ❓ الأسئلة الشائعة – كتاب إدارة حياتك المهنية
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">١. إيه هو كتاب إدارة حياتك المهنية؟</h3>
                    <p>هو كتاب بيجمع خلاصة أهم 20 كتاب عالمي في مجال التطوير المهني والوظيفي، ويقدمها بشكل مبسط وعملي.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٢. مين ممكن يستفيد منه؟</h3>
                    <p>أي شخص عايز يطور مساره المهني سواء كان موظف، مدير، فريلانسر، خريج جديد، أو حتى شخص بيفكر في تغيير مجاله الوظيفي.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٣. الكتاب ده بيحل أي مشاكل؟</h3>
                    <p>بيحل مشاكل صعوبة اختيار المسار المهني المناسب، ضعف فرص الترقية، صعوبة تطوير المهارات المطلوبة في سوق العمل، وتحديات التفاوض على الرواتب.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٤. إيه اللي بيميز الكتاب ده؟</h3>
                    <p>
                      ✔️ ملخص لأشهر 20 كتاب في التطوير المهني<br/>
                      ✔️ نصائح عملية للنجاح في المقابلات والتفاوض<br/>
                      ✔️ استراتيجيات لبناء العلاقات المهنية<br/>
                      ✔️ أدوات لتخطيط وتطوير المسار الوظيفي
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٥. هل الكتاب مناسب للمبتدئين؟</h3>
                    <p>أيوه، الكتاب مناسب للمبتدئين والمحترفين على حد سواء، خصوصاً الخريجين والموظفين في بداية حياتهم المهنية.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٦. إزاي الكتاب بيساعدني فعليًا؟</h3>
                    <p>
                      • تعرف نقاط قوتك ومهاراتك اللي تميزك<br/>
                      • تبني سيرة ذاتية قوية تجذب انتباه الشركات<br/>
                      • تطور استراتيجيات للنمو المهني والترقي<br/>
                      • تحقق توازن أفضل بين العمل والحياة الشخصية
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٧. هل الكتاب بيناسب كل المهن؟</h3>
                    <p>نعم، المبادئ والاستراتيجيات في الكتاب عامة وتناسب مختلف المجالات المهنية.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٨. الكتاب مكتوب بأي لغة؟</h3>
                    <p>الكتاب مكتوب بالعربية البسيطة، مع الاحتفاظ بالمصطلحات الأجنبية المهمة في مجال التطوير المهني.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٩. هل الكتاب مناسب للشركات؟</h3>
                    <p>أيوه، ممكن للشركات تستخدمه في برامج تدريب الموظفين وتطوير القيادات.</p>
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
                  اطلب الكتاب دلوقتي وابدأ رحلة تطوير حياتك المهنية
                </h2>
              </div>
              <div className="mb-6">
                <Button
                  className="w-full max-w-md mx-auto bg-[#0D9488] hover:bg-[#0D9488]/90 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب إدارة حياتك المهنية الآن
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

export default CareerBook;
