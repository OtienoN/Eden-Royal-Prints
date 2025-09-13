import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

export function ServicesPreview() {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a wide range of professional services to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
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
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
