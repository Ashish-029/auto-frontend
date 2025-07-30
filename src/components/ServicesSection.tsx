import ServiceCard from "./ServiceCard";
import { Zap, Wrench, Sparkles, Search } from "lucide-react";
import diagnosticsImage from "@/assets/diagnostics-service.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";
import detailingImage from "@/assets/detailing-service.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Diagnostics",
      description: "Advanced diagnostic services using state-of-the-art equipment to identify and resolve vehicle issues quickly and accurately.",
      image: diagnosticsImage,
      features: [
        "Computer diagnostics",
        "Engine analysis",
        "Electrical system check",
        "Performance optimization",
        "Error code scanning"
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Maintenance",
      description: "Comprehensive maintenance services to keep your vehicle running smoothly and extend its lifespan with genuine parts.",
      image: maintenanceImage,
      features: [
        "Oil change & filter replacement",
        "Brake service & inspection",
        "Battery & electrical",
        "Tire rotation & alignment",
        "Periodic maintenance"
      ]
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Detailing",
      description: "Premium car detailing services to restore and maintain your vehicle's appearance with professional-grade products.",
      image: detailingImage,
      features: [
        "Interior deep cleaning",
        "Exterior wash & wax",
        "Paint protection",
        "Ceramic coating",
        "Upholstery treatment"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-automotive bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive automotive services delivered by certified technicians 
            using the latest equipment and genuine parts for optimal performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Call-to-action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Need Emergency Service?</h3>
            <p className="text-xl mb-6 text-white/90">
              24/7 roadside assistance and emergency automotive services available
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-automotive-orange hover:bg-automotive-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Call Emergency: +91 *********
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;