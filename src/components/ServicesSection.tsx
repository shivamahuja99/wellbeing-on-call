import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Thermometer, 
  UserCheck, 
  Activity,
  Shield,
  Users
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Consultation",
    description: "Expert medical consultations from certified doctors at your doorstep"
  },
  {
    icon: Heart,
    title: "Nursing Care",
    description: "Professional nursing services for post-operative and chronic care"
  },
  {
    icon: Baby,
    title: "Mother & Baby Care",
    description: "Specialized care for new mothers and newborn babies"
  },
  {
    icon: Thermometer,
    title: "Lab Tests",
    description: "Comprehensive diagnostic tests and health screenings at home"
  },
  {
    icon: UserCheck,
    title: "Physiotherapy",
    description: "Expert physiotherapy sessions for recovery and rehabilitation"
  },
  {
    icon: Activity,
    title: "Elder Care",
    description: "Compassionate care services for senior citizens"
  },
  {
    icon: Shield,
    title: "Medical Equipment",
    description: "Rent or purchase medical equipment and devices"
  },
  {
    icon: Users,
    title: "Trained Attendants",
    description: "Certified attendants for patient care and assistance"
  }
];

const ServicesSection = () => {
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
              className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-secondary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;