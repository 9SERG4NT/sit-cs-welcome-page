import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, Phone, BookOpen, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// External JavaScript module - Student data handler
const StudentDataHandler = {
  saveStudent: (studentData: any) => {
    console.log("=== STUDENT DATA HANDLER ===");
    console.log("Student information saved:", studentData);
    console.log("Timestamp:", new Date().toISOString());
    console.log("Browser Info:", navigator.userAgent);
    console.log("=== END STUDENT DATA ===");
    
    // Store in localStorage for persistence
    localStorage.setItem('sitStudentData', JSON.stringify(studentData));
    return true;
  },
  
  validateInput: (name: string) => {
    const isValid = name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
    console.log(`Input validation for "${name}": ${isValid ? 'VALID' : 'INVALID'}`);
    return isValid;
  }
};

const StudentInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    year: ""
  });
  const [displayName, setDisplayName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Internal JavaScript - DOM manipulation effects
  useEffect(() => {
    // Dynamic page title update
    document.title = "Student Information Portal - SIT CS Department";
    
    // Console welcome message
    console.log("%c🎓 SIT Nagpur CS Department - Student Portal", 
      "color: #2563eb; font-size: 16px; font-weight: bold;");
    console.log("Welcome to the interactive student information system!");
    
    return () => {
      document.title = "SIT CS Department";
    };
  }, []);

  // Internal JavaScript - Real-time DOM updates
  useEffect(() => {
    if (displayName) {
      // Update page header dynamically
      const headerElement = document.querySelector('[data-student-header]');
      if (headerElement) {
        headerElement.textContent = `Welcome, ${displayName}!`;
      }
    }
  }, [displayName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // External JavaScript validation
    if (!StudentDataHandler.validateInput(formData.name)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid name (at least 2 characters, letters only)",
        variant: "destructive"
      });
      return;
    }

    // JavaScript Alert as requested
    alert(`Hello ${formData.name}! Your information has been recorded successfully.`);
    
    // External JavaScript data handling
    const success = StudentDataHandler.saveStudent({
      ...formData,
      submissionTime: new Date().toISOString(),
      pageUrl: window.location.href
    });

    if (success) {
      // DOM manipulation - Update display name
      setDisplayName(formData.name);
      setIsSubmitted(true);
      
      // Console logging as requested
      console.log(`Student name entered: ${formData.name}`);
      console.log("Form submission completed successfully");
      
      toast({
        title: "Success!",
        description: "Your information has been saved successfully.",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time console logging for name field
    if (field === 'name') {
      console.log(`Name field updated: ${value}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Department
            </Button>
          </div>
          <h1 
            className="text-3xl font-bold mt-4" 
            data-student-header
          >
            Student Information Portal
          </h1>
          <p className="text-primary-foreground/90">
            SIT Nagpur Computer Science Department
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <Card className="shadow-lg border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  Student Registration Form
                </CardTitle>
                <p className="text-muted-foreground">
                  Please fill in your details below. Your information will be displayed using JavaScript DOM manipulation.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-sm font-medium">
                        Course
                      </Label>
                      <select
                        id="course"
                        value={formData.course}
                        onChange={(e) => handleInputChange('course', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select Course</option>
                        <option value="btech-cs">B.Tech Computer Science</option>
                        <option value="mtech-cs">M.Tech Computer Science</option>
                        <option value="btech-it">B.Tech Information Technology</option>
                        <option value="mca">MCA</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-sm font-medium">
                        Year
                      </Label>
                      <select
                        id="year"
                        value={formData.year}
                        onChange={(e) => handleInputChange('year', e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select Year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      variant="academic" 
                      size="lg" 
                      className="w-full"
                      disabled={!formData.name.trim()}
                    >
                      Submit Information
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            // Success State - DOM Updated Content
            <Card className="shadow-lg border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Registration Successful!
                </h2>
                <p className="text-green-700 mb-6">
                  Thank you, <strong>{displayName}</strong>! Your information has been processed using JavaScript DOM manipulation.
                </p>
                
                <div className="bg-white/70 rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-semibold text-green-800 mb-2">Submitted Information:</h3>
                  <div className="space-y-1 text-sm text-green-700">
                    <p><strong>Name:</strong> {formData.name}</p>
                    {formData.email && <p><strong>Email:</strong> {formData.email}</p>}
                    {formData.phone && <p><strong>Phone:</strong> {formData.phone}</p>}
                    {formData.course && <p><strong>Course:</strong> {formData.course}</p>}
                    {formData.year && <p><strong>Year:</strong> {formData.year}</p>}
                  </div>
                </div>

                <div className="space-y-2 text-sm text-green-600">
                  <p>✓ JavaScript alert displayed</p>
                  <p>✓ Data logged to browser console</p>
                  <p>✓ DOM dynamically updated</p>
                  <p>✓ External module validation completed</p>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        course: "",
                        year: ""
                      });
                      setDisplayName("");
                    }}
                    className="flex-1"
                  >
                    Register Another Student
                  </Button>
                  <Button 
                    variant="academic"
                    onClick={() => navigate("/")}
                    className="flex-1"
                  >
                    Back to Department
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;