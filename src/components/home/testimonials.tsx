import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS, findImage } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are proud to have earned the trust of businesses and individuals across Kenya.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => {
            const image = findImage(testimonial.imageId);
            return (
              <Card key={testimonial.name}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="mt-4 flex items-center gap-4">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
