import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-networking.jpg";

const HeroSection = () => {
  return (
    <section className="bg-subtle-gradient py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect. 
                <span className="text-primary"> Grow. </span>
                <span className="text-accent">Succeed.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join the premier professional network where opportunities meet ambition. 
                Build meaningful connections, showcase your expertise, and accelerate your career.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Join Now <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">10M+</div>
                <div className="text-sm text-muted-foreground">Professionals</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Building2 className="text-accent" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Job Opportunities</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img 
                src={heroImage} 
                alt="Professional networking and collaboration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;