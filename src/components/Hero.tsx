
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-purple/10 to-transparent -z-10"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <span className="inline-block py-1 px-3 bg-brand-purple/10 text-brand-purpleDark rounded-full text-sm font-medium mb-6">
          @photoshop_hack_master
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-purpleDark bg-clip-text text-transparent">
          Photoshop Hacks & Creative Tips
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          I create engaging TikTok tutorials that help designers level up their Photoshop skills. 
          Check out my favorite design tools and resources below!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-brand-purple hover:bg-brand-purpleDark text-white px-6 py-6 rounded-md flex items-center space-x-2">
            <span>Watch Latest Tutorials</span>
            <ArrowRight size={18} />
          </Button>
          <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 px-6 py-6 rounded-md">
            Explore Design Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
