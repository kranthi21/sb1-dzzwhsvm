import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AKHIL Junior College</h3>
            <p className="text-gray-400">Established 2013</p>
            <p className="text-gray-400 mt-2">Excellence in Education</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="/admissions" className="text-gray-400 hover:text-white">Admissions</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white">Events</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +91 123 456 7890
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@akhilcollege.edu.in
              </p>
              <p className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Kakinada, Andhra Pradesh
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray-400">
              © {currentYear} AKHIL Junior College. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400">
              <Code className="h-5 w-5 mr-2" />
              <p>Developed by Kranthi | Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;