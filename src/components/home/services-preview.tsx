import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DETAILED_SERVICES } from "@/lib/constants";

export function ServicesPreview() {
  const servicesToShow = DETAILED_SERVICES.slice(0, 3);
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Premium Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprehensive solutions for all your printing, digital, and business needs
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {servicesToShow.map((service) => {
            const Icon = LucideIcons[service.icon];
            return (
              <Card key={service.title} className="flex flex-col text-center items-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                   <Button asChild variant="secondary">
                      <Link href={`/services#${service.id}`}>Learn More</Link>
                   </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
