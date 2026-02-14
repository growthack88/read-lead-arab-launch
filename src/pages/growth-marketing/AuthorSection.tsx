import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AuthorSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 md:py-28 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container max-w-4xl mx-auto px-4 space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500">ABOUT THE AUTHOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">عن المؤلف</h2>
        </div>

        <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 md:p-10 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white">محمود عمر</h3>
            <p className="text-neutral-400">Growth & E-commerce Consultant · مؤسس Growth Hack Academy · مؤلف 5 كتب</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <span className="text-emerald-400 font-medium">+13 سنة خبرة</span>
            <span className="text-emerald-400 font-medium">+100 شركة</span>
            <span className="text-emerald-400 font-medium">+500 Marketer تم تدريبهم</span>
          </div>

          <p className="text-neutral-300 text-lg leading-relaxed">
            مش Influencer. مش متحدث تحفيزي. واحد بيشتغل في الـ Growth كل يوم — واللي اشتغل كتبه. واللي فشل كتبه برضو. الكتب دي مش ترجمة لكتب أجنبية. دي تجربة حقيقية من السوق العربي.
          </p>

          <a href="https://mahmoudomar.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-sm hover:text-emerald-400 transition">
            mahmoudomar.com ←
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
