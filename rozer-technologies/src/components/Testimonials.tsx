import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  logo?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Rozer Technologies built a professional website that gives QuantumEdge Technologies a clear online presence. The site presents our company and services clearly and makes it easy for visitors to get in touch with us.",
    name: "Sushanta Majumdar",
    role: "CEO, Quantum Edge Technologies Pvt. Ltd.",
    initials: "SM",
    avatarColor: "bg-blue-700",
    logo: "https://www.quantumedge.co.in/favicon.png",
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
  const [failedLogos, setFailedLogos] = useState<string[]>([]);

  const testimonial = TESTIMONIALS[index];
  const logo = testimonial.logo;

  const goPrev = () =>
    setIndex((current) =>
      current === 0 ? TESTIMONIALS.length - 1 : current - 1,
    );

  const goNext = () =>
    setIndex((current) =>
      current === TESTIMONIALS.length - 1 ? 0 : current + 1,
    );

  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
          <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-blue-600" />
          <span className="text-xs font-semibold tracking-wide text-blue-600">
            CLIENT TESTIMONIALS
          </span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="mx-auto mt-8 max-w-3xl px-6 lg:px-10">
        <div
          aria-live="polite"
          aria-atomic="true"
          className="rounded-2xl bg-slate-50 p-6 sm:p-10"
        >
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }, (_, position) => (
              <Star
                key={position}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <blockquote className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            {logo && !failedLogos.includes(logo) ? (
              <img
                key={logo}
                src={logo}
                alt=""
                width={44}
                height={44}
                onError={() => {
                  setFailedLogos((current) => [...current, logo]);
                }}
                className="h-11 w-11 shrink-0 rounded-xl border border-slate-200 bg-white object-contain p-1"
              />
            ) : (
              <span
                aria-hidden="true"
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white ${testimonial.avatarColor}`}
              >
                {testimonial.initials}
              </span>
            )}

            <div>
              <p className="text-sm font-bold text-slate-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((item, position) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(position)}
                aria-label={`Go to testimonial from ${item.name}`}
                aria-current={position === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  position === index ? "w-6 bg-blue-600" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}