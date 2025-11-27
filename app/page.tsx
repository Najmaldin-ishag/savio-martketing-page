import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navigation";
import { Pricing } from "@/components/sections/pricing";
import { Waitlist } from "@/components/sections/waitlist";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
