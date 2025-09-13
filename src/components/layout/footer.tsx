import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import * as LucideIcons from "lucide-react";

import {
  COMPANY_NAME,
  CONTACT_DETAILS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm max-w-xs">
              Your premier partner for printing, digital services, and ICT solutions in Kenya. Quality you can trust, service you can rely on.
            </p>
            <div className="flex gap-2 mt-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = LucideIcons[social.icon];
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      <Icon className="h-5 w-5 text-primary hover:text-accent" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold font-headline">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
             <h3 className="font-semibold font-headline">Contact Info</h3>
             <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>{CONTACT_DETAILS.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-primary">{CONTACT_DETAILS.phone}</a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-primary">{CONTACT_DETAILS.email}</a>
                </div>
                 <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>{CONTACT_DETAILS.openingHours}</span>
                </div>
             </div>
          </div>

        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
