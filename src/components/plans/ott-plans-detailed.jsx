"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tv, Smartphone, Laptop, Users, Wifi, Loader2 } from "lucide-react";
import Image from "next/image";
import { OTTPlan } from '@/lib/models/ott';
import { getOTTPlans } from '@/lib/firebase/ott';

const features = [
  {
    icon: Tv,
    title: "Multiple Platforms",
    description: "Access to popular OTT platforms",
  },
  {
    icon: Smartphone,
    title: "Device Compatibility",
    description: "Watch on TV, mobile, or laptop",
  },
  {
    icon: Users,
    title: "Multiple Profiles",
    description: "Create profiles for family members",
  },
  {
    icon: Laptop,
    title: "Offline Viewing",
    description: "Download content for offline access",
  },
];

const durationLabels = {
  "1M": "Monthly",
  "3M": "Quarterly",
  "6M": "Half Yearly",
  "1Y": "Yearly"
};

export function OTTPlansDetailed() {
  const [plans, setPlans] = useState<OTTPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const plansData = await getOTTPlans();
        setPlans(plansData);
      } catch (err) {
        setError("Failed to load plans. Please try again later.");
        console.error("Error fetching plans:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-24">
      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id}>
            <Card 
              className="relative cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPlan(plan.id || null)}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Tv className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{plan.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Premium Apps</h4>
                    <div className="flex flex-wrap gap-3">
                      {plan.premiumApps.map((app, index) => (
                        <div
                          key={index}
                          className="relative group"
                        >
                          <Image
                            src={app.logoPath}
                            alt={app.name}
                            width={40}
                            height={40}
                            className="object-contain rounded-md"
                          />
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {app.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Text for additional apps */}
                    <p className="mt-4 text-sm text-muted-foreground">
                      Plus {plan.nonPremiumApps.length} additional apps included
                    </p>
                  </div>

                  <button 
                    className="w-full py-2 px-4 bg-primary/10 rounded-lg text-primary text-sm hover:bg-primary/20 transition-colors"
                    onClick={() => setSelectedPlan(plan.id || null)}
                  >
                    See Plan Details & Pricing
                  </button>
                </div>
              </CardContent>
            </Card>

            <Dialog open={selectedPlan === plan.id} onOpenChange={() => setSelectedPlan(null)}>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">{plan.name}</h2>
                  
                  <div className="space-y-8">
                    {/* Broadband Plans */}
                    {plan.variants.map((variant, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Wifi className="h-5 w-5" />
                          {variant.speed} Mbps Plans
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {variant.prices.map((price) => (
                            <div 
                              key={price.duration}
                              className="p-4 rounded-lg border bg-card hover:border-primary transition-colors"
                            >
                              <div className="text-sm text-muted-foreground">
                                {durationLabels[price.duration]}
                              </div>
                              <div className="text-xl font-bold">
                                {price.price && price.price > 0 ? `₹${price.price}` : "NA"}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Apps Section */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Premium Apps Included</h3>
                      <div className="flex flex-wrap gap-4 mb-6">
                        {plan.premiumApps.map((app, index) => (
                          <div key={index} className="flex flex-col items-center gap-2">
                            <Image
                              src={app.logoPath}
                              alt={app.name}
                              width={60}
                              height={60}
                              className="object-contain rounded-md"
                            />
                            <span className="text-xs text-center">{app.name}</span>
                          </div>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold mb-4">Additional Apps Included</h3>
                      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
                        {plan.nonPremiumApps.map((app, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-2 h-full"
                          >
                            <Image
                              src={app.logoPath}
                              alt={app.name}
                              width={60} 
                              height={60}
                              className="object-contain rounded-md"
                            />
                            <span className="text-sm text-center">{app.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}