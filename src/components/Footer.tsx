
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-brand-purple to-white bg-clip-text text-transparent">
              PhotoshopHacks
            </h2>
            <p className="text-gray-400 mt-2">Making design easier, one hack at a time.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">Home</a></li>
                <li><a href="#featured" className="text-gray-400 hover:text-brand-purple transition-colors">Featured Products</a></li>
                <li><a href="#tools" className="text-gray-400 hover:text-brand-purple transition-colors">Design Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">TikTok</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left text-sm text-gray-500">
          <p>&copy; {currentYear} PhotoshopHacks. All affiliate links may generate commission.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
