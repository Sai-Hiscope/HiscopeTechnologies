
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Code, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-pink-500" />,
      title: "IT Staffing & Bench Marketing",
      description: "Connect with qualified IT professionals across the United States through our extensive network."
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Real-time Technical Training",
      description: "Enhance skills with training in trending technologies like Java, Python, AWS, and more."
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Vendor & Client Partnerships",
      description: "Strategic partnerships with trusted vendors and implementation partners nationwide."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Your Technology Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Software Solutions & Services
              <br />
              for <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Modern Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From custom software development to IT staffing solutions,
              Hiscope Technologies brings innovation to every industry we touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center text-lg"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-pink-500 hover:text-pink-500 transition-all duration-300 inline-flex items-center justify-center text-lg"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-green-500">Ongoing</span> & <span className="text-blue-500">Upcoming</span> Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive IT solutions that bridge the gap between talent and opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200">
                <div className="mb-6 p-3 bg-gray-50 rounded-xl w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Hiscope Technologies?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Compliance & Transparency</h3>
                    <p className="text-gray-600">Full compliance with industry standards and transparent practices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Genuine Qualified Professionals</h3>
                    <p className="text-gray-600">We only market verified, skilled IT professionals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Quality Training Programs</h3>
                    <p className="text-gray-600">Real-time training in trending technologies to keep skills current.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop&crop=faces" 
                  alt="IT Professionals at work" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you're looking for talent or seeking opportunities, we're here to help.
          </p>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center text-lg"
          >
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
