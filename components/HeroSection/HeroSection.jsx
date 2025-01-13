"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section  className="relative w-screen h-screen flex flex-col justify-center items-center text-dark-text dark:text-dark-text px-4 ">
      {/* Video and Overlay */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 dark:bg-black/70"></div>
      </div>

      {/* Content */}
      <h1 style={{direction: 'rtl'}} className="text-5xl sm:text-7xl font-bold text-center mb-4">
        اکسیر POS
      </h1>
      <p className="text-lg sm:text-2xl text-center mb-8">
        سیستم نقطه فروش اکسیر مناسب برای کافه‌ها، رستوران‌ها و هایپرمارکت‌ها
      </p>
      <div className="flex space-x-4">
        {/* Link for "تماس با ما" */}
        <Link
          href="/contact"
          className="px-6 py-3 text-lg font-semibold rounded bg-light-accent dark:bg-dark-accent text-light-text dark:text-dark-text hover:opacity-90 transition-opacity"
        >
          تماس با ما
        </Link>

        {/* Link for "درباره ما بیشتر بدانید" */}
        <Link
          href="/about"
          className="px-6 py-3 text-lg font-semibold rounded border border-light-accent dark:border-dark-accent text-light-accent dark:text-dark-accent hover:bg-light-accent hover:text-light-text dark:hover:bg-dark-accent dark:hover:text-dark-text transition-all"
        >
          درباره ما بیشتر بدانید
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
