"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(2, "Subject is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactState = {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real app, you would send an email, save to a database, etc.
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
  };
}
