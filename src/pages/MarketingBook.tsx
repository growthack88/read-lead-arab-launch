
import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";

const MarketingBook = () => {
  // Shopify checkout link for Marketing Book
  const shopifyCheckoutLink = "https://si51ve-s6.myshopify.com/cart/42047911559273:1?channel=buy_button";
  
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="py-8 pb-24">
        {/* Hero Section - Two-Column Layout */}
        <section className="bg-gradient-to-br from-white to-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              {/* Left Column - Text Content */}
              <div className="space-y-4 text-right order-2 md:order-1">
                <h1 className="text-3xl md:text-4xl font-bold text-rtl-dark mb-4">
                  🟢 كتاب التسويق الحديث | أسرار صناعة الماركتنج
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-4">
                  خلاصة أهم 20 كتاب في التسويق، الأكثر قراءةً ومبيعاً في عالم التسويق والماركتنج من أكبر الخبراء.
                </p>
                <p className="text-base text-gray-600 mb-8">
                  📦 كتاب "التسويق الحديث" هو دليلك العملي للتسويق الفعّال في عالم دائم التغير. جمعنالك أهم الاستراتيجيات والتكتيكات من أشهر خبراء التسويق في العالم، من بناء العلامة التجارية للتسويق الرقمي، لكتابة المحتوى الجذاب وإدارة العلاقة مع العملاء.
                </p>
              </div>
              
              {/* Right Column - Product Image - Updated */}
              <div className="order-1 md:order-2">
                <img
                  src="/lovable-uploads/490e51b9-80e9-4446-8503-53b301967b9f.png"
                  alt="كتاب التسويق الحديث"
                  className="aspect-[2/1] w-full object-cover rounded-lg shadow-lg"
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
                    <li>✅ المسوقين اللي بيدوروا على أفكار مبتكرة وفعّالة</li>
                    <li>✅ أصحاب المشاريع اللي محتاجين يوصلوا لعملاء أكتر بتكلفة أقل</li>
                    <li>✅ مديري التسويق اللي عايزين يجددوا استراتيجياتهم</li>
                    <li>✅ المستقلين (فريلانسرز) في مجال التسويق الرقمي والمحتوى</li>
                    <li>✅ صناع المحتوى والمؤثرين اللي بيعملوا على بناء جمهور</li>
                    <li>✅ الشركات الناشئة اللي بتحتاج تظهر في سوق تنافسي</li>
                  </ul>
                </div>
                
                {/* Benefits Column */}
                <div className="space-y-2 text-right h-full">
                  <h2 className="text-2xl font-bold mb-6 text-rtl-dark">
                    🧠 إزاي الكتاب هيفيدك؟
                  </h2>
                  <ul className="list-none space-y-3 pr-4">
                    <li>• هتتعلم استراتيجيات بناء علامة تجارية قوية ومميزة في السوق</li>
                    <li>• هتكتشف تقنيات كتابة محتوى يجذب العملاء ويقنعهم بالشراء</li>
                    <li>• هتفهم أسرار التسويق الفيروسي اللي بتستخدمه الشركات الكبيرة</li>
                    <li>• هتعرف إزاي تصمم حملات تسويقية ناجحة بميزانية محدودة</li>
                    <li>• هتتعلم إزاي تبني علاقة قوية مع عملائك تخليهم يرجعوا ليك مرة ورا مرة</li>
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
                  🟢 جاهز تتعلم أسرار التسويق اللي مابيقولهاش الكورسات؟
                </h2>
              </div>
              <div className="mb-6">
                <a
                  href={shopifyCheckoutLink}
                  className="inline-flex items-center justify-center w-full max-w-md mx-auto bg-[#0D9488] hover:bg-[#0D9488]/80 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب التسويق الحديث الآن
                </a>
              </div>
              <p className="text-gray-700 mt-4">
                الخطوة الجاية في تميزك التسويقي تبدأ من هنا
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
                  20 ملخص لأهم الكتب العالمية الخاصة بالتسويق في العالم:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" dir="rtl">
                    <li>Purple Cow - البقرة البنفسجية by Seth Godin - سيث غودين</li>
                    <li>This is Marketing - هذا هو التسويق by Seth Godin - سيث غودين</li>
                    <li>Unleashing the Ideavirus - إطلاق العنان لفيروس الافكار by Seth Godin - سيث غودين</li>
                    <li>All Marketers Are Liars - كل المسوقين كاذبون by Seth Godin - سيث غودين</li>
                    <li>Buyer Personas - شخصيات المشترين by Adele Revella - أديل ريفيلا</li>
                    <li>Content Rules - قواعد المحتوى by Ann Handley & C.C. Chapman - آن هاندلي، سي سي شابمان</li>
                    <li>Curate This! - قم بتنسيق ذلك by Steven Rosenbaum - ستيفن روزنباوم</li>
                    <li>Eating The Big Fish - تناول السمكة الكبيرة by Adam Morgan - آدم مورغان</li>
                    <li>F#ck Content Marketing - اللعنة على تسويق المحتوى by Randy Frisch - راندي فريش</li>
                    <li>Fail Fast, Fail Often - الفشل بسرعة وفي كثير من الاحيان by Ryan Babineaux, John Krumboltz - ريان بابينو، جون كرومبولتز</li>
                  </ol>
                </div>
                <div className="text-right">
                  <ol className="list-decimal list-inside space-y-1 pr-4" start={11} dir="rtl">
                    <li>Getting Everything You Can Out of All You've Got - الحصول على كل ما يمكنك الحصول عليه من كل ما لديك by Jay Abraham - جاي إبراهام</li>
                    <li>Growth Hacker Marketing - تسويق إختراقات النمو by Ryan Holiday - ريان هوليداي</li>
                    <li>Hello, My Name is Awesome - مرحبًا، اسمي رائع by Alexandra Watkins - أليكساندرا واتكينز</li>
                    <li>Hey Whipple, Squeeze This! - مرحبا، اضغط على هذا by Luke Sullivan with Sam Bennett - لوك سوليفان، سام بينيت</li>
                    <li>Jab, Jab, Jab, Right Hook - الجاذب الحقيقي by Gary Vaynerchuk - غاري فاينرتشوك</li>
                    <li>Kotler on Marketing - كوتلر في مجال التسويق by Philip Kotler - فيليب كوتلر</li>
                    <li>Marketing Above the Noise - التسويق فوق الضوضاء by Linda J. Popky - ليندا جيه بوبكي</li>
                    <li>Persuasive Copywriting - كتابة الاعلانات المقنعة by Andy Maslen - أندي ماسلين</li>
                    <li>Never Lose A Customer Again - لا تفقد أي عميل مرة أخرى by Joey Coleman - جوي كولمان</li>
                    <li>How Brands Grow - كيف تنمو العلامات التجارية by Byron Sharp - بايرون شارب</li>
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
                  ❓ الأسئلة الشائعة – كتاب التسويق الحديث
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">١. إيه هو كتاب التسويق الحديث؟</h3>
                    <p>هو كتاب بيجمع خلاصة أهم 20 كتاب عالمي في مجال التسويق، بيقدمهم في شكل مبسط وعملي يمكن تطبيقه على طول.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٢. مين ممكن يستفيد منه؟</h3>
                    <p>كل شخص شغال في التسويق أو بيفكر يدخل المجال ده، بالإضافة للي عندهم مشاريع خاصة ومحتاجين يسوقوا لها.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٣. الكتاب ده بيحل أي مشاكل؟</h3>
                    <p>بيحل مشاكل صعوبة الوصول للعملاء، غياب الاستراتيجية الواضحة، ضعف المحتوى التسويقي، وارتفاع تكلفة اكتساب العملاء.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٤. إيه اللي بيميز الكتاب ده؟</h3>
                    <p>
                      ✔️ ملخص لأشهر 20 كتاب في التسويق<br/>
                      ✔️ أمثلة عملية من شركات نجحت بالفعل<br/>
                      ✔️ استراتيجيات تسويقية جاهزة للتطبيق<br/>
                      ✔️ نصائح من أشهر خبراء التسويق في العالم
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٥. هل الكتاب مناسب للمبتدئين؟</h3>
                    <p>أيوه، الكتاب مناسب للمبتدئين والمحترفين على حد سواء، لأنه بيبدأ من الأساسيات وبيتدرج للمستويات المتقدمة.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٦. إزاي الكتاب بيساعدني فعليًا؟</h3>
                    <p>
                      • تبني استراتيجية تسويقية قوية<br/>
                      • تكتب محتوى مقنع وجذاب<br/>
                      • تبني علامة تجارية لها قيمة<br/>
                      • توصل لعملائك المناسبين بتكلفة أقل
                    </p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٧. هل الكتاب نظري ولا عملي؟</h3>
                    <p>الكتاب بيجمع بين النظريات المهمة والتطبيقات العملية، بحيث تقدر تنفذ اللي بتتعلمه على طول.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٨. الكتاب مكتوب بأي لغة؟</h3>
                    <p>الكتاب مكتوب بالعربية البسيطة، مع الاحتفاظ بالمصطلحات الأجنبية المهمة في مجال التسويق.</p>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <div className="text-right space-y-2">
                    <h3 className="font-bold">٩. هل الكتاب مناسب للشركات؟</h3>
                    <p>أيوه، ممكن للشركات تستخدمه كمرجع لفريق التسويق عندها، ويساعدهم في تطوير استراتيجياتهم.</p>
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
                  اطلب الكتاب دلوقتي وابدأ رحلة احتراف التسويق
                </h2>
              </div>
              <div className="mb-6">
                <a
                  href={shopifyCheckoutLink}
                  className="inline-flex items-center justify-center w-full max-w-md mx-auto bg-[#0D9488] hover:bg-[#0D9488]/90 text-white py-6 rounded-lg text-xl hover:scale-[1.02] transition-transform"
                >
                  <ShoppingCart className="ml-2 h-6 w-6" /> 🛒 اطلب كتاب التسويق الحديث الآن
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
        <a 
          href={shopifyCheckoutLink}
          className="inline-flex items-center bg-[#0D9488] text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="ml-2 h-5 w-5" /> 📦 اطلب الآن
        </a>
        <div className="font-bold text-lg">
          السعر: 400 جنيه
        </div>
      </div>
    </div>
  );
};

export default MarketingBook;
