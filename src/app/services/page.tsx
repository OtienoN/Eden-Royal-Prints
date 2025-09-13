
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DETAILED_SERVICES, SERVICE_FEATURES } from "@/lib/constants";
import { Check } from "lucide-react";
import { getServicesByCategory } from "@/services/firestore";
import type { PriceTiers } from "@/lib/constants";

async function PricingSection() {
    const printing = await getServicesByCategory('Printing');
    const government = await getServicesByCategory('Government');
    const ict = await getServicesByCategory('Digital & ICT');

    const pricingTiers = {
        "Printing Services": printing.map(s => ({ name: s.name, price: `From KES ${s.price}`})),
        "Government Services": government.map(s => ({ name: s.name, price: `From KES ${s.price}`})),
        "Digital & ICT": ict.map(s => ({ name: s.name, price: `From KES ${s.price}`}))
    } as PriceTiers;


    return (
        <section className="py-12 md:py-24 bg-secondary">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Transparent Pricing</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">No hidden fees, just honest pricing for quality services</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(pricingTiers).map(([title, items]) => (
                        <Card key={title}>
                            <CardHeader>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {items.slice(0, 4).map(item => (
                                    <div key={item.name} className="flex justify-between">
                                        <span className="text-muted-foreground">{item.name}</span>
                                        <span className="font-semibold">{item.price}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <p className="text-sm text-muted-foreground">*Prices may vary based on specifications and requirements. Contact us for detailed quotes.</p>
                    <Button asChild className="mt-4">
                        <Link href="/quote">Get a Detailed Quote</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}


export default function ServicesPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Our <span className="text-accent">Premium Services</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
            Comprehensive solutions for all your printing, digital, and business needs
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-40 bg-secondary/80 backdrop-blur-sm py-4 border-b">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {DETAILED_SERVICES.map(service => (
                <Button key={service.id} asChild variant="outline" size="sm">
                  <a href={`#${service.id}`}>{service.title.split('&')[0]}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {DETAILED_SERVICES.map((service, index) => {
        const Icon = LucideIcons[service.icon];
        return (
          <section key={service.id} id={service.id} className={`py-12 md:py-20 scroll-mt-24 ${index % 2 === 1 ? 'bg-secondary' : ''}`}>
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                </div>
                <p className="mb-8 text-lg text-muted-foreground ml-16">{service.description}</p>
                
                <div className="ml-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                  {service.items.map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 ml-16 flex gap-4">
                  <Button asChild size="lg">
                    <Link href="/store">Order Now</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">Get Custom Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )
      })}
      
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose Our Services?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Experience the difference with Eden Royal Prints
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_FEATURES.map((reason) => {
              const Icon = LucideIcons[reason.icon];
              return (
                <div key={reason.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-muted-foreground">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PricingSection />

    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
            Choose from our comprehensive range of services and experience the royal treatment.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link href="/store">Place Your Order</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Get a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
