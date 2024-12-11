import React, { useState, useEffect } from "react";

const UserComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    description: "",
    location: "",
    department: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [complaintsResolved, setComplaintsResolved] = useState(40020);

  const images = [
    "/Images/ucomplain1.png",
    "/Images/ucomplain2.png",
    "/Images/ucomplain3.png",
  ];

  const departments = ["Road Transport", "Water", "Civil", "Electrical", "Mechanical"];

  // Increment complaints resolved every second
  useEffect(() => {
    const counterInterval = setInterval(() => {
      const increment = Math.random() > 0.5 ? 1 : 3;
      setComplaintsResolved((prev) => prev + increment);
    }, 1000);

    return () => clearInterval(counterInterval);
  }, []);

  // Rotate carousel images every 5 seconds
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(carouselInterval);
  }, [images.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({
      name: "",
      email: "",
      contact: "",
      subject: "",
      description: "",
      location: "",
      department: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Image Carousel */}
      <div className="relative w-full">
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className="w-full h-64 object-cover"
        />
        {/* Complaints Resolved Text */}
        <div
          className="absolute inset-0 flex justify-center items-center"
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: "2rem",
            fontWeight: "bold",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
        >
          Complaints Resolved: {complaintsResolved}
        </div>
      </div>

      {/* Complaints Resolved and Register Section */}
      <div className="bg-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <a
            href="#complaint-form"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Register Your Complaint
          </a>
        </div>
      </div>

      {/* Main Form Section */}
      <main className="flex-grow" id="complaint-form">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {showSuccess && (
            <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-md">
              Complaint Submitted Successfully!
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-8 space-y-8"
          >
            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                  />
                </div>
              </div>
            </div>

            {/* Complaint Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Complaint Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject of your complaint"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide detailed information about your complaint"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                  >
                    <option value="" disabled>
                      Select the department
                    </option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter the location of the issue"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                  />
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    contact: "",
                    subject: "",
                    description: "",
                    location: "",
                    department: "",
                  })
                }
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Submit Complaint
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UserComplaintForm;
