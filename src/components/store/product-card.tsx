"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { findImage } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = findImage(product.imageId);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Link href={`/store/products/${product.slug}`}>
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            {image && (
              <Image
                src={image.imageUrl}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="pt-4 flex-1">
        <Link href={`/store/products/${product.slug}`}>
          <CardTitle className="text-lg hover:text-primary">{product.name}</CardTitle>
        </Link>
        <p className="mt-2 text-2xl font-bold text-primary">
          KES {product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
