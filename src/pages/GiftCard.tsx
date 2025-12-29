import { motion } from "framer-motion";
import { Gift, Book, Briefcase, Package, Layers, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const GiftCard = () => {
  const scrollToInfo = () => {
    const element = document.getElementById('info-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCards = () => {
    const element = document.getElementById('cards-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-tajawal min-h-screen bg-gift-light" dir="rtl">
      <SEO 
        title="كارت هدية Read to Lead | هدية تِفضل… مش تِتنسى"
        description="كارت هدية Read to Lead — لأن الشخص اللي يستاهل، يستاهل هدية تبني… مش هدية تتنسى."
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gift-primary to-gift-secondary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-white/20" />
          <div className="absolute bottom-40 left-20 w-60 h-60 rounded-full bg-white/10" />
          <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-gift-accent/30" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            {/* Gift Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Gift className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              كارت هدية رقمي من{" "}
              <span className="text-gift-accent">Read to Lead</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              كارت تقدر تهديه لأي شخص، يستخدمه كرصيد على موقعنا
              <br />
              ويختار بنفسه الكتب، الملخصات، الـKits، أو الـToolkits اللي تناسبه.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={scrollToCards}
                size="lg"
                className="bg-gift-accent hover:bg-gift-accent/90 text-gift-dark font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                اختر قيمة الكارت وابدأ
              </Button>
              <Button
                onClick={scrollToInfo}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6 rounded-xl transition-all duration-300"
              >
                اعرف أكتر عن كارت الهدية
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="cursor-pointer"
              onClick={scrollToInfo}
            >
              <ChevronDown className="w-8 h-8 text-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info-section" className="py-20 md:py-32 bg-gift-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gift-dark mb-6">
                اعرف أكتر عن كارت هدية{" "}
                <span className="text-gift-primary">Read to Lead</span>
              </h2>
              <p className="text-xl md:text-2xl text-gift-primary font-semibold">
                مش كارت خصم.. دا رصيد معرفة
              </p>
            </motion.div>

            {/* Card Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gift-muted/50 mb-12"
            >
              <p className="text-lg md:text-xl text-gift-dark/80 leading-relaxed text-center">
                كارت الهدية من Read to Lead هو كارت رقمي
                <br />
                بتقدّمه هدية لأي شخص، يستخدمه كرصيد على الموقع ويختار بنفسه اللي يناسبه.
              </p>
            </motion.div>

            {/* What the card does */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gift-secondary rounded-2xl p-8 md:p-12 text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                الكارت بيعمل إيه بالظبط؟
              </h3>
              
              <p className="text-lg md:text-xl text-white/90 text-center mb-8">
                بيضيف رصيد مباشر على حسابه في Read to Lead
              </p>

              <div className="border-t border-white/20 pt-8">
                <p className="text-lg text-white/80 text-center mb-6">
                  يقدر يستخدمه في شراء:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Book, label: "كتب" },
                    { icon: Package, label: "Kits" },
                    { icon: Briefcase, label: "Toolkits" },
                    { icon: Layers, label: "Bundles" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-14 h-14 mx-auto bg-gift-accent/20 rounded-full flex items-center justify-center mb-3">
                        <item.icon className="w-7 h-7 text-gift-accent" />
                      </div>
                      <span className="text-lg font-semibold">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA to cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                onClick={scrollToCards}
                size="lg"
                className="bg-gift-primary hover:bg-gift-primary/90 text-white font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                اختر قيمة الكارت وابدأ
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards Selection Section - Placeholder */}
      <section id="cards-section" className="py-20 md:py-32 bg-gift-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gift-dark mb-6">
                اختر قيمة الكارت
              </h2>
              <p className="text-lg text-gift-dark/70 mb-12">
                قريباً... هنضيف خيارات قيم الكروت هنا
              </p>
              
              {/* Placeholder for future card options */}
              <div className="bg-white/50 rounded-2xl p-12 border-2 border-dashed border-gift-primary/30">
                <Gift className="w-16 h-16 mx-auto text-gift-primary/50 mb-4" />
                <p className="text-gift-dark/50">خيارات الكروت قريباً</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCard;
