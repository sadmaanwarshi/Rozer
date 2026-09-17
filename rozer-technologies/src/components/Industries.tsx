import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Factory,
  HeartPulse,
  GraduationCap,
  Truck,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const INDUSTRIES: Industry[] = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Improve production visibility, inventory management, workflow automation and operational efficiency.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Improve appointment management, patient communication, queues, internal workflows and healthcare operations.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Streamline admissions, student management, communication, learning systems and administrative workflows.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Improve fleet visibility, delivery workflows, tracking, coordination and supply-chain operations.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "Improve customer experience, order management, inventory, sales operations and commerce workflows.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Briefcase,
    title: "Professional Services & HR",
    description:
      "Automate recruitment, employee workflows, client management, internal operations and business processes.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />

            <span className="text-xs font-semibold tracking-wider text-blue-600">
              INDUSTRY SOLUTIONS
            </span>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Technology Built Around Real Business Challenges
          </h2>

          <p className="mt-3 text-slate-500">
            We understand how your business operates, identify where technology
            can create value, and then design and implement the right solution.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group rounded-xl border bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${color}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}