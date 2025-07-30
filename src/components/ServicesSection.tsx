import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import icons from lucide-react (not needed for images)
// Service images
import { SERVICES } from "@/constants/services";
import BookingForm from "./BookingForm";

const services = SERVICES;

const ServicesSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Medical Services Offered At Home
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            IllandPill offers a variety of healthcare services in the comfort of our 
            patient's homes including professional medical consultations, nursing care, 
            and specialized treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-center"
            >
              <CardContent className="p-6 flex flex-col items-center">
                <div className="mb-4 w-20 h-20 rounded-full border-4 border-primary bg-white overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-full"
                    onError={e => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = service.image;
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center">
                  {service.description}
                </p>
                <Button 
                  size="sm" 
                  className="w-full bg-primary text-white hover:bg-primary/90 transition-opacity rounded"
                  onClick={() => handleBookService(service.name)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <BookingForm 
        open={bookingOpen} 
        onOpenChange={setBookingOpen}
        service={selectedService}
      />
    </section>
  );
};

export default ServicesSection;