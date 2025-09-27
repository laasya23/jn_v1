"use client"

import { Navbar } from "@/components/navbar"
import { OTTPlansDetailed } from "@/components/plans/ott-plans-detailed"

export default function OTTPlansPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="py-16 px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Broadband Plus OTT Combo
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Stream your favorite content with our premium OTT packages
            </p>
          </div>
          <OTTPlansDetailed />
        </div>
      </main>
    </>
  )
}