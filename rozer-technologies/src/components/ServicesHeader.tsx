import { Sparkles } from "lucide-react";

export default function ServicesHeader() {
  return (
    <section className="bg-slate-50 pb-20 pt-16">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span className="text-xs font-semibold tracking-wide text-blue-600">
            OUR SERVICES
          </span>
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
          End-to-End Software Solutions
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-500">
          From ideation to deployment, we deliver every layer of your digital
          infrastructure with precision and purpose.
        </p>
      </div>
    </section>
  );
}
