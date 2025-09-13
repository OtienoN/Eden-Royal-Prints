"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboard, DollarSign, GalleryHorizontal, LogOut } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "../logo";

const navLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/prices", label: "Prices", icon: DollarSign },
  { href: "/admin/gallery", label: "Gallery", icon: GalleryHorizontal },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      router.push("/admin/login");
    } catch (error: any) {
      toast({
        title: "Logout Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <aside className="w-64 bg-background border-r flex flex-col">
      <div className="p-4 border-b">
        <Logo />
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link key={link.href} href={link.href}>
              <Button
                variant={pathname.startsWith(link.href) ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Icon className="mr-2 h-4 w-4" />
                {link.label}
              </Button>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
