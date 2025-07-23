import { University, Smartphone, ExternalLink, Github, Plus, Info } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-gray mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications solving problems in financial literacy and small business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Smart Start Bank Account Finder */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <University className="h-6 w-6 text-white" />
                </div>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Financial Literacy</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Bilingual</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-gray mb-4">Smart Start Bank Account Finder</h3>
              <p className="text-gray-600 mb-6">
                A bilingual (English/Spanish) tool helping individuals find the right bank account based on their financial needs and goals. 
                Combines my banking expertise with accessible technology to promote financial inclusion.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Users Helped</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-primary-orange text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Site
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </button>
              </div>
            </div>
          </div>

          {/* BizzyGlass */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-primary-orange rounded-lg flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Live Business</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Mobile</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-gray mb-4">BizzyGlass</h3>
              <p className="text-gray-600 mb-6">
                Mobile auto glass repair platform serving 2 local business clients. Features SMS-based quoting, 
                secure payments, and streamlined service coordination. Live at bizzytext.com.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-orange">2</div>
                  <div className="text-sm text-gray-600">Active Clients</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://bizzytext.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-orange text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Site
                </a>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center">
                  <Info className="h-4 w-4 mr-2" />
                  Case Study
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Placeholder */}
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Plus className="h-6 w-6 text-gray-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">More Projects Coming Soon</h3>
          <p className="text-gray-500">I'm continuously working on new tools and solutions to help communities thrive.</p>
        </div>
      </div>
    </section>
  );
}