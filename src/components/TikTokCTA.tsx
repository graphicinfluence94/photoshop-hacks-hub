
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const TikTokCTA = () => {
  return (
    <section id="follow" className="py-16 bg-gradient-to-br from-brand-purple to-brand-purpleDark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Me on TikTok</h2>
            <p className="text-white/90 mb-6 max-w-lg">
              Get daily Photoshop tips, tricks, and design hacks delivered straight to your TikTok feed. 
              Join over 100,000 creative professionals already following my channel!
            </p>
            
            <Button className="bg-white text-brand-purple hover:bg-gray-100 flex items-center gap-2">
              <span>@photoshop_hack_master</span>
              <ExternalLink size={16} />
            </Button>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            {/* QR Code Placeholder */}
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="w-56 h-56 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center text-sm">TikTok QR Code</p>
              </div>
              <p className="text-black text-center mt-3 font-medium">Scan to follow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokCTA;
