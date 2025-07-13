import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, BookOpen } from "lucide-react";

const FacultySection = () => {
  const faculty = [
    {
      name: "Dr. Priya Sharma",
      domain: "Artificial Intelligence & Machine Learning",
      email: "priya.sharma@sit.edu.in",
      experience: "15+ years",
      specialization: ["Deep Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      name: "Prof. Rajesh Kumar",
      domain: "Software Engineering & Database Systems",
      email: "rajesh.kumar@sit.edu.in", 
      experience: "12+ years",
      specialization: ["Software Architecture", "Database Design", "System Analysis"]
    },
    {
      name: "Dr. Anita Desai",
      domain: "Data Structures & Algorithms",
      email: "anita.desai@sit.edu.in",
      experience: "10+ years", 
      specialization: ["Algorithm Design", "Competitive Programming", "Data Analytics"]
    },
    {
      name: "Prof. Vikram Singh",
      domain: "Network Security & Cybersecurity",
      email: "vikram.singh@sit.edu.in",
      experience: "14+ years",
      specialization: ["Ethical Hacking", "Cryptography", "Network Protocols"]
    },
    {
      name: "Dr. Meera Patel",
      domain: "Web Technologies & Cloud Computing",
      email: "meera.patel@sit.edu.in",
      experience: "8+ years",
      specialization: ["Cloud Architecture", "DevOps", "Microservices"]
    },
    {
      name: "Prof. Suresh Gupta",
      domain: "Mobile App Development & IoT", 
      email: "suresh.gupta@sit.edu.in",
      experience: "11+ years",
      specialization: ["Android Development", "IoT Systems", "Embedded Programming"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Faculty</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet our distinguished faculty members who bring years of industry and academic experience 
            to shape the next generation of computer science professionals.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <User className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                <p className="text-primary font-semibold">{member.domain}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{member.email}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm">{member.experience}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Specializations:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialization.map((spec, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;