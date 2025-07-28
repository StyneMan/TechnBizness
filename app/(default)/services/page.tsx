"use client";

import { useState } from "react";
// import { FiArrowRight, FiX } from "react-icons/fi";
import ServiceImage1 from "@/public/images/hero-image-01.jpg";
import ServiceImage2 from "@/public/images/hero-image-01.jpg";
import ServiceImage3 from "@/public/images/hero-image-01.jpg";
import ServiceImage4 from "@/public/images/hero-image-01.jpg";
import ServiceImage5 from "@/public/images/hero-image-01.jpg";
import ServiceImage6 from "@/public/images/hero-image-01.jpg";
import AboutHero from "@/public/images/hero-image-01.jpg";
import Image from "next/image";

type Service = {
  id: number;
  title: string;
  shortDescription: string;
  image: any;
  details: {
    overview: string;
    features: string[];
    useCase: {
      scenario: string;
      solution: string;
      outcome: string;
    };
  };
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Technology Consulting",
      shortDescription:
        "Strategic guidance to align technology with business goals",
      image: ServiceImage1,
      details: {
        overview:
          "Our technology consulting services help businesses identify the right technological solutions to drive growth and efficiency. We analyze your current infrastructure and provide actionable recommendations.",
        features: [
          "Comprehensive technology audit",
          "ROI analysis for tech investments",
          "Digital transformation roadmap",
          "Vendor selection assistance",
        ],
        useCase: {
          scenario:
            "A retail chain struggling with outdated inventory systems causing stock discrepancies.",
          solution:
            "Implemented a modern inventory management system with real-time tracking and predictive analytics.",
          outcome:
            "Reduced stock discrepancies by 78% and improved supply chain efficiency by 40%.",
        },
      },
    },
    {
      id: 2,
      title: "Custom Software Development",
      shortDescription:
        "Tailored solutions built for your specific business needs",
      image: ServiceImage2,
      details: {
        overview:
          "We design and develop custom software applications that solve your unique business challenges. From concept to deployment, we ensure seamless integration with your existing systems.",
        features: [
          "Full-stack development",
          "Cross-platform compatibility",
          "API integration",
          "Ongoing maintenance",
        ],
        useCase: {
          scenario:
            "A healthcare provider needing a secure patient portal for remote consultations.",
          solution:
            "Developed a HIPAA-compliant web and mobile application with video conferencing and EHR integration.",
          outcome:
            "Enabled 30% more patient visits and improved satisfaction scores by 45%.",
        },
      },
    },
    {
      id: 3,
      title: "Cloud Solutions",
      shortDescription:
        "Scalable and secure cloud infrastructure for your business",
      image: ServiceImage3,
      details: {
        overview:
          "Our cloud solutions provide flexible, secure, and cost-effective infrastructure to support your business operations. We help migrate, optimize, and manage your cloud environment.",
        features: [
          "Cloud migration strategy",
          "Multi-cloud management",
          "Cost optimization",
          "Disaster recovery",
        ],
        useCase: {
          scenario:
            "A financial services firm with on-premise servers struggling with scalability during peak periods.",
          solution:
            "Migrated to a hybrid cloud architecture with auto-scaling capabilities.",
          outcome:
            "Achieved 99.9% uptime and reduced infrastructure costs by 35%.",
        },
      },
    },
    {
      id: 4,
      title: "AI & Automation",
      shortDescription: "Intelligent solutions to streamline your operations",
      image: ServiceImage4,
      details: {
        overview:
          "Leverage artificial intelligence and automation to transform your business processes. We implement practical AI solutions that deliver immediate value.",
        features: [
          "Process automation",
          "Predictive analytics",
          "Chatbots & virtual assistants",
          "Machine learning models",
        ],
        useCase: {
          scenario:
            "A manufacturing company experiencing quality control issues and production delays.",
          solution:
            "Implemented computer vision for defect detection and predictive maintenance algorithms.",
          outcome: "Reduced defects by 65% and decreased downtime by 50%.",
        },
      },
    },
    {
      id: 5,
      title: "Cybersecurity Services",
      shortDescription: "Comprehensive protection for your digital assets",
      image: ServiceImage5,
      details: {
        overview:
          "Protect your business from evolving cyber threats with our comprehensive security services. We assess vulnerabilities and implement robust security measures.",
        features: [
          "Security assessments",
          "Threat detection & response",
          "Compliance management",
          "Employee training",
        ],
        useCase: {
          scenario:
            "An e-commerce company vulnerable to data breaches and payment fraud.",
          solution:
            "Deployed end-to-end encryption, fraud detection AI, and staff security training.",
          outcome:
            "Eliminated payment fraud incidents and achieved PCI DSS compliance.",
        },
      },
    },
    {
      id: 6,
      title: "Ongoing Support",
      shortDescription: "Reliable technical support for continuous operations",
      image: ServiceImage6,
      details: {
        overview:
          "Our support services ensure your technology operates smoothly with minimal downtime. We provide proactive monitoring and rapid response to technical issues.",
        features: [
          "24/7 monitoring",
          "Help desk support",
          "Performance optimization",
          "Regular system updates",
        ],
        useCase: {
          scenario:
            "A SaaS company experiencing frequent service interruptions affecting customers.",
          solution:
            "Implemented proactive monitoring with automated alerts and dedicated support team.",
          outcome:
            "Reduced downtime by 90% and improved customer satisfaction ratings.",
        },
      },
    },
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Technology solutions designed to solve your business challenges
              and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-gray-800/50 rounded-xl p-6 shadow-2xl cursor-pointer hover:bg-gray-800 transition-all group"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.shortDescription}</p>
              <div className="flex items-center text-indigo-400 font-medium">
                <span>Learn more</span>
                {/* <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" /> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Detail Dialog */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="sticky top-0 bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  {/* <FiX className="text-xl" /> */}
                </button>
              </div>

              <div className="p-6">
                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Overview</h3>
                  <p className="text-gray-300">
                    {selectedService.details.overview}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {selectedService.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Case */}
                <div className="bg-gray-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Real-World Application
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-indigo-300 mb-1">
                        Scenario
                      </h4>
                      <p className="text-gray-300">
                        {selectedService.details.useCase.scenario}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-indigo-300 mb-1">
                        Our Solution
                      </h4>
                      <p className="text-gray-300">
                        {selectedService.details.useCase.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-indigo-300 mb-1">
                        Business Outcome
                      </h4>
                      <p className="text-gray-300">
                        {selectedService.details.useCase.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    Get This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
