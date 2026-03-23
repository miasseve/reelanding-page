import PricingHero from "../components/pricing/PricingHome";
import PricingSection from "../components/pricing/ChoosePlanSection/PricingSection";
import ChoosePlans from "../components/pricing/ChoosePlanSection/ChoosePlans";
import GetBarcode from "../components/pricing/ChoosePlanSection/GetBarcode";
// import FeaturesSlider from "../components/pricing/FeaturesSlider";
// import PricingCards from "../components/pricing/PricingCards";
// import CalculatorSection from "../components/pricing/CalculaterSection";

export default function PricingPage() {
  return (
    <div className="font-[family-name:var(--font-space-grotesk)] w-full overflow-x-hidden">
      <PricingHero />
      <PricingSection/>
      <GetBarcode/>
      <ChoosePlans/>
      {/* <FeaturesSlider /> */}
      {/* <PricingCards /> */}
      {/* <CalculatorSection /> */}
    </div>
  );
}
