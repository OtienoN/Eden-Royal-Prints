import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { findImage } from "@/lib/constants";

export function Hero() {
  const heroImage = findImage('hero-banner');

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Your Premier Partner in <span className="text-accent">Printing & Digital Solutions</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
          From stunning T-shirt prints to professional business cards, from government services to cutting-edge ICT solutions - we bring your ideas to life with royal quality and precision.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <Link href="/store">Start Your Order</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
