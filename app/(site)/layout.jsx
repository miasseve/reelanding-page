import Header from "../components/Header";
import Footer from "../components/Footer";
import SanityProvider from "../components/SanityProvider";
import FontLoader from "../components/FontLoader";
import { fetchSanityData } from "../../sanity/lib/fetchSanityData";

export const revalidate = 30; // Re-fetch Sanity data every 30 seconds

export default async function SiteLayout({ children }) {
  const data = await fetchSanityData();

  return (
    <SanityProvider data={data}>
      <FontLoader />
      <div data-site-chrome>
        <Header />
      </div>
      <div className="h-[56px]" />
      <main>{children}</main>
      <div data-site-chrome>
        <Footer />
      </div>
    </SanityProvider>
  );
}
