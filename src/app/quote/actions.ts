"use server";

import { generateServiceQuote } from "@/ai/flows/service-quote-generator";
import { z } from "zod";

const quoteSchema = z.object({
  serviceDescription: z.string().min(20, "Please provide a more detailed description."),
});

export type QuoteState = {
  message?: string;
  quote?: {
    estimatedPrice: string;
    breakdown: string;
  };
  errors?: {
    serviceDescription?: string[];
  };
};

export async function getQuote(
  prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  const validatedFields = quoteSchema.safeParse({
    serviceDescription: formData.get("serviceDescription"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
    };
  }

  try {
    const quote = await generateServiceQuote({
      serviceDescription: validatedFields.data.serviceDescription,
    });
    return {
      message: "Quote generated successfully!",
      quote,
    };
  } catch (error) {
    return {
      message: "An error occurred while generating the quote. Please try again later.",
    };
  }
}
