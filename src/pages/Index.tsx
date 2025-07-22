import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import CreditCardShowcase from "@/components/CreditCardShowcase";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesGrid />
      <CreditCardShowcase />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Index;
