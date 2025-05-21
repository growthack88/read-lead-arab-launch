
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const InstitutionalSuccessBook = () => {
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
                  🟢 كتاب قواعد النجاح المؤسسي | أسرار الشركات العظيمة
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-4">
                  خلاصة أهم 20 كتاب في بناء وتطوير المؤسسات الناجحة، هتساعدك تفهم كيفية بناء شركة مستدامة وثقافة عمل محفزة.
                </p>
                <p className="text-base text-gray-600 mb-8">
                  📦 كتاب "قواعد النجاح المؤسسي" هو دليلك العملي لبناء وإدارة شركة ناجحة. جمعنالك فيه أسرار أنجح المؤسسات العالمية من خلال ملخصات لأهم 20 كتاب في مجال بناء المؤسسات. هتتعلم كيفية بناء ثقافة شركة قوية، إدارة الفرق بفعالية، تطوير العمليات الداخلية، وقيادة المؤسسة للنمو المستدام.
                </p>
              </div>
              
              {/* Column 2: Product Image */}
              <div className="order-1 md:order-2">
                <img
                  src="/lovable-uploads/ec4abcba-b74e-4ebf-bad7-2676c65f4c6b.png"
                  alt="كتاب قواعد النجاح المؤسسي"
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
                    <li>✅ مؤسسي الشركات اللي بيطمحوا لبناء مؤسسات مستدامة</li>
                    <li>✅ المديرين التنفيذيين اللي بيواجهوا تحديات في إدارة وتنمية فرقهم</li>
                    <li>✅ مديري الموارد البشرية المسؤولين عن بناء ثقافة الشركة</li>
                    <li>✅ قادة الفرق اللي بيحتاجوا يحسنوا من أداء وإنتاجية فرقهم</li>
                    <li>✅ المستثمرين اللي عايزين يفهموا عوامل نجاح الشركات</li>
                    <li>✅ خبراء التطوير المؤسسي والاستشاريين في مجال الأعمال</li>
                  </ul>
                </div>
                
                {/* Benefits Column */}
                <div className="space-y-2 text-right h-full">
                  <h2 className="text-2xl font-bold mb-6 text-rtl-dark">
                    🧠 إزاي الكتاب هيفيدك؟
                  </h2>
                  <ul className="list-none space-y-3 pr-4">
                    <li>• هتتعلم كيفية بناء ثقافة شركة إيجابية تجذب وتحافظ على أفضل المواهب</li>
                    <li>• هتكتشف أساليب القيادة الفعالة اللي بتلهم الفرق وتحقق نتائج استثنائية</li>
                    <li>• هتفهم استراتيجيات تحسين الاجتماعات وجعلها أكثر إنتاجية وفعالية</li>
                    <li>• هتعرف إزاي تبني بيئة عمل صحية محفزة للإبداع والابتكار</li>
                    <li>• هتتعلم كيفية إدارة التغيير والتحول الرقمي في المؤسسات</li>
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
                  🟢 جاهز تبني مؤسسة استثنائية ومستدامة؟
                </h2>
              </div>
              <div className="mb-6">
                <Button
                  className="w-full max-w-md mx-auto bg-[#0D9488] hover:bg-[#0D9488]/80 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب قواعد النجاح المؤسسي الآن
                </Button>
              </div>
              <p className="text-gray-700 mt-4">
                الخطوة الجاية في تطوير شركتك تبدأ من هنا
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
                  20 ملخص لأهم الكتب العالمية الخاصة ببناء وتطوير المؤسسات:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" dir="rtl">
                    <li>Chief Joy Officer - كبير موظفي المرح by Richard Sheridan</li>
                    <li>Everybody Matters - الجميع مهمون by Bob Chapman & Raj Sisodia</li>
                    <li>How to Fix Meetings - كيفية إصلاح الاجتماعات by Graham Allcott and Hayley Watts</li>
                    <li>The Culture Code - قانون الثقافة by Daniel Coyle</li>
                    <li>The Ideal Team Player - لاعب الفريق المثالي by Patrick Lencioni</li>
                    <li>The Robots Are Coming! - عصر الروبوتات قادم by Andrés Oppenheimer</li>
                    <li>Work Won't Love You Back - لن يحبك العمل بالمقابل by Sarah Jaffe</li>
                    <li>What You Do Is Who You Are - ما تفعله هو من أنت by Ben Horowitz</li>
                    <li>All You Have to Do Is Ask - كل ما عليك فعله هو السؤال by Wayne Baker</li>
                    <li>Change the Culture, Change the Game - غيَّر الثقافة، غيَّر اللعبة! by Roger Connors and Tom Smith</li>
                  </ol>
                </div>
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" start={11} dir="rtl">
                    <li>Good People, Bad Managers - أشخاص طيبون ومدراء سيئون by Samuel A. Culbert</li>
                    <li>Eat Sleep Work Repeat - كُل، نم، اعمل، ثم كرر! by Bruce Daisley</li>
                    <li>Carrots and Sticks - الجزر والعصي by Ian Ayres</li>
                    <li>Build It - قم بالبناء by Glenn Elliott and Debra Corey</li>
                    <li>Feminist Fight Club - نادي القتال النسوي by Jessica Bennett</li>
                    <li>Getting Naked - التعري by Patrick Lencioni</li>
                    <li>Joy Inc. - شركة المرح by Rich Sheridan</li>
                    <li>The No Asshole Rule - قاعدة لا للحمقى by Robert I. Sutton</li>
                    <li>The Best Place to Work - أفضل مكان للعمل by Ron Friedman</li>
                    <li>Meetings Suck - اجتماعات غير مجدية by Cameron Herold</li>
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
                  ❓ الأسئلة الشائعة – كتاب قواعد النجاح المؤسسي
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">١. إيه هو كتاب قواعد النجاح المؤسسي؟</h3>
                    <p>هو كتاب بيجمع خلاصة أهم 20 كتاب عالمي في مجال بناء وتطوير المؤسسات الناجحة، ويقدمها بشكل مبسط وعملي.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٢. مين ممكن يستفيد منه؟</h3>
                    <p>المديرين، قادة الفرق، مؤسسي الشركات، مديري الموارد البشرية، وكل شخص مسؤول عن إدارة وتطوير فريق أو مؤسسة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٣. الكتاب ده بيحل أي مشاكل؟</h3>
                    <p>بيحل مشاكل ضعف ثقافة الشركة، تحديات إدارة الفرق، الاجتماعات غير الفعالة، صعوبة الاحتفاظ بالمواهب، وتحديات القيادة المؤسسية.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٤. إيه اللي بيميز الكتاب ده؟</h3>
                    <p>
                      ✔️ ملخص لأشهر 20 كتاب في بناء المؤسسات<br/>
                      ✔️ استراتيجيات عملية مجربة من شركات عالمية ناجحة<br/>
                      ✔️ حلول للتحديات اليومية اللي بتواجه القادة<br/>
                      ✔️ أدوات لبناء ثقافة شركة قوية ومتماسكة
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٥. هل الكتاب مناسب للشركات الناشئة؟</h3>
                    <p>أيوه، الكتاب مفيد لأي شركة بغض النظر عن حجمها، سواء شركة ناشئة، شركة صغيرة، أو مؤسسة كبيرة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٦. إزاي الكتاب بيساعدني فعليًا؟</h3>
                    <p>
                      • تبني ثقافة شركة قوية تجذب وتحتفظ بالمواهب<br/>
                      • تطور استراتيجيات قيادة فعالة ومؤثرة<br/>
                      • تحسن إنتاجية فريقك وتحفزهم للإبداع<br/>
                      • تصمم بيئة عمل إيجابية وملهمة
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٧. هل الكتاب نظري ولا عملي؟</h3>
                    <p>الكتاب بيجمع بين النظريات المهمة والتطبيقات العملية، كل فكرة مدعومة بخطوات واضحة للتنفيذ وأمثلة من شركات حقيقية.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٨. الكتاب مناسب لأي حجم شركة؟</h3>
                    <p>أيوه، الكتاب بيقدم مبادئ تصلح لمختلف أحجام الشركات، من الشركات الناشئة الصغيرة للمؤسسات الكبيرة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٩. هل المبادئ في الكتاب تناسب السوق المصري؟</h3>
                    <p>أكيد، رغم إن الكتب أصلها عالمية، لكن المبادئ عالمية ومجربة في بيئات مختلفة وتم مراعاة تطويعها لتناسب السوق المحلي.</p>
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
                  اطلب الكتاب دلوقتي وابدأ رحلة تطوير مؤسستك
                </h2>
              </div>
              <div className="mb-6">
                <Button
                  className="w-full max-w-md mx-auto bg-[#0D9488] hover:bg-[#0D9488]/90 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب قواعد النجاح المؤسسي الآن
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

export default InstitutionalSuccessBook;
