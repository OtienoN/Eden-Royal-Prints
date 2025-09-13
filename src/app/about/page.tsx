import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  COMPANY_NAME,
  CORE_VALUES_V2,
  TEAM_MEMBERS,
  findImage,
} from '@/lib/constants';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '5000+', label: 'Happy Customers' },
  { value: '10000+', label: 'Projects Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24h', label: 'Average Turnaround' },
];

export default function AboutPage() {
  const officeImage = findImage('about-office');

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            About <span className="text-accent">Eden Royal Prints</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            Excellence, innovation, and royal quality in every service we
            provide
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="prose lg:prose-lg max-w-none text-muted-foreground">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Story
              </h2>
              <p>
                Founded with a vision to revolutionize the printing and digital
                services industry in Kenya, Eden Royal Prints and Color
                Solutions has grown from a small startup to a trusted partner
                for businesses, individuals, and organizations across the
                country.
              </p>
              <p>
                What began as a passion for quality printing has evolved into a
                comprehensive suite of services that includes digital printing,
                branding, ICT solutions, government services assistance, and
                professional cyber services. Our journey has been marked by
                continuous innovation, customer satisfaction, and an unwavering
                commitment to excellence.
              </p>
              <p>
                Today, we stand as a beacon of quality and reliability in the
                industry, having served thousands of satisfied customers who
                trust us with their most important projects.
              </p>
            </div>
            <div>
              {officeImage && (
                <Image
                  src={officeImage.imageUrl}
                  alt="Our office workspace"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  data-ai-hint={officeImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Our Foundation
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <LucideIcons.Goal className="h-8 w-8" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide exceptional printing, digital, and ICT services
                  that exceed customer expectations while building lasting
                  relationships through quality, innovation, and integrity.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <LucideIcons.Eye className="h-8 w-8" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be Kenya's leading provider of comprehensive printing and
                  digital solutions, known for our royal quality, innovative
                  services, and customer-centric approach.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <LucideIcons.Heart className="h-8 w-8" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Excellence in every project, integrity in every interaction,
                  innovation in every solution, and customer satisfaction as
                  our ultimate goal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              What Sets Us Apart
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our core values in action
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {CORE_VALUES_V2.map((value) => {
              const Icon = LucideIcons[value.icon];
              return (
                <div key={value.name} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{value.name}</h3>
                    <p className="text-muted-foreground mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The passionate professionals behind Eden Royal Prints
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                      className="w-40 h-40 rounded-full mx-auto mt-6 object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-primary">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Customers Choose Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Numbers that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Experience the Royal Treatment?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
            Join our family of satisfied customers and discover why Eden Royal
            Prints is Kenya's trusted choice for printing and digital services.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link href="/store">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
