import { useState } from "react";
import { Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Rozer Technologies transformed our entire production tracking system in 4 months. The ERP they built handles 8 production lines flawlessly. We have saved over half a million dollars in the first year alone.",
    name: "Rajesh Mehta",
    role: "COO, Precision Auto Parts Ltd.",
    initials: "RM",
    avatarColor: "bg-sky-500",
  },
  {
    quote:
      "The telemedicine platform Rozer built cut our patient no-show rate by more than half. Their team understood HIPAA compliance inside and out and delivered ahead of schedule.",
    name: "Dr. Anita Sharma",
    role: "Medical Director, CareWell Clinics",
    initials: "AS",
    avatarColor: "bg-pink-500",
  },
  {
    quote:
      "Our fleet operations were flying blind before Rozer's tracking system. Now we save on fuel every month and our delivery times have never been more predictable.",
    name: "Marcus Chen",
    role: "VP Operations, SwiftHaul Logistics",
    initials: "MC",
    avatarColor: "bg-orange-500",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const goPrev = () =>
    setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const goNext = () =>
    setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    /* Reduced section top padding from py-24 to pt-12 pb-16 */
    <section className="bg-white  pb-16 sm:pb-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
          <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          <span className="text-xs font-semibold tracking-wide text-blue-600">
            CLIENT TESTIMONIALS
          </span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Reduced top margin from mt-12 to mt-8 */}
      <div className="mx-auto mt-8 max-w-3xl px-6 lg:px-10">
        {/* Adjusted padding inside the testimonial card for responsiveness */}
        <div className="rounded-2xl bg-slate-50 p-6 sm:p-10">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
            "{testimonial.quote}"
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white ${testimonial.avatarColor}`}
            >
              {testimonial.initials}
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-blue-600" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}