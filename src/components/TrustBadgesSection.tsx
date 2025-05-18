
import React from "react";

const TrustBadgesSection = () => {
  return (
    <section className="py-12 rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-rtl-teal bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-bold text-lg">ضمان الجودة</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rtl-teal bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-bold text-lg">شحن سريع</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rtl-teal bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-bold text-lg">دعم متواصل</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
