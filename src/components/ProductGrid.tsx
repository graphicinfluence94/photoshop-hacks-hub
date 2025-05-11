
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Pattern Pack Vol. 2",
      description: "100+ seamless patterns for stunning backgrounds",
      image: "/placeholder.svg",
      price: "$19.99"
    },
    {
      id: 2,
      title: "Texture Library",
      description: "High-resolution textures for any design project",
      image: "/placeholder.svg",
      price: "$24.99"
    },
    {
      id: 3,
      title: "Pro Color Grading Presets",
      description: "Cinematic color presets for photos and videos",
      image: "/placeholder.svg",
      price: "$34.99"
    },
    {
      id: 4,
      title: "Digital Brushes Collection",
      description: "500+ professional Photoshop brushes",
      image: "/placeholder.svg",
      price: "$29.99"
    },
    {
      id: 5,
      title: "Logo Creation Kit",
      description: "Templates and tools for logo design",
      image: "/placeholder.svg",
      price: "$39.99"
    },
    {
      id: 6,
      title: "UI Element Library",
      description: "Design elements for website and app interfaces",
      image: "/placeholder.svg",
      price: "$49.99"
    }
  ];

  return (
    <section id="tools" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Design Tools</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Browse my complete collection of recommended design resources
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="font-bold text-brand-purple">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-purple/10 flex items-center justify-center gap-2">
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
