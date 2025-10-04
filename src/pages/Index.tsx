import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ManuscriptsSection from "@/components/ManuscriptsSection";
import StoreSection from "@/components/StoreSection";
import QuotesSection from "@/components/QuotesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoSection />
      <ManuscriptsSection />
      <StoreSection />
      <QuotesSection />
      <Footer />
    </div>
  );
};

export default Index;
