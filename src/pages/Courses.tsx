import React from 'react';
import { BookOpen, Award, Microscope, Calculator } from 'lucide-react';

const Courses = () => {
  const mpcTopics = [
    { name: "Mathematics", icon: Calculator, description: "Advanced calculus, algebra, and trigonometry" },
    { name: "Physics", icon: Award, description: "Mechanics, electromagnetism, and modern physics" },
    { name: "Chemistry", icon: BookOpen, description: "Organic, inorganic, and physical chemistry" }
  ];

  const bipcTopics = [
    { name: "Biology", icon: Microscope, description: "Zoology, botany, and human physiology" },
    { name: "Physics", icon: Award, description: "Mechanics, electromagnetism, and modern physics" },
    { name: "Chemistry", icon: BookOpen, description: "Organic, inorganic, and physical chemistry" }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Courses
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive preparation for competitive exams
          </p>
        </div>

        {/* MPC Section */}
        <div className="mt-16">
          <div className="bg-indigo-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900">MPC (Mathematics, Physics, Chemistry)</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our MPC program prepares students for prestigious engineering entrance exams
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {mpcTopics.map((topic) => (
                <div key={topic.name} className="bg-white p-6 rounded-lg shadow-md">
                  <topic.icon className="h-8 w-8 text-indigo-600" />
                  <h3 className="mt-4 text-xl font-semibold">{topic.name}</h3>
                  <p className="mt-2 text-gray-600">{topic.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Exam Preparation</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• JEE Advanced - IIT entrance examination</li>
                <li>• JEE Mains - NITs and other engineering colleges</li>
                <li>• EMCET - State-level engineering entrance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BiPC Section */}
        <div className="mt-16">
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900">BiPC (Biology, Physics, Chemistry)</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive preparation for medical entrance examinations
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {bipcTopics.map((topic) => (
                <div key={topic.name} className="bg-white p-6 rounded-lg shadow-md">
                  <topic.icon className="h-8 w-8 text-green-600" />
                  <h3 className="mt-4 text-xl font-semibold">{topic.name}</h3>
                  <p className="mt-2 text-gray-600">{topic.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold">NEET Preparation</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Comprehensive NCERT coverage</li>
                <li>• Regular mock tests and assessments</li>
                <li>• One-on-one mentoring</li>
                <li>• Previous year question analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;