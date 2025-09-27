import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Wifi, Zap, Download, Clock } from "lucide-react";
// Removed: import { BroadbandPlan, getBroadbandPlans } from "@/lib/firebase/plans";
// Removed: getBroadbandPlans import
const MOCK_BROADBAND_PLANS = [
  { id: 1, name: "Starter", monthly: 599, speed: "50 Mbps" },
  { id: 2, name: "Standard", monthly: 799, speed: "100 Mbps" },
  { id: 3, name: "Premium", monthly: 999, speed: "200 Mbps" },
];
const features = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Experience lightning-fast speeds with our fiber network",
  },
  {
    icon: Download,
    title: "Unlimited Data",
    description: "True unlimited with 1000GB FUP on all plans",
  },
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Reliable connection with minimal downtime",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance",
  },
];

export function BroadbandPlansDetailed() {
  // Removed explicit type annotations: useState<BroadbandPlan[]> -> useState([])
  const [broadbandPlans, setBroadbandPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function simulateFetchPlans() {
      try {
        // Simulate network delay
        setTimeout(() => {
          const plans = MOCK_BROADBAND_PLANS;
          setBroadbandPlans(plans);
          setError(null);

          if (plans.length > 0) {
            // Logic to find the lowest price remains the same
            const sortedPlans = [...plans].sort(
              (a, b) => a.monthly - b.monthly
            );
            setLowestPlanPrice(sortedPlans[0].monthly);
          }
          setLoading(false);
        }, 500); // 500ms delay to simulate loading
      } catch (e) {
        // This catch block is unlikely to be hit with local data, but kept for structure
        console.error("Error simulating plans fetch:", e);
        setError("Failed to load plans from mock data.");
        setLoading(false);
      }
    }

    simulateFetchPlans();
  }, []);

  return (
    <div className="space-y-12">
      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
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

      {/* Broadband Plans Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-x-auto">
            {loading ? (
              <p className="text-center py-4">Loading plans...</p>
            ) : error ? (
              <p className="text-center text-red-500 py-4">{error}</p>
            ) : (
              <Table className="px-10">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/12">Plan</TableHead>
                    <TableHead className="w-1/12">Speed</TableHead>
                    <TableHead className="w-auto">Description</TableHead>
                    <TableHead className="w-1/12 text-right">Monthly</TableHead>
                    <TableHead className="w-1/12 text-right">
                      Half Yearly
                    </TableHead>
                    <TableHead className="w-1/12 text-right">Yearly</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {broadbandPlans.map((plan) => {
                    // Define classes based on the speed to highlight certain plans
                    let highlightClass = "";

                    if (plan.speed === 50) {
                      // highlightClass = "bg-yellow-100 hover:scale-105 font-bold px-4";
                    } else if (plan.speed === 40 || plan.speed === 75) {
                      // highlightClass = "bg-yellow-50";
                    }

                    return (
                      <TableRow
                        key={plan.id || plan.name}
                        className={`${highlightClass} transition-transform`}
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            {Wifi && <Wifi className="h-4 w-4 text-primary" />}
                            {plan.name}
                          </div>
                        </TableCell>
                        <TableCell>{plan.speed} Mbps</TableCell>
                        <TableCell>{plan.description}</TableCell>
                        <TableCell className="text-right">
                          {plan.monthly && plan.monthly > 0
                            ? `₹${plan.monthly}`
                            : "NA"}
                        </TableCell>
                        <TableCell className="text-right">
                          {plan.halfYearly && plan.halfYearly > 0
                            ? `₹${plan.halfYearly}`
                            : "NA"}
                        </TableCell>
                        <TableCell className="text-right">
                          {plan.yearly && plan.yearly > 0
                            ? `₹${plan.yearly}`
                            : "NA"}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="font-semibold">Additional Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Badge variant="secondary">FUP</Badge>
              1000GB data limit applicable for all plans
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Corporate</Badge>
              ILL & Corporate Plans available on request
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="secondary">Setup</Badge>
              One-time installation and WiFi router charges apply as per
              location
            </li>
            <li className="flex items-center gap-2">
              <Badge variant="destructive">Notice</Badge>
              Prices listed are applicable to Sangareddy town only. Prices for
              rural areas may vary based on location and feasibility.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
