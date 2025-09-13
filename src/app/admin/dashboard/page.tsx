import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, GalleryHorizontal } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/admin/prices">
          <Card className="hover:bg-secondary transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Manage Prices
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Pricing</div>
              <p className="text-xs text-muted-foreground">
                Update service and product prices
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/gallery">
          <Card className="hover:bg-secondary transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Manage Gallery
              </CardTitle>
              <GalleryHorizontal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Gallery</div>
              <p className="text-xs text-muted-foreground">
                Add, edit, or remove gallery images
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
