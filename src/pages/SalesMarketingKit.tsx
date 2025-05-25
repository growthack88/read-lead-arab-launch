
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

const SalesMarketingKit = () => {
  // Shopify checkout link for Sales & Marketing Kit
  const shopifyCheckoutLink = "https://si51ve-s6.myshopify.com/cart/42289431150697:1?channel=buy_button";

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
                    Sales & Marketing Kit | مجموعة التسويق والمبيعات
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-4 text-right">
                    كل الأدوات العملية والمحتوى اللي يساعدك تفهم جمهورك، تخطط حملاتك، وتزوّد مبيعاتك.
                  </p>
                  <p className="text-base text-gray-600 mb-8 text-right">
                    📦 Sales & Marketing Kit هي مجموعة أدوات متكاملة لأي شخص شغال أو حابب يدخل مجال التسويق أو المبيعات. بتساعدك تخطط حملات، تفهم جمهورك، وتحسّن أداءك البيعي والتسويقي.
                  </p>
                  
                  <div className="text-center md:text-right">
                    <a
                      href={shopifyCheckoutLink}
                      className="px-8 py-6 rounded-lg text-lg bg-[#0D9488] text-white inline-flex items-center gap-2 hover:bg-[#0D9488]/90 transition-colors"
                    >
                      <ShoppingCart className="ml-2 h-5 w-5" />
                      أضف للسلة
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full max-w-4xl mx-auto">
                    <img 
                      src="/lovable-uploads/5f0538cc-c853-4d2b-b4a2-dd35507dd1dc.png" 
                      alt="Sales & Marketing Kit صورة المنتج" 
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">🎯 Sales & Revenue Toolkit</h3>
                        <p>أدوات زي تتبع الإيرادات، استراتيجيات الإغلاق، تحليل التكاليف والعائد</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">📊 Marketing Strategy Toolkit</h3>
                        <p>أدوات زي 7Ps، بروفايل العميل المثالي، تخطيط المحتوى، رحلة العميل</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">📘 كتاب التسويق الحديث</h3>
                        <p>استراتيجيات تسويق رقمية وتقليدية بلغة سهلة وعملية</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 justify-end">
                      <div className="text-right">
                        <h3 className="font-bold text-xl mb-2">📕 كتاب فن البيع والشراء</h3>
                        <p>تقنيات التفاوض والإغلاق وبناء علاقات مبيعات ناجحة</p>
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
                      <li>✅ أدوات عملية بتساعدك تشتغل بذكاء مش بجهد</li>
                      <li>✅ تخطيط دقيق لحملات التسويق والمبيعات</li>
                      <li>✅ فهم أعمق للجمهور وزيادة ولاء العملاء</li>
                      <li>✅ محتوى متكامل بين النظرية والتطبيق</li>
                    </ul>
                  </div>
                  
                  {/* Audience */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-rtl-dark">🎯 المجموعة دي مناسبة لمين؟</h3>
                    <ul className="list-disc space-y-4 pr-4">
                      <li>المسوقين المحترفين والمستقلين</li>
                      <li>فرق المبيعات والشركات الناشئة</li>
                      <li>رواد الأعمال اللي بيبنوا منتج أو بيزنس</li>
                      <li>أي شخص محتاج يفهم السوق والعملاء بشكل عملي</li>
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
                <h3 className="text-3xl font-bold mb-4 text-rtl-dark">السعر: 1250 جنيه</h3>
                <p className="text-xl mb-2">السعر السابق: <span className="line-through text-gray-500">2000 جنيه</span></p>
                <p className="text-xl mb-2">🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main CTA Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-rtl-dark">🟢 جاهز تطور شغلك؟</h2>
              <a
                href={shopifyCheckoutLink}
                className="px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 mx-auto flex items-center justify-center gap-3 w-full md:w-auto bg-[#0D9488] text-white hover:bg-[#0D9488]/90"
              >
                <ShoppingCart className="ml-2 h-6 w-6" />
                🛒 اطلب Sales & Marketing Kit الآن
              </a>
              <p className="text-lg font-medium mt-6 text-rtl-dark">الخطوة الجاية في نمو البيزنس بتاعك تبدأ من هنا</p>
            </div>
          </div>
        </section>

        {/* Book List Section - TWO COLUMNS */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center flex items-center justify-center gap-3">
                <Book className="h-6 w-6 text-rtl-teal" />
                <span>📚 الكتب المتضمنة في الكيت</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Column - Marketing Books */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-center text-rtl-teal">📘 كتب التسويق</h3>
                  <ul dir="rtl" className="space-y-1 pr-4 text-right">
                    <li className="border-b pb-2">1. البقرة البنفسجية – سيث غودين</li>
                    <li className="border-b pb-2">2. هذا هو التسويق – سيث غودين</li>
                    <li className="border-b pb-2">3. إطلاق العنان لفيروس الأفكار – سيث غودين</li>
                    <li className="border-b pb-2">4. كل المسوقين كاذبون – سيث غودين</li>
                    <li className="border-b pb-2">5. شخصيات المشترين – أديل ريفيلا</li>
                    <li className="border-b pb-2">6. قواعد المحتوى – آن هاندلي، سي سي شابمان</li>
                    <li className="border-b pb-2">7. قم بتنسيق ذلك – ستيفن روزنباوم</li>
                    <li className="border-b pb-2">8. تناول السمكة الكبيرة – آدم مورغان</li>
                    <li className="border-b pb-2">9. اللعنة على تسويق المحتوى – راندي فريش</li>
                    <li className="border-b pb-2">10. الفشل بسرعة – ريان بابينو، جون كرومبولتز</li>
                    <li className="border-b pb-2">11. الحصول على كل ما لديك – جاي إبراهام</li>
                    <li className="border-b pb-2">12. تسويق اختراقات النمو – ريان هوليداي</li>
                    <li className="border-b pb-2">13. مرحبًا، اسمي رائع – أليكساندرا واتكينز</li>
                    <li className="border-b pb-2">14. مرحبا، اضغط على هذا – لوك سوليفان، سام بينيت</li>
                    <li className="border-b pb-2">15. الجاذب الحقيقي – غاري فاينرتشوك</li>
                    <li className="border-b pb-2">16. كوتلر في التسويق – فيليب كوتلر</li>
                    <li className="border-b pb-2">17. التسويق فوق الضوضاء – ليندا بوبكي</li>
                    <li className="border-b pb-2">18. كتابة الإعلانات المقنعة – أندي ماسلين</li>
                    <li className="border-b pb-2">19. لا تفقد أي عميل – جوي كولمان</li>
                    <li>20. كيف تنمو العلامات التجارية – بايرون شارب</li>
                  </ul>
                </div>
                
                {/* Second Column - Sales Books */}
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-center text-rtl-teal">📕 كتب المبيعات</h3>
                  <ul dir="rtl" className="space-y-1 pr-4 text-right">
                    <li className="border-b pb-2">1. عادة نمو الإيرادات – أليكس غولدفاين</li>
                    <li className="border-b pb-2">2. الكتاب المقدس للمبيعات – جيفري غيتومر</li>
                    <li className="border-b pb-2">3. علم البيع – ديفيد هوفيلد</li>
                    <li className="border-b pb-2">4. البيع – فريدريك إكلوند</li>
                    <li className="border-b pb-2">5. التحليلات التنبؤية – إيريك سيغل</li>
                    <li className="border-b pb-2">6. معادل المبيعات – جيب بلونت</li>
                    <li className="border-b pb-2">7. إدارة المبيعات المبسطة – مايك واينبرغ</li>
                    <li className="border-b pb-2">8. البيع للشركات الكبرى – جيل كونراث</li>
                    <li className="border-b pb-2">9. البيع غير المرئي – هاري بيكويث</li>
                    <li className="border-b pb-2">10. البيع لغرض نبيل – ليزا ماكليود</li>
                    <li className="border-b pb-2">11. البيانات الصغيرة – مارتن ليندستروم</li>
                    <li className="border-b pb-2">12. المكالمات الذكية – أرت سوبزاك</li>
                    <li className="border-b pb-2">13. محفزات الحديث – جاي باير، دانيال ليمين</li>
                    <li className="border-b pb-2">14. البيع الاستراتيجي الجديد – روبرت ميلر</li>
                    <li className="border-b pb-2">15. سيكولوجية البيع – برايان تريسي</li>
                    <li className="border-b pb-2">16. مبدأ كعكة الحظ – برناديت جيوا</li>
                    <li className="border-b pb-2">17. فقط استمع – مارك جولستون</li>
                    <li className="border-b pb-2">18. هل جذبت انتباهك – سام هورن</li>
                    <li className="border-b pb-2">19. فن التأثير على أي شخص – نيال كاسيدي</li>
                    <li>20. بيع الدماغ – ديفيد لويس</li>
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
                <h2 className="text-xl font-bold text-center mb-6">❓ الأسئلة الشائعة – Sales & Marketing Kit</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Column 1 */}
                  <div className="space-y-4 h-full">
                    <div className="space-y-1">
                      <p className="font-semibold">١. إيه هو Sales & Marketing Kit؟</p>
                      <p>هي مجموعة أدوات متكاملة لأي شخص شغال أو حابب يدخل مجال التسويق أو المبيعات...</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٢. مين ممكن يستفيد منه؟</p>
                      <p>أي شخص شغال في التسويق، المبيعات، إدارة العلامة التجارية، أو حتى عنده مشروع...</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٣. الكيت دي منتج فعلي ولا رقمي؟</p>
                      <p>الكيت منتج فعلي (ملموس) بتوصلك لحد البيت...</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٤. إيه محتويات الكيت؟</p>
                      <ul className="list-none space-y-1 pr-4">
                        <li>✔️ أدوات تسويق ومبيعات</li>
                        <li>✔️ كتابين</li>
                        <li>✔️ ملخصات كتب</li>
                        <li>✔️ أدوات تخطيط ومتابعة الأداء</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٥. هل الكيت مناسبة للمبتدئين؟</p>
                      <p>تمامًا! مشروحة بلغة بسيطة، والكتب ملخصة...</p>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4 h-full">
                    <div className="space-y-1">
                      <p className="font-semibold">٦. إزاي بتساعدني فعليًا؟</p>
                      <ul className="list-disc pr-4 space-y-1">
                        <li>تبني خطة</li>
                        <li>تفهم جمهورك</li>
                        <li>تزود مبيعاتك</li>
                        <li>تتعلم من الكبار</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٧. هل الكتب كاملة ولا ملخصات؟</p>
                      <p>كتابين كاملين + ملخصات لأكثر من ٣٠ كتاب</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٨. في شرح لطريقة استخدام الأدوات؟</p>
                      <p>أيوه، كل أداة معاها شرح مبسط</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٩. هل الكيت تنفع للشركات؟</p>
                      <p>تنفع جدًا، خصوصًا للشركات الناشئة</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">١٠. إزاي أطلب الكيت؟</p>
                      <p>اطلبها من خلال الموقع أو تواصل معانا، وهتوصل لحد بابك</p>
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

      {/* Sticky Purchase CTA */}
      <div className="fixed bottom-0 w-full bg-white border-t px-4 py-3 flex justify-between items-center z-50 shadow-md">
        <span className="font-bold text-[#0D9488]">السعر: 999 جنيه</span>
        <a href={shopifyCheckoutLink} className="bg-[#0D9488] text-white px-5 py-2 rounded-md hover:opacity-90 flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          📦 اطلب الآن
        </a>
      </div>
    </div>
  );
};

export default SalesMarketingKit;
