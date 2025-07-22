import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, Award } from "lucide-react";
import creditCardImage from "@/assets/credit-card.jpg";

const benefits = [
  {
    icon: Star,
    title: "5% Cashback",
    description: "On rotating categories"
  },
  {
    icon: Shield,
    title: "No Annual Fee",
    description: "Ever"
  },
  {
    icon: Clock,
    title: "0% Intro APR",
    description: "For 15 months"
  },
  {
    icon: Award,
    title: "FICO® Score",
    description: "Free monthly updates"
  }
];

const CreditCardShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Credit Card Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={creditCardImage} 
                alt="Discover Credit Card" 
                className="w-full max-w-md mx-auto shadow-elegant rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-card opacity-20 blur-3xl transform scale-110"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Most Popular Choice
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Discover it® Cash Back
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Earn unlimited 1% cash back on all purchases, plus 5% cash back on categories that change every quarter.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="discover" size="xl">
                Apply Now
              </Button>
              <Button variant="outline" size="xl">
                See Full Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardShowcase;