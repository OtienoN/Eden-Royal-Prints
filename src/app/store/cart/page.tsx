"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { findImage } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="container py-24 text-center">
        <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
        <h1 className="mt-8 text-3xl font-bold">Your Cart is Empty</h1>
        <p className="mt-4 text-lg text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-8">
          <Link href="/store">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] hidden md:table-cell">Image</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Remove</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map(item => {
                    const image = findImage(item.product.imageId);
                    return (
                      <TableRow key={item.product.id}>
                        <TableCell className="hidden md:table-cell">
                          {image && <Image src={image.imageUrl} alt={item.product.name} width={64} height={64} className="rounded-md" />}
                        </TableCell>
                        <TableCell>
                          <p className="font-medium">{item.product.name}</p>
                          <div className="text-sm text-muted-foreground">
                            {item.options && Object.entries(item.options).map(([key, value]) => (
                              <p key={key}>{key}: {value}</p>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 border rounded-md w-28">
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          KES {(item.product.price * item.quantity).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                            <Trash2 className="h-5 w-5 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>KES {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-muted-foreground">Calculated at checkout</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>KES {cartTotal.toLocaleString()}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <Link href="/store/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
