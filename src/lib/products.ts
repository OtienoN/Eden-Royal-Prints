import { findImage } from './constants';

export type ProductOption = {
  label: string;
  values: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  imageId: string;
  category: string;
  options?: ProductOption[];
  galleryImageIds?: string[];
};

export const products: Product[] = [
  {
    id: 'prod_001',
    slug: 'custom-t-shirt',
    name: 'Custom T-Shirt',
    description: 'High-quality cotton t-shirts, fully customizable with your own design. Perfect for events, teams, or personal expression. Available in various sizes and colors.',
    price: 1500,
    imageId: 'product-tshirt',
    category: 'T-shirts',
    options: [
      { label: 'Size', values: ['S', 'M', 'L', 'XL', 'XXL'] },
      { label: 'Color', values: ['White', 'Black', 'Royal Blue', 'Red', 'Gray'] },
    ],
    galleryImageIds: ['gallery-1', 'product-tshirt']
  },
  {
    id: 'prod_002',
    slug: 'vinyl-banner',
    name: 'Vinyl Banner',
    description: 'Durable and weather-resistant vinyl banners for indoor or outdoor use. Ideal for advertising, events, and promotions. Comes with grommets for easy hanging.',
    price: 3000,
    imageId: 'product-banner',
    category: 'Banners',
    options: [
      { label: 'Size', values: ['2ft x 4ft', '3ft x 6ft', '4ft x 8ft'] },
    ],
    galleryImageIds: ['gallery-5', 'product-banner']
  },
  {
    id: 'prod_003',
    slug: 'business-cards',
    name: 'Business Cards',
    description: 'Premium business cards that make a lasting impression. Choose from a variety of paper stocks and finishes. Price is for a pack of 100.',
    price: 1200,
    imageId: 'product-business-card',
    category: 'Business Cards',
    options: [
      { label: 'Finish', values: ['Matte', 'Glossy'] },
      { label: 'Quantity', values: ['100', '250', '500'] },
    ],
    galleryImageIds: ['gallery-2', 'product-business-card']
  },
  {
    id: 'prod_004',
    slug: 'custom-mug',
    name: 'Custom Mug',
    description: 'Ceramic 11oz mugs with your logo, photo, or design. Dishwasher and microwave safe. A perfect gift or promotional item.',
    price: 800,
    imageId: 'product-mug',
    category: 'Mugs',
    galleryImageIds: ['gallery-6', 'product-mug']
  },
  {
    id: 'prod_005',
    slug: 'event-flyers',
    name: 'Event Flyers',
    description: 'A5 size full-color flyers to promote your event or business. High-quality print on glossy paper. Price is for a pack of 100.',
    price: 2500,
    imageId: 'product-flyer',
    category: 'Flyers',
     options: [
      { label: 'Paper Type', values: ['Glossy', 'Matte'] },
      { label: 'Quantity', values: ['100', '500', '1000'] },
    ],
  },
  {
    id: 'prod_006',
    slug: 'promotional-poster',
    name: 'Promotional Poster',
    description: 'A3 size posters for your promotions or events. Printed on high-quality paper for vibrant colors and sharp details.',
    price: 500,
    imageId: 'product-poster',
    category: 'Posters',
    options: [
      { label: 'Size', values: ['A3', 'A2', 'A1'] },
    ],
    galleryImageIds: ['gallery-3', 'product-poster']
  },
];

export const productCategories = [
    "All",
    ...Array.from(new Set(products.map(p => p.category)))
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
