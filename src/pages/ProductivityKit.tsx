
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Book, ClipboardCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import QuantitySelector from "@/components/QuantitySelector";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductivityKit = () => {
  const baseCheckoutUrl = "https://si51ve-s6.myshopify.com/cart";
  const productVariantId = "42772076593257";

  return (
    <div className="min-h-screen bg-white pb-20" dir="rtl">
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
        {/* Hero Section - Redesigned with horizontal layout */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Desktop: 2-column layout | Mobile: stacked */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* Text Content - Right side on desktop (RTL) */}
                <div className="order-2 lg:order-1 text-right space-y-6">
                  {/* Product Name Badge */}
                  <div className="inline-block bg-rtl-teal/10 text-rtl-teal px-4 py-2 rounded-full text-sm font-medium">
                    Productivity Operating System Kit
                  </div>
                  
                  {/* Headline */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rtl-dark leading-tight">
                    نظام تشغيل الإنتاجية
                    <br />
                    <span className="text-rtl-teal">ProductivityOS</span>
                  </h1>
                  
                  {/* Tagline */}
                  <p className="text-xl md:text-2xl font-medium text-gray-700">
                    السنة الجديدة مش محتاجة أهداف أكتر
                    <br />
                    <span className="text-rtl-teal">محتاجة طريقة أحسن تمشي بيها</span>
                  </p>
                  
                  {/* Subheadline */}
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    كيت إنتاجية مصممة تساعدك تخطط للسنة بتاعتك بوضوح، وتحوّل الأهداف الكبيرة لخطوات يومية تمشي عليها.
                  </p>
                  
                  <p className="text-base text-gray-500">
                    Productivity OS من Read to Lead — نظام إنتاجية تعيش بيه طول السنة.
                  </p>
                  
                  {/* Price & Info Block */}
                  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-rtl-teal">999 جنيه</span>
                      <span className="text-gray-400 line-through text-lg">2000 جنيه</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>🚚 شحن خلال ٢–٤ أيام</span>
                      <span>💳 الدفع عند الاستلام أو أونلاين</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div>
                    <QuantitySelector 
                      baseCheckoutUrl={baseCheckoutUrl}
                      productVariantId={productVariantId}
                      buttonText="اطلب الكيت دلوقتي"
                      price="999"
                    />
                  </div>
                </div>
                
                {/* Hero Image - Left side on desktop (RTL), horizontal banner */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-rtl-teal/5 rounded-2xl transform rotate-1"></div>
                    <img 
                      src="/lovable-uploads/productivity-kit-hero.jpg" 
                      alt="Productivity Operating System Kit - نظام إنتاجية متكامل" 
                      className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
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

        {/* Target Audience Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                🎯 الكيت دي مناسبة لمين؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <ul className="space-y-4 text-right">
                      <li>✅ أي شخص بيبدأ سنة جديدة وعايز تخطيط مختلف</li>
                      <li>✅ اللي جرّب يكتب أهداف كتير ومكمّلش</li>
                      <li>✅ موظفين وفريلانسرز عايزين ينظموا وقتهم</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <ul className="space-y-4 text-right">
                      <li>✅ Founders / Creators / Marketers محتاجين إنتاجية ثابتة</li>
                      <li>✅ أي حد مشغول طول الوقت والتقدم بطيء</li>
                    </ul>
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
                <p className="text-lg text-gray-600 mb-6 text-center">نظام إنتاجية كامل — مش أدوات منفصلة</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="list-none space-y-4 pr-4">
                      <li>✅ تخطيط سنوي واضح بدل أهداف عشوائية</li>
                      <li>✅ تحويل الأهداف الكبيرة لخطوات يومية</li>
                      <li>✅ إدارة الوقت والطاقة بوعي</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-none space-y-4 pr-4">
                      <li>✅ بناء عادات صغيرة تكمل طول السنة</li>
                      <li>✅ قياس حقيقي للتقدم بدل وهم الإنجاز</li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg font-medium text-rtl-dark mt-8 text-center">
                  بدل ما تبدأ كل سنة من الصفر — معاك نظام جاهز تشتغل بيه من أول يوم
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="container mx-auto px-4 py-6">
          <Separator className="bg-gray-200" />
        </div>

        {/* What's Inside Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                📦 إيه اللي هتلاقيه جوّا الكيت؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="text-right">
                      <h3 className="font-bold text-xl mb-3">📘 كتاب الإنتاجية ببساطة</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• إعادة تعريف الإنتاجية: مش تعمل أكتر، تعمل الصح</li>
                        <li>• الفرق بين الانشغال والإنتاج الحقيقي</li>
                        <li>• اختيار الأولويات بوعي</li>
                        <li>• إدارة الطاقة قبل الوقت</li>
                        <li>• تخطيط سنة أقل زحمة وأكتر قيمة</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="text-right">
                      <h3 className="font-bold text-xl mb-3">📓 Productivity Journal</h3>
                      <p className="text-gray-600 text-sm mb-2">Operating System يومي / أسبوعي / سنوي:</p>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• تخطيط يومك بوضوح</li>
                        <li>• مراجعة أسبوعك</li>
                        <li>• متابعة التركيز</li>
                        <li>• رؤية الصورة الكبيرة للسنة</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="text-right">
                      <h3 className="font-bold text-xl mb-3">📒 Notebook</h3>
                      <p className="text-gray-600 text-sm">مساحة تفريغ ذهني</p>
                      <p className="text-gray-600 text-sm mt-2">تفريغ أفكار = تركيز أعلى</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="text-right">
                      <h3 className="font-bold text-xl mb-3">📋 Productivity Toolkits</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• تحليل مشاكل الإنتاجية</li>
                        <li>• ترتيب الأولويات</li>
                        <li>• تحويل اللخبطة لخطة</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="text-right">
                      <h3 className="font-bold text-xl mb-3">📊 Habit Tracker – Quick Guide</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• بناء الاستمرارية</li>
                        <li>• تقليل التسويف</li>
                        <li>• متابعة التقدم</li>
                        <li>• تحويل الأهداف لعادات</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="text-right">
                      <h3 className="font-bold text-xl mb-3">🎁 إضافات</h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• <strong>Postcard:</strong> رسالة ثابتة تفكّرك ليه بدأت وعايز توصل لإيه</li>
                        <li>• <strong>Stickers Sheet:</strong> تشجيع بصري بسيط يكمل الرحلة</li>
                        <li>• <strong>2 Bookmarks:</strong> ربط دائم بالنظام أثناء القراءة والتخطيط</li>
                      </ul>
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

        {/* Why Different Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                ✨ ليه Productivity OS مختلف؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <ul className="space-y-4 text-right">
                      <li>✅ نظام متكامل وكل جزء مكمل للتاني</li>
                      <li>✅ عملي مش تنظيري</li>
                      <li>✅ مناسب لتخطيط السنة + تنفيذ يومي</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <ul className="space-y-4 text-right">
                      <li>✅ مش حماس مؤقت</li>
                      <li>✅ مطبوع بخامات مريحة للاستخدام الحقيقي</li>
                    </ul>
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

        {/* How It Works / Example Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-rtl-dark text-center">
                💡 مثال بسيط
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <ol className="space-y-4 text-right list-decimal list-inside text-lg">
                  <li>ابدأ بتحديد رؤيتك في الجورنال</li>
                  <li>اقرأ فصل يظبط أولوياتك</li>
                  <li>قسّم الهدف لعادات يومية</li>
                  <li>تابعها بالـ Habit Tracker</li>
                  <li>راجع تقدمك أسبوعيًا</li>
                </ol>
                <p className="text-lg font-medium text-rtl-dark mt-8 text-center">
                  بدل ما السنة تعدّي — إنت اللي تمشيها بنظام
                </p>
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
                <p className="text-lg mb-4 text-gray-600">كيت مطبوعة كاملة تشمل:</p>
                <ul className="text-right max-w-md mx-auto space-y-2 mb-6">
                  <li>📘 كتاب الإنتاجية ببساطة</li>
                  <li>📓 Productivity Journal</li>
                  <li>📋 Toolkits</li>
                  <li>📊 Habit Tracker</li>
                  <li>📒 Notebook</li>
                  <li>💌 Postcard</li>
                  <li>🎨 Stickers</li>
                  <li>🔖 2 Bookmarks</li>
                </ul>
                <h3 className="text-3xl font-bold mb-4 text-rtl-dark">السعر: 999 جنيه</h3>
                <p className="text-lg mb-2">🚚 شحن خلال ٢–٤ أيام | 💳 الدفع عند الاستلام أو أونلاين</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main CTA Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-rtl-dark">🟢 جاهز تبدأ سنة بإنتاجية مختلفة؟</h2>
              <QuantitySelector 
                baseCheckoutUrl={baseCheckoutUrl}
                productVariantId={productVariantId}
                buttonText="🛒 اطلب Productivity Operating System Kit دلوقتي"
                price="999"
              />
              <p className="text-lg font-medium mt-6 text-rtl-dark">وخلي الإنتاجية نظام حقيقي يومي عندك</p>
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
                <h2 className="text-xl font-bold text-center mb-6">❓ الأسئلة الشائعة</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Column 1 */}
                  <div className="space-y-4 h-full">
                    <div className="space-y-1">
                      <p className="font-semibold">١. إيه هو Productivity Operating System Kit؟</p>
                      <p>كيت إنتاجية متكاملة لتحويل التخطيط لنظام يومي مستمر طول السنة.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٢. مناسبة لمين؟</p>
                      <p>موظفين، فريلانسرز، أصحاب مشاريع، Creators، Marketers، وأي حد عايز إنتاجية حقيقية.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٣. إيه اللي جوّا الكيت؟</p>
                      <ul className="list-none space-y-1 pr-4">
                        <li>• كتاب الإنتاجية ببساطة</li>
                        <li>• Productivity Journal</li>
                        <li>• Toolkits</li>
                        <li>• Habit Tracker</li>
                        <li>• Notebook</li>
                        <li>• Postcard + Stickers + 2 Bookmarks</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٤. هل للناس المشغولة بس؟</p>
                      <p>لأ. لأي حد عايز يشتغل بذكاء مش بزحمة.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٥. هل في شرح؟</p>
                      <p>أيوه. كل أداة بسيطة وواضحة وجاهزة للاستخدام فورًا.</p>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-4 h-full">
                    <div className="space-y-1">
                      <p className="font-semibold">٦. هتغيّر إنتاجيتي إزاي؟</p>
                      <ul className="list-disc pr-4 space-y-1">
                        <li>تخطيط أوضح</li>
                        <li>أولويات حقيقية</li>
                        <li>تقليل التشتت</li>
                        <li>عادات صغيرة بتعمل فرق</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٧. لازم أستخدم كل حاجة؟</p>
                      <p>لأ. النظام مرن.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٨. ينفع للشغل أو الفرق؟</p>
                      <p>أيوه. للتخطيط الشخصي واجتماعات الفرق.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">٩. المنتج مطبوع ولا رقمي؟</p>
                      <p>مطبوع بالكامل.</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold">١٠. إزاي أطلب؟</p>
                      <p>من الموقع، والتوصيل خلال أيام داخل مصر.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <QuantitySelector 
              baseCheckoutUrl={baseCheckoutUrl}
              productVariantId={productVariantId}
              buttonText="🛒 اطلب Productivity Operating System Kit دلوقتي"
              price="999"
            />
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="py-6 text-center border-t">
        <p className="text-gray-600">© جميع الحقوق محفوظة</p>
      </footer>

      {/* Sticky Purchase Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t px-4 py-3 flex justify-between items-center z-50 shadow-md">
        <span className="font-bold text-[#0D9488]">السعر: 999 جنيه</span>
        <QuantitySelector 
          baseCheckoutUrl={baseCheckoutUrl}
          productVariantId={productVariantId}
          buttonText="📦 اطلب الآن"
          price="999"
        />
      </div>
    </div>
  );
};

export default ProductivityKit;
