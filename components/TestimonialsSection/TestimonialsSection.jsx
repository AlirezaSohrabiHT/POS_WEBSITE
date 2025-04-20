"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "علی رضایی",
    role: "مدیر کافه گرام",
    comment: "اکسیر POS همه نیازهای من رو در کافه برطرف کرده. خیلی سریع و ساده است.",
  },
  {
    name: "مریم شریفی",
    role: "صاحب سوپرمارکت",
    comment: "پشتیبانی خیلی خوبی داره و حتی بدون اینترنت هم کار می‌کنه. عالیه!",
  },
];

const TestimonialsSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="px-6 py-12 bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text">
      <h2
        style={{ direction: "rtl" }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        نظر مشتریان ما
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch">
        {testimonials.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ direction: "rtl" }}
            className="flex-1 bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text rounded-2xl shadow-lg p-6 border border-light-secondary dark:border-dark-secondary transition-transform duration-300 hover:scale-[1.02]"
          >
            <p className="mb-6 text-base leading-7 italic">&quot;{item.comment}&quot;</p>
            <div className="mt-auto">
              <div className="font-bold text-lg">{item.name}</div>
              <div className="text-sm opacity-75">{item.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
