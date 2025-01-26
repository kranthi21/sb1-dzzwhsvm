import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 884 234 5678", "+91 884 234 5679"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@apcollege.edu.in", "admissions@apcollege.edu.in"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 College Road", "Kakinada, Andhra Pradesh - 533001"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Saturday", "8:00 AM - 5:00 PM"]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Get in touch with us for any queries
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start">
                    <div className="flex-shrink-0">
                      <info.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="mt-1 text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <Send className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Message Sent!</h3>
                  <p className="mt-2 text-gray-600">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="contant" method="POST" className="space-y-6" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
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
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30557.84742478721!2d82.21459!3d16.98897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3c1d90f6bad%3A0xc2a9a9cad54b3b45!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;