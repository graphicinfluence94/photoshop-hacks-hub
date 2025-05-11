
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-purpleDark bg-clip-text text-transparent">
            PhotoshopHacks
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#featured" className="text-gray-800 hover:text-brand-purple transition-colors font-medium">
            Featured Products
          </a>
          <a href="#tools" className="text-gray-800 hover:text-brand-purple transition-colors font-medium">
            Design Tools
          </a>
          <a href="#follow" className="text-gray-800 hover:text-brand-purple transition-colors font-medium">
            Follow Me
          </a>
        </nav>
        <Button className="bg-brand-purple hover:bg-brand-purpleDark flex items-center gap-1">
          <span>TikTok</span>
          <ExternalLink size={16} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
