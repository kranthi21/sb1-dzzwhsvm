import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Branches = () => {
  const branches = [
    {
      name: "Main Campus",
      address: "123 College Road, Near Central Park, Kakinada - 533001",
      phone: "+91 884 234 5678",
      email: "main@apcollege.edu.in",
      timing: "8:00 AM - 5:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30557.84742478721!2d82.21459!3d16.98897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3c1d90f6bad%3A0xc2a9a9cad54b3b45!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      name: "City Center Branch",
      address: "45 Market Street, Near Bus Stand, Kakinada - 533002",
      phone: "+91 884 234 5679",
      email: "city@apcollege.edu.in",
      timing: "8:00 AM - 5:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30557.84742478721!2d82.21459!3d16.98897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3c1d90f6bad%3A0xc2a9a9cad54b3b45!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin",
      image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Branches</h1>
          <p className="mt-4 text-xl text-gray-500">
            Two convenient locations in Kakinada to serve you better
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {branches.map((branch) => (
            <div key={branch.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">{branch.name}</h2>
                  
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                      <p className="ml-3 text-gray-600">{branch.address}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-indigo-600" />
                      <p className="ml-3 text-gray-600">{branch.phone}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-indigo-600" />
                      <p className="ml-3 text-gray-600">{branch.email}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-indigo-600" />
                      <p className="ml-3 text-gray-600">{branch.timing}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-96 w-full">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${branch.name} location`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;