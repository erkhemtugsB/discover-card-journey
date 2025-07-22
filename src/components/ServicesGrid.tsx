import { CreditCard, Building2, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: CreditCard,
    title: "Credit Card",
    description: "Cashback rewards and no annual fee"
  },
  {
    icon: Building2,
    title: "Online Banking",
    description: "Simple, secure digital banking"
  },
  {
    icon: DollarSign,
    title: "Personal Loans",
    description: "Fixed rates with flexible terms"
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            How can we help?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-md cursor-pointer group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;