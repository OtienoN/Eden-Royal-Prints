import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="p-6">
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-right">- {testimonial.name}, {testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
