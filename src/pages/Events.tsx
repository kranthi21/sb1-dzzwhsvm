import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const events = [
    {
      id: 1,
      title: "Science Exhibition",
      date: new Date(2024, 2, 25),
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus Auditorium",
      description: "Annual science exhibition showcasing student projects from both MPC and BiPC streams.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      title: "Career Guidance Seminar",
      date: new Date(2024, 3, 5),
      time: "2:00 PM - 5:00 PM",
      location: "City Center Branch",
      description: "Expert counselors will guide students about various career opportunities after intermediate.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 3,
      title: "Mock Test Series",
      date: new Date(2024, 3, 15),
      time: "9:00 AM - 1:00 PM",
      location: "Both Campuses",
      description: "Comprehensive mock tests for JEE Mains, Advanced, and NEET preparations.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Events & Activities
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Stay updated with our latest events and activities
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Calendar Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Event Calendar</h2>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                className="w-full"
              />
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover md:w-48"
                        src={event.image}
                        alt={event.title}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 text-indigo-600" />
                          <span className="ml-2">
                            {event.date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 text-indigo-600" />
                          <span className="ml-2">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 text-indigo-600" />
                          <span className="ml-2">{event.location}</span>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;