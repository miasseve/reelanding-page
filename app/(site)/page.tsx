import Video from "../components/home/Video";
import HeroSection from "../components/home/HeroSection";
import RetailerCTA from "../components/home/RetailerCTA";
import ProblemCarousel from "../components/home/ProblemCarousel";
import ProcessSection from "../components/home/ProcessSection";
import ToolsSection from "../components/home/ToolsSection";
import TeamSection from "../components/home/TeamSection";
import FAQSection from "../components/home/FAQSection";
import HelpSection from "../components/home/HelpSection";
import CTASection from "../components/home/CTASection";
// import CalculatorSection from "../components/pricing/CalculaterSection"; // hidden until redesigned per v11 spec

export default function Home() {
  return (
    <>
      <Video />
      <HeroSection />
      <RetailerCTA />
      <ProblemCarousel />
      <ProcessSection />
      <ToolsSection />
      <HelpSection />
      {/* <CalculatorSection /> hidden until redesigned per v11 spec */}
      <TeamSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
