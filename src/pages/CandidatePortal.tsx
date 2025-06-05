import React, { useState } from 'react';
import { Upload, User, BookOpen, Phone, ShieldCheck, Laptop, Users, GraduationCap } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

const CandidatePortal = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    skills: '',
    coverLetter: '',
    trainingInterest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Request sent to: saimadiraju@hiscopetech.com and saimadiraju93@gmail.com');
    setShowConfirmation(true);
  };

  const tabs = [
    { id: 'resume', label: 'Submit Application', icon: <Upload className="h-5 w-5" /> },
    { id: 'training', label: 'Request Training', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'contact', label: 'Contact Recruiter', icon: <Phone className="h-5 w-5" /> }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "High-End Compliance Training",
      description: "Comprehensive compliance training matching the highest industry standards."
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-600" />,
      title: "Preferred OS Laptop",
      description: "Get a high-performance laptop with your preferred operating system."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Unlimited Knowledge Transfer",
      description: "Access unlimited knowledge transfer sessions while on bench."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Training & Certification Sponsorship",
      description: "We sponsor your professional training and certifications."
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Candidate Portal
          </h1>
          <p className="text-xl text-gray-600">
            Take the next step in your IT career with Hiscope Technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form Content - Takes 3/4 of the space */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 text-sm font-medium border-b-2 mr-4 transition-colors ${
                    activeTab === tab.id
                      ? 'border-pink-600 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {activeTab === 'resume' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Application</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                        >
                          <option value="">Select experience</option>
                          <option value="0-1">0-1 years</option>
                          <option value="2-3">2-3 years</option>
                          <option value="4-6">4-6 years</option>
                          <option value="7-10">7-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Technical Skills
                      </label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                        placeholder="List your technical skills (e.g., Java, Python, AWS, etc.)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter *
                      </label>
                      <textarea
                        name="coverLetter"
                        required
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={8}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Tell us about yourself, your experience, career goals, and why you're interested in working with Hiscope Technologies..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-orange-500 transition-all"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'training' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Training</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Training Interest *
                      </label>
                      <select
                        name="trainingInterest"
                        required
                        value={formData.trainingInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      >
                        <option value="">Select a technology</option>
                        <option value="java">Java Development</option>
                        <option value="python">Python Programming</option>
                        <option value="aws">Amazon Web Services (AWS)</option>
                        <option value="azure">Microsoft Azure</option>
                        <option value="devops">DevOps & Automation</option>
                        <option value="salesforce">Salesforce Development</option>
                        <option value="qa">Quality Assurance</option>
                        <option value="snowflake">Snowflake Data Platform</option>
                        <option value="other">Other (specify in message)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Tell us about your training goals and current skill level..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-orange-500 transition-all"
                    >
                      Request Training Information
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'contact' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Our Recruiters</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How can we help you? *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Tell us about your career goals, job preferences, or any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-orange-500 transition-all"
                    >
                      Contact Recruiter
                    </button>
                  </form>

                  <div className="mt-8 p-6 bg-pink-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Direct Contact Information</h3>
                    <div className="space-y-2">
                      <p className="flex items-center text-gray-700">
                        <User className="h-5 w-5 mr-2 text-pink-600" />
                        Recruiting Team
                      </p>
                      <p className="flex items-center text-gray-700">
                        <Phone className="h-5 w-5 mr-2 text-pink-600" />
                        (555) 123-4567
                      </p>
                      <p className="flex items-center text-gray-700">
                        <span className="h-5 w-5 mr-2 text-pink-600">✉</span>
                        saimadiraju@hiscopetech.com
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Benefits Sidebar - Takes 1/4 of the space */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Why Choose Hiscope?
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      {benefit.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-center text-sm font-medium text-blue-700">
                  Join our talent network today!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Dialog */}
        <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Thank You for Your Submission!</AlertDialogTitle>
              <AlertDialogDescription>
                Your information has been successfully submitted. We will reach out to you soon.
                <br /><br />
                For faster response, feel free to reach out to us directly at{' '}
                <span className="font-semibold text-pink-600">hr@hiscopetech.com</span>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setShowConfirmation(false)}>
                Got it!
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default CandidatePortal;
