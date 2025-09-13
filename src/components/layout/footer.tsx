import Link from "next/link";
import { Mail, Phone } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 md:col-span-4">
            <Logo />
            <p className="mt-4 text-sm max-w-xs">{COMPANY_NAME}</p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>{CONTACT_DETAILS.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>{CONTACT_DETAILS.email}</span>
              </a>
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
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
          <div className="flex gap-2">
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
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
