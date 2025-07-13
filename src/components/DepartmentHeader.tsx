import { GraduationCap, BookOpen, Users } from "lucide-react";

const DepartmentHeader = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-4">
          <GraduationCap className="h-12 w-12" />
          <div>
            <h1 className="text-3xl font-bold font-display">
              Computer Science Department
            </h1>
            <p className="text-primary-foreground/90 text-lg">
              Symbiosis Institute of Technology (SIT), Nagpur
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
            <BookOpen className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">Quality Education</h3>
              <p className="text-sm text-primary-foreground/80">Modern curriculum with industry focus</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
            <Users className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">Expert Faculty</h3>
              <p className="text-sm text-primary-foreground/80">Experienced professors and researchers</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
            <GraduationCap className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">Career Excellence</h3>
              <p className="text-sm text-primary-foreground/80">100% placement assistance</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DepartmentHeader;