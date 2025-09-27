import { Hero } from "../src/components/sections/hero";
import { FeaturesSection } from "../src/components/sections/features-section";
import { PlansSection } from "../src/components/sections/plan-section";
import { PartnersSection } from "../src/components/sections/partners-section";
import { ReviewsSection } from "../src/components/sections/reviews-section";
import { ContactSection } from "../src/components/sections/contact-section";
import { LogoVideo } from "../src/components/sections/logo-video";
import { Navbar } from "../src/components/navbar-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <FeaturesSection />
        <PlansSection />
        <PartnersSection />
        <ReviewsSection />
        <LogoVideo />
        <ContactSection />
      </main>
    </>
  );
}
