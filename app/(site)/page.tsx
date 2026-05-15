import Video from "../components/home/Video";
import RetailerCTA from "../components/home/RetailerCTA";
import ProblemCarousel from "../components/home/ProblemCarousel";
import WorkflowSection from "../components/home/WorkflowSection";
import ListPromoSection from "../components/home/ListPromoSection";
import WebPromoSection from "../components/home/WebPromoSection";
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
      <Reveal><ProblemCarousel /></Reveal>
      <Reveal><WorkflowSection /></Reveal>
      <Reveal><ListPromoSection /></Reveal>
      <Reveal><ProcessSection /></Reveal>
      <Reveal><WebPromoSection /></Reveal>
      {/* <CalculatorSection /> hidden until redesigned per v11 spec */}
      <Reveal><HomePricingSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <Reveal><CTASection /></Reveal>
    </>
  );
}
