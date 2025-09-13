import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { COMPANY_NAME, APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${COMPANY_NAME} - Premium Printing & Digital Services`,
  description: 'Your one-stop solution for digital printing, branding, design, and cyber services in Kenya. Quality printing and professional ICT services.',
  keywords: "printing services Kenya, T-shirt printing, digital printing, branding, cyber services, business cards, posters, ICT services, graphic design",
  authors: [{ name: COMPANY_NAME }],
  openGraph: {
    title: `${COMPANY_NAME} - Premium Printing & Digital Services`,
    description: 'Your one-stop solution for digital printing, branding, design, and cyber services in Kenya. Quality printing and professional ICT services.',
    type: 'website',
    url: 'https://edenroyalprints.co.ke', // TODO: Replace with actual URL
    images: [{ url: '/logo-og.jpg' }], // TODO: Add logo-og.jpg to /public
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_NAME,
    description: 'Premium printing, branding, and digital services in Kenya',
    images: ['/logo-og.jpg'], // TODO: Add logo-og.jpg to /public
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />

      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
      </body>
    </html>
  );
}
