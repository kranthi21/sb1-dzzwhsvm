import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Admissions
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Take the first step towards your future
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Admission Information */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900">Admission Process</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Eligibility</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">Completion of 10th standard with minimum 60% marks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">Valid transfer certificate from previous institution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">Satisfactory performance in entrance test/interview</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Required Documents</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">10th mark sheet and pass certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">Transfer certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">Character certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">Recent passport size photographs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900">Admission Inquiry</h2>
              {submitted ? (
                <div className="mt-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Thank you for your inquiry!</h3>
                  <p className="mt-2 text-gray-600">We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="Inquiry" method='POST' className="mt-6 space-y-6" data-netlify="true">
                  <input type="hidden" name="form-name" value="Inquiry" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                      Course Interest
                    </label>
                    <select
                      name="course"
                      id="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="">Select a course</option>
                      <option value="MPC">MPC</option>
                      <option value="BiPC">BiPC</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;