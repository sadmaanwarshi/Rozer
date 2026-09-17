import { useState } from "react";
import { Sparkles } from "lucide-react";

interface CaseStudy {
  category: string;
  projectType: string;
  image: string;
  title: string;
  challenge: string;
  solution: string;
  techStack: string[];
  impact: { value: string; label: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    category: "Healthcare",
    projectType: "Internal Product",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",

    title: "Healthcare Queue & Appointment Platform",

    challenge:
      "Clinics often depend on phone calls, manual appointment handling and disconnected processes to manage patients and queues.",

    solution:
      "A digital healthcare platform designed to streamline appointment booking, queue management, doctor availability and administrative workflows.",

    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "REST API",
    ],

    impact: [
      {
        value: "Digital",
        label: "Appointments",
      },
      {
        value: "Unified",
        label: "Queue Management",
      },
      {
        value: "Better",
        label: "Operational Visibility",
      },
    ],
  },

  {
    category: "HR & Workforce",
    projectType: "Internal Product",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",

    title: "Human Capital Management Platform",

    challenge:
      "Employee information, attendance, recruitment and workforce processes can become difficult to manage when handled across spreadsheets and disconnected tools.",

    solution:
      "A centralized human capital management system designed to manage employee records, attendance, recruitment and HR workflows from one platform.",

    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "REST API",
    ],

    impact: [
      {
        value: "Centralized",
        label: "Employee Data",
      },
      {
        value: "Structured",
        label: "HR Workflows",
      },
      {
        value: "Simplified",
        label: "Administration",
      },
    ],
  },

  {
    category: "Property Technology",
    projectType: "Prototype",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",

    title: "PG & Accommodation Finder",

    challenge:
      "Students and professionals often struggle to discover suitable accommodation because listings, pricing and availability are scattered across different sources.",

    solution:
      "A digital accommodation discovery platform designed to simplify property search, filtering and communication between users and property providers.",

    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "REST API",
    ],

    impact: [
      {
        value: "Simplified",
        label: "Property Discovery",
      },
      {
        value: "Structured",
        label: "Search Experience",
      },
      {
        value: "Direct",
        label: "User Connection",
      },
    ],
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = CASE_STUDIES[activeIndex];

  return (
    <section id="portfolio" className="bg-slate-50 py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />

            <span className="text-xs font-semibold text-blue-600">
              SELECTED WORK
            </span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            From Business Problems To Practical Solutions
          </h2>

          <p className="mt-3 text-slate-500">
            Explore how we approach real business challenges through analysis,
            technology strategy and software implementation.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {CASE_STUDIES.map((study, index) => (
            <button
              key={study.category}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeIndex === index
                  ? "bg-blue-600 text-white shadow"
                  : "border bg-white text-slate-600"
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>

        {/* Case Study */}
        <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-2">

          {/* Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={active.image}
              alt={active.title}
              loading="lazy"
              className="h-[360px] w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                {active.category}
              </span>

              <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white">
                {active.projectType}
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {active.title}
            </h3>

            {/* Challenge */}
            <div className="mt-4 rounded-xl border border-red-100 bg-red-50 p-4">
              <p className="text-xs font-bold text-red-500">
                BUSINESS CHALLENGE
              </p>

              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                {active.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-xs font-bold text-blue-600">
                ROZER APPROACH
              </p>

              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                {active.solution}
              </p>
            </div>

            {/* Tech */}
            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-500">
                TECHNOLOGY
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {active.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="mt-5 grid grid-cols-3 gap-4">
              {active.impact.map((item) => (
                <div key={item.label}>
                  <p className="text-lg font-bold text-blue-600">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}