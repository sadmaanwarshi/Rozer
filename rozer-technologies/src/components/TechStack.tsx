import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Atom,
  Triangle,
  FileType,
  Wind,
  Leaf,
  Hexagon,
  Code2,
  Zap,
  Database,
  CircleDot,
  Container,
  Cloud,
  Wrench,
  Settings,
  Bot,
  Link2,
  Smile,
} from "lucide-react";

interface Tool {
  icon: LucideIcon;
  iconColor: string;
  name: string;
}

interface Category {
  label: string;
  tools: Tool[];
}

const CATEGORIES: Category[] = [
  {
    label: "Frontend",
    tools: [
      { icon: Atom, iconColor: "text-cyan-400", name: "React" },
      { icon: Triangle, iconColor: "text-white", name: "Next.js" },
      { icon: FileType, iconColor: "text-blue-400", name: "TypeScript" },
      { icon: Wind, iconColor: "text-sky-400", name: "Tailwind CSS" },
    ],
  },
  {
    label: "Backend",
    tools: [
      { icon: Leaf, iconColor: "text-green-500", name: "Spring Boot" },
      { icon: Hexagon, iconColor: "text-emerald-400", name: "Node.js" },
      { icon: Code2, iconColor: "text-yellow-400", name: "Python" },
      { icon: Zap, iconColor: "text-orange-400", name: "FastAPI" },
    ],
  },
  {
    label: "Database",
    tools: [
      { icon: Database, iconColor: "text-blue-300", name: "PostgreSQL" },
      { icon: Leaf, iconColor: "text-green-400", name: "MongoDB" },
      { icon: CircleDot, iconColor: "text-red-400", name: "Redis" },
      { icon: Database, iconColor: "text-sky-400", name: "MySQL" },
    ],
  },
  {
    label: "Infrastructure",
    tools: [
      { icon: Container, iconColor: "text-sky-400", name: "Docker" },
      { icon: Cloud, iconColor: "text-slate-300", name: "AWS" },
      { icon: Wrench, iconColor: "text-slate-300", name: "GitHub Actions" },
      { icon: Settings, iconColor: "text-blue-400", name: "Kubernetes" },
    ],
  },
  {
    label: "AI",
    tools: [
      { icon: Bot, iconColor: "text-slate-200", name: "OpenAI" },
      { icon: Link2, iconColor: "text-slate-300", name: "LangChain" },
      { icon: CircleDot, iconColor: "text-pink-400", name: "TensorFlow" },
      { icon: Smile, iconColor: "text-yellow-400", name: "Hugging Face" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="bg-[#0a0e1c] py-16">
      {/* Heading Section */}
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          <span className="text-xs font-semibold tracking-wide text-blue-300">
            TECHNOLOGY STACK
          </span>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-white">
          Built with the Best Tools
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
          We choose proven, battle-tested technologies that scale with your
          growth.
        </p>
      </div>

      {/* 
        FIX APPLIED HERE:
        1. Changed to a flex container that centers its children (`flex flex-col items-center`)
        2. Wrapped the mapped items in a `w-full sm:w-fit` container so it hugs the content
           and centers the entire block perfectly under the heading.
      */}
      <div className="mx-auto mt-14 flex flex-col items-center px-6 lg:px-10">
        <div className="w-full space-y-5 sm:w-fit">
          {CATEGORIES.map(({ label, tools }) => (
            <div
              key={label}
              className="flex flex-col gap-4 border-b border-white/5 pb-5 sm:flex-row sm:items-center sm:gap-6 last:border-none"
            >
              <div className="flex shrink-0 items-center justify-center gap-4 sm:w-32 sm:justify-end">
                <span className="text-sm font-medium text-slate-400">
                  {label}
                </span>
                <span className="hidden h-4 w-px bg-white/10 sm:block" />
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                {tools.map(({ icon: Icon, iconColor, name }) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.08]"
                  >
                    <Icon className={`h-4 w-4 ${iconColor}`} strokeWidth={2} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}