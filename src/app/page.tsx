import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CallToAction } from "@/components/home/call-to-action";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <CallToAction />
    </>
  );
}
