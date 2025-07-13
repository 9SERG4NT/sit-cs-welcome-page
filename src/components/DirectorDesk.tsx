import { User, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DirectorDesk = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Director's Desk</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <Card className="max-w-4xl mx-auto bg-card shadow-elevated">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <Quote className="h-8 w-8 text-primary mb-4 mx-auto md:mx-0" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  "At Symbiosis Institute of Technology Nagpur, we are committed to nurturing 
                  brilliant minds and fostering innovation. Our Computer Science department stands 
                  as a beacon of excellence, preparing students for the challenges of tomorrow's 
                  digital landscape through cutting-edge curriculum and industry partnerships."
                </p>
                
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-2xl font-bold text-foreground">Dr. Nitin Rakesh</h3>
                  <p className="text-primary font-semibold">Director</p>
                  <p className="text-muted-foreground">Symbiosis Institute of Technology, Nagpur</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DirectorDesk;