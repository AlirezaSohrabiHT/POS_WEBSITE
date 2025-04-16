import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import PricingSection from '../components/PricingSection/PricingSection'
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection'
export const metadata: Metadata = {
  title: "سیستم نقطه فروش اکسیر",
}

export default function Web() {
  return(
    <div className="overflow-hidden">
    <HeroSection/>
<div>
  <section className="px-6 py-12 bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text">
    <h2
      style={{ direction: "rtl" }}
      className="text-4xl font-extrabold text-center mb-12"
    >
      چرا نقطه فروش اکسیر؟
    </h2>
    <div className="flex justify-center md:justify-around items-center gap-2 flex-col md:flex-row">
      <FeatureCard
        title="ویژگی‌های اکسیر POS"
        description="سیستم اکسیر POS امکانات بی‌نظیری برای مدیریت فروش و مشتری ارائه می‌دهد."
        imageSrc="/assets/img1.png"
        imageAlt="ویژگی‌های اکسیر POS"
      />
      <FeatureCard
        title="پشتیبانی از پرینتر"
        description="این سامانه قابلیت اتصال به بیش از ۶ پرینتر به‌صورت همزمان را دارا است."
        imageSrc="/assets/img1.png"
        imageAlt="پشتیبانی از پرینتر"
      />
      <FeatureCard
        title="کارکرد آفلاین"
        description="سیستم اکسیر POS به شما امکان می‌دهد حتی در صورت قطع اینترنت نیز به کار خود ادامه دهید."
        imageSrc="/assets/img1.png"
        imageAlt="کارکرد آفلاین"
      />
    </div>
  </section>
</div>
    <PricingSection />
    <TestimonialsSection />
</div>
  )
}
