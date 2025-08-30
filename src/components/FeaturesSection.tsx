import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, MessageSquare, BarChart3, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Professional Networking",
    description: "Connect with industry leaders, peers, and potential collaborators to expand your professional network globally."
  },
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description: "Discover exclusive job openings, apply directly through the platform, and get noticed by top recruiters."
  },
  {
    icon: MessageSquare,
    title: "Real-time Messaging",
    description: "Communicate instantly with your connections through our secure messaging system with file sharing capabilities."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your profile performance, post engagement, and networking growth with detailed insights and metrics."
  },
  {
    icon: Award,
    title: "Skills & Endorsements",
    description: "Showcase your expertise, receive endorsements from colleagues, and validate your professional capabilities."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with professionals worldwide, join industry groups, and participate in global conversations."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to advance your career
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and connections you need 
            to build a successful professional presence and grow your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;