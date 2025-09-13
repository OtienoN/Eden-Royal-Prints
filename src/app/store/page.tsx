import { products, productCategories } from "@/lib/products";
import { ProductCard } from "@/components/store/product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type StorePageProps = {
  searchParams: {
    category?: string;
  };
};

export default function StorePage({ searchParams }: StorePageProps) {
  const { category } = searchParams;

  const filteredProducts = category && category !== "All"
    ? products.filter(p => p.category === category)
    : products;

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Store</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse our collection of customizable products.
          </p>
        </div>
        
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
