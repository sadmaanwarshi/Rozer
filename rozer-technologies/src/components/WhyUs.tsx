import type { LucideIcon } from "lucide-react";

import {
  Sparkles,
  Search,
  Lightbulb,
  Code2,
  MessageSquare,
  Settings,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Search,
    title: "Business-First Approach",
    description:
      "We start by understanding your business, workflows, challenges and goals before recommending any technology.",
  },

  {
    icon: Lightbulb,
    title: "Technology With Purpose",
    description:
      "Every recommendation is based on business value, feasibility, scalability and long-term impact — not technology trends.",
  },

  {
    icon: Code2,
    title: "Consulting + Development",
    description:
      "We don't stop at recommendations. When software is the right solution, we design, develop and implement it around your actual business processes.",
  },

  {
    icon: MessageSquare,
    title: "Transparent Collaboration",
    description:
      "Clear communication throughout discovery, planning, development and implementation keeps your team involved and informed.",
  },

  {
    icon: Settings,
    title: "Ongoing Technology Management",
    description:
      "After launch, we can continue supporting, maintaining, monitoring and improving your systems as your business evolves.",
  },

  {
    icon: TrendingUp,
    title: "Built for Long-Term Value",
    description:
      "We focus on solutions that improve operations, customer experience, productivity and the ability of your business to grow.",
  },
];

const HIGHLIGHTS = [
  "Business-first technology decisions",
  "Consulting through implementation",
  "Long-term technology partnership",
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">

        {/* Left column */}
        <div className="flex flex-col justify-center">

          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">

            <Sparkles className="h-3.5 w-3.5 text-blue-600" />

            <span className="text-xs font-semibold tracking-wide text-blue-600">
              WHY ROZER TECHNOLOGIES
            </span>

          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            We Understand First.
            <br />

            <span className="text-blue-600">
              Then We Build.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
            Rozer combines technology consulting with software development and
            implementation. We identify the right opportunities first, then
            build and manage technology that solves real business problems.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-2">

                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />

                <span className="text-sm font-medium text-slate-600">
                  {item}
                </span>

              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-8 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/20 transition-transform hover:scale-[1.03]"
          >
            Book a Technology Consultation

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

        </div>

        {/* Right column */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-slate-50 p-6 transition-colors hover:bg-slate-100"
            >

              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon
                  className="h-5 w-5 text-blue-600"
                  strokeWidth={2}
                />
              </span>

              <h3 className="text-base font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}