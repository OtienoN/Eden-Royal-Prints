"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user && !pathname.includes('/admin/login') && !pathname.includes('/admin/signup')) {
      router.push("/admin/login");
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin" />
      </div>
    );
  }

  if (!user && !pathname.includes('/admin/login') && !pathname.includes('/admin/signup')) {
    return null;
  }
  
  if (pathname.includes('/admin/login') || pathname.includes('/admin/signup')) {
      return <>{children}</>;
  }


  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-secondary/20">
        {children}
      </main>
    </div>
  );
}
