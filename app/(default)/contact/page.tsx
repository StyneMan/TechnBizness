"use client";

import Image from "next/image";
import { useState } from "react";
import AboutHero from "@/public/images/hero-image-01.jpg";
// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiClock,
//   FiChevronDown,
//   FiChevronUp,
// } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [activeFaqIndex, setActiveFaqIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What's the best way to contact TechnBizness?",
      answer:
        "For general inquiries, our contact form is the fastest way to reach us. For urgent matters, please call our support line during business hours.",
    },
    {
      question: "How quickly can I expect a response?",
      answer:
        "We typically respond to all inquiries within 1 business day. Support requests are prioritized and usually receive a response within 4 hours during business hours.",
    },
    {
      question: "Do you offer in-person consultations?",
      answer:
        "Yes, we welcome scheduled in-person meetings at our headquarters. Please contact us to arrange an appointment with our specialists.",
    },
    {
      question: "What information should I include in my support request?",
      answer:
        "Please include details about your issue, any error messages you're receiving, steps to reproduce the problem, and your contact information for faster resolution.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? -1 : index);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <Image
          src={AboutHero}
          alt="TechnBizness team working together"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/50 flex items-end pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact TechnBizness
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, support, or partnership
              opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800/50 rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
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
                </div>
                <div className="mb-6">
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
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section - Moved below form on mobile */}
            <div className="mt-12 lg:hidden">
              <FAQSection
                faqs={faqs}
                activeIndex={activeFaqIndex}
                toggleFaq={toggleFaq}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800/50 rounded-xl p-8 shadow-2xl h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              {/* Help Lines */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  {/* <FiPhone className="mr-2 text-indigo-400" /> */}
                  Help Lines
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="text-indigo-400 font-medium w-24">
                      Sales:
                    </span>
                    <span>+1 (800) 123-4567</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-indigo-400 font-medium w-24">
                      Support:
                    </span>
                    <span>+1 (800) 987-6543</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-indigo-400 font-medium w-24">
                      Emergency:
                    </span>
                    <span>+1 (800) 555-7890</span>
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  {/* <FiMapPin className="mr-2 text-indigo-400" /> */}
                  Our Office
                </h3>
                <address className="not-italic">
                  <p>TechnBizness Headquarters</p>
                  <p>123 Technology Park Drive</p>
                  <p>San Francisco, CA 94107</p>
                  <p>United States</p>
                </address>
              </div>

              {/* Business Hours */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  {/* <FiClock className="mr-2 text-indigo-400" /> */}
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-400">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-400">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="rounded-xl overflow-hidden h-64 my-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.138053615209!2d-122.3898479242285!3d37.78665777197197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f10f5a3a9%3A0x3a7b7a3e3a3a3a3a!2s123%20Technology%20Park%20Dr%2C%20San%20Francisco%2C%20CA%2094107%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TechnBizness Office Location"
          ></iframe>
        </div>

        {/* FAQ Section - Full width below on mobile */}
        <div className="mt-12">
          <div className="rounded-xl p-8 ">
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-700 last:border-b-0 pb-4"
                >
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-medium">{faq.question}</h3>
                    {activeFaqIndex === index ? (
                      <p>+</p>
                    ) : (
                      //   <FiChevronUp className="text-indigo-400" />
                      <p>-</p>
                      //   <FiChevronDown className="text-indigo-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaqIndex === index ? "max-h-48 pt-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Separate FAQ component for better organization (could be in separate file)
function FAQSection({
  faqs,
  activeIndex,
  toggleFaq,
}: {
  faqs: { question: string; answer: string }[];
  activeIndex: number;
  toggleFaq: (index: number) => void;
}) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 last:border-b-0 pb-4"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="font-medium">{faq.question}</h3>
              {activeIndex === index ? (
                <p>+</p>
                // <FiChevronUp className="text-indigo-400" />
              ) : (
                <p>-</p>
                // <FiChevronDown className="text-indigo-400" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-48 pt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-300 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
