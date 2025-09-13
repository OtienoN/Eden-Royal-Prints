"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getGalleryImages, type GalleryImage } from '@/services/firestore';
import { Skeleton } from '../ui/skeleton';

export function GalleryPreview() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const allImages = await getGalleryImages();
      setImages(allImages.slice(0, 6)); // show only first 6
      setLoading(false);
    }
    fetchImages();
  }, []);

  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Work Speaks for Itself</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Take a look at some of our recent projects
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            Array.from({length: 6}).map((_, i) => (
                <Skeleton key={i} className="aspect-square w-full" />
            ))
          ) : (
            images.map((image) => (
                <Dialog key={image.id}>
                    <DialogTrigger asChild>
                        <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-lg font-semibold">{image.description}</p>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                        <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={1200}
                        height={800}
                        className="rounded-lg w-full h-auto object-contain"
                        />
                    </DialogContent>
                </Dialog>
            ))
          )}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
