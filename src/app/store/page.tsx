import { OrderForm } from "@/components/store/order-form";
import { OrderSidebar } from "@/components/store/order-sidebar";

const OrderProcessSteps = () => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold tracking-tight">Simple 3-Step Process</h2>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
      From order to delivery in just a few clicks
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground mb-4 font-bold text-2xl">
          1
        </div>
        <h4 className="text-xl font-semibold">Fill Order Form</h4>
        <p className="text-muted-foreground mt-1">
          Provide project details and upload files
        </p>
      </div>
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground mb-4 font-bold text-2xl">
          2
        </div>
        <h4 className="text-xl font-semibold">Get Quote & Confirm</h4>
        <p className="text-muted-foreground mt-1">
          Receive instant quote and confirm order
        </p>
      </div>
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground mb-4 font-bold text-2xl">
          3
        </div>
        <h4 className="text-xl font-semibold">Receive Your Order</h4>
        <p className="text-muted-foreground mt-1">
          Pick up or get delivery at your location
        </p>
      </div>
    </div>
  </div>
);

export default function OrderPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Place Your <span className="text-accent">Order</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
            Fast, easy, and secure ordering process. Get your project started in
            minutes!
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary">
        <div className="container">
          <OrderProcessSteps />
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <OrderForm />
            </div>
            <div>
              <OrderSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
