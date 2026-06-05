import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { assetPath } from "@/lib/asset-path";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { QuotesStrip } from "@/components/sections/QuotesStrip";
import { Science } from "@/components/sections/Science";
import { Solution } from "@/components/sections/Solution";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero backgroundVideoSrc={assetPath("/hero-background.mp4")} />
        <Problem />
        <Solution />
        <Science />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <QuotesStrip />
      <Footer />
    </>
  );
}
