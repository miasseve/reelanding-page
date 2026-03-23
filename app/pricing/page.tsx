import PricingHero from "../components/pricing/PricingHome";
import FeaturesSlider from "../components/pricing/FeaturesSlider";
import PricingCards from "../components/pricing/PricingCards";
import CalculatorSection from "../components/pricing/CalculaterSection";

export default function PricingPage() {
  return (
    <div className="font-[family-name:var(--font-space-grotesk)] w-full overflow-x-hidden">
      <PricingHero />
      {/* <FeaturesSlider /> */}
      <PricingCards />
      {/* <CalculatorSection /> */}
    </div>
  );
}
