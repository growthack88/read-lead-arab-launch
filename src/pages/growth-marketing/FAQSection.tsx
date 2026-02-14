import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "الكتب ورقية ولا رقمية؟", a: "الاتنين! الكتب الـ 3 مطبوعة بتوصلك في بوكس واحد + نسخ رقمية بتوصلك فوراً. الأدوات الـ 9 كمان مطبوعة في البوكس. البونص كله رقمي بيتفعّل بعد الاستلام." },
  { q: "هل فيه استرجاع؟", a: "بما إن المنتجات مطبوعة + فيها محتوى رقمي بيتفعّل فوراً، مفيش استرجاع بعد الشراء. بس إحنا واثقين إن المحتوى ده هيغيّر طريقة شغلك." },
  { q: "الكيت تنفع لحد مش شغال في التسويق؟", a: "أيوه. لو أنت صاحب بيزنس أو Startup، الكيت دي هتخليك تفهم التسويق صح حتى لو مش ده تخصصك." },
  { q: "أنا ماركتير من سنين — هتفيدني؟", a: "لو عندك +10 سنين خبرة، ممكن تكون عارف جزء كبير من «التسويق ببساطة». بس الـ Growth Machine والـ GrowthDNA هيدوك Framework جديد تماماً + الأدوات والـ Playbooks هتنظملك كل حاجة." },
  { q: "لازم يكون عندي خبرة في التسويق؟", a: "لأ. «التسويق ببساطة» مصمم إنك تبدأ منه حتى لو مبتدئ. وبعدها تتدرج لـ Growth Machine وGrowthDNA." },
  { q: "إيه الفرق بين الكيت وإني أشتري كل كتاب لوحده؟", a: "لو اشتريت كل حاجة لوحدها هتدفع 5,497 ج.م. الكيت بتديك كل حاجة بـ 1,499 ج.م — توفير أكتر من 70%. وده غير إن الأدوات المطبوعة مش متاحة إلا في الكيت." },
  { q: "المحتوى بالعربي ولا بالإنجليزي؟", a: "المحتوى بالعربي مع المصطلحات الإنجليزية الشائعة في المجال — زي Framework, Funnel, Growth Loops." },
  { q: "الأدوات المطبوعة شكلها إيه؟", a: "أدوات مصممة ومطبوعة بجودة عالية — كل أداة في ورقة منفصلة جاهزة تستخدمها مع فريقك أو لوحدك." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-4xl mx-auto px-4 space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">أسئلة شائعة</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-[#141414] border border-white/5 rounded-2xl px-6 overflow-hidden">
              <AccordionTrigger className="text-white hover:no-underline text-right py-5 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
