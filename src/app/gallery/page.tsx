"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getGalleryImages, type GalleryImage } from "@/services/firestore";
import { Skeleton } from '@/components/ui/skeleton';


export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const imagesData = await getGalleryImages();
      setImages(imagesData);
      setLoading(false);
    }
    fetchImages();
  }, []);

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Our Work <span className="text-accent">Showcase</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
            A glimpse into the quality and creativity we bring to every project.
          </p>
        </div>
      </section>
      <div className="container py-12 md:py-24">
        {loading ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {Array.from({length: 8}).map((_, i) => (
                    <Skeleton key={i} className="h-64 w-full" />
                ))}
            </div>
        ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.map((image) => (
                <Dialog key={image.id}>
                <DialogTrigger asChild>
                    <div className="break-inside-avoid cursor-pointer group relative">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md w-full h-auto object-cover transition-opacity"
                      />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                        <p className="text-white text-lg font-semibold text-center p-4">{image.description}</p>
                    </div>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                    <DialogTitle>{image.description}</DialogTitle>
                    </DialogHeader>
                    <div className="relative mt-4">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={1200}
                        height={800}
                        className="rounded-lg w-full h-auto object-contain"
                    />
                    </div>
                </DialogContent>
                </Dialog>
            ))}
            {images.length === 0 && <p className="text-center w-full col-span-full">No gallery images found.</p>}
            </div>
        )}
      </div>
    </>
  );
}
