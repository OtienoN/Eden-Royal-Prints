"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { submitOrder, type OrderState } from "@/app/store/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Paperclip } from "lucide-react";
import { DETAILED_SERVICES } from "@/lib/constants";

const initialState: OrderState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Submitting..." : "Submit Order Request"}
    </Button>
  );
}

const serviceOptions: Record<string, string[]> = {
  "design-printing": DETAILED_SERVICES.find(s => s.id === 'design-printing')?.items || [],
  "government-cyber": DETAILED_SERVICES.find(s => s.id === 'government-cyber')?.items || [],
  "ict-digital": DETAILED_SERVICES.find(s => s.id === 'ict-digital')?.items || [],
  "technical-repair": DETAILED_SERVICES.find(s => s.id === 'technical-repair')?.items || [],
  "digital-services": DETAILED_SERVICES.find(s => s.id === 'digital-services')?.items || [],
  "cyber-services": DETAILED_SERVICES.find(s => s.id === 'cyber-services')?.items || [],
};


export function OrderForm() {
  const [state, formAction] = useActionState(submitOrder, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [specificServices, setSpecificServices] = useState<string[]>([]);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    if (state.message && state.errors) {
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive"
        })
    } else if (state.message) {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
      setSelectedCategory("");
    }
  }, [state, toast]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSpecificServices(serviceOptions[value] || []);
  };

  const getError = (fieldName: keyof NonNullable<OrderState['errors']>) => {
    return state.errors?.[fieldName]?.[0];
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">Personal Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" required />
                {getError("fullName") && <p className="text-sm text-destructive">{getError("fullName")}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" required />
                 {getError("email") && <p className="text-sm text-destructive">{getError("email")}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" required />
                {getError("phone") && <p className="text-sm text-destructive">{getError("phone")}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location/Address</Label>
                <Input id="location" name="location" placeholder="For delivery purposes" />
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">Service Category</h4>
            <div className="space-y-2">
              <Label htmlFor="serviceCategory">Select Service Category *</Label>
              <Select name="serviceCategory" required onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your service" />
                </SelectTrigger>
                <SelectContent>
                  {DETAILED_SERVICES.map(service => (
                    <SelectItem key={service.id} value={service.id}>{service.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
               {getError("serviceCategory") && <p className="text-sm text-destructive">{getError("serviceCategory")}</p>}
            </div>
            {selectedCategory && (
              <div className="space-y-2 mt-4">
                <Label htmlFor="specificService">Specific Service</Label>
                 <Select name="specificService">
                    <SelectTrigger>
                        <SelectValue placeholder="Select specific service" />
                    </SelectTrigger>
                    <SelectContent>
                        {specificServices.map(service => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
              </div>
            )}
          </div>
          
          {/* Project Details */}
          <div>
             <h4 className="mb-4 text-lg font-semibold text-primary">Project Details</h4>
             <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="projectTitle">Project Title</Label>
                    <Input id="projectTitle" name="projectTitle" placeholder="Brief title for your project" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea id="description" name="description" placeholder="Describe your project requirements, specifications, colors, sizes, quantities, etc..." required rows={5}/>
                    {getError("description") && <p className="text-sm text-destructive">{getError("description")}</p>}
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input id="quantity" name="quantity" type="number" min="1" placeholder="e.g., 50" />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="size">Size/Dimensions</Label>
                        <Input id="size" name="size" placeholder="e.g., A4, Large, XL" />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="colors">Colors</Label>
                        <Input id="colors" name="colors" placeholder="e.g., Red, Blue, Multi-color" />
                     </div>
                 </div>
             </div>
          </div>

          {/* File Upload Section */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">File Upload</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="files">Upload Files (Optional)</Label>
                <Input id="files" name="files" type="file" multiple accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.ai,.psd" />
                <p className="text-xs text-muted-foreground">Supported formats: JPG, PNG, PDF, DOC, DOCX, AI, PSD (Max 10MB per file)</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fileDescription">File Description</Label>
                <Textarea id="fileDescription" name="fileDescription" placeholder="Describe the uploaded files or provide special instructions..." rows={2} />
              </div>
            </div>
          </div>


           {/* Timeline and Delivery */}
           <div>
            <h4 className="mb-4 text-lg font-semibold text-primary">Timeline & Delivery</h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="deadline">Required Completion Date</Label>
                    <Input id="deadline" name="deadline" type="date" min={minDate} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select name="urgency" defaultValue="standard">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="standard">Standard (2-3 days)</SelectItem>
                            <SelectItem value="urgent">Urgent (24 hours) - +30% fee</SelectItem>
                            <SelectItem value="express">Express (Same day) - +50% fee</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
             </div>
             <div className="space-y-2 mt-4">
                <Label htmlFor="deliveryMethod">Delivery Method</Label>
                <Select name="deliveryMethod" defaultValue="pickup">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pickup">Pick up from our office (Free)</SelectItem>
                        <SelectItem value="delivery-siaya">Delivery within Siaya (Quote on request)</SelectItem>
                        <SelectItem value="delivery-outskirts">Delivery outside Siaya (Quote on request)</SelectItem>
                        <SelectItem value="courier">Courier service (Customer pays)</SelectItem>
                    </SelectContent>
                </Select>
             </div>
           </div>

            {/* Additional Information */}
            <div>
                 <h4 className="mb-4 text-lg font-semibold text-primary">Additional Information</h4>
                 <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range (Optional)</Label>
                        <Select name="budget">
                            <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="under-1000">Under KSh 1,000</SelectItem>
                                <SelectItem value="1000-5000">KSh 1,000 - 5,000</SelectItem>
                                <SelectItem value="5000-10000">KSh 5,000 - 10,000</SelectItem>
                                <SelectItem value="10000-25000">KSh 10,000 - 25,000</SelectItem>
                                <SelectItem value="over-25000">Over KSh 25,000</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="specialInstructions">Special Instructions</Label>
                        <Textarea id="specialInstructions" name="specialInstructions" rows={3} placeholder="Any special requirements, preferences, or notes for your order..." />
                     </div>
                     <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" name="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm font-normal">Subscribe to our newsletter for updates and special offers</Label>
                    </div>
                 </div>
            </div>

          <SubmitButton />
          <p className="text-xs text-muted-foreground text-center">
            By submitting this order, you agree to our terms and conditions. You will receive a quote within 2 hours during business hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
