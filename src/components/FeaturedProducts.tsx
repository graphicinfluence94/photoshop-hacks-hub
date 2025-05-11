
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Ultimate Design Asset Bundle",
      description: "1000+ high-quality brushes, textures, and presets for professional design work.",
      image: "/placeholder.svg",
      price: "$49.99",
      affiliate: "https://example.com/product1"
    },
    {
      id: 2,
      title: "Photoshop Masterclass 2023",
      description: "Learn advanced techniques from industry professionals with this comprehensive course.",
      image: "/placeholder.svg",
      price: "$89.99",
      affiliate: "https://example.com/product2"
    },
    {
      id: 3,
      title: "Premium Preset Collection",
      description: "Save hours with these one-click professional photo editing presets.",
      image: "/placeholder.svg",
      price: "$29.99",
      affiliate: "https://example.com/product3"
    }
  ];

  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Featured Products</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          These are my top recommended tools and resources that I personally use and love.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-brand-purple/20">
              <div className="aspect-video w-full bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{product.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg text-brand-purple">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-purple hover:bg-brand-purpleDark flex items-center justify-center gap-2">
                  <span>Get Deal</span>
                  <ExternalLink size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
