import { useState } from "react";
import { Sparkles } from "lucide-react";

interface CaseStudy {
  category: string;
  image: string;
  title: string;
  challenge: string;
  solution: string;
  techStack: string[];
  impact: { value: string; label: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    title: "Smart ERP for Precision Auto Parts Maker",
    challenge: "Disconnected spreadsheets across 8 production lines causing operational waste.",
    solution: "Unified ERP with MES integration, automated procurement and production dashboards.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
    impact: [
      { value: "34%", label: "Cost reduction" },
      { value: "2.1x", label: "Faster throughput" },
      { value: "99.9%", label: "Accuracy" },
    ],
  },
  {
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    title: "HIPAA-Compliant Telemedicine Platform",
    challenge: "Legacy portal reduced patient engagement.",
    solution: "Modern healthcare platform with video visits and digital prescriptions.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "WebRTC"],
    impact: [
      { value: "58%", label: "Fewer no-shows" },
      { value: "3x", label: "Consultations" },
      { value: "100%", label: "Compliance" },
    ],
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CASE_STUDIES[activeIndex];

  return (
    <section id="portfolio" className="bg-slate-50 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-xs font-semibold text-blue-600">
              FEATURED CASE STUDIES
            </span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Results That Speak
          </h2>

          <p className="mt-3 text-slate-500">
            Real transformations delivered through technology.
          </p>
        </div>


        <div className="mt-6 flex justify-center gap-3">
          {CASE_STUDIES.map((study,index)=>(
            <button
              key={study.category}
              onClick={()=>setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeIndex===index
                ? "bg-blue-600 text-white shadow"
                : "border bg-white text-slate-600"
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>


        <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-2">

          <div className="relative overflow-hidden rounded-xl">
            <img
              src={active.image}
              alt={active.title}
              className="h-[360px] w-full object-cover"
            />

            <span className="absolute bottom-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              {active.category}
            </span>
          </div>


          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {active.title}
            </h3>


            <div className="mt-4 rounded-xl border border-red-100 bg-red-50 p-4">
              <p className="text-xs font-bold text-red-500">CHALLENGE</p>
              <p className="mt-1 text-sm text-slate-700">
                {active.challenge}
              </p>
            </div>


            <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-xs font-bold text-blue-600">SOLUTION</p>
              <p className="mt-1 text-sm text-slate-700">
                {active.solution}
              </p>
            </div>


            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-500">
                TECH STACK
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {active.techStack.map((tech)=>(
                  <span
                    key={tech}
                    className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


            <div className="mt-5 grid grid-cols-3 gap-4">
              {active.impact.map(item=>(
                <div key={item.label}>
                  <p className="text-xl font-bold text-blue-600">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-500">
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