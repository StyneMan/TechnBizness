"use client";

import Image from "next/image";
import AboutHero from "@/public/images/hero-image-01.jpg";
import TeamMeeting from "@/public/images/hero-image-01.jpg";
import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
// import { FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <PageIllustration />
      <div className="text-gray-100">
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
                About TechnBizness
              </h1>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                A subsidiary of Creflic Technologies - Bridging business and
                technology for optimal performance
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg mb-6">
                TechnBizness is a leading technology consultancy firm dedicated
                to helping businesses leverage cutting-edge solutions to
                streamline operations and maximize profitability. As a
                subsidiary of Creflic Technologies, we bring decades of combined
                experience to every client engagement.
              </p>
              <p className="text-lg">
                Our team of experts specializes in identifying technological
                gaps in business processes and implementing tailored solutions
                that drive growth and efficiency.
              </p>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={TeamMeeting}
                alt="TechnBizness team collaborating"
                width={800}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-700/50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-500 p-3 rounded-full mr-4">
                    {/* <FaRocket className="text-white text-xl" /> */}
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg">
                  To connect businesses with transformative technology solutions
                  that enable seamless operations, enhanced productivity, and
                  maximum profitability. We bridge the gap between business
                  needs and technological capabilities to create sustainable
                  competitive advantages.
                </p>
              </div>

              <div className="bg-gray-700/50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-500 p-3 rounded-full mr-4">
                    {/* <FaLightbulb className="text-white text-xl" /> */}
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg">
                  To be the premier technology partner for businesses worldwide,
                  recognized for our innovative solutions that transform
                  operations and drive measurable results. We envision a future
                  where technology seamlessly integrates with every business
                  process to create frictionless experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do at TechnBizness
            </p>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                // icon: <FaHandshake className="text-white text-2xl" />,
                title: "Client-Centric Approach",
                description:
                  "We prioritize our clients' needs above all else, delivering customized solutions that address their unique challenges.",
              },
              {
                // icon: <FaLightbulb className="text-white text-2xl" />,
                title: "Innovation",
                description:
                  "We constantly explore emerging technologies to provide forward-thinking solutions that keep our clients ahead.",
              },
              {
                // icon: <FaRocket className="text-white text-2xl" />,
                title: "Excellence",
                description:
                  "We commit to the highest standards in all our deliverables, ensuring quality and reliability.",
              },
              {
                // icon: <FaHandshake className="text-white text-2xl" />,
                title: "Integrity",
                description:
                  "We maintain transparency and honesty in all our dealings, building trust with every stakeholder.",
              },
              {
                // icon: <FaLightbulb className="text-white text-2xl" />,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork, both within our organization and with our clients.",
              },
              {
                // icon: <FaRocket className="text-white text-2xl" />,
                title: "Results-Driven",
                description:
                  "We focus on delivering measurable outcomes that directly impact our clients' bottom line.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all"
              >
                <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {/* {value.icon} */}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let TechnBizness help you leverage technology for maximum
              efficiency and profitability.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </section>
        <FAQSection />
      </div>
    </>
  );
}


export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0); // First item expanded by default

  const faqs = [
    {
      question: "What services does TechnBizness offer?",
      answer:
        "TechnBizness provides comprehensive technology consulting services including digital transformation strategy, business process automation, custom software development, system integration, and ongoing technology support. We specialize in creating tailored solutions that bridge business needs with technological capabilities.",
    },
    {
      question: "How is TechnBizness related to Creflic Technologies?",
      answer:
        "TechnBizness is a fully owned subsidiary of Creflic Technologies. While we operate as an independent brand, we leverage Creflic's extensive resources, expertise, and infrastructure to deliver superior solutions to our clients.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "While our solutions are adaptable across industries, we have particular expertise in financial services, healthcare, retail, and manufacturing. Our team has deep experience implementing technology solutions that address industry-specific challenges and compliance requirements.",
    },
    {
      question: "How do you ensure the security of client data?",
      answer:
        "Data security is paramount at TechnBizness. We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance with industry standards like ISO 27001. All our solutions are designed with security as a foundational principle.",
    },
    {
      question:
        "What makes TechnBizness different from other tech consultants?",
      answer:
        "Our unique value comes from our business-first approach. Rather than starting with technology, we begin by deeply understanding your business objectives. This allows us to recommend solutions that truly align with your goals rather than pushing pre-packaged options. Our Creflic Technologies backing also gives us access to resources most boutique firms can't match.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about TechnBizness
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-700 last:border-b-0"
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-100">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <p>+</p>
                  // <FiChevronUp className="text-indigo-400 text-xl" />
                ) : (
                  <p>-</p>
                  // <FiChevronDown className="text-indigo-400 text-xl" />
                )}
              </button>
              <div
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}