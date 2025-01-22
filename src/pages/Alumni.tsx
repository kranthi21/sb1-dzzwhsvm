import React from 'react';
import { Quote } from 'lucide-react';

const Alumni = () => {
  const alumni = [
    {
      name: "Dr. Ravi Kumar",
      batch: "2010",
      currentRole: "Cardiologist at Apollo Hospitals",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "The BiPC program at AP College laid a strong foundation for my medical career. The faculty's guidance was instrumental in my NEET preparation.",
      achievement: "Gold Medalist in MBBS"
    },
    {
      name: "Priya Reddy",
      batch: "2012",
      currentRole: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "The MPC program's rigorous training helped me crack JEE Advanced. The problem-solving skills I developed here are invaluable.",
      achievement: "IIT Bombay Computer Science Graduate"
    },
    {
      name: "Arun Sharma",
      batch: "2015",
      currentRole: "Research Scientist at ISRO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "The physics labs and practical sessions at AP College sparked my interest in space science. Today, I'm living my dream at ISRO.",
      achievement: "Young Scientist Award 2022"
    }
  ];

  const statistics = [
    { label: "Alumni Network", value: "5000+" },
    { label: "In Fortune 500", value: "100+" },
    { label: "Doctors", value: "500+" },
    { label: "Engineers", value: "2000+" }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Alumni
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Meet our successful graduates making a difference across the globe
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-indigo-700 rounded-lg shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Profiles */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {alumni.map((person) => (
            <div
              key={person.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="w-full h-64 object-cover"
                  src={person.image}
                  alt={person.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                <p className="mt-1 text-indigo-600">Batch of {person.batch}</p>
                <p className="mt-1 text-gray-600">{person.currentRole}</p>
                <div className="mt-4">
                  <Quote className="h-8 w-8 text-indigo-400" />
                  <p className="mt-2 text-gray-600 italic">{person.quote}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-900">Achievement</p>
                  <p className="mt-1 text-gray-600">{person.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Are you an alumnus?</h2>
          <p className="mt-4 text-gray-600">
            Join our alumni network to stay connected and participate in college events.
          </p>
          <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Join Alumni Network
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alumni;