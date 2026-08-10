import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  MessageSquare,
  Layers,
  Wand2,
  Code2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

interface Step {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description:
      "Deep-dive workshops to map business goals, workflows, pain points, and technical constraints.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Planning",
    description:
      "Architecture design, project roadmap, sprint milestones, and resource allocation.",
  },
  {
    icon: Wand2,
    number: "03",
    title: "UI/UX Design",
    description:
      "Wireframes, interactive prototypes, and pixel-perfect designs with stakeholder approval loops.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Development",
    description:
      "Agile sprints with daily standups, code reviews, and continuous integration workflows.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Testing",
    description:
      "Functional, performance, security, and UAT testing with comprehensive bug tracking.",
  },
  {
    icon: Headphones,
    number: "06",
    title: "Deployment & Support",
    description:
      "Zero-downtime deployment, team training, documentation, and long-term maintenance SLAs.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span className="text-xs font-semibold tracking-wide text-blue-600">
            HOW WE WORK
          </span>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Our Development Process
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-500">
          A proven six-step framework that eliminates ambiguity and maximizes
          delivery quality.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
          {STEPS.map(({ icon: Icon, number, title, description }, index) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {index < STEPS.length - 1 && (
                <span className="absolute left-1/2 top-6 hidden h-px w-full bg-blue-200 lg:block" />
              )}

              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-md shadow-blue-900/10">
                <Icon className="h-5 w-5 text-white" strokeWidth={2} />
              </span>

              <span className="mt-2 text-xs font-bold text-blue-600">
                {number}
              </span>

              <h3 className="mt-1 text-base font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-2 max-w-[180px] text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}