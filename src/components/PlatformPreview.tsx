import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Briefcase, MapPin, Calendar } from "lucide-react";

const PlatformPreview = () => {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Experience the platform in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our intuitive interface makes professional networking seamless and engaging.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Profile Preview */}
          <Card className="shadow-professional border-border">
            <CardHeader className="text-center pb-2">
              <div className="relative mx-auto mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://api.dicebear.com/7.x/professional/svg?seed=sarah" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Sarah Johnson</h3>
              <p className="text-lg text-primary font-medium">Senior Product Manager</p>
              <div className="flex items-center justify-center text-muted-foreground mt-2">
                <MapPin size={16} className="mr-1" />
                <span>San Francisco, CA</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                Passionate about building products that make a difference. 
                Leading cross-functional teams to deliver innovative solutions.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Product Management</Badge>
                <Badge variant="secondary">Strategy</Badge>
                <Badge variant="secondary">Leadership</Badge>
                <Badge variant="secondary">UX Design</Badge>
              </div>
              <div className="text-center pt-4">
                <Button variant="default" className="w-full">Connect</Button>
              </div>
            </CardContent>
          </Card>

          {/* Feed Preview */}
          <div className="space-y-6">
            <Card className="shadow-professional border-border">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarImage src="https://api.dicebear.com/7.x/professional/svg?seed=alex" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-foreground">Alex Mitchell</h4>
                      <Badge variant="outline" className="text-xs">Software Engineer</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar size={14} className="mr-1" />
                      <span>2 hours ago</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Excited to share that I've just completed my first open-source contribution to a major project! 
                  The journey of learning and collaborating with developers worldwide has been incredible. 
                  #OpenSource #Development #Growth
                </p>
                <div className="flex items-center space-x-6 pt-2 border-t border-border">
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <Heart size={18} />
                    <span>42</span>
                  </button>
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle size={18} />
                    <span>8</span>
                  </button>
                  <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                    <Share2 size={18} />
                    <span>Share</span>
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-professional border-border">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarImage src="https://api.dicebear.com/7.x/professional/svg?seed=techcorp" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-foreground">TechCorp Solutions</h4>
                      <Badge variant="outline" className="text-xs">Company</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Briefcase size={14} className="mr-1" />
                      <span>Job Posting</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Senior Full Stack Developer</h5>
                  <p className="text-muted-foreground">
                    Join our dynamic team building next-generation web applications. 
                    Remote-friendly position with competitive benefits.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Remote</Badge>
                </div>
                <Button variant="accent" className="w-full">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;