
"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CONTACT_DETAILS, POPULAR_SERVICES_LINKS } from '@/lib/constants';
import { Phone, MessageSquare, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { getServicesByCategory } from '@/services/firestore';
import type { Service } from '@/services/firestore';

function QuickPriceEstimate() {
    const [servicePrice, setServicePrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const [quoteServices, setQuoteServices] = useState<Service[]>([]);

    useEffect(() => {
        async function fetchServices() {
            const services = await getServicesByCategory('Quick Quote');
            setQuoteServices(services);
        }
        fetchServices();
    }, []);

    useEffect(() => {
        setTotal(servicePrice * quantity);
    }, [servicePrice, quantity]);

    const handleServiceChange = (value: string) => {
        const selected = quoteServices.find(s => s.name === value);
        setServicePrice(selected ? selected.price : 0);
    }
    
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>Quick Price Estimate</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Service Type</Label>
                        <Select onValueChange={handleServiceChange}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                                {quoteServices.map(s => (
                                    <SelectItem key={s.id} value={s.name}>{s.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="calc-quantity">Quantity</Label>
                        <Input 
                            id="calc-quantity" 
                            type="number" 
                            min="1" 
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                         />
                    </div>
                    <div className="bg-secondary p-4 rounded-md mt-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Estimated Total:</span>
                            <span className="text-primary font-bold text-lg">KES {total.toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">*Estimate only. Final price may vary.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

function NeedHelp() {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <a href={`tel:${CONTACT_DETAILS.phone}`} className="flex items-center gap-4 group">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">Call Us</h3>
                    <p className="text-sm text-muted-foreground">{CONTACT_DETAILS.phone}</p>
                  </div>
                </a>
                 <a href={CONTACT_DETAILS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <MessageSquare className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">Quick responses 24/7</p>
                  </div>
                </a>
                 <a href={`mailto:${CONTACT_DETAILS.email}`} className="flex items-center gap-4 group">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold group-hover:text-primary">Email</h3>
                    <p className="text-sm text-muted-foreground">{CONTACT_DETAILS.email}</p>
                  </div>
                </a>
            </CardContent>
        </Card>
    )
}

function PopularServices() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Popular Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {POPULAR_SERVICES_LINKS.map(service => (
                    <Link key={service.name} href={service.href} className="block text-sm text-primary hover:underline">
                        • {service.name}
                    </Link>
                ))}
                 <Button asChild className="w-full mt-4">
                    <Link href="/services">View All Services</Link>
                </Button>
            </CardContent>
        </Card>
    )
}

export function OrderSidebar() {
  return (
    <div className="space-y-6">
      <QuickPriceEstimate />
      <NeedHelp />
      <PopularServices />
    </div>
  );
}
