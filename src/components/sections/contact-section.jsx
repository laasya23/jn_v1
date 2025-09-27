import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react";
import { Card } from "../ui/card";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="px-4 mx-auto md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Get in touch with us for high-speed internet connectivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    <strong>Jabbar Network Solutions Private Limited</strong>
                    <br />
                    11-5, Pothireddypally X Road,
                    <br />
                    Sangareddy, Telangana 502295
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+919849532155"
                      className="hover:text-primary transition-colors"
                    >
                      +91 98495 32155
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:jnetworksbroadband@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      jnetworksbroadband@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageSquare className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="https://wa.me/919849532155"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      +91 98495 32155
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Sunday: 9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=J+Networks+Broadband&ie=UTF8&t=&z=18&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
