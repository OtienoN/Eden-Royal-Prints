"use client";

import { useActionState, useFormStatus } from "react";
import { useEffect } from "react";
import { getQuote, type QuoteState } from "@/app/quote/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Wand2, Loader2, ServerCrash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialState: QuoteState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Wand2 className="mr-2 h-4 w-4" />
      )}
      {pending ? "Generating Quote..." : "Generate Instant Quote"}
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useActionState(getQuote, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.quote) {
        toast({
            title: "Success",
            description: state.message,
        });
    } else if (state.message && !state.quote) {
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
        });
    }
  }, [state, toast]);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <form action={formAction}>
        <Card>
          <CardHeader>
            <CardTitle>Request a Quote</CardTitle>
            <CardDescription>
              Describe the service you need, and our AI will generate an
              estimated price for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="serviceDescription">Service Description</Label>
                <Textarea
                  id="serviceDescription"
                  name="serviceDescription"
                  placeholder="e.g., 'I need 100 A5 flyers designed and printed for a marketing event. The design should be modern and colorful...'"
                  rows={8}
                />
                {state?.errors?.serviceDescription && (
                  <p className="text-sm text-destructive mt-1">
                    {state.errors.serviceDescription[0]}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>

      <Card>
        <CardHeader>
          <CardTitle>Your Estimated Quote</CardTitle>
          <CardDescription>
            The price estimate will appear here once generated.
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-[240px]">
          {state.quote ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Estimated Price</h3>
                <p className="text-3xl font-bold text-primary">{state.quote.estimatedPrice}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Breakdown</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{state.quote.breakdown}</p>
              </div>
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 rounded-lg bg-secondary">
                {state.message && !state.quote ? (
                    <>
                        <ServerCrash className="h-12 w-12 mb-4" />
                        <p className="font-semibold">Quote Generation Failed</p>
                        <p className="text-sm">{state.message}</p>
                    </>
                ) : (
                    <>
                        <Wand2 className="h-12 w-12 mb-4" />
                        <p>Your quote will be displayed here.</p>
                    </>
                )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
