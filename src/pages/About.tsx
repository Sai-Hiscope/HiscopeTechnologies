import React from 'react';
import { Target, Eye, Award, Laptop, GraduationCap, Users, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Hiscope Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading US-based IT consulting and staffing company dedicated to connecting 
            qualified professionals with opportunities while providing exceptional training programs.
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Hiscope Technologies was founded with a clear mission: to bridge the gap between 
                talented IT professionals and the companies that need them. As an employer and 
                marketer of IT professionals, we specialize in connecting bench candidates across 
                the United States with trusted vendors, implementation partners, and direct clients.
              </p>
              <p className="text-gray-600 mb-4">
                What sets us apart is our commitment to transparency, compliance, and quality. 
                We don't just place candidates – we invest in their growth through optional 
                real-time training programs in trending technologies, ensuring they stay 
                competitive in the ever-evolving tech landscape.
              </p>
              <p className="text-gray-600">
                Our approach is built on integrity and genuine partnerships. We only market 
                qualified professionals and maintain the highest standards of compliance with 
                industry regulations, creating trust and long-term relationships with all our stakeholders.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=faces" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Candidate Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Exclusive Benefits for Our Candidates
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We go beyond just placements – we invest in your professional growth and provide 
                comprehensive support throughout your journey with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                <ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  High-End Compliance Training
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive compliance training matching the highest industry standards 
                  to keep you current and competitive.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                <Laptop className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Preferred OS Laptop
                </h3>
                <p className="text-gray-600 text-sm">
                  Get a high-performance laptop with your preferred operating system 
                  to ensure optimal productivity and comfort.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Unlimited Knowledge Transfer
                </h3>
                <p className="text-gray-600 text-sm">
                  Access unlimited knowledge transfer sessions while on bench 
                  to continuously enhance your skills and expertise.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-blue-100">
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Training & Certification Sponsorship
                </h3>
                <p className="text-gray-600 text-sm">
                  We sponsor your professional training and certifications 
                  to accelerate your career growth and market value.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-blue-700 font-medium">
                Join our talent network and experience the Hiscope advantage
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To connect qualified IT professionals with meaningful opportunities while 
                providing comprehensive training and support to ensure mutual success.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted IT staffing partner in the United States, known for 
                our transparency, quality, and commitment to professional development.
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, quality, compliance, and continuous learning 
                drive everything we do in our pursuit of excellence.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance First</h3>
                  <p className="text-gray-600">
                    We maintain strict adherence to all industry standards and regulations, 
                    ensuring legal compliance and peace of mind for all parties.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Transparency</h3>
                  <p className="text-gray-600">
                    Our transparent approach builds trust through clear communication, 
                    honest assessments, and open collaboration.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Training</h3>
                  <p className="text-gray-600">
                    Optional real-time training programs keep professionals current with 
                    trending technologies and market demands.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Professionals</h3>
                  <p className="text-gray-600">
                    We thoroughly vet all candidates to ensure they possess genuine skills 
                    and qualifications before marketing them to clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Nationwide Network</h3>
                  <p className="text-gray-600">
                    Our extensive network spans across the United States, connecting 
                    talent with opportunities in all major markets.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Long-term Partnerships</h3>
                  <p className="text-gray-600">
                    We focus on building lasting relationships rather than quick placements, 
                    ensuring sustainable success for all stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
