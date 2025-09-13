"use server";

import { redirect } from 'next/navigation';
import { z } from "zod";

const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "A valid phone number is required."),
  address: z.string().min(5, "Address is required."),
  city: z.string().min(2, "City is required."),
  paymentMethod: z.enum(["mpesa", "card"], {
    required_error: "Please select a payment method.",
  }),
});

export type CheckoutState = {
  message?: string;
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    address?: string[];
    city?: string[];
    paymentMethod?: string[];
  };
};

export async function placeOrder(
  cartItems: any, // In a real app, you would pass and validate cart items
  prevState: CheckoutState,
  formData: FormData
): Promise<CheckoutState> {
  const validatedFields = checkoutSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    paymentMethod: formData.get("paymentMethod"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // In a real app, you would:
  // 1. Recalculate the total to prevent client-side price manipulation.
  // 2. Process payment via a payment gateway.
  // 3. Save the order to your database.
  // 4. Send a confirmation email.
  console.log("Order placed:", validatedFields.data);
  console.log("Cart items:", cartItems);

  // For this demo, we'll just redirect to a confirmation page.
  // We'll pass some info in the URL, which is NOT secure for real applications.
  const orderNumber = `ERD-${Math.floor(Math.random() * 90000) + 10000}`;
  redirect(`/store/confirmation?order=${orderNumber}&name=${validatedFields.data.firstName}`);
}
