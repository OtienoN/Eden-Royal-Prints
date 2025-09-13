"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { placeOrder, type CheckoutState } from "./actions";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";

const initialState: CheckoutState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" size="lg" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Placing Order..." : "Place Order"}
    </Button>
  );
}

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const placeOrderWithCart = placeOrder.bind(null, cartItems);
  const [state, formAction] = useFormState(placeOrderWithCart, initialState);

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/store');
    }
    if (state.message) {
        toast({
            title: "Success!",
            description: state.message,
        });
        clearCart();
    } else if (state.errors) {
        toast({
            title: "Error",
            description: "Please correct the errors in the form.",
            variant: "destructive"
        })
    }
  }, [state, toast, clearCart, cartItems, router]);


  return (
    <form action={formAction}>
      <div className="container py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Shipping & Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" />
                    {state?.errors?.firstName && <p className="text-sm text-destructive">{state.errors.firstName[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" />
                     {state?.errors?.lastName && <p className="text-sm text-destructive">{state.errors.lastName[0]}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" />
                   {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" />
                   {state?.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" />
                   {state?.errors?.address && <p className="text-sm text-destructive">{state.errors.address[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" />
                   {state?.errors?.city && <p className="text-sm text-destructive">{state.errors.city[0]}</p>}
                </div>
                <h3 className="text-lg font-semibold pt-4">Payment Method</h3>
                <RadioGroup name="paymentMethod">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mpesa" id="mpesa" />
                        <Label htmlFor="mpesa">M-Pesa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                    </div>
                </RadioGroup>
                {state?.errors?.paymentMethod && <p className="text-sm text-destructive">{state.errors.paymentMethod[0]}</p>}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center text-sm">
                    <p>{item.product.name} x {item.quantity}</p>
                    <p>KES {(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>KES {cartTotal.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8">
              <SubmitButton />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
