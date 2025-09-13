import Link from "next/link";
import { Suspense } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function ConfirmationContent({ searchParams }: { searchParams: { order?: string, name?: string }}) {
  const { order, name } = searchParams;

  return (
    <div className="container flex min-h-[calc(100vh-15rem)] items-center justify-center">
      <div className="max-w-md w-full text-center p-8 bg-card rounded-lg shadow-lg">
        <CheckCircle2 className="h-24 w-24 mx-auto text-green-500" />
        <h1 className="mt-8 text-3xl font-bold">Thank you, {name || 'Customer'}!</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your order has been placed successfully.
        </p>
        {order && (
          <p className="mt-2 text-muted-foreground">
            Your order number is: <span className="font-semibold text-primary">{order}</span>
          </p>
        )}
        <p className="mt-2 text-sm text-muted-foreground">
            You will receive an email confirmation shortly.
        </p>
        <Button asChild className="mt-8 w-full">
          <Link href="/store">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}

export default function ConfirmationPage({ searchParams }: { searchParams: { order?: string, name?: string }}) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfirmationContent searchParams={searchParams} />
        </Suspense>
    )
}
