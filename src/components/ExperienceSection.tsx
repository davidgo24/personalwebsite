import { Briefcase, Users, Rocket } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-gray mb-4">Real-World Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing together technology skills with deep industry knowledge and community outreach experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-gray mb-2">6+ Years Banking</h3>
              <p className="text-gray-600">Deep understanding of financial services, customer needs, and regulatory requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-gray mb-2">Community Outreach</h3>
              <p className="text-gray-600">Passionate about serving underrepresented communities and promoting financial inclusion.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-gray mb-2">Tech Innovation</h3>
              <p className="text-gray-600">Building modern solutions that bridge traditional services with digital accessibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}