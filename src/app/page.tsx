
import { BestSellingProducts } from "@/components/best-selling-products";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    
      <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      < BestSellingProducts/>
    </main>

  )
  

}