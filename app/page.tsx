import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
export const metadata: Metadata = {
  title: "سیستم نقطه فروش اکسیر",
}

export default function Web() {
  return(
    <div>
<HeroSection/>
</div>
  )
}
