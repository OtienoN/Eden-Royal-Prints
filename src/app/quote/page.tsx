import { QuoteForm } from "@/components/quote/quote-form";

export default function QuotePage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI-Powered Service Quoter</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Get an instant price estimate for our services using our intelligent quoting tool.
        </p>
      </div>

      <QuoteForm />
    </div>
  );
}
