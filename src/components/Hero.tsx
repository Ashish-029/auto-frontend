import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-automotive.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional automotive service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Car Care 
              <span className="bg-gradient-automotive bg-clip-text text-transparent"> Delivered</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Professional automotive service with expert technicians, latest equipment, 
              and genuine parts. We bring premium car care right to your doorstep.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="automotive" size="lg" className="text-lg px-8">
                Book Service Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Get Free Quote
              </Button>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                  <Shield className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold">Certified Experts</h3>
                  <p className="text-sm text-white/80">Professional technicians</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-automotive-orange/20 rounded-lg backdrop-blur-sm">
                  <Clock className="h-6 w-6 text-automotive-orange" />
                </div>
                <div>
                  <h3 className="font-semibold">Mobile Service</h3>
                  <p className="text-sm text-white/80">We come to you</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                  <Award className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-semibold">Genuine Parts</h3>
                  <p className="text-sm text-white/80">Quality guaranteed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats or additional content area */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose AutoMechanica?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Happy Customers</span>
                  <span className="text-2xl font-bold text-automotive-orange">10,000+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Expert Technicians</span>
                  <span className="text-2xl font-bold text-primary-glow">50+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Service Locations</span>
                  <span className="text-2xl font-bold text-automotive-orange">25+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/90">Years Experience</span>
                  <span className="text-2xl font-bold text-primary-glow">15+</span>
                </div>
              </div>
              
              <Button variant="hero" className="w-full mt-6">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;