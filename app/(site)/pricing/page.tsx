import PricingHero from "../../components/pricing/PricingHome";
import PricingSection from "../../components/pricing/ChoosePlanSection/PricingSection";
import ChoosePlans from "../../components/pricing/ChoosePlanSection/ChoosePlans";
import GetBarcode from "../../components/pricing/ChoosePlanSection/GetBarcode";
import DarkSection from "../../components/pricing/ChoosePlanSection/DarkSection";
import SmartPricingNote from "../../components/pricing/ChoosePlanSection/SmartPricingNote";
import PricingReassurance from "../../components/pricing/PricingReassurance";
// import FeaturesSlider from "../../components/pricing/FeaturesSlider";
// import PricingCards from "../../components/pricing/PricingCards";

export default function PricingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PricingHero />
      <SmartPricingNote />
      <PricingReassurance />
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
