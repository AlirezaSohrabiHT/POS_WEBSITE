"use client";

import React from "react";

const PricingSection = () => {
  return (
    <section className="px-6 py-12 bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text">
      <h2
        style={{ direction: "rtl" }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        پلن‌های قیمت‌گذاری
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch">
        {[
          {
            title: "پایه",
            price: "1,000,000 تومان / ماه",
            features: ["مدیریت محصولات", "فاکتورگیری", "گزارش‌گیری ساده"],
            isPopular: false,
          },
          {
            title: "حرفه‌ای",
            price: "2,500,000 تومان / ماه",
            features: ["همه ویژگی‌های پایه", "پشتیبانی پرینتر", "ماژول تخفیف"],
            isPopular: true,
          },
        ].map((plan, i) => (
          <div
            key={i}
            style={{ direction: "rtl" }}
            className={`flex-1 bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text rounded-2xl shadow-lg overflow-hidden flex flex-col border-2 transition-all duration-300 hover:scale-[1.02] ${
              plan.isPopular
                ? "border-light-accent dark:border-dark-accent"
                : "border-transparent"
            }`}
          >
            {/* Header */}
            <div className="p-6 border-b border-light-secondary dark:border-dark-secondary text-center">
              <h3 className="text-3xl font-bold mb-2">{plan.title}</h3>
              <p className="text-xl font-semibold">{plan.price}</p>
              {plan.isPopular && (
                <span className="inline-block mt-2 px-3 py-1 text-sm bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text rounded-full">
                  محبوب‌ترین
                </span>
              )}
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <ul className="space-y-3 text-base leading-6 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-light-accent dark:text-dark-accent">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-auto px-6 py-3 rounded-lg bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text hover:opacity-90 transition">
                شروع کنید
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
