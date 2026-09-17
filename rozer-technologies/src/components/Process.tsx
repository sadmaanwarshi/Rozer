import type { LucideIcon } from "lucide-react";

import {
  Sparkles,
  MessageSquare,
  Search,
  Lightbulb,
  Code2,
  Rocket,
  TrendingUp,
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
    title: "Understand",
    description:
      "We understand your business goals, workflows, challenges, customers, teams, and existing technology.",
  },

  {
    icon: Search,
    number: "02",
    title: "Analyze",
    description:
      "We identify bottlenecks, manual work, disconnected systems, technology gaps, and improvement opportunities.",
  },

  {
    icon: Lightbulb,
    number: "03",
    title: "Recommend",
    description:
      "We create a practical technology roadmap and recommend solutions based on impact, feasibility, and business priorities.",
  },

  {
    icon: Code2,
    number: "04",
    title: "Design & Build",
    description:
      "When custom technology is required, we design and develop software around your actual business processes.",
  },

  {
    icon: Rocket,
    number: "05",
    title: "Implement",
    description:
      "We deploy, integrate, test, document, and introduce the solution into your existing business environment.",
  },

  {
    icon: TrendingUp,
    number: "06",
    title: "Manage & Improve",
    description:
      "We support, monitor, maintain, and continuously improve your technology as your business grows.",
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
          From Business Challenge To Technology Solution
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
          We don't start by selling software. We first understand your business,
          identify the right technology opportunities, then design, build,
          implement and continuously improve the solution.
        </p>

      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">

        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">

          {STEPS.map(
            ({ icon: Icon, number, title, description }, index) => (
              <div
                key={number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line */}
                {index < STEPS.length - 1 && (
                  <span className="absolute left-1/2 top-6 hidden h-px w-full bg-blue-200 lg:block" />
                )}

                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-md shadow-blue-900/10">
                  <Icon
                    className="h-5 w-5 text-white"
                    strokeWidth={2}
                  />
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
            )
          )}

        </div>
      </div>
    </section>
  );
}