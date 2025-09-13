import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

import {
  COMPANY_NAME,
  CONTACT_DETAILS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-blue-950 text-amber-400">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo className="text-white" />
            <p className="mt-4 max-w-xs text-sm">
              Your premier partner for printing, digital services, and ICT
              solutions in Kenya. Quality you can trust, service you can rely
              on.
            </p>
            <div className="mt-4 flex gap-2">
              {SOCIAL_LINKS.map(social => {
                const Icon = LucideIcons[social.icon];
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold font-headline text-white">
                {title}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map(link => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold font-headline text-white">
              Contact Info
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <span>{CONTACT_DETAILS.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 flex-shrink-0" />
                <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-white">
                  {CONTACT_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="hover:text-white"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 flex-shrink-0" />
                <span>{CONTACT_DETAILS.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-900 pt-8 text-center">
          <p className="text-sm text-amber-400/80">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
