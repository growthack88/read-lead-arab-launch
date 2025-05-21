
import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import SEO from "@/components/SEO";

const EntrepreneurshipBook = () => {
  // Function to scroll back to top when navigating between sections
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Shopify checkout link for Entrepreneurship Book
  const shopifyCheckoutLink = "https://si51ve-s6.myshopify.com/cart/42047911690345:1?channel=buy_button";

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <SEO 
        title="كتاب فن ريادة الأعمال | Read to Lead"
        description="دليل عملي شامل لتحويل فكرتك لمشروع حقيقي ناجح بأسلوب منظم وتطبيقي."
        image="/assets/book-entrepreneurship.jpg"
        url="https://land.readtolead.store/entrepreneurship-book"
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
                🟢 كتاب فن ريادة الأعمال | دليلك الشامل لبناء مشروعك الناجح
              </h1>
              <p className="text-lg text-gray-700 font-medium">
                خلاصة أهم 20 كتاب عالمي في ريادة الأعمال هتساعدك تحول فكرتك لمشروع حقيقي ناجح.
              </p>
              <p className="text-gray-600 leading-relaxed">
                كتاب "فن ريادة الأعمال" هو دليلك العملي لبناء مشروعك الخاص من الصفر للنجاح. جمعنالك فيه خلاصة تجارب أنجح رواد الأعمال في العالم، بداية من تحويل الفكرة لنموذج أعمال، مروراً بخطط التمويل والتسويق، وحتى استراتيجيات النمو والتوسع.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 md:order-2">
              <img
                src="/lovable-uploads/4b92d458-9572-4368-a623-072f5ac39987.png"
                alt="كتاب فن ريادة الأعمال"
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
                  <span>أصحاب الأفكار اللي عايزين يحولوها لمشاريع حقيقية</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>رواد الأعمال الجدد اللي لسه بيبدأوا رحلتهم الريادية</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>أصحاب المشاريع الصغيرة اللي عايزين يوسعوا أعمالهم</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>طلاب وخريجي إدارة الأعمال اللي بيحلموا بمشروعهم الخاص</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>المستثمرين اللي عايزين يفهموا عقلية رواد الأعمال</span>
                </li>
                <li className="flex gap-2">
                  <span>✅</span>
                  <span>المديرين اللي بيطمحوا يطوروا مهارات الابتكار والعقلية الريادية</span>
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
                  <span>هتتعلم إزاي تحول الفكرة لنموذج أعمال قابل للتطبيق والربح</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتكتشف استراتيجيات تمويل المشاريع الناشئة بطرق إبداعية</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتتعرف على أسرار بناء فريق عمل متميز وإدارته بفعالية</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتفهم إزاي تخلي مشروعك ينمو بشكل مستدام</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>هتتعلم إزاي تتعامل مع التحديات والفشل زي رواد الأعمال الناجحين</span>
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
              🟢 جاهز تخلق فرصتك الخاصة وتبني مشروعك الناجح؟
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
                  <ShoppingCart className="ml-2 h-5 w-5" /> 🛒 اطلب كتاب فن ريادة الأعمال الآن
                </a>
                <p className="mt-4 text-gray-600">الخطوة الجاية في مشروعك الخاص تبدأ من هنا</p>
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
              20 ملخص لأهم الكتب العالمية الخاصة بريادة الأعمال
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1">
              <ul className="space-y-1 pr-4 list-disc list-inside">
                <li>Zero to One - من الصفر إلى الواحد by Peter Thiel & Blake Masters - بيتر ثيل وبليك ماسترز</li>
                <li>Built to Last - البناء للتشيد والاستدامة by Jim Collins - جيمس س. كولينز</li>
                <li>Growth IQ - معدلات الذكاء للنمو by Tiffani Bova - تيفاني بوفا</li>
                <li>The Worst Business Model in the World - أسوأ نموذج عمل في العالم by Danny Schuman - داني شومان</li>
                <li>Write Your Business Plan - اكتب خطة عملك by The Staff of Entrepreneur Media, Inc - طاقم عمل Entrepreneur Media، Inc</li>
                <li>The Entrepreneurial Bible to Venture Capital - الكتاب المقدس لريادة الأعمال لرأس المال الاستثماري by Andrew Romans - أندرو رومانس</li>
                <li>The Dragonfly Effect - تأثير اليعسوب by Jennifer Aaker, Andy Smith with Carlye Adler - جينيفر آكر وآندي سميث مع كارلي أدلر</li>
                <li>Company of One - شركات الفرد الواحد by Paul Jarvis - بول جارفيس</li>
                <li>Rapid Growth, Done Right - النمو السريع بالشكل الصحيح by Val Wright - فال رايت</li>
                <li>Cooking Up a Business - مرحلة تحضير الأعمال by Rachel Hofstetter - راشيل هوفستيتر</li>
              </ul>

              <ul className="space-y-1 pr-4 list-disc list-inside">
                <li>Crazy is a Compliment - الجنون مجاملة by Linda Rottenberg - ليندا روتنبرغ</li>
                <li>Think Like an Entrepreneur, Act Like a CEO - فكر كرائد أعمال تصرف كمدير تنفيذي by Beverly E. Jones - بيفرلي إي جونز</li>
                <li>Never Split the Difference - لا تقسم الفرق أبداً by Christopher Voss & Tahl Raz - تال راس وكريستوفر فوس</li>
                <li>Startup Growth Engines - محركات نمو الشركات الناشئة by Sean Ellis & Morgan Brown - شون إليز ومورغان براون</li>
                <li>Scaling Up - التوسع by Verne Harnish - فيرن هارنيش</li>
                <li>Moore's Law - قانون مور by Arnold Thackray, David Brock and Rachel Jones - أرنولد ثاكري، ديفيد بروك، راشيل جونز</li>
                <li>Lost and Founder - ضائع ومؤسس by Rand Fishkin - راند فيشكن</li>
                <li>Beyond Entrepreneurship 2.0 - ما وراء ريادة الأعمال 2.0 by Jim Collins and Bill Lazier - جيم كولينز وبيل ليزير</li>
                <li>Blitzscaling - النمو الخاطف والسريع by Reid Hoffman and Chris Yeh - ريد هوفمان وكريس ييه</li>
                <li>Good to Great - من جيد إلى عظيم by James C. Collins - جيمس كولينز</li>
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
              ❓ الأسئلة الشائعة – كتاب فن ريادة الأعمال
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-bold">١. إيه هو كتاب فن ريادة الأعمال؟</p>
                <p className="text-gray-600">
                  هو كتاب بيجمع خلاصة أهم 20 كتاب عالمي في مجال ريادة الأعمال، بيقدمهم في شكل مبسط وعملي يمكن تطبيقه على طول.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٢. مين ممكن يستفيد منه؟</p>
                <p className="text-gray-600">
                  أي شخص عنده فكرة مشروع أو بيفكر يبدأ مشروعه الخاص، بالإضافة لأصحاب المشاريع الصغيرة اللي عايزين يطوروا أعمالهم.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٣. الكتاب ده بيحل أي مشاكل؟</p>
                <p className="text-gray-600">
                  بيحل مشاكل صعوبة تحويل الفكرة لخطة عمل، تحديات تمويل المشروع، ضعف استراتيجيات النمو، وصعوبة بناء فريق العمل المناسب.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٤. إيه اللي بيميز الكتاب ده؟</p>
                <p className="text-gray-600">
                  ✔️ ملخص لأشهر 20 كتاب في ريادة الأعمال<br />
                  ✔️ استراتيجيات عملية من شركات ناجحة<br />
                  ✔️ نماذج وخطط أعمال جاهزة للتطبيق
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٥. هل الكتاب مناسب للمبتدئين؟</p>
                <p className="text-gray-600">
                  نعم، الكتاب مناسب للمبتدئين والمتقدمين على حد سواء، فهو يبدأ من الأساسيات وينتقل تدريجيًا إلى الاستراتيجيات المتقدمة.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٦. إزاي الكتاب بيساعدني فعليًا؟</p>
                <p className="text-gray-600">
                  بيساعدك تحول فكرتك لمشروع حقيقي<br />
                  تتعلم استراتيجيات التمويل المناسبة<br />
                  تبني فريق عمل فعال<br />
                  تستخدم أدوات واضحة لنمو مشروعك
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٧. هل الكتاب نظري ولا عملي؟</p>
                <p className="text-gray-600">
                  الكتاب بيجمع بين النظريات المهمة والخطوات العملية، فكل فصل بيقدم مفاهيم نظرية مع خطوات تطبيقية واضحة للتنفيذ.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٨. الكتاب مكتوب بأي لغة؟</p>
                <p className="text-gray-600">
                  الكتاب مكتوب بالعربية البسيطة، مع احتفاظه ببعض المصطلحات الإنجليزية المهمة في عالم ريادة الأعمال.
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-bold">٩. هل الكتاب مناسب للسوق المحلي؟</p>
                <p className="text-gray-600">
                  نعم، رغم أن الكتب الأصلية عالمية، لكن تم تطويع المحتوى ليناسب السوق المحلي والتحديات اللي بيواجهها رواد الأعمال في مصر والمنطقة العربية.
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
        <a href={shopifyCheckoutLink} className="inline-flex items-center bg-[#0D9488] text-white px-4 py-2 rounded-md hover:opacity-90">
          <ShoppingCart className="ml-2 h-5 w-5" /> 📦 اطلب الآن
        </a>
        <span className="font-bold text-[#0D9488]">السعر: 400 جنيه</span>
      </div>
    </div>
  );
};

export default EntrepreneurshipBook;
