"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Wifi, Tv } from "lucide-react";

const MOCK_BROADBAND_PLANS = [
  { id: 1, name: "Starter", monthly: 599, speed: "50 Mbps" },
  { id: 2, name: "Standard", monthly: 799, speed: "100 Mbps" },
  { id: 3, name: "Premium", monthly: 999, speed: "200 Mbps" },
];

export function PlansSection() {
  const [broadbandPlans, setBroadbandPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lowestPlanPrice, setLowestPlanPrice] = useState(300);

  useEffect(() => {
    function simulateFetchPlans() {
      try {
        setTimeout(() => {
          const plans = MOCK_BROADBAND_PLANS;
          setBroadbandPlans(plans);
          setError(null);

          if (plans.length > 0) {
            const sortedPlans = [...plans].sort(
              (a, b) => a.monthly - b.monthly
            );
            setLowestPlanPrice(sortedPlans[0].monthly);
          }
          setLoading(false);
        }, 500);
      } catch (e) {
        console.error("Error simulating plans fetch:", e);
        setError("Failed to load plans from mock data.");
        setLoading(false);
      }
    }

    simulateFetchPlans();
  }, []);

  return (
    <div id="plans" className="w-full py-16 bg-background">
      <div className="mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            High-speed internet plans with unlimited data and premium OTT
            services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Broadband Plans",
              description: loading
                ? "Loading..."
                : error
                ? "Unable to load broadband plans."
                : `High-speed internet plans starting from ₹${lowestPlanPrice}/month`,
              icon: Wifi,
              features: [
                "Speeds up to 200 Mbps",
                "Unlimited Data with 1000GB FUP",
                "Seamless Setup Experience",
                "24/7 Support",
              ],
              href: "",
              // href: "/plans/broadband",
            },
            {
              title: "Broadband Plus OTT Combo",
              description:
                "High-speed broadband bundled with premium OTT entertainment.",
              icon: Tv,
              features: [
                "Up to 24 Premium Apps",
                "Popular Platforms",
                "Multiple Devices",
                "HD & 4K Content",
              ],
              href: "",
              // href: "/plans/ott",
            },
          ].map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="relative overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={category.href}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
