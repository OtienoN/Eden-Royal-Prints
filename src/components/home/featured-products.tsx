import { ProductCard } from "@/components/store/product-card";
import { products } from "@/lib/products";

export function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Check out some of our most popular items.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
