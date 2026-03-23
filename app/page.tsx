import Video from "./components/home/Video";
import HeroSection from "./components/home/HeroSection";
import RetailerCTA from "./components/home/RetailerCTA";
import ProblemCarousel from "./components/home/ProblemCarousel";
import ProcessSection from "./components/home/ProcessSection";
import ToolsSection from "./components/home/ToolsSection";
import TeamSection from "./components/home/TeamSection";
import FAQSection from "./components/home/FAQSection";
import CTASection from "./components/home/CTASection";

export default function Home() {
  return (
    <>
      <Video />
      <HeroSection />
      <RetailerCTA />
      <ProblemCarousel />
      <ProcessSection />
      <ToolsSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
