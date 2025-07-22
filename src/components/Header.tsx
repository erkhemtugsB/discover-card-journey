import { Button } from "@/components/ui/button";
import { Search, Menu, HelpCircle, ChevronDown } from "lucide-react";

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
            <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
              <span>All Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span>Help and Resources</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </div>
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