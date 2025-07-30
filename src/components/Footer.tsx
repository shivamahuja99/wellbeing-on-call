import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";

const Footer = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookService = (serviceName) => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <Heart className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xl font-bold">IllandPill</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Quality medical care delivered at the comfort of your home. 
              Making healthcare accessible, affordable, and accountable.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><button className="bg-transparent p-0 m-0 text-inherit hover:text-white transition-colors" style={{cursor: "pointer"}} onClick={() => handleBookService("Doctor Consultation")}>Doctor Consultation</button></li>
              <li><button className="bg-transparent p-0 m-0 text-inherit hover:text-white transition-colors" style={{cursor: "pointer"}} onClick={() => handleBookService("Nursing Care")}>Nursing Care</button></li>
              <li><button className="bg-transparent p-0 m-0 text-inherit hover:text-white transition-colors" style={{cursor: "pointer"}} onClick={() => handleBookService("Lab Tests")}>Lab Tests</button></li>
              <li><button className="bg-transparent p-0 m-0 text-inherit hover:text-white transition-colors" style={{cursor: "pointer"}} onClick={() => handleBookService("Physiotherapy")}>Physiotherapy</button></li>
              <li><button className="bg-transparent p-0 m-0 text-inherit hover:text-white transition-colors" style={{cursor: "pointer"}} onClick={() => handleBookService("Elder Care")}>Elder Care</button></li>
              <li><button className="bg-transparent p-0 m-0 text-inherit hover:text-white transition-colors" style={{cursor: "pointer"}} onClick={() => handleBookService("Medical Equipment")}>Medical Equipment</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 96549 93383</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>connect@illandpill.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <a
                  href="https://www.google.com/maps/place/M3m+65th+Avenue/@28.405648,77.0632704,17z/data=!3m1!4b1!4m6!3m5!1s0x390d226651e7ca9b:0x67b528c6b42beac0!8m2!3d28.405648!4d77.0658453!16s%2Fg%2F11f3cthc0p?coh=219816&entry=tts&g_ep=EgoyMDI0MDgwNy4wKgBIAVAD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  M3m 65th Avenue (Google Maps)
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 IllandPill. All rights reserved. Made with ❤️ for better healthcare.</p>
        </div>
      </div>
      <BookingForm 
        open={bookingOpen} 
        onOpenChange={setBookingOpen}
        service={selectedService}
      />
    </footer>
  );
};

export default Footer;