"use client";

import { useState } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/lib/products";
import { findImage } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeImageId, setActiveImageId] = useState(product?.imageId || '');

  if (!product) {
    notFound();
  }
  
  const mainImage = findImage(activeImageId);
  const galleryImages = product.galleryImageIds?.map(id => findImage(id)).filter(Boolean) || [];
  if (galleryImages.length === 0 && product.imageId) {
    const productImage = findImage(product.imageId);
    if (productImage) galleryImages.push(productImage);
  }

  const handleOptionChange = (label: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [label]: value }));
  };

  const handleAddToCart = () => {
    // Basic validation
    if (product.options) {
      for (const option of product.options) {
        if (!selectedOptions[option.label]) {
          toast({
            title: `Please select ${option.label}`,
            variant: "destructive",
          });
          return;
        }
      }
    }
    addToCart(product, quantity, selectedOptions);
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <div className="aspect-square relative rounded-lg overflow-hidden border">
            {mainImage && (
              <Image
                src={mainImage.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint={mainImage.imageHint}
              />
            )}
          </div>
          <div className="grid grid-cols-5 gap-2 mt-4">
            {galleryImages.map((img, index) => img && (
              <button
                key={img.id + index}
                className={cn(
                  "aspect-square relative rounded-md overflow-hidden border-2",
                  activeImageId === img.id ? "border-primary" : "border-transparent"
                )}
                onClick={() => setActiveImageId(img.id)}
              >
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover"
                  data-ai-hint={img.imageHint}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold">{product.name}</h1>
          <p className="text-3xl font-bold text-primary">
            KES {product.price.toLocaleString()}
          </p>
          <p className="text-muted-foreground">{product.description}</p>
          
          <div className="space-y-4">
            {product.options?.map((option) => (
              <div key={option.label}>
                <Label className="text-base">{option.label}</Label>
                <Select onValueChange={(value) => handleOptionChange(option.label, value)}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder={`Select ${option.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {option.values.map(value => (
                       <SelectItem key={value} value={value}>{value}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Label>Quantity</Label>
            <div className="flex items-center gap-2 border rounded-md">
              <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button size="lg" className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
