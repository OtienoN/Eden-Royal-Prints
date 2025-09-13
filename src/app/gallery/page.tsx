import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Work</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A glimpse into the quality and creativity we bring to every project.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {galleryImages.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <div className="break-inside-avoid cursor-pointer">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto object-cover hover:opacity-80 transition-opacity"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Project Showcase</DialogTitle>
                <DialogDescription>{image.description}</DialogDescription>
              </DialogHeader>
              <div className="relative mt-4">
                 <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={1200}
                  height={800}
                  className="rounded-lg w-full h-auto object-contain"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
