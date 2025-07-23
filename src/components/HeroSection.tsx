import { Heart, Rocket, Download } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-primary-orange rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Building for community impact
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-gray leading-tight mb-6">
              Hi, I'm David. I build{" "}
              <span className="text-primary-orange">tools to help people thrive.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Passionate about creating technology solutions that bridge gaps in financial literacy, 
              support small businesses, and empower communities. Currently pursuing Computer Science 
              while applying 6+ years of banking experience to real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="inline-flex items-center px-6 py-3 bg-primary-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                <Rocket className="h-4 w-4 mr-2" />
                View My Work
              </button>
              <a 
                href="/assets/ResumeDavidGJr.pdf" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 border-2 border-primary-orange text-primary-orange rounded-lg font-semibold hover:bg-primary-orange hover:text-white transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="relative inline-block">
              <img 
                src="/assets/propicture.jpeg" 
                alt="David's profile photo" 
                className="max-w-[16rem] w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}