import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
    return (
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container text-center">
                <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
                    Join hundreds of satisfied customers who trust Eden Royal Digital Hub for their printing and digital needs.
                </p>
                <div className="mt-8 flex gap-4 justify-center flex-wrap">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/store">Place Your Order</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                        <Link href="/quote">Get a Quote</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

    