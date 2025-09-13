import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_NAME, CORE_VALUES, TEAM_MEMBERS, findImage } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About {COMPANY_NAME}</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Your trusted partner for professional printing, branding, cyber services, and design solutions in Kenya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">To deliver high-quality, affordable, and creative printing and branding solutions that empower businesses and individuals to stand out.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">To be a leading provider of innovative print, branding, and digital solutions in Kenya and beyond.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-center">Our Core Values</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value) => (
            <div key={value.name} className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">{value.name}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-center">Meet Our Team</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-muted-foreground">
          The passionate people behind our success.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member) => {
            const image = findImage(member.imageId);
            return (
              <Card key={member.name} className="overflow-hidden text-center">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-auto aspect-square object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary">{member.role}</p>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
