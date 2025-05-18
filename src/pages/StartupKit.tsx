
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart } from "lucide-react";

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
                    كل الأدوات اللي تحتاجها لتأسيس شركتك الناشئة من الفكرة للتنفيذ
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

        {/* Benefits Section */}
        <section className="py-16 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                إيش هتستفيد من المجموعة؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">🧠</span>
                      <p className="text-lg">تفهم بيئة السوق وتحللها بطريقة احترافية</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📘</span>
                      <p className="text-lg">تنشئ نموذج عمل فعّال ومتكامل</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">🧾</span>
                      <p className="text-lg">تخطط مالياً وتسوق لمشروعك بذكاء</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover-scale shadow-md border-rtl-teal/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">📝</span>
                      <p className="text-lg">توثق خطوات التأسيس وتتابع تقدمك</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 bg-gray-50 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">⭐⭐⭐⭐⭐</h2>
              <p className="text-xl md:text-2xl font-semibold mb-4">
                أكثر من ٥٠٠٠ رائد أعمال استخدموا المجموعة وغيرت مشوارهم الريادي
              </p>
            </div>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="py-16 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-[4/3] bg-rtl-teal/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-rtl-teal font-bold mb-2">صورة الحقيبة</p>
                      <p className="text-gray-500">Cover of the toolkit</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold">حقيبة المشروع</h3>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-[4/3] bg-rtl-yellow/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-rtl-yellow font-bold mb-2">صورة الجورنال</p>
                      <p className="text-gray-500">Snapshot of the journal</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold">جورنال المشروع</h3>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-[4/3] bg-rtl-purple/10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-rtl-purple font-bold mb-2">صورة الكتاب</p>
                      <p className="text-gray-500">Book cover</p>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold">فن ريادة الأعمال</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16 bg-gray-50 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                تفاصيل المحتوى
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                توفّر مجموعة Startup Builder Kit كل ما يحتاجه رواد الأعمال وأصحاب المشاريع الناشئة لتأسيس وتخطيط مشروعاتهم بكفاءة من الفكرة وحتى التنفيذ.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                  <p className="text-lg">أكثر من 20 نموذجًا استراتيجيًا مثل: نموذج العمل التجاري، تحليل SWOT، خطة التسويق</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                  <p className="text-lg">كتاب شامل حول ريادة الأعمال (فن ريادة الأعمال)</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-rtl-teal text-xl flex-shrink-0">✅</span>
                  <p className="text-lg">جورنال عملي لتوثيق التقدم وتنظيم خطوات العمل</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-rtl-teal text-white py-16 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">جاهز تبدأ مشروعك؟</h2>
              <Button
                className="inline-block bg-white text-rtl-teal px-8 py-6 rounded-lg font-bold text-lg hover:bg-rtl-yellow hover:text-rtl-dark transition-all duration-200 mb-4"
              >
                <ShoppingCart className="ml-2 h-5 w-5" />
                أضف للسلة الآن 🛒
              </Button>
              <p className="text-lg font-medium mt-4">الكمية محدودة – الحق عرض اليوم!</p>
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
