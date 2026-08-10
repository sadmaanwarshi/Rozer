import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  TrendingUp,
  Lock,
  Code2,
  MessageSquare,
  Settings,
  Zap,
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
    icon: TrendingUp,
    title: "Designed to Scale",
    description:
      "Architecture that handles 10 users or 10 million — we build with elastic infrastructure from day one.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, RBAC, penetration testing, and OWASP compliance baked into every project.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "SOLID principles, domain-driven design, and modular codebases that any developer can maintain.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Daily standups, sprint demos, Slack channels, and a dedicated project manager on every engagement.",
  },
  {
    icon: Settings,
    title: "Long-Term Maintenance",
    description:
      "Post-launch SLAs, proactive monitoring, security patches, and a roadmap for continuous improvement.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description:
      "From signed contract to first working prototype in 2 weeks — our battle-tested onboarding process moves fast.",
  },
];

const HIGHLIGHTS = [
  "100% project completion rate",
  "4.9/5 average client rating",
  "NDA-first engagement policy",
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
            The Standard Is
            <br />
            <span className="text-blue-600">Always Excellence</span>
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
            We are not a feature factory. Every system we build is engineered
            to solve a real business problem, deliver ROI, and keep
            delivering value for years to come.
          </p>

          {/* Changed to flex-col so the 3 items stack neatly instead of leaving an orphan in a grid */}
          <div className="mt-6 flex flex-col gap-3">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-medium text-slate-600">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-8 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/20 transition-transform hover:scale-[1.03]"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Right column: feature grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-slate-50 p-6 transition-colors hover:bg-slate-100"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                {/* Fixed invalid h-4.5/w-4.5 class to h-5/w-5 */}
                <Icon className="h-5 w-5 text-blue-600" strokeWidth={2} />
              </span>
              <h3 className="text-base font-bold text-slate-900">{title}</h3>
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