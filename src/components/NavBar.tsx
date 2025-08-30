import { Button } from "@/components/ui/button";
import { Users, Briefcase, MessageSquare, Bell } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-primary">CareerNexus</div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Users size={20} />
                <span>Network</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Briefcase size={20} />
                <span>Jobs</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <MessageSquare size={20} />
                <span>Messages</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
                <Bell size={20} />
                <span>Notifications</span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;