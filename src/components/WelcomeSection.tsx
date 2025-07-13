import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Code, Cpu, Database, Globe } from "lucide-react";

const WelcomeSection = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate();

  // Internal JavaScript - Welcome message animation
  useEffect(() => {
    const message = "Welcome to SIT Nagpur Computer Science Department! 🎓";
    let index = 0;
    
    const typeWriter = () => {
      if (index < message.length) {
        setWelcomeMessage(message.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 50);
      }
    };
    
    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, []);

  const programs = [
    {
      title: "B.Tech Computer Science",
      description: "4-year undergraduate program with modern curriculum",
      icon: Code,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "M.Tech CSE",
      description: "Advanced postgraduate studies in computer science",
      icon: Cpu,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Data Science",
      description: "Specialized courses in AI, ML, and Big Data",
      icon: Database,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Web Development",
      description: "Full-stack development and modern frameworks",
      icon: Globe,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        {/* Animated Welcome Message */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-4 min-h-[3rem]">
            {welcomeMessage}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of computer scientists and technology leaders through 
            innovative education, cutting-edge research, and industry collaboration.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${program.color} mb-4`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-card to-muted/20 border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our vibrant community of learners and discover endless possibilities in computer science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="academic" 
                  size="lg"
                  onClick={() => navigate("/student-info")}
                  className="px-8"
                >
                  Student Information Portal
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 hover:bg-primary hover:text-primary-foreground"
                >
                  Learn More About Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;