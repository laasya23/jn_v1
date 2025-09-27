"use client";

import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    avatar: "RK",
    rating: 5,
    review:
      "Best internet service provider in Sangareddy! The connection is super stable and customer service is excellent.",
    date: "2 months ago",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    review:
      "Upgraded from another ISP to J Networks and the difference is night and day. Amazing speeds and great value for money.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    avatar: "MA",
    rating: 5,
    review:
      "Been using their service for over a year now. The technical team is very responsive and helpful.",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Lakshmi Reddy",
    avatar: "LR",
    rating: 4,
    review:
      "Very satisfied with the internet speed and reliability. The OTT package is a great addition.",
    date: "1 week ago",
  },
];

export function ReviewsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
          {reviews.map((review) => (
            <Card key={review.id} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarFallback>{review.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-semibold leading-none">{review.name}</p>
                  <div className="flex items-center pt-2 space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.review}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {review.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
