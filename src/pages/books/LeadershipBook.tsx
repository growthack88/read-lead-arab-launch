
import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ShoppingCart } from "lucide-react";

const LeadershipBook = () => {
  // Shopify checkout link for Leadership Book
  const shopifyCheckoutLink = "https://si51ve-s6.myshopify.com/cart/42047911460969:1?channel=buy_button";

  // Function to scroll back to top when navigating between sections
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="كتاب القيادة والإدارة الفعالة | Read to Lead"
        description="استراتيجيات فعّالة لبناء فرق قوية، اتخاذ قرارات حاسمة، وقيادة ناجحة."
        image="/assets/book-leadership.jpg"
        url="https://land.readtolead.store/leadership-book"
      />
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Left Column - Text */}
            <div className="space-y-4 order-2 md:order-1 text-right">
              <h1 className="text-3xl md:text-4xl font-bold text-rtl-dark">
                كتاب القيادة والإدارة الفعالة | أسرار القادة الملهمين
              </h1>
              <p className="text-lg text-gray-700 font-medium">
                خلاصة أهم 20 كتاب في القيادة والإدارة لمساعدتك على بناء فريق متميز وتحقيق نتائج استثنائية.
              </p>
              <p className="text-gray-600 leading-relaxed">
                كتاب "القيادة والإدارة الفعالة" هو دليلك الشامل لأحدث نظريات وتطبيقات القيادة. جمعنالك فيه خلاصة تجارب أنجح القادة في العالم، من بناء الرؤية وتحفيز الفريق، لحل الصراعات وإدارة التغيير، وحتى تطوير مهارات الذكاء العاطفي واتخاذ القرارات الصعبة.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 md:order-2">
              <img
                src="/lovable-uploads/7b271e77-fc40-4b05-a14f-f093c1f9cdb4.png"
                alt="كتاب القيادة والإدارة الفعالة"
                className="aspect-[2/1] rounded-xl shadow-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Target Audience Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Right Column (target audience) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                🎯 الكتاب ده مناسب لمين؟
              </h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>المديرين اللي عايزين يطوروا أساليب قيادتهم</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>قادة الفرق اللي بيواجهوا تحديات في إدارة فرقهم</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>رواد الأعمال اللي بيبنوا فرق عمل لأول مرة</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>المهنيين الطموحين اللي بيحضروا نفسهم لأدوار قيادية</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أصحاب الشركات اللي عايزين يحسنوا أداء فرقهم</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>المديرين التنفيذيين اللي بيقودوا عمليات تغيير وتطوير</span>
                </li>
              </ul>
            </div>

            {/* Left Column (benefits) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-rtl-dark">
                🧠 إزاي الكتاب هيفيدك؟
              </h2>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتتعلم إزاي تبني رؤية واضحة لفريقك وتلهمهم للعمل بحماس</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتكتشف أساليب القيادة المختلفة ومتى تستخدم كل أسلوب</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتفهم كيفية حل الصراعات وإدارة الشخصيات الصعبة في فريقك</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتتقن استراتيجيات التحفيز والتفويض وتنمية مهارات فريقك</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتتعلم كيفية قيادة عمليات التغيير بنجاح وبأقل مقاومة ممكنة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-rtl-dark">
              🟢 جاهز تصبح قائد ملهم يحقق نتائج استثنائية؟
            </h2>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-rtl-teal">السعر: 400 جنيه</span>
                  <span className="text-lg line-through text-gray-500">السعر السابق: 500 جنيه</span>
                </div>
                <p className="text-gray-600 mb-4">
                  🚚 شحن خلال ١-٣ أيام | 💳 الدفع عند الاستلام أو أونلاين
                </p>
                <a 
                  href={shopifyCheckoutLink}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg hover:scale-105 transition text-lg bg-[#0D9488] text-white"
                >
                  <ShoppingCart className="ml-2 h-5 w-5" /> 🛒 اطلب كتاب القيادة والإدارة الفعالة الآن
                </a>
                <p className="mt-4 text-gray-600">الخطوة الجاية في رحلتك القيادية تبدأ من هنا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section - Updated to use proper list */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-rtl-dark">
              📚 إيه اللي هتلاقيه جوا الكتاب؟
            </h2>
            <p className="text-center text-lg mb-8">
              20 ملخص لأهم الكتب العالمية الخاصة بالقيادة والإدارة
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1">
              <ul className="space-y-1 pr-4 list-disc list-inside">
                <li>The 21 Irrefutable Laws of Leadership - القوانين 21 التي لا تقبل الجدل في مفهوم القيادة by John C. Maxwell - جون سي ماكسويل</li>
                <li>The Art of Negotiation - فن التفاوض by Michael Wheeler - مايكل ويلر</li>
                <li>The CEO Next Door - الرئيس التنفيذي القادم by Elena Botelho and Kim Powell - ايلينا بوتيلو، كيم باول</li>
                <li>The Coach's Survival Guide - دليل استرشادي لاستمرارية المدرب by Kim Morgan - كيم مورغان</li>
                <li>The Coaching Habit - عادات التدريب by Michael Bungay Stanier - مايكل بونجي ستانييه</li>
                <li>The Discomfort Zone - منطقة الانزعاج by Marcia Reynolds - مارسيا رينولدز</li>
                <li>The First-Time Manager - مدير لأول مرة by Loren B. Belker, Jim McCormick and Gary S. Topchik - لورين بيلكر، جيم ماكورميك، غاري س. توبشيك</li>
                <li>The Leader Habit - عادات القائد by Martin Lanik - مارتن لانيك</li>
                <li>The Leader as a Mensch - القائد كإنسان by Bruna Martinuzzi - برونا مارتينوزى</li>
                <li>The Leadership Lab - معمل صناعة القيادة by Chris Lewis, Dr Pippa Malmgren - كريس لويس، بيبا مالمغرن</li>
              </ul>

              <ul className="space-y-1 pr-4 list-disc list-inside">
                <li>The Leader's Greatest Return - أعظم عائد للقائد by John C. Maxwell - جون سي ماكسويل</li>
                <li>The Making of a Manager - عملية صناعة المديرين by Julie Zhuo - جولي تشو</li>
                <li>The Motivation Code - الكود التحفيزي by Todd Henry with Ron Penner, Todd W. Hall, and Joshua Miller - تود هنرى، رون بينر، تود دبليو هول، جوشوا ميلر</li>
                <li>The Power of Giving Away Power - قوة التخلي عن السلطة by Matthew Barzun - ماثيو بارزون</li>
                <li>The Scrum Fieldbook - كتاب سكروم الميداني by J.J. Sutherland - جيف ساذرلاند</li>
                <li>The Smartest Guys in the Room - أذكى من في الغرفة by Bethany Mclean, Peter Elkind - بيثاني ماكلين، بيتر إلكيند</li>
                <li>The Wise Company - الشركة العقلانية by Ikujiro Nonaka and Hirotaka Takeuchi - إيكوجيرو نوناكا، هيروتاكا تاكوشي</li>
                <li>Theory U - نظرية U by C. Otto Scharmer - أوتو شارمر</li>
                <li>True North - الاتجاه الشمالي الصحيح by Bill George - بيل جورج</li>
                <li>The Languages of Leadership - لغات القيادة by Wendy Born - ويندي بورن</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-rtl-dark">
              ❓ الأسئلة الشائعة – كتاب القيادة والإدارة الفعالة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-bold">١. إيه هو كتاب القيادة والإدارة الفعالة؟</p>
                <p className="text-gray-600">
                  هو كتاب بيجمع خلاصة أهم 20 كتاب عالمي في مجال القيادة والإدارة، ويقدمها بشكل مبسط وعملي يمكن تطبيقه على طول.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٢. مين ممكن يستفيد منه؟</p>
                <p className="text-gray-600">
                  أي شخص في موقع قيادي أو بيطمح له، سواء كان مدير، قائد فريق، رائد أعمال، أو حتى موظف طموح بيستعد لدور قيادي.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٣. الكتاب ده بيحل أي مشاكل؟</p>
                <p className="text-gray-600">
                  بيحل مشاكل ضعف التحفيز في الفريق، تحديات إدارة الشخصيات المختلفة، صعوبة اتخاذ القرارات الصعبة، مقاومة التغيير، وتحديات بناء رؤية مشتركة.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٤. إيه اللي بيميز الكتاب ده؟</p>
                <p className="text-gray-600">
                  ✔️ ملخص لأشهر 20 كتاب في القيادة والإدارة<br />
                  ✔️ أساليب قيادية مختلفة تناسب المواقف المتنوعة<br />
                  ✔️ استراتيجيات عملية لبناء وتحفيز الفرق<br />
                  ✔️ دراسات حالة من قادة ناجحين حول العالم
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٥. هل الكتاب مناسب للمديرين الجدد؟</p>
                <p className="text-gray-600">
                  تماماً، الكتاب مفيد بشكل خاص للمديرين الجدد لأنه بيوفر لهم الأسس والمهارات اللي محتاجينها في بداية رحلتهم القيادية.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٦. إزاي الكتاب بيساعدني فعليًا؟</p>
                <p className="text-gray-600">
                  تتعلم أساليب قيادية مختلفة ومتى تستخدم كل منها<br />
                  تبني رؤية واضحة وتوصلها بفعالية للفريق<br />
                  تحفز فريقك وتخليهم يقدموا أفضل ما عندهم<br />
                  تدير الصراعات والتحديات بين أعضاء الفريق
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٧. هل الكتاب نظري ولا عملي؟</p>
                <p className="text-gray-600">
                  الكتاب بيجمع بين الأسس النظرية للقيادة والتطبيقات العملية اللي تقدر تبدأ تنفذها على طول مع فريقك.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٨. الكتاب مكتوب بأي لغة؟</p>
                <p className="text-gray-600">
                  الكتاب مكتوب بالعربية البسيطة والمفهومة، مع الاحتفاظ بالمصطلحات الأصلية المهمة في عالم القيادة.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٩. هل نظريات القيادة دي تنفع في ثقافتنا المصرية؟</p>
                <p className="text-gray-600">
                  أيوه، رغم إن النظريات أصلها غربي، لكن تم تكييفها لتناسب الثقافة المصرية والعربية وأسلوب العمل المحلي.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">١٠. إزاي أطلب الكتاب؟</p>
                <p className="text-gray-600">
                  اطلبه من خلال الموقع أو تواصل معانا، وهيوصل لحد بابك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Purchase Bar */}
      <div className="fixed bottom-0 w-full bg-white border-t z-50 px-4 py-3 flex justify-between items-center">
        <a 
          href={shopifyCheckoutLink}
          className="inline-flex items-center bg-[#0D9488] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          <ShoppingCart className="ml-2 h-5 w-5" /> 📦 اطلب الآن
        </a>
        <span className="font-bold text-[#0D9488]">السعر: 400 جنيه</span>
      </div>
    </div>
  );
};

export default LeadershipBook;
