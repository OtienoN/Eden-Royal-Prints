import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { findImage } from "@/lib/constants";

export function Hero() {
  const heroImage = findImage('hero-banner');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Quality Prints & Digital Solutions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            From stunning branding to flawless prints, we bring your vision to life.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/store">Order Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
