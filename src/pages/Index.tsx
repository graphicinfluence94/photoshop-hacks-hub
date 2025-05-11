
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductGrid from "@/components/ProductGrid";
import TikTokCTA from "@/components/TikTokCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <ProductGrid />
        <TikTokCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
