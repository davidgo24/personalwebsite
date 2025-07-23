import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary-gray mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Interested in collaborating on projects that make a real difference?
          I'm always open to discussing opportunities in fintech, community
          tools, or small business solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="mailto:dgodinez24@berkeley.edu"
            className="inline-flex items-center px-6 py-3 bg-primary-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
            Get In Touch
          </a>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            Open to opportunities with non-profits, fintech companies, and
            community-focused organizations.
          </p>
        </div>
      </div>
    </section>
  );
}
