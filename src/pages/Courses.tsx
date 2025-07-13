import DepartmentHeader from "@/components/DepartmentHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Award, Users } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "B.Tech Computer Science & Engineering",
      duration: "4 Years",
      eligibility: "10+2 with PCM",
      seats: "120",
      semesters: [
        {
          sem: "Semester 1",
          subjects: ["Mathematics I", "Physics", "Chemistry", "Programming in C", "Engineering Graphics", "English Communication"]
        },
        {
          sem: "Semester 2", 
          subjects: ["Mathematics II", "Physics Lab", "Chemistry Lab", "Data Structures", "Digital Electronics", "Environmental Studies"]
        },
        {
          sem: "Semester 3",
          subjects: ["Mathematics III", "Object Oriented Programming", "Computer Organization", "Database Systems", "Operating Systems", "Software Engineering"]
        },
        {
          sem: "Semester 4",
          subjects: ["Mathematics IV", "Analysis of Algorithms", "Computer Networks", "Web Technologies", "Microprocessors", "Technical Communication"]
        },
        {
          sem: "Semester 5",
          subjects: ["Machine Learning", "Compiler Design", "Computer Graphics", "Artificial Intelligence", "Elective I", "Mini Project"]
        },
        {
          sem: "Semester 6",
          subjects: ["Data Mining", "Mobile Computing", "Cloud Computing", "Cybersecurity", "Elective II", "Major Project I"]
        },
        {
          sem: "Semester 7",
          subjects: ["Big Data Analytics", "IoT Systems", "Blockchain Technology", "Elective III", "Elective IV", "Major Project II"]
        },
        {
          sem: "Semester 8",
          subjects: ["Industry Training", "Capstone Project", "Elective V", "Elective VI", "Seminar", "Viva Voce"]
        }
      ]
    },
    {
      title: "M.Tech Computer Science & Engineering",
      duration: "2 Years", 
      eligibility: "B.Tech/BE in CSE or related field",
      seats: "30",
      semesters: [
        {
          sem: "Semester 1",
          subjects: ["Advanced Algorithms", "Advanced Database Systems", "Research Methodology", "Machine Learning", "Elective I", "Seminar I"]
        },
        {
          sem: "Semester 2",
          subjects: ["Distributed Systems", "Advanced Computer Networks", "Data Science", "Elective II", "Elective III", "Minor Project"]
        },
        {
          sem: "Semester 3", 
          subjects: ["Thesis Work I", "Advanced Elective I", "Advanced Elective II", "Industrial Training", "Seminar II"]
        },
        {
          sem: "Semester 4",
          subjects: ["Thesis Work II", "Comprehensive Viva", "Thesis Defense", "Publication Work"]
        }
      ]
    },
    {
      title: "MCA (Master of Computer Applications)",
      duration: "3 Years",
      eligibility: "Bachelor's degree with Mathematics",
      seats: "60", 
      semesters: [
        {
          sem: "Semester 1",
          subjects: ["Programming in C", "Computer Fundamentals", "Mathematics", "Statistics", "Accounting", "Communication Skills"]
        },
        {
          sem: "Semester 2",
          subjects: ["Data Structures", "DBMS", "OOP with C++", "Computer Graphics", "Numerical Methods", "Economics"]
        },
        {
          sem: "Semester 3",
          subjects: ["Java Programming", "System Analysis", "Computer Networks", "Operating Systems", "Software Engineering", "Web Technologies"]
        },
        {
          sem: "Semester 4", 
          subjects: [".NET Programming", "Advanced DBMS", "Mobile Computing", "Linux Administration", "Project Management", "Elective I"]
        },
        {
          sem: "Semester 5",
          subjects: ["Advanced Java", "AI & ML", "Cloud Computing", "Cyber Security", "Elective II", "Major Project I"]
        },
        {
          sem: "Semester 6",
          subjects: ["Industry Training", "Major Project II", "Seminar", "Viva Voce", "Dissertation"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DepartmentHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Academic Programs</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive computer science programs designed to meet industry demands and foster innovation
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-12">
          {courses.map((course, courseIndex) => (
            <Card key={courseIndex} className="bg-card shadow-elevated">
              <CardHeader className="bg-gradient-primary text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{course.seats} Seats</span>
                    </div>
                  </div>
                </div>
                <p className="text-primary-foreground/90">
                  <Award className="h-4 w-4 inline mr-2" />
                  Eligibility: {course.eligibility}
                </p>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Course Structure
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {course.semesters.map((semester, semIndex) => (
                    <Card key={semIndex} className="bg-muted/50 border border-border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-primary">{semester.sem}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {semester.subjects.map((subject, subIndex) => (
                          <Badge
                            key={subIndex}
                            variant="outline"
                            className="text-xs w-full justify-center py-1"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;