import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-secondary">
              DISC<span className="inline-block w-3 h-3 bg-primary rounded-full mx-1"></span>VER
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-primary transition-colors cursor-pointer">
              All Products
            </a>
            <a href="#credit-cards" className="hover:text-primary transition-colors cursor-pointer">
              Credit Cards
            </a>
            <a href="#how-to-apply" className="hover:text-primary transition-colors cursor-pointer">
              How to Apply
            </a>
            <a href="#help" className="hover:text-primary transition-colors cursor-pointer">
              Help & Resources
            </a>
          </nav>

          {/* Login Button */}
          <div className="flex items-center space-x-4">
            <Button variant="discover" size="lg" className="hidden md:inline-flex">
              Log In
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;