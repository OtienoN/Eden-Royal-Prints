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

export const CORE_VALUES_V2 = [
    { name: 'Royal Quality', description: 'We use only the finest materials and latest technology to ensure every project meets the highest standards. Our quality control process guarantees exceptional results every time.', icon: 'Crown' as const },
    { name: 'Innovation', description: 'We continuously invest in cutting-edge technology and stay ahead of industry trends to provide our customers with the most advanced solutions available.', icon: 'Lightbulb' as const },
    { name: 'Integrity', description: 'Honesty, transparency, and ethical business practices are at the core of everything we do. We build trust through consistent, reliable service.', icon: 'Handshake' as const },
    { name: 'Reliability', description: 'When you choose Eden Royal Prints, you choose dependability. We deliver on time, every time, without compromising on quality or service.', icon: 'Clock' as const },
    { name: 'Customer Focus', description: 'Your success is our success. We listen to your needs, understand your goals, and tailor our services to exceed your expectations.', icon: 'Users' as const },
    { name: 'Sustainability', description: 'We\'re committed to environmental responsibility, using eco-friendly materials and processes wherever possible to minimize our environmental impact.', icon: 'Leaf' as const },
];


export const TEAM_MEMBERS = [
    { 
        name: 'Nicholas Otieno Ooko', 
        role: 'Founder & CEO', 
        imageId: 'team-member-1',
        bio: 'Visionary leader with 10+ years of experience in printing and digital services. Passionate about innovation and customer satisfaction.'
    },
    { 
        name: 'Emily Ogola', 
        role: 'Creative Director', 
        imageId: 'team-member-2',
        bio: 'Award-winning designer specializing in branding and visual communication. Brings creativity and technical expertise to every project.'
    },
    { 
        name: 'David Odhiambo', 
        role: 'Technical Director', 
        imageId: 'team-member-3',
        bio: 'ICT specialist and technical expert ensuring all our digital services and equipment operate at peak performance.'
    },
];

export const TESTIMONIALS = [
    {
        quote: "Exceptional service! They printed 200 custom T-shirts for our event and the quality was outstanding. Fast delivery and professional team.",
        name: "Sarah Wanjiku",
        company: "Event Organizer",
    },
    {
        quote: "Eden Royal Prints helped me with my TIMS registration and business cards. Professional, efficient, and very reasonable prices. Highly recommended!",
        name: "John Kamau",
        company: "Small Business Owner",
    },
    {
        quote: "Their ICT services are top-notch. They helped with my university application and CV writing. The team is knowledgeable and very helpful.",
        name: "Juliet Awino",
        company: "Student",
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
    phone: '+254100663729',
    email: 'edenroyalprints@gmail.com',
    whatsapp: 'https://wa.me/254100663729',
    address: 'Ugunja, Siaya, Kenya',
    openingHours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
};

export function findImage(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === id);
}
