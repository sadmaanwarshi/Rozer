import { CircleCheck, Cpu, Award, Headphones } from "lucide-react";

const STATS = [
  { icon: CircleCheck, value: "30+", label: "Projects Delivered" },
  { icon: Cpu, value: "40+", label: "Technologies Mastered" },
  { icon: Award, value: "4+", label: "Years Experience" },
  { icon: Headphones, value: "24/7", label: "Support Availability" },
];

export default function Stats() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 sm:grid-cols-4 lg:px-10">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <Icon className="mb-2 h-6 w-6 text-blue-600" strokeWidth={2} />
            <p className="text-4xl font-extrabold text-blue-600">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
