import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <div className="container py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Comprehensive solutions for all your printing, design, and digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = LucideIcons[service.icon];
            return (
              <Card key={service.title} className="flex flex-col">
                <CardHeader className="items-center text-center">
                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl pt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Have a custom project in mind?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let our experts provide you with a detailed quote for your unique requirements.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/quote">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </>
  );
}
