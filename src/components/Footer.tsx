import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="help" className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              DISC<span className="inline-block w-3 h-3 bg-primary rounded-full mx-1"></span>VER
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Discover financial products designed to help you reach your goals. 
              From credit cards to banking, we're here to support your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Credit Cards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Personal Loans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Banking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Student Loans</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile App</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Discover Financial Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;