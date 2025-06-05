
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">HISCOPE</span>
                <div className="text-xs text-gray-400 -mt-1">TECHNOLOGIES</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading IT consulting and staffing company connecting qualified professionals 
              with opportunities across the United States.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-pink-400" />
                <span>info@hiscopetech.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-pink-400" />
                <span>646 543 2770</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-pink-400 transition-colors">Services</Link></li>
              <li><Link to="/technologies" className="text-gray-300 hover:text-pink-400 transition-colors">Technologies</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Portals</h3>
            <ul className="space-y-3">
              <li><Link to="/candidate-portal" className="text-gray-300 hover:text-pink-400 transition-colors">Candidate Portal</Link></li>
              <li><Link to="/client-portal" className="text-gray-300 hover:text-pink-400 transition-colors">Client Portal</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Hiscope Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
