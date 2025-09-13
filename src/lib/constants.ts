import type { LucideIcon } from "lucide-react";
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const APP_NAME = "Eden Royal Prints";
export const COMPANY_NAME = "Eden Royal Prints and Color Solutions";

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/store', label: 'Store' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES: { title: string; description: string; icon: keyof typeof import("lucide-react") }[] = [
  {
    title: 'Design & Printing',
    description: 'Professional T-shirt printing, business cards, posters, flyers, and custom vinyl branding that makes your brand stand out.',
    icon: 'Palette',
  },
  {
    title: 'ICT & Digital Services',
    description: 'Complete ICT solutions including online applications, plagiarism detection, CV writing, and eLearning support.',
    icon: 'Laptop',
  },
  {
    title: 'Government & Cyber Services',
    description: 'Expert assistance with eCitizen, TIMS, TSC, NTSA services, plus typing, proofreading, and account creation.',
    icon: 'FileText',
  },
];


export const WHY_CHOOSE_US = [
    { 
        title: 'Royal Quality', 
        description: 'Premium materials and cutting-edge technology for exceptional results', 
        icon: 'Crown' as const
    },
    { 
        title: 'Fast Turnaround', 
        description: 'Quick delivery without compromising on quality', 
        icon: 'Clock' as const
    },
    { 
        title: 'Expert Team', 
        description: 'Skilled professionals dedicated to bringing your vision to life', 
        icon: 'Users' as const
    },
    { 
        title: 'Customer First', 
        description: 'Personalized service and support every step of the way', 
        icon: 'HeartHandshake' as const
    },
];

export const CORE_VALUES = [
    { name: 'Quality', description: 'We are committed to delivering the highest quality in every product and service.' },
    { name: 'Creativity', description: 'We foster a culture of creativity and innovation to bring your ideas to life.' },
    { name: 'Integrity', description: 'We conduct our business with honesty and transparency.' },
    { name: 'Customer Focus', description: 'Our customers are at the heart of everything we do.' },
    { name: 'Innovation', description: 'We constantly seek new and better ways to serve our clients.' },
];

export const TEAM_MEMBERS = [
    { 
        name: 'John Doe', 
        role: 'Founder & CEO', 
        imageId: 'team-member-1' 
    },
    { 
        name: 'Jane Smith', 
        role: 'Head of Design', 
        imageId: 'team-member-2'
    },
    { 
        name: 'Peter Jones', 
        role: 'Print Master', 
        imageId: 'team-member-3'
    },
];

export const TESTIMONIALS = [
    {
        quote: "Exceptional service! They printed 200 custom T-shirts for our event and the quality was outstanding. Fast delivery and professional team.",
        name: "Sarah Wanjiku",
        company: "Event Organizer",
        imageId: "testimonial-1"
    },
    {
        quote: "Eden Royal Prints helped me with my TIMS registration and business cards. Professional, efficient, and very reasonable prices. Highly recommended!",
        name: "John Kamau",
        company: "Small Business Owner",
        imageId: "testimonial-2"
    },
    {
        quote: "Their ICT services are top-notch. They helped with my university application and CV writing. The team is knowledgeable and very helpful.",
        name: "Juliet Awino",
        company: "Student",
        imageId: "testimonial-3"
    }
];

export const FOOTER_LINKS = {
    'Quick Links': [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/contact', label: 'Contact' },
        { href: '/store', label: 'Order Now'},
    ],
    'Our Services': [
      { href: '/services', label: 'T-shirt Printing' },
      { href: '/services', label: 'Business Cards' },
      { href: '/services', label: 'eCitizen Services' },
      { href: '/services', label: 'Online Applications' },
      { href: '/services', label: 'PC Repairs' },
      { href: '/services', label: 'Digital Photography' },
    ],
    'Support': [
        { href: '/contact', label: 'Contact Us' },
        { href: '/#faq', label: 'FAQ' }, // Example link, FAQ section not implemented yet
    ]
};

export const SOCIAL_LINKS = [
    { name: 'Facebook', icon: 'Facebook' as const, href: '#' },
    { name: 'Twitter', icon: 'Twitter' as const, href: '#' },
    { name: 'Instagram', icon: 'Instagram' as const, href: '#' },
    { name: 'Linkedin', icon: 'Linkedin' as const, href: '#' },
];

export const CONTACT_DETAILS = {
    phone: '+254748738932',
    email: 'edenroyalprints@gmail.com',
    whatsapp: 'https://wa.me/254100663729',
    address: 'Ugunja, Siaya, Kenya',
    openingHours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
};

export function findImage(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === id);
}
