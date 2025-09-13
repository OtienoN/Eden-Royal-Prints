import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Frown } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-15rem)] items-center justify-center text-center">
        <div>
            <Frown className="h-32 w-32 mx-auto text-muted-foreground" />
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">404 - Page Not Found</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <Button asChild className="mt-8">
                <Link href="/">Go back home</Link>
            </Button>
        </div>
    </div>
  )
}
