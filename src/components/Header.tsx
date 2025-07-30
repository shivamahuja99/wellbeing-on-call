import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import BookingForm from "./BookingForm";
import logo from "@/assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  console.log("Header component rendering");
  const [bookingOpen, setBookingOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}> 
          <div className="flex items-center space-x-1">
            {/* Logo Image */}
            <img
              src={logo}
              alt="IllandPill Logo"
              className="h-10 w-10 rounded-full border border-blue-200 bg-white shadow-sm hidden sm:block"
            />
            <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <div className="h-4 w-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              IllandPill
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent hidden sm:block tracking-wide drop-shadow">
              ILL AND PILL
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block -mt-1">
              A unit of healx aarogyam pvt. ltd.
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            type="button"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Our Services
          </button>
          <button
            type="button"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            onClick={() => {
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About Us
          </button>
          <a href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <a href="tel:+919654993383" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>+91 96549 93383</span>
          </a>
        </nav>

        {/* CTA and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="default" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            onClick={() => setBookingOpen(true)}
          >
            Book Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <BookingForm 
        open={bookingOpen} 
        onOpenChange={setBookingOpen}
        service="General Consultation"
      />
    </header>
  );
};

export default Header;