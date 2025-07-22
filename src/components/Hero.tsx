import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Happy people in retail environment" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Treating people{" "}
            <span className="text-primary">special</span>{" "}
            is kind of our thing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover credit cards, banking, and loans designed with your financial journey in mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;