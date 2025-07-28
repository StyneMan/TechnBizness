"use client";

import { useState, useRef, useEffect } from "react";
// import { FiX, FiChevronDown } from "react-icons/fi";

export default function HireUsDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    timeline: "",
    description: "",
    consultationFee: "",
    trainingCourse: "",
  });

  // Close dialog when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const services = [
    { value: "consultation", label: "Consultation" },
    { value: "training", label: "Training" },
    { value: "development", label: "Custom Development" },
    { value: "design", label: "UI/UX Design" },
    { value: "support", label: "Ongoing Support" },
  ];

  const consultationOptions = [
    { value: "basic", label: "Basic Consultation ($200/hr)", price: 200 },
    { value: "premium", label: "Premium Consultation ($350/hr)", price: 350 },
    {
      value: "enterprise",
      label: "Enterprise Consultation ($500/hr)",
      price: 500,
    },
  ];

  const trainingCourses = [
    {
      value: "react",
      label: "React Masterclass (3 days - $1,500)",
      duration: "3 days",
      price: 1500,
    },
    {
      value: "nextjs",
      label: "Next.js Workshop (2 days - $1,200)",
      duration: "2 days",
      price: 1200,
    },
    {
      value: "node",
      label: "Node.js Fundamentals (5 days - $2,000)",
      duration: "5 days",
      price: 2000,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "serviceType"
        ? { consultationFee: "", trainingCourse: "" }
        : {}),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your request! We'll contact you soon.");
    setIsOpen(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      serviceType: "",
      budget: "",
      timeline: "",
      description: "",
      consultationFee: "",
      trainingCourse: "",
    });
  };

  return (
    <>
      {/* Button to open dialog */}
      <button
        // onClick={() => setIsOpen(true)}
        className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
      >
        Hire Us
      </button>

      {/* Dialog - Centered properly */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div
            ref={dialogRef}
            className="relative w-full max-w-2xl my-8 mx-auto" // Added mx-auto for horizontal centering
          >
            {/* Close Button - Top Right */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -right-2 -top-2 z-10 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-colors shadow-lg"
            >
              {/* <FiX className="h-5 w-5" /> */}
            </button>

            {/* Dialog Content */}
            <div className="rounded-2xl bg-gray-800 shadow-2xl overflow-hidden">
              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[80vh]">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Hire TechnBizness</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form fields remain exactly the same as before */}
                    {/* ... (keep all your existing form fields) ... */}

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Email and Phone - Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label
                        htmlFor="serviceType"
                        className="block text-sm font-medium mb-2"
                      >
                        Service Type *
                      </label>
                      <div className="relative">
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                        {/* <FiChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" /> */}
                      </div>
                    </div>

                    {/* Conditional Fields */}
                    {formData.serviceType === "consultation" && (
                      <div>
                        <label
                          htmlFor="consultationFee"
                          className="block text-sm font-medium mb-2"
                        >
                          Consultation Package *
                        </label>
                        <div className="relative">
                          <select
                            id="consultationFee"
                            name="consultationFee"
                            value={formData.consultationFee}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
                            required
                          >
                            <option value="">Select consultation option</option>
                            {consultationOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {/* <FiChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" /> */}
                        </div>
                      </div>
                    )}

                    {formData.serviceType === "training" && (
                      <div>
                        <label
                          htmlFor="trainingCourse"
                          className="block text-sm font-medium mb-2"
                        >
                          Training Course *
                        </label>
                        <div className="relative">
                          <select
                            id="trainingCourse"
                            name="trainingCourse"
                            value={formData.trainingCourse}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none"
                            required
                          >
                            <option value="">Select training course</option>
                            {trainingCourses.map((course) => (
                              <option key={course.value} value={course.value}>
                                {course.label}
                              </option>
                            ))}
                          </select>
                          {/* <FiChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" /> */}
                        </div>
                      </div>
                    )}

                    {/* Budget */}
                    {!["consultation", "training"].includes(
                      formData.serviceType
                    ) && (
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium mb-2"
                        >
                          Proposed Budget *
                        </label>
                        <input
                          type="text"
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          required
                        />
                      </div>
                    )}

                    {/* Timeline */}
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium mb-2"
                      >
                        Expected Timeline *
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Project Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium mb-2"
                      >
                        Project/Service Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
