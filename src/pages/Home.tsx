import React from 'react';
import { ArrowRight, BookOpen, Users, Trophy, Snowflake, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const founders = [
    {
      name: "Dr. Ramesh Kumar",
      role: "Founder & Chairman",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400",
      bio: "Dr. Ramesh Kumar has over 30 years of experience in education and has been instrumental in shaping the vision of AKHIL Junior College."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Co-Founder & Academic Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400",
      bio: "Dr. Ramesh Kumar has over 30 years of experience in education and has been instrumental in shaping the vision of AKHIL Junior College."
      // bio: "Dr. Priya Sharma brings her expertise in academic excellence and curriculum development to provide students with the best educational experience."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-indigo-900 h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            // src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="College campus"
          />
          <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Shape Your Future at AKHIL JUNIOR College
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Empowering students with quality education in MPC and BiPC courses. 
            Prepare for competitive exams with expert faculty and comprehensive coaching.
          </p>
          <div className="mt-10">
            <Link
              to="/admissions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Faculty</h3>
              <p className="mt-2 text-base text-gray-500">
                Learn from experienced educators dedicated to your success
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Small Class Sizes</h3>
              <p className="mt-2 text-base text-gray-500">
                Personalized attention and interactive learning environment
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Proven Results</h3>
              <p className="mt-2 text-base text-gray-500">
                Consistent success in competitive exams
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                <Snowflake className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">AC Classrooms</h3>
              <p className="mt-2 text-base text-gray-500">
                Modern air-conditioned classrooms for comfortable learning
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Productive Planning</h3>
              <p className="mt-2 text-base text-gray-500">
                Structured schedule optimized for maximum learning efficiency
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Founders
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Meet the visionaries behind AKHIL Junior College
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <img
                    className="h-40 w-40 rounded-full mx-auto"
                    src={founder.image}
                    alt={founder.name}
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-medium text-gray-900">{founder.name}</h3>
                    <p className="text-indigo-600">{founder.role}</p>
                    <p className="mt-2 text-gray-500">{founder.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Branches in Kakinada
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Two convenient locations to serve you better
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Main Campus</h3>
              <p className="mt-2 text-gray-500">
                Located in the heart of Kakinada, our main campus
              </p>
              <Link
                to="/branches"
                className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900">Second Branch</h3>
              <p className="mt-2 text-gray-500">
                Our city center branch offers the same quality education in a more central location
                for urban students.
              </p>
              <Link
                to="/branches"
                className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;