"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Wifi, Zap, Clock, Shield, Headphones, Download } from "lucide-react";

const features = [
  {
    title: "High-Speed Connectivity",
    description:
      "Experience blazing-fast internet speeds up to 200 Mbps for seamless streaming and gaming",
    icon: Wifi,
  },
  {
    title: "99.9% Uptime",
    description:
      "Reliable internet connection with guaranteed uptime for uninterrupted online activities",
    icon: Zap,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to assist you with any technical issues",
    icon: Headphones,
  },
  {
    title: "Unlimited Data",
    description:
      "True unlimited data with 1000GB FUP for all plans to support heavy internet usage",
    icon: Download,
  },
  {
    title: "Quick Installation",
    description:
      "Same-day installation service with professional setup and configuration",
    icon: Clock,
  },
  {
    title: "Secure Network",
    description:
      "Advanced security measures to protect your online activities and data",
    icon: Shield,
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Us?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experience the best internet service in Sangareddy with our
              premium features
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
