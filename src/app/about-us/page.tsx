import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TitleHeader from "@/components/TitleHeader";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <TitleHeader
				title="About Us"
				crumbs={[
					{ label: "Home", href: "/" },
					{ label: "About Us" },
				]}
				bgImageUrl="/assets/about-section-title-header.jpg"
			/>
      <AboutSection />
      <Footer />
      
    </>
  );
}
