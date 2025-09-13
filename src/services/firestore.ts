
"use server";

import { db, storage } from "@/lib/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  Timestamp,
  DocumentData,
  orderBy,
} from "firebase/firestore";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { revalidatePath } from "next/cache";

// Service Interface and Functions
export interface Service {
  id: string;
  name: string;
  price: number;
  category: string;
  createdAt: Timestamp;
}

function toService(doc: DocumentData): Service {
    const data = doc.data();
    return {
        id: doc.id,
        name: data.name,
        price: data.price,
        category: data.category,
        createdAt: data.createdAt,
    };
}

export async function getServices(): Promise<Service[]> {
  const servicesCol = collection(db, "services");
  const q = query(servicesCol, orderBy("name"));
  const serviceSnapshot = await getDocs(q);
  return serviceSnapshot.docs.map(toService);
}

export async function getServicesByCategory(category: string): Promise<Service[]> {
  const servicesCol = collection(db, "services");
  const q = query(servicesCol, where("category", "==", category), orderBy("name"));
  const serviceSnapshot = await getDocs(q);
  return serviceSnapshot.docs.map(toService);
}


export async function addService(service: {
  name: string;
  price: number;
  category: string;
}) {
  await addDoc(collection(db, "services"), {
    ...service,
    createdAt: Timestamp.now(),
  });
  revalidatePath("/admin/prices");
  revalidatePath("/services");
  revalidatePath("/store");
}

export async function updateService(
  id: string,
  service: { name: string; price: number; category: string }
) {
  const serviceRef = doc(db, "services", id);
  await updateDoc(serviceRef, service);
  revalidatePath("/admin/prices");
  revalidatePath("/services");
  revalidatePath("/store");
}

export async function deleteService(id: string) {
  await deleteDoc(doc(db, "services", id));
  revalidatePath("/admin/prices");
  revalidatePath("/services");
  revalidatePath("/store");
}


// Gallery Image Interface and Functions
export interface GalleryImage {
    id: string;
    description: string;
    imageUrl: string;
    storagePath: string;
    createdAt: Timestamp;
}

function toGalleryImage(doc: DocumentData): GalleryImage {
    const data = doc.data();
    return {
        id: doc.id,
        description: data.description,
        imageUrl: data.imageUrl,
        storagePath: data.storagePath,
        createdAt: data.createdAt
    };
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
    const imagesCol = collection(db, "galleryImages");
    const q = query(imagesCol, orderBy("createdAt", "desc"));
    const imageSnapshot = await getDocs(q);
    return imageSnapshot.docs.map(toGalleryImage);
}

export async function addGalleryImage({ description, file }: { description: string; file: File }) {
    // 1. Upload image to Firebase Storage
    const storagePath = `gallery/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, storagePath);
    await uploadBytes(storageRef, file);

    // 2. Get download URL
    const imageUrl = await getDownloadURL(storageRef);

    // 3. Add image metadata to Firestore
    await addDoc(collection(db, "galleryImages"), {
        description,
        imageUrl,
        storagePath,
        createdAt: Timestamp.now(),
    });

    revalidatePath("/admin/gallery");
    revalidatePath("/gallery");
    revalidatePath("/");
}

export async function deleteGalleryImage(image: GalleryImage) {
    // 1. Delete image from Firebase Storage
    const storageRef = ref(storage, image.storagePath);
    await deleteObject(storageRef);

    // 2. Delete image metadata from Firestore
    await deleteDoc(doc(db, "galleryImages", image.id));
    
    revalidatePath("/admin/gallery");
    revalidatePath("/gallery");
    revalidatePath("/");
}
