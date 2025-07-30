import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quality Medical Care Delivered At{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                The Comfort of Your Home
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              IllandPill delivers quality care with compassion. We bring quality medical care 
              into our patients' homes and aim to make primary healthcare not only more 
              accessible but also more affordable and accountable to our patient's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 transition-transform hover:scale-105"
              >
                Book Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-medical">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl"></div>
              <img 
                src={heroImage} 
                alt="Professional healthcare provider" 
                className="w-full h-auto animate-float"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border animate-pulse-glow hidden lg:block">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Patients</div>
            </div>
            
            <div className="absolute bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border animate-pulse-glow hidden lg:block">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;