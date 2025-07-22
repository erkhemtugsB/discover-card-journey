import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const timelineSteps = [
  {
    step: "01",
    title: "Check Your Credit Score",
    description: "See if you pre-qualify with no impact to your credit score. Get an instant decision in seconds.",
    detail: "Our pre-qualification process uses a soft credit check that won't affect your credit score."
  },
  {
    step: "02", 
    title: "Choose Your Card",
    description: "Compare features and find the card that matches your spending habits and financial goals.",
    detail: "Review cashback categories, intro offers, and benefits to make the best choice for you."
  },
  {
    step: "03",
    title: "Complete Application",
    description: "Fill out our secure online application in just minutes with your basic information.",
    detail: "We'll need personal details, income information, and housing costs to process your application."
  },
  {
    step: "04",
    title: "Get Instant Decision",
    description: "Receive your credit decision immediately and start using your card right away.",
    detail: "Once approved, you can add your card to digital wallets and start earning rewards instantly."
  },
  {
    step: "05",
    title: "Activate & Start Earning",
    description: "Activate your physical card when it arrives and begin earning unlimited cashback rewards.",
    detail: "Your card will arrive in 7-10 business days. Set up account alerts and automatic payments."
  }
];

const Timeline = () => {
  return (
    <section id="how-to-apply" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            How to Get Your Card
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your Discover card is quick and easy. Follow these simple steps to start earning rewards today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < timelineSteps.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-20 bg-gradient-to-b from-primary to-primary/50 hidden md:block"></div>
              )}

              {/* Timeline Item */}
              <div className="flex flex-col md:flex-row gap-6 mb-12 last:mb-0">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center text-white font-bold text-lg shadow-card">
                    {step.step}
                  </div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 hover:shadow-elegant transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-secondary">
                        {step.title}
                      </h3>
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Pro tip:</strong> {step.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;