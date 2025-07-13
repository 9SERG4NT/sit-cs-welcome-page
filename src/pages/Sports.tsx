import DepartmentHeader from "@/components/DepartmentHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, MapPin, Users, Medal, Target } from "lucide-react";

const Sports = () => {
  const sportsActivities = [
    {
      name: "Cricket",
      category: "Team Sports",
      facilities: "Full-size cricket ground with practice nets",
      achievements: ["Inter-college Championship 2023", "University Level Semi-finals"],
      coach: "Prof. Rajesh Sharma"
    },
    {
      name: "Football",
      category: "Team Sports", 
      facilities: "FIFA standard football field",
      achievements: ["State Level Quarter-finals", "Regional Tournament Winners"],
      coach: "Mr. Vikram Singh"
    },
    {
      name: "Basketball",
      category: "Team Sports",
      facilities: "Indoor basketball court with modern equipment",
      achievements: ["University Championship Runners-up", "Inter-zone Champions"],
      coach: "Ms. Priya Patel"
    },
    {
      name: "Table Tennis",
      category: "Individual Sports",
      facilities: "4 professional table tennis tables",
      achievements: ["Individual State Champion", "Team District Champions"],
      coach: "Mr. Suresh Kumar"
    },
    {
      name: "Badminton", 
      category: "Individual Sports",
      facilities: "6 indoor badminton courts",
      achievements: ["University Singles Champion", "Doubles Regional Winners"],
      coach: "Ms. Anita Desai"
    },
    {
      name: "Athletics",
      category: "Track & Field",
      facilities: "400m track with field event areas",
      achievements: ["Multiple State Records", "National Level Participation"],
      coach: "Mr. Ramesh Gupta"
    }
  ];

  const upcomingEvents = [
    {
      event: "Inter-College Cricket Tournament",
      date: "March 15-20, 2024",
      venue: "SIT Sports Complex",
      participants: "16 Colleges"
    },
    {
      event: "Annual Sports Meet",
      date: "April 5-7, 2024", 
      venue: "Main Campus Ground",
      participants: "All Departments"
    },
    {
      event: "University Basketball Championship",
      date: "April 22-25, 2024",
      venue: "Indoor Sports Hall",
      participants: "8 Universities"
    }
  ];

  const facilities = [
    "Multi-purpose Indoor Sports Complex",
    "Olympic-size Swimming Pool",
    "Modern Gymnasium with Latest Equipment", 
    "Outdoor Sports Ground (15 acres)",
    "Yoga and Meditation Center",
    "Sports Medicine and Physiotherapy Center"
  ];

  return (
    <div className="min-h-screen bg-background">
      <DepartmentHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sports Corner</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Fostering excellence in sports alongside academic achievement. Building champions on and off the field.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
        </div>

        {/* Sports Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-primary" />
            Sports Activities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsActivities.map((sport, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">{sport.name}</CardTitle>
                    <Badge variant="secondary">{sport.category}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Facilities:</p>
                    <p className="text-muted-foreground text-sm">{sport.facilities}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Coach:</p>
                    <p className="text-primary text-sm">{sport.coach}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Recent Achievements:</p>
                    <div className="space-y-1">
                      {sport.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Medal className="h-3 w-3 text-accent" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-primary" />
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-muted/20 border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{event.event}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sports Facilities */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            World-Class Facilities
          </h2>
          
          <Card className="bg-gradient-to-r from-card to-muted/30">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{facility}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-l-primary">
                <h3 className="text-xl font-bold text-foreground mb-2">Sports Scholarship Program</h3>
                <p className="text-muted-foreground">
                  We offer merit-based sports scholarships to exceptional athletes. Our program supports 
                  students who excel in sports while maintaining academic standards, providing financial 
                  assistance and specialized training opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Sports;