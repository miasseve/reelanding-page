import Video from "../components/home/Video";
import RetailerCTA from "../components/home/RetailerCTA";
import TimeSavingsSection from "../components/home/TimeSavingsSection";
import WorkflowSection from "../components/home/WorkflowSection";
import ListPromoSection from "../components/home/ListPromoSection";
import WebPromoSection from "../components/home/WebPromoSection";
import AboutTeamSection from "../components/home/AboutTeamSection";
import HomePricingSection from "../components/home/HomePricingSection";
import ProcessSection from "../components/home/ProcessSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import Reveal from "../components/Reveal";
// import CalculatorSection from "../components/pricing/CalculaterSection"; // hidden until redesigned per v11 spec

export default function Home() {
  return (
    <>
      <Video />
      <Reveal><RetailerCTA /></Reveal>
      <Reveal><TimeSavingsSection /></Reveal>
      <Reveal><WorkflowSection /></Reveal>
      <Reveal><ListPromoSection /></Reveal>
      <Reveal><ProcessSection /></Reveal>
      <Reveal><WebPromoSection /></Reveal>
      {/* <CalculatorSection /> hidden until redesigned per v11 spec */}
      <Reveal><HomePricingSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <Reveal><CTASection /></Reveal>
      <Reveal><AboutTeamSection /></Reveal>
    </>
  );
}
