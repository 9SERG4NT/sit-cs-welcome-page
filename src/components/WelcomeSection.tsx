import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Users, Trophy, Briefcase, BookOpen, Medal } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import DirectorDesk from "./DirectorDesk";
import FacultySection from "./FacultySection";

const WelcomeSection = () => {
  useEffect(() => {
    // Welcome message using internal JavaScript
    console.log("%c🎓 SIT Nagpur CS Department - Student Portal", "color: #dc2626; font-size: 16px; font-weight: bold;");
    console.log("Welcome to the interactive student information system!");
    
    // Display welcome alert
    setTimeout(() => {
      alert("Welcome to Symbiosis Institute of Technology Nagpur!\n\nExplore our Computer Science Department portal to learn about our programs, faculty, and student services.");
    }, 1000);
  }, []);

  const features = [
    {
      icon: Code,
      title: "Cutting-edge Curriculum",
      description: "Industry-aligned courses covering the latest technologies and programming languages",
      highlight: "100% Updated Syllabus"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professors with industry and research backgrounds",
      highlight: "PhD Qualified Faculty"
    },
    {
      icon: Trophy,
      title: "Excellence in Research",
      description: "Active research projects and publications in top-tier conferences",
      highlight: "50+ Research Papers"
    },
    {
      icon: Briefcase,
      title: "Industry Partnerships",
      description: "Strong connections with leading tech companies for internships and placements",
      highlight: "95% Placement Rate"
    }
  ];

  const quickLinks = [
    { title: "Academic Programs", icon: BookOpen, path: "/courses", color: "bg-primary" },
    { title: "Sports Corner", icon: Medal, path: "/sports", color: "bg-accent" },
    { title: "Student Information", icon: Users, path: "/student-info", color: "bg-secondary" }
  ];

  return (
    <main className="bg-gradient-hero">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-display">
            Welcome to Excellence in 
            <span className="text-primary block mt-2">Computer Science Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our prestigious Computer Science Department and embark on a journey of innovation, 
            discovery, and technological excellence. Shape the future with cutting-edge knowledge and skills.
          </p>
          
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <Card className="group hover:shadow-elevated transition-all duration-300 cursor-pointer bg-card">
                  <CardContent className="p-6 text-center">
                    <div className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <link.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
                <div className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-semibold">
                  {feature.highlight}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Faculty Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
        </div>
      </div>
      
      {/* Director's Desk */}
      <DirectorDesk />
      
      {/* Faculty Section */}
      <FacultySection />
    </main>
  );
};

export default WelcomeSection;