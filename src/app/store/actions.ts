"use server";

import { z } from "zod";

const orderSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("A valid email is required."),
  phone: z.string().min(10, "A valid phone number is required."),
  location: z.string().optional(),
  serviceCategory: z.string().min(1, "Please select a service category."),
  specificService: z.string().optional(),
  projectTitle: z.string().optional(),
  description: z.string().min(20, "Please provide a detailed description."),
  quantity: z.string().optional(),
  size: z.string().optional(),
  colors: z.string().optional(),
  fileDescription: z.string().optional(),
  deadline: z.string().optional(),
  urgency: z.string().optional(),
  deliveryMethod: z.string().optional(),
  budget: z.string().optional(),
  specialInstructions: z.string().optional(),
  newsletter: z.string().optional(),
});

export type OrderState = {
  message?: string;
  errors?: {
    [key: string]: string[] | undefined;
  };
};

export async function submitOrder(
  prevState: OrderState,
  formData: FormData
): Promise<OrderState> {
  const validatedFields = orderSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    serviceCategory: formData.get("serviceCategory"),
    specificService: formData.get("specificService"),
    projectTitle: formData.get("projectTitle"),
    description: formData.get("description"),
    quantity: formData.get("quantity"),
    size: formData.get("size"),
    colors: formData.get("colors"),
    fileDescription: formData.get("fileDescription"),
    deadline: formData.get("deadline"),
    urgency: formData.get("urgency"),
    deliveryMethod: formData.get("deliveryMethod"),
    budget: formData.get("budget"),
    specialInstructions: formData.get("specialInstructions"),
    newsletter: formData.get("newsletter"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form for errors."
    };
  }

  // In a real app, you would process the order:
  // - Save to database
  // - Handle file uploads
  // - Send confirmation emails
  // - etc.
  console.log("New Order Submitted:", validatedFields.data);

  return {
    message: "Thank you! Your order request has been submitted successfully. We will send a quote to your email shortly.",
  };
}
