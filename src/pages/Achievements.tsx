import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements = () => {
  const batchAchievements = [
    {
      year: "2023",
      highlights: [
        {
          name: "Sai Kumar Reddy",
          achievement: "AIR 156 in JEE Advanced",
          college: "IIT Bombay - Computer Science",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Priya Sharma",
          achievement: "NEET Top 100",
          college: "AIIMS Delhi",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      year: "2022",
      highlights: [
        {
          name: "Ravi Teja",
          achievement: "State 1st Rank in EAMCET",
          college: "JNTU - Computer Science",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Lakshmi Prasanna",
          achievement: "NEET State Top 10",
          college: "Gandhi Medical College",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      year: "2021",
      highlights: [
        {
          name: "Krishna Mohan",
          achievement: "AIR 89 in JEE Advanced",
          college: "IIT Madras - Electrical Engineering",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Divya Sree",
          achievement: "NEET AIR 250",
          college: "JIPMER Puducherry",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  const statistics = [
    { label: "JEE Advanced Selections", value: "100+", icon: Trophy },
    { label: "NEET Qualifiers", value: "150+", icon: Award },
    { label: "State Rankers", value: "500+", icon: Star }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Pride - Student Achievements
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Celebrating excellence across generations
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center">
                  <stat.icon className="h-12 w-12 text-white" />
                </div>
                <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-lg text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Batch-wise Achievements */}
        <div className="mt-16 space-y-16">
          {batchAchievements.map((batch) => (
            <div key={batch.year} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">Batch of {batch.year}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {batch.highlights.map((student) => (
                  <div key={student.name} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-24 w-24 rounded-full object-cover"
                        src={student.image}
                        alt={student.name}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                      <p className="mt-1 text-indigo-600 font-semibold">{student.achievement}</p>
                      <p className="mt-1 text-gray-500">{student.college}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Join Our Legacy of Success</h2>
          <p className="mt-4 text-gray-600">
            Be part of our success story. Enroll now and work towards your dreams.
          </p>
          <a
            href="/admissions"
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achievements;