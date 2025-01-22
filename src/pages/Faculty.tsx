import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Suresh Reddy",
      subject: "Physics",
      qualification: "Ph.D. in Physics",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specialization: "Quantum Mechanics"
    },
    {
      name: "Dr. Lakshmi Prasad",
      subject: "Mathematics",
      qualification: "Ph.D. in Mathematics",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specialization: "Advanced Calculus"
    },
    {
      name: "Dr. Rajesh Kumar",
      subject: "Chemistry",
      qualification: "Ph.D. in Chemistry",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specialization: "Organic Chemistry"
    },
    {
      name: "Dr. Priya Sharma",
      subject: "Biology",
      qualification: "Ph.D. in Life Sciences",
      experience: "13 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      specialization: "Human Physiology"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Faculty
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Learn from experienced educators dedicated to your success
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.map((faculty) => (
            <div
              key={faculty.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="w-full h-64 object-cover"
                  src={faculty.image}
                  alt={faculty.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{faculty.name}</h3>
                <p className="mt-2 text-indigo-600 font-semibold">{faculty.subject}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Qualification:</span> {faculty.qualification}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Experience:</span> {faculty.experience}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Specialization:</span> {faculty.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;