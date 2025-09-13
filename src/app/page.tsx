import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { FeaturedProducts } from "@/components/home/featured-products";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}
