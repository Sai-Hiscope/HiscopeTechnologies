
import React from 'react';
import { Users, Code, Briefcase, User, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-pink-500" />,
      title: "IT Staffing & Bench Marketing",
      description: "We connect qualified IT professionals with opportunities across the United States. Our extensive network includes trusted vendors, implementation partners, and direct clients.",
      features: [
        "Nationwide talent placement",
        "Vendor partnership management", 
        "Direct client relationships",
        "Compliance-focused approach",
        "Quality candidate screening"
      ]
    },
    {
      icon: <Code className="h-12 w-12 text-blue-500" />,
      title: "Real-time Technical Training",
      description: "Optional training programs in trending technologies to keep professionals competitive and up-to-date with industry demands.",
      features: [
        "Java, Python, .NET training",
        "Cloud platforms (AWS, Azure)",
        "DevOps and automation tools",
        "Salesforce development",
        "QA and testing methodologies"
      ]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-green-500" />,
      title: "Vendor & Client Partnerships",
      description: "Strategic partnerships with trusted implementation partners and vendors to create a robust network of opportunities.",
      features: [
        "Trusted vendor relationships",
        "Implementation partner network",
        "Direct client connections",
        "Mutual growth strategies",
        "Long-term collaborations"
      ]
    },
    {
      icon: <User className="h-12 w-12 text-purple-500" />,
      title: "Resume Building & Interview Support",
      description: "Comprehensive support to help candidates present their best selves and succeed in the interview process.",
      features: [
        "Professional resume optimization",
        "Interview preparation coaching",
        "Technical skill assessment",
        "Market positioning guidance",
        "Career development advice"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software Solutions & Services
            <br />
            for <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Modern Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to connect talent with opportunity while 
            fostering professional growth and maintaining industry-leading standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1461749280684-dccba630e2f6' :
                      index === 1 ? '1486312338219-ce68d2c6f44d' :
                      index === 2 ? '1605810230434-7631ac76ec81' :
                      '1488590528505-98d2b5aba04b'
                    }?w=500&h=300&fit=crop&crop=faces`}
                    alt={service.title}
                    className="rounded-2xl shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you're a candidate seeking opportunities or a client looking for talent, 
            we're here to provide exceptional service tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/candidate-portal" 
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            >
              For Candidates
            </a>
            <a 
              href="/client-portal" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
            >
              For Clients
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
