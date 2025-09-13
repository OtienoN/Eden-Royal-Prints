import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const APP_NAME = "Eden Royal Prints";
export const COMPANY_NAME = "Eden Royal Prints & Color Solutions";

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/store', label: 'Store' },
  { href: '/contact', label: 'Contact' },
];

export const SERVICES = [
  {
    title: 'Printing & Branding',
    description: 'High-quality printing for T-shirts, Flyers, Banners, Posters, and Business Cards.',
    icon: 'Printer' as const,
  },
  {
    title: 'Screen Printing',
    description: 'Custom screen printing for apparel and promotional materials with vibrant, durable inks.',
    icon: 'Shirt' as const,
  },
  {
    title: 'Cyber Café Services',
    description: 'KRA/HELB/TSC/TIMS services, CV writing, photocopying, scanning, laminating, and internet.',
    icon: 'Laptop' as const,
  },
  {
    title: 'Graphic Design & Logo Creation',
    description: 'Professional graphic design and unique logo creation to build your brand identity.',
    icon: 'Palette' as const,
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
        quote: "The quality of the business cards I ordered was exceptional. The team was professional and delivered on time. Highly recommended!",
        name: "Alice Johnson",
        company: "ABC Corp",
        imageId: "testimonial-1"
    },
    {
        quote: "Eden Royal designed our new logo and branding materials. Their creativity and attention to detail were outstanding. We've seen a huge improvement in our brand recognition.",
        name: "Mark Ochieng",
        company: "Ochieng & Sons Ltd.",
        imageId: "testimonial-2"
    },
    {
        quote: "Fast, reliable, and affordable cyber cafe services. They helped me with all my KRA filings smoothly. Will definitely be back!",
        name: "Sarah Wanjiru",
        company: "Individual",
        imageId: "testimonial-3"
    }
];

export const FOOTER_LINKS = {
    'Company': [
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/gallery', label: 'Gallery' },
    ],
    'Store': [
        { href: '/store', label: 'All Products' },
        { href: '/store/cart', label: 'My Cart' },
        { href: '/quote', label: 'Request a Quote' },
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
    phone: '+254 712 345 678',
    email: 'info@edenroyal.co.ke',
    whatsapp: 'https://wa.me/254712345678',
    address: 'Moi Avenue, Nairobi, Kenya',
};

export function findImage(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === id);
}
