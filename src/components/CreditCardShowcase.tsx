import { Button } from "@/components/ui/button";

const CreditCardShowcase = () => {
  return (
    <section id="credit-cards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Find great cash back rewards
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Discover credit cards that work as hard as you do. From cash back to travel rewards, find the perfect card for your lifestyle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="xl" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                See Credit Card Offers
              </Button>
            </div>
          </div>

          {/* Credit Card Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/c4d7b794-9ace-409d-9875-8a2638537f2f.png" 
                alt="Discover Credit Cards - Cash, Student, and Miles cards" 
                className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardShowcase;