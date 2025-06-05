
import React from 'react';
import { Code, Cloud, Database, Settings } from 'lucide-react';

const Technologies = () => {
  const categories = [
    {
      icon: <Code className="h-8 w-8 text-gray-600" />,
      title: "Programming Languages",
      technologies: [
        "Java", "Python", ".NET", "C#", "JavaScript", "TypeScript", 
        "React", "Angular", "Vue.js", "Node.js", "PHP", "Ruby"
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-gray-600" />,
      title: "Cloud Platforms",
      technologies: [
        "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", 
        "Kubernetes", "Docker", "Terraform", "CloudFormation", "Lambda Functions"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-gray-600" />,
      title: "Data & Analytics",
      technologies: [
        "Snowflake", "SQL Server", "Oracle", "MongoDB", "PostgreSQL", 
        "MySQL", "Tableau", "Power BI", "Spark", "Hadoop"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-gray-600" />,
      title: "DevOps & Tools",
      technologies: [
        "Jenkins", "GitLab CI/CD", "Ansible", "Puppet", "Chef", 
        "Nagios", "Splunk", "JIRA", "Confluence", "Git"
      ]
    }
  ];

  const specializations = [
    {
      title: "Salesforce Development",
      description: "Complete Salesforce ecosystem including Lightning, Apex, Visualforce, and integrations.",
      skills: ["Lightning Development", "Apex Programming", "Visualforce", "Salesforce Integration", "CPQ", "Field Service"]
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing methodologies and automation frameworks.",
      skills: ["Selenium", "TestNG", "JUnit", "Cypress", "API Testing", "Performance Testing"]
    },
    {
      title: "Full Stack Development",
      description: "End-to-end application development across multiple technology stacks.",
      skills: ["MEAN Stack", "MERN Stack", "LAMP Stack", "Django", "Spring Boot", "Express.js"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile application development.",
      skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Xamarin", "Ionic"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Technologies We Cover
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our professionals are skilled in the latest and most in-demand technologies. 
            We provide training and placement opportunities across a comprehensive range of tech stacks.
          </p>
        </div>

        {/* Technology Categories */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Specializations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {spec.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {spec.description}
                </p>
                <div className="space-y-2">
                  {spec.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Programs */}
        <section className="bg-gray-800 text-white rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Real-time Training Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer optional training programs to help professionals stay current 
              with trending technologies and advance their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Beginner Level</h3>
              <p className="text-gray-300 mb-4">Foundation courses for new technologies</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Programming fundamentals</li>
                <li>• Cloud basics</li>
                <li>• Database essentials</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Intermediate Level</h3>
              <p className="text-gray-300 mb-4">Advanced concepts and frameworks</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Advanced programming</li>
                <li>• Cloud architecture</li>
                <li>• DevOps practices</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Expert Level</h3>
              <p className="text-gray-300 mb-4">Specialized skills and certifications</p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Architecture design</li>
                <li>• Technical leadership</li>
                <li>• Industry certifications</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/candidate-portal" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Request Training Information
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technologies;
