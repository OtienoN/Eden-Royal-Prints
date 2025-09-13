import Image from "next/image";
import Link from 'next/link';
import { Mail, MapPin, Phone, MessageCircle, Clock, CheckCircle, Car, Bus, Wheelchair } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACT_DETAILS, findImage, FAQS } from "@/lib/constants";
import { ContactForm } from "@/components/contact/contact-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContactPage() {

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
            Ready to bring your project to life? Contact us today for expert consultation and royal quality service
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Multiple ways to reach us for your convenience</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <Card>
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle>Visit Our Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CONTACT_DETAILS.address}</p>
                <Button asChild variant="secondary" className="mt-4">
                  <a href="#map">View on Map</a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CONTACT_DETAILS.phone}</p>
                <Button asChild variant="secondary" className="mt-4">
                  <a href={`tel:${CONTACT_DETAILS.phone}`}>Call Now</a>
                </Button>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CONTACT_DETAILS.email}</p>
                 <Button asChild variant="secondary" className="mt-4">
                  <a href={`mailto:${CONTACT_DETAILS.email}`}>Send Email</a>
                </Button>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{CONTACT_DETAILS.phone}</p>
                 <Button asChild variant="secondary" className="mt-4">
                  <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer">Chat Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <Card>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
               <div>
                  <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div>
                            <CardTitle>Operating Hours</CardTitle>
                            <p className="text-muted-foreground">We're here to serve you</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                       <ul className="space-y-3">
                            <li className="flex justify-between items-center py-2 border-b">
                                <span className="font-semibold">Monday - Friday</span>
                                <span className="text-primary font-medium">8:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b">
                                <span className="font-semibold">Saturday</span>
                                <span className="text-primary font-medium">9:00 AM - 4:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center py-2">
                                <span className="font-semibold">Sunday</span>
                                <span className="text-muted-foreground">Closed</span>
                            </li>
                        </ul>
                    </CardContent>
                  </Card>
               </div>
               <div>
                 <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                 <Card>
                    <CardContent className="pt-6">
                       <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-foreground">Quick Response:</strong> 
                                    <span className="text-muted-foreground"> We respond to all inquiries within 2 hours during business hours.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-foreground">Free Consultation:</strong> 
                                    <span className="text-muted-foreground"> Get expert advice for your project at no cost.</span>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-foreground">Transparent Pricing:</strong> 
                                    <span className="text-muted-foreground"> Clear, upfront pricing with no hidden fees.</span>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-foreground">Quality Guarantee:</strong> 
                                    <span className="text-muted-foreground"> 100% satisfaction guarantee on all our services.</span>
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                 </Card>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="map" className="py-12 md:py-24 scroll-mt-20">
        <div className="container">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Find Us Here</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Located in the heart of Ugunja for easy access</p>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.767597116236!2d34.2885260193132!3d0.1884144342550133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa46101f5756b%3A0x86a605bed4344799!2sUgunja!5e0!3m2!1sen!2ske!4v1689260000000!5m2!1sen!2ske"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
              <div>
                  <Car className="h-8 w-8 mx-auto text-primary mb-2" />
                  <h5 className="font-semibold mb-1">Parking Available</h5>
                  <p className="text-sm text-muted-foreground">Free parking for our customers</p>
              </div>
              <div>
                  <Bus className="h-8 w-8 mx-auto text-primary mb-2" />
                  <h5 className="font-semibold mb-1">Public Transport</h5>
                  <p className="text-sm text-muted-foreground">Easily accessible by matatu and bus</p>
              </div>
              <div>
                  <Wheelchair className="h-8 w-8 mx-auto text-primary mb-2" />
                  <h5 className="font-semibold mb-1">Accessible</h5>
                  <p className="text-sm text-muted-foreground">Wheelchair accessible entrance</p>
              </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary">
        <div className="container">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map(faq => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
           Don't wait! Contact us today and experience the royal treatment with your next printing or digital project.
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
              <a href={`tel:${CONTACT_DETAILS.phone}`}>Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
