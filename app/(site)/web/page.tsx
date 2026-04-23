import WebHero from "../../components/web/WebHero";
import WebFeatures from "../../components/web/WebFeatures";
import WebCTA from "../../components/web/WebCTA";

export const metadata = {
  title: "2hand2go Web | Launch your webstore in 3 days",
  description:
    "Ready-to-launch webstore for secondhand businesses. Fast deployment, white-label, no developer needed.",
};

export default function WebPage() {
  return (
    <>
      <WebHero />
      <WebFeatures />
      <WebCTA />
    </>
  );
}
