import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TitleHeader from "@/components/TitleHeader";
import Gallery from "@/components/Gallery";
export default function Home() {
  return (
    <>
      <Navbar />
      <TitleHeader
              title="Gallery"
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Gallery" },
              ]}
              bgImageUrl="/assets/about-section-title-header.jpg"
            />
      <Gallery />
      <Footer />
    </>
  );
}
