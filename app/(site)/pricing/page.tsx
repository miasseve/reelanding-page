import PricingHero from "../../components/pricing/PricingHome";
import PricingSection from "../../components/pricing/ChoosePlanSection/PricingSection";
import ChoosePlans from "../../components/pricing/ChoosePlanSection/ChoosePlans";
import GetBarcode from "../../components/pricing/ChoosePlanSection/GetBarcode";
import DarkSection from "../../components/pricing/ChoosePlanSection/DarkSection";
// import FeaturesSlider from "../../components/pricing/FeaturesSlider";
// import PricingCards from "../../components/pricing/PricingCards";

export default function PricingPage() {
  return (
    <div className="font-[family-name:var(--font-space-grotesk)] w-full overflow-x-hidden">
      <PricingHero />
      <PricingSection/>
      <DarkSection>
        <GetBarcode/>
        <ChoosePlans/>
      </DarkSection>
      {/* <FeaturesSlider /> */}
      {/* <PricingCards /> */}
    </div>
  );
}
