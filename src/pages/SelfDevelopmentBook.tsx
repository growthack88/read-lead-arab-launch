
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import SEO from "@/components/SEO";

const SelfDevelopmentBook = () => {
  // Shopify checkout link for Self-Development Book
  const shopifyCheckoutLink = "https://si51ve-s6.myshopify.com/cart/42047911264361:1?channel=buy_button";
  
  return (
    <div className="min-h-screen bg-white pb-20 font-tajawal">
      <SEO 
        title="كتاب تطوير الذات والنمو الشخصي | Read to Lead"
        description="طور نفسك على المستويين الشخصي والمهني من خلال خلاصة 20 كتاب عالمي."
        image="/assets/book-self.jpg"
        url="https://land.readtolead.store/personal-development-book"
      />
      
      {/* Header */}
      <header className="py-4 border-b sticky top-0 bg-white/95 backdrop-blur-sm z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-rtl-dark">
              Read to Lead
            </Link>
            <nav className="rtl">
              <ul className="flex space-x-4 space-x-reverse">
                <li>
                  <Link to="/" className="text-rtl-dark hover:text-rtl-teal">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-rtl-dark hover:text-rtl-teal">
                    المنتجات
                  </a>
                </li>
                <li>
                  <a href="#" className="text-rtl-dark hover:text-rtl-teal">
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto rtl">
              {/* Left Column (Content) */}
              <div className="order-2 md:order-1 text-right">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-rtl-dark mb-4">
                  🟢 كتاب تطوير الذات والنمو الشخصي | رحلتك نحو النسخة الأفضل منك
                </h1>
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  خلاصة أهم 20 كتاب في مجال تطوير الذات والنمو الشخصي هتساعدك تفهم نفسك وتطور مهاراتك وتعيش حياة أكثر توازن وإنجاز.
                </p>
                <p className="text-gray-600 mb-6">
                  كتاب "تطوير الذات والنمو الشخصي" هو خلاصة تجارب أهم خبراء النمو الشخصي في العالم. مش كلام نظري مكرر، دي أدوات عملية مجربة هتساعدك تفهم نفسك أكتر، تتخذ قرارات أفضل، وتغير عاداتك وتصرفاتك للأفضل، وتعيش حياة أكثر سعادة وإنتاجية.
                </p>
              </div>

              {/* Right Column (Image) */}
              <div className="order-1 md:order-2">
                <img
                  src="/lovable-uploads/247722eb-0ea5-4d90-bf5b-52a81145490e.png"
                  alt="كتاب تطوير الذات والنمو الشخصي"
                  className="aspect-[2/1] rounded-xl shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience and Benefits */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto rtl">
              {/* Target Audience */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold mb-4 text-right">
                  🎯 الكتاب ده مناسب لمين؟
                </h2>
                <ul className="space-y-2 text-right">
                  <li className="flex items-center justify-end gap-2">
                    <span>الأشخاص اللي حاسين إنهم محتاجين يغيروا شيء في حياتهم بس مش عارفين إيه</span>
                    <span className="text-green-500 text-lg">✅</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>الناس اللي عايزة تبني عادات إيجابية وتتخلص من العادات السلبية</span>
                    <span className="text-green-500 text-lg">✅</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>المديرين اللي محتاجين يطوروا مهاراتهم الشخصية والقيادية</span>
                    <span className="text-green-500 text-lg">✅</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>الشباب اللي بيبحثوا عن اتجاه واضح في حياتهم وكاريرهم</span>
                    <span className="text-green-500 text-lg">✅</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>أي شخص عايز يفهم نفسه بشكل أعمق ويحقق إمكانياته الكاملة</span>
                    <span className="text-green-500 text-lg">✅</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>الناس اللي بتواجه تحديات في العلاقات والتواصل مع الآخرين</span>
                    <span className="text-green-500 text-lg">✅</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold mb-4 text-right">
                  🧠 إزاي الكتاب هيفيدك؟
                </h2>
                <ul className="space-y-2 text-right">
                  <li className="flex items-center justify-end gap-2">
                    <span>هتتعلم طرق اتخاذ قرارات أفضل وأكثر وضوح في حياتك الشخصية والمهنية</span>
                    <span className="text-rtl-teal">•</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>هتكتشف كيفية تغيير العادات السلبية وبناء عادات إيجابية تستمر معاك</span>
                    <span className="text-rtl-teal">•</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>هتفهم آليات عمل العقل البشري والدوافع وراء سلوكياتك المختلفة</span>
                    <span className="text-rtl-teal">•</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>هتقدر تتعامل مع الخوف والفشل بطريقة صحية وبناءة</span>
                    <span className="text-rtl-teal">•</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>هتطور مهاراتك في التواصل والتأثير في الآخرين</span>
                    <span className="text-rtl-teal">•</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 bg-white rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">💸 السعر والمزايا</h2>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-rtl-teal">
                    السعر: 400 جنيه
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    السعر السابق: 500 جنيه
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  🚚 شحن خلال ٢-٤ أيام | 💳 الدفع عند الاستلام أو أونلاين
                </p>
                <h3 className="text-xl font-bold mb-6">
                  🟢 جاهز تكتشف النسخة الأفضل من نفسك؟
                </h3>
                <a
                  href={shopifyCheckoutLink}
                  className="inline-flex items-center justify-center bg-[#0D9488] text-white px-5 py-3 rounded-lg hover:scale-105 transition text-lg"
                >
                  <ShoppingCart className="ml-2 h-5 w-5" /> 🛒 اطلب كتاب تطوير الذات والنمو الشخصي الآن
                </a>
                <p className="mt-4 text-gray-600">
                  الخطوة الجاية في رحلة تطوير نفسك تبدأ من هنا
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="py-12 bg-gray-50 rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-center">
                📚 إيه اللي هتلاقيه جوا الكتاب؟
              </h2>
              <p className="text-center mb-8">
                20 ملخص لأهم الكتب العالمية الخاصة بتطوير الذات
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-1 pr-4 text-right">
                    <li>How to Decide - كيفية اتخاذ القرار by Annie Duke - آني ديوك</li>
                    <li>Good Habits, Bad Habits - العادات الجيدة والعادات السيئة by Wendy Wood - ويندي وود</li>
                    <li>Catalyst - العامل الحفاز by Chandramouli Venkatesan - تشاندرامولي فينكاتيسان</li>
                    <li>Getting to Yes with Yourself - الوصول إلى نعم مع نفسك by William Ury - ويليام أوري</li>
                    <li>59 Seconds - 59 ثانية by Richard Wiseman - ريتشارد وايزمان</li>
                    <li>Brain Rules - قواعد الدماغ by John Medina - جون ميدينا</li>
                    <li>Eat, Move, Sleep - كُل، تحرّك، ونام by Tom Rath - توم راث</li>
                    <li>Calling Bullshit - الإبلاغ عن الهراء by Carl T. Bergstrom & Jevin D. West - كارل بيرغستروم، جيفن جي ويست</li>
                    <li>Goals - الأهداف by Zig Ziglar - زيغ زيغلر</li>
                    <li>Game Changers - مغيرو اللعبة by Dave Asprey - ديف اسبري</li>
                  </ul>
                  <ul className="space-y-1 pr-4 text-right">
                    <li>How Not To Be a Boy - كيف لا تكون صبيا by Robert Webb - روبرت ويب</li>
                    <li>How to Make People Like You in 90 Seconds or Less - كيف تجعل الأشخاص يحبونك في 90 ثانية أو أقل by Nicholas Boothman - نيكولاس بوثمان</li>
                    <li>Napoleon Hill's Golden Rules - قواعد نابليون هيل الذهبية by Napoleon Hill - نابليون هيل</li>
                    <li>Smart Girls Screw Up Too - الفتيات الأذكياء يخطئون أيضاً by Bella Zanesco - بيلا زانيسكو</li>
                    <li>Smile or Die - ابتسم أو تموت by Barbara Ehrenreich - باربرا إرينريك</li>
                    <li>Born to Win - ولدت لتفوز by Zig Ziglar with Tom Ziglar - زيغ زيجلار، توم زيجلار</li>
                    <li>The Chimp Paradox - مفارقة الشمبانزي by Steve Peters - ستيف بيترز</li>
                    <li>The First 20 Hours - أول 20 ساعة by Josh Kaufman - جوش كوفمان</li>
                    <li>The Hero Code - كود البطل by William H. McRaven - ويليام إتش مكرافن</li>
                    <li>The Subtle Art of Not Giving a F*ck - فن اللامبالاة by Mark Manson - مارك مانسون</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">
                ❓ الأسئلة الشائعة – كتاب تطوير الذات والنمو الشخصي
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">١. إيه هو كتاب تطوير الذات والنمو الشخصي؟</p>
                  <p>هو كتاب بيجمع خلاصة أهم 20 كتاب عالمي في مجال تطوير الذات والنمو الشخصي، بيقدمهم بشكل مبسط وعملي.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">٢. مين ممكن يستفيد منه؟</p>
                  <p>أي شخص عايز يفهم نفسه بشكل أعمق ويطور مهاراته الشخصية، سواء كان موظف، مدير، طالب، أو حتى شخص في مرحلة انتقالية في حياته.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">٣. الكتاب ده بيحل أي مشاكل؟</p>
                  <p>بيحل مشاكل صعوبة تغيير العادات، عدم القدرة على اتخاذ قرارات، الخوف من الفشل، ضعف الثقة بالنفس، وصعوبة التواصل مع الآخرين.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">٤. إيه اللي بيميز الكتاب ده؟</p>
                  <p>✔️ ملخص لأشهر 20 كتاب في تطوير الذات<br />✔️ تمارين عملية للتطبيق اليومي<br />✔️ استراتيجيات مثبت فعاليتها علمياً<br />✔️ نصائح من خبراء معترف بهم عالمياً</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">٥. هل الكتاب مناسب للمبتدئين؟</p>
                  <p>تمامًا! مشروح بلغة بسيطة ومباشرة، وبيبدأ من الأساسيات قبل ما ينتقل للمفاهيم المتقدمة.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">٦. إزاي الكتاب بيساعدني فعليًا؟</p>
                  <p>
                    تفهم سلوكياتك ودوافعك بشكل أفضل<br />
                    تبني عادات إيجابية تستمر معاك<br />
                    تتخذ قرارات أفضل في حياتك<br />
                    تتواصل مع نفسك والآخرين بشكل أكثر فعالية
                  </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">٧. هل الكتاب نظري ولا عملي؟</p>
                  <p>الكتاب بيوازن بين المفاهيم النظرية المهمة والتطبيقات العملية، كل مفهوم بيكون متبوع بخطوات عملية تقدر تنفذها على طول.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">٨. الكتاب مكتوب بأي لغة؟</p>
                  <p>الكتاب مكتوب بالعربية البسيطة، بأسلوب سلس وممتع يخليك تكمل قراءة للآخر.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">٩. هل الكتاب مناسب للشركات؟</p>
                  <p>نعم، كتير من الشركات بتستخدمه في برامج تطوير الموظفين وبناء المهارات القيادية.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-bold mb-2">١٠. إزاي أطلب الكتاب؟</p>
                  <p>اطلبه من خلال الموقع أو تواصل معانا، وهيوصل لحد بابك.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Purchase Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t z-50 px-4 py-3 flex justify-between items-center rtl">
        <span className="font-bold text-[#0D9488]">السعر: 400 جنيه</span>
        <a href={shopifyCheckoutLink} className="inline-flex items-center bg-[#0D9488] text-white px-4 py-2 rounded-md hover:opacity-90">
          <ShoppingCart className="ml-2 h-5 w-5" /> 📦 اطلب الآن
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-rtl-dark text-white py-10 rtl hidden">
        <div className="container mx-auto px-4">
          {/* Footer content will be hidden below sticky bar */}
        </div>
      </footer>
    </div>
  );
};

export default SelfDevelopmentBook;
