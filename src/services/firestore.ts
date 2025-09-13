
"use server";

import { db } from "@/lib/firebase";
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
} from "firebase/firestore";
import { revalidatePath } from "next/cache";

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
  const serviceSnapshot = await getDocs(servicesCol);
  const serviceList = serviceSnapshot.docs.map(toService);
  return serviceList.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getServicesByCategory(category: string): Promise<Service[]> {
  const servicesCol = collection(db, "services");
  const q = query(servicesCol, where("category", "==", category));
  const serviceSnapshot = await getDocs(q);
  const serviceList = serviceSnapshot.docs.map(toService);
  return serviceList.sort((a, b) => a.name.localeCompare(b.name));
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
  revalidatePath("/store")
}

export async function updateService(
  id: string,
  service: { name: string; price: number; category: string }
) {
  const serviceRef = doc(db, "services", id);
  await updateDoc(serviceRef, service);
  revalidatePath("/admin/prices");
  revalidatePath("/services");
  revalidatePath("/store")
}

export async function deleteService(id: string) {
  await deleteDoc(doc(db, "services", id));
  revalidatePath("/admin/prices");
  revalidatePath("/services");
  revalidatePath("/store")
}
