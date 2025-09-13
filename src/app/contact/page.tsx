import Image from "next/image";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACT_DETAILS, findImage } from "@/lib/constants";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  const mapImage = findImage('map-placeholder');

  return (
    <>
      <div className="container py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We're here to help. Contact us with any questions or to start your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="flex items-start gap-4 group">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">Phone</h3>
                    <p className="text-muted-foreground">{CONTACT_DETAILS.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="flex items-start gap-4 group">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">Email</h3>
                    <p className="text-muted-foreground">{CONTACT_DETAILS.email}</p>
                  </div>
                </a>
                <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">WhatsApp</h3>
                    <p className="text-muted-foreground">Chat with us</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>
                    <p className="text-muted-foreground">{CONTACT_DETAILS.openingHours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {mapImage && (
        <div className="w-full h-[400px] relative">
            <Image
                src={mapImage.imageUrl}
                alt="Our Location"
                fill
                className="object-cover"
                data-ai-hint={mapImage.imageHint}
            />
        </div>
      )}
    </>
  );
}
