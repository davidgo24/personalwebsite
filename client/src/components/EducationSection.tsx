import { GraduationCap, Sprout, Laptop } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-gray mb-4">Educational Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation in both liberal arts and computer science to create technology solutions with human impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* UC Berkeley */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-gray mb-2">University of California, Berkeley</h3>
            <p className="text-blue-600 font-medium mb-2">Bachelor of Arts</p>
            <p className="text-gray-600">Graduated with a broad liberal arts foundation, developing critical thinking and communication skills essential for technology leadership.</p>
          </div>

          {/* Rio Hondo College */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-gray mb-2">Rio Hondo College</h3>
            <p className="text-green-600 font-medium mb-2">Transfer Foundation</p>
            <p className="text-gray-600">Started my higher education journey with strong academic fundamentals, successfully transferring to UC Berkeley.</p>
          </div>

          {/* LACC */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
            <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center mb-4">
              <Laptop className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-gray mb-2">Los Angeles City College</h3>
            <p className="text-primary-orange font-medium mb-2">Associate of Computer Science</p>
            <p className="text-gray-600">Currently pursuing technical skills in programming, data structures, and software development to complement my business experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
