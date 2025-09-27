"use client";

import { Navbar } from "../../../src/components/navbar-section";
import { BroadbandPlansDetailed } from "../../../src/components/plans/broadband-plans-detailed";

export default function BroadbandPlansPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="py-16 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Broadband Plans
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Choose from our range of high-speed internet plans with unlimited
              data
            </p>
          </div>
          <BroadbandPlansDetailed />
        </div>
      </main>
    </>
  );
}
