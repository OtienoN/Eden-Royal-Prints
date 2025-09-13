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
  { href: '/store', label: 'Order Now' },
  { href: '/contact', label: 'Contact' },
];

export const DETAILED_SERVICES = [
  {
    id: "design-printing",
    title: "Design & Printing Services",
    icon: "Palette" as const,
    description: "Professional printing and design services that make your brand stand out. From custom apparel to business materials, we bring your vision to life with royal quality.",
    items: [
      "Custom T-shirt Printing", "Business Cards Design & Print", "Posters & Banners",
      "Flyers & Brochures", "Letter Heads & Envelopes", "Stickers & Labels",
      "Calendars & Diaries", "Wedding Cards & Invitations", "Logo Design & Branding",
      "Vinyl Printing & Cutting", "Mug Printing & Branding", "Certificate Design & Print",
      "Menu Design & Printing", "ID Cards & Lanyards", "Notebook & Journal Printing",
      "Custom Packaging Design"
    ]
  },
  {
    id: "government-cyber",
    title: "Government & eCitizen Services",
    icon: "Landmark" as const,
    description: "Expert assistance with all government-related services and documentation. We help you navigate complex processes with ease and confidence.",
    items: [
      "KRA PIN Registration & Certificate", "HELB Application & Services", "TSC Registration & Services",
      "TIMS Tax Registration", "Good Conduct Certificate", "Passport Application Support",
      "NHIF Registration & Services", "NSSF Registration & Updates", "eCitizen Account Creation",
      "eCitizen Services Assistance", "Birth Certificate Application", "ID Card Replacement",
      "Marriage Certificate", "Business Registration Support", "NTSA Services & DL Application",
      "Job Application Assistance"
    ]
  },
  {
    id: "ict-digital",
    title: "ICT & Academic Services",
    icon: "Laptop" as const,
    description: "Comprehensive ICT solutions and academic support to help you succeed in the digital age. From applications to research assistance.",
    items: [
      "KUCCPS University Application", "TVET Institution Applications", "University Online Applications",
      "Scholarship Applications", "Plagiarism Detection & Checking", "CV Writing & Formatting",
      "Cover Letter Creation", "LinkedIn Profile Optimization", "Email Account Setup & Support",
      "eLearning Portal Support", "Online Course Registration", "Research Paper Formatting",
      "Thesis & Project Writing Support", "Data Analysis Assistance", "PowerPoint Presentations",
      "Academic Proposal Writing"
    ]
  },
  {
    id: "technical-repair",
    title: "Technical & Repair Services",
    icon: "Wrench" as const,
    description: "Professional technical support and repair services for all your electronic devices. Fast, reliable, and affordable solutions.",
    items: [
      "PC & Laptop Repair", "Software Installation & Setup", "Operating System Installation",
      "Virus Removal & Protection", "Hardware Upgrades", "Data Recovery Services",
      "Printer Repair & Maintenance", "Network Setup & Configuration", "Phone Screen Repair",
      "Phone Software Issues", "Computer Troubleshooting", "Internet Connectivity Issues",
      "System Optimization", "Backup Solutions Setup", "Remote Desktop Setup",
      "Technical Consultation"
    ]
  },
  {
    id: "digital-services",
    title: "Digital Services",
    icon: "Camera" as const,
    description: "Professional digital services for all your documentation and photography needs. High-quality results with quick turnaround times.",
    items: [
      "Passport Size Photo Shooting", "Document Scanning & Digitization", "Photo Printing (All Sizes)",
      "Photo Editing & Enhancement", "Document Email Services", "PDF Creation & Conversion",
      "Image Format Conversion", "Photo Background Removal", "CD/DVD Burning Services",
      "USB Flash Disk Setup", "Document Formatting", "Digital File Organization",
      "Cloud Storage Setup", "Digital Photo Albums", "Video File Conversion",
      "Digital Archiving Services"
    ]
  },
  {
    id: "cyber-services",
    title: "Cyber & Online Services",
    icon: "Globe" as const,
    description: "Complete cyber cafe services and online assistance. From typing to social media management, we've got you covered.",
    items: [
      "Professional Typing Services", "Proofreading & Editing", "Content Writing",
      "Translation Services", "Online Account Creation", "Social Media Setup",
      "Email Marketing Setup", "SMS Campaign Services", "Basic Transcription Services",
      "Data Entry Services", "Online Form Filling", "Website Content Upload",
      "Blog Post Writing", "Social Media Management", "Online Research Services",
      "Virtual Assistant Services"
    ]
  }
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

export const SERVICE_FEATURES = [
    { 
        title: 'Quick Turnaround', 
        description: 'Most services completed within 24 hours', 
        icon: 'Clock' as const
    },
    { 
        title: 'Quality Guarantee', 
        description: '100% satisfaction guarantee on all services', 
        icon: 'ShieldCheck' as const
    },
    { 
        title: 'Affordable Pricing', 
        description: 'Competitive rates without hidden costs', 
        icon: 'BadgeDollarSign' as const
    },
    { 
        title: 'Expert Support', 
        description: 'Professional guidance every step of the way', 
        icon: 'Headset' as const
    },
];

export const PRICING_TIERS = [
  {
    title: "Printing Services",
    items: [
      { name: "Business Cards", price: "From KSh 50 each" },
      { name: "T-shirt Printing", price: "From KSh 500" },
      { name: "Posters A4", price: "From KSh 100" },
      { name: "Flyers", price: "From KSh 20 each" },
    ]
  },
  {
    title: "Government Services",
    items: [
      { name: "KRA PIN", price: "KSh 200" },
      { name: "eCitizen Services", price: "From KSh 150" },
      { name: "TIMS Registration", price: "KSh 300" },
      { name: "Application Support", price: "From KSh 250" },
    ]
  },
  {
    title: "Digital & ICT",
    items: [
      { name: "CV Writing", price: "From KSh 500" },
      { name: "Typing", price: "KSh 50 per page" },
      { name: "Passport Photos", price: "KSh 200" },
      { name: "PC Repair", price: "From KSh 1000" },
    ]
  }
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
      { href: '/services#design-printing', label: 'T-shirt Printing' },
      { href: '/services#design-printing', label: 'Business Cards' },
      { href: '/services#government-cyber', label: 'eCitizen Services' },
      { href: '/services#ict-digital', label: 'Online Applications' },
      { href: '/services#technical-repair', label: 'PC Repairs' },
      { href: '/services#digital-services', label: 'Digital Photography' },
    ],
    'Support': [
        { href: '/contact', label: 'Contact Us' },
        { href: '/quote', label: 'Request a Quote' },
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

export const POPULAR_SERVICES_LINKS = [
    { name: 'Custom T-shirt Printing', href: '/services#design-printing' },
    { name: 'Business Card Design', href: '/services#design-printing' },
    { name: 'KRA PIN Registration', href: '/services#government-cyber' },
    { name: 'CV Writing & Formatting', href: '/services#ict-digital' },
    { name: 'Passport Photography', href: '/services#digital-services' },
    { name: 'eCitizen Services', href: '/services#government-cyber' },
]

export const QUICK_QUOTE_SERVICES = [
    // Design & Printing
    { value: 'tshirt-printing', label: 'Custom T-shirt Printing', price: 500 },
    { value: 'business-cards-100', label: 'Business Cards (100)', price: 1200 },
    { value: 'a4-poster', label: 'A4 Poster', price: 100 },
    { value: 'a5-flyer-single', label: 'A5 Flyer (single side)', price: 20 },
    { value: 'logo-design-basic', label: 'Logo Design (Basic)', price: 3000 },
    { value: 'mug-printing-regular', label: 'Mug Printing', price: 600 },
    { value: 'stickers-a4-sheet', label: 'Stickers (A4 sheet)', price: 300 },
    { value: 'wedding-card-simple', label: 'Wedding Card (Simple)', price: 150 },
    { value: 'id-card-pvc', label: 'ID Card (PVC)', price: 250 },

    // Government & eCitizen
    { value: 'kra-pin-reg', label: 'KRA PIN Registration', price: 200 },
    { value: 'helb-app-first-time', label: 'HELB Application (First time)', price: 500 },
    { value: 'good-conduct-app', label: 'Good Conduct Application', price: 300 },
    { value: 'ecitizen-service-basic', label: 'eCitizen Service (Basic)', price: 150 },
    { value: 'passport-app-support', label: 'Passport Application Support', price: 400 },
    { value: 'business-name-reg', label: 'Business Name Registration', price: 1500 },

    // ICT & Academic
    { value: 'kuccps-app', label: 'KUCCPS Application', price: 500 },
    { value: 'cv-writing-standard', label: 'CV Writing (Standard)', price: 500 },
    { value: 'plagiarism-check-per-paper', label: 'Plagiarism Check (per paper)', price: 300 },
    { value: 'thesis-writing-support', label: 'Thesis Writing Support (per hour)', price: 1000 },
    { value: 'cover-letter-writing', label: 'Cover Letter Writing', price: 300 },

    // Technical & Repair
    { value: 'pc-laptop-diagnosis', label: 'PC/Laptop Diagnosis', price: 500 },
    { value: 'software-install-basic', label: 'Software Installation (Basic)', price: 400 },
    { value: 'os-install-windows', label: 'OS Installation (Windows)', price: 1000 },
    { value: 'virus-removal', label: 'Virus Removal', price: 800 },
    { value: 'phone-screen-repair-quote', label: 'Phone Screen Repair (Quote)', price: 0 },

    // Digital Services
    { value: 'passport-photos-4', label: 'Passport Photos (4 copies)', price: 200 },
    { value: 'doc-scanning-per-page', label: 'Document Scanning (per page)', price: 10 },
    { value: 'photo-printing-4x6', label: 'Photo Printing (4x6)', price: 30 },
    { value: 'pdf-conversion-per-doc', label: 'PDF Conversion (per doc)', price: 50 },

    // Cyber & Online
    { value: 'typing-per-page', label: 'Typing (per page)', price: 50 },
    { value: 'data-entry-per-hour', label: 'Data Entry (per hour)', price: 500 },
    { value: 'online-form-filling', label: 'Online Form Filling', price: 200 },
    { value: 'social-media-setup', label: 'Social Media Setup (3 platforms)', price: 1500 },
];

export function findImage(id: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === id);
}
