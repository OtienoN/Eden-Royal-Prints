'use server';

/**
 * @fileOverview AI-powered service quote generator.
 *
 * - generateServiceQuote - A function that takes a service description and returns an estimated price quote.
 * - ServiceQuoteInput - The input type for the generateServiceQuote function.
 * - ServiceQuoteOutput - The return type for the generateServiceQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceQuoteInputSchema = z.object({
  serviceDescription: z
    .string()
    .describe('A detailed description of the branding, screen printing, cyber, or graphic design service requested.'),
});
export type ServiceQuoteInput = z.infer<typeof ServiceQuoteInputSchema>;

const ServiceQuoteOutputSchema = z.object({
  estimatedPrice: z
    .string()
    .describe('The estimated price quote for the requested service, including currency (KES).'),
  breakdown: z
    .string()
    .describe('A breakdown of the estimated price, including labor, materials, and other costs.'),
});
export type ServiceQuoteOutput = z.infer<typeof ServiceQuoteOutputSchema>;

export async function generateServiceQuote(input: ServiceQuoteInput): Promise<ServiceQuoteOutput> {
  return generateServiceQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceQuotePrompt',
  input: {schema: ServiceQuoteInputSchema},
  output: {schema: ServiceQuoteOutputSchema},
  prompt: `You are an expert pricing specialist for Eden Royal Digital Hub, a Kenyan company specializing in branding, screen printing, cyber services, and graphic design. Your task is to provide an accurate and competitive price quote based on the service description provided by the customer.

Service Description: {{{serviceDescription}}}

Consider the following factors when generating the quote:
*   The complexity of the service
*   The materials required
*   The labor involved
*   Market rates in Kenya
*   Eden Royal Digital Hub's pricing strategy

Provide the estimated price in Kenyan Shillings (KES) and include a detailed breakdown of the costs.
`,
});

const generateServiceQuoteFlow = ai.defineFlow(
  {
    name: 'generateServiceQuoteFlow',
    inputSchema: ServiceQuoteInputSchema,
    outputSchema: ServiceQuoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

    