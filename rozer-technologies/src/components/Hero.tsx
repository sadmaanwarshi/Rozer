import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    value: [
      "Based in Kolkata, India",
      "Serving businesses across India and worldwide",
    ],
  },
  {
    icon: Phone,
    label: "Phone",
    value: ["+91 7004431954"],
  },
  {
    icon: Mail,
    label: "Email",
    value: [
      "info@rozer.online",
      "sadmaan.warshi@rozer.online",
    ],
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: ["Monday - Friday 9:00 AM - 7:00 PM"],
  },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-10 top-40 h-56 w-56 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-20 left-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-10 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />

              <span className="text-[11px] font-semibold tracking-[0.15em] text-blue-300">
                TECHNOLOGY CONSULTING & DIGITAL TRANSFORMATION
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn Business
              <br />

              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Challenges Into
              </span>

              <br />

              Technology
              <br />

              Opportunities
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 lg:text-lg">
              Rozer Technologies helps businesses identify where technology
              can improve operations, customer experience, employee
              productivity and growth — then turns those opportunities into
              practical solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="
                  group flex items-center gap-2
                  rounded-xl
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  px-6 py-3
                  text-sm font-semibold text-white
                  shadow-lg shadow-blue-600/30
                  transition hover:-translate-y-0.5
                "
              >
                Book a Technology Consultation

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-6 py-3
                  text-sm font-semibold text-slate-200
                  transition hover:bg-white/10
                "
              >
                Explore Our Solutions
              </button>
            </div>
          </div>

          {/* RIGHT CONTACT CARD */}
          <div>
            <div
              className="
                overflow-hidden rounded-3xl
                border border-white/10
                bg-gradient-to-b from-[#12182d] to-[#090e20]
                shadow-2xl shadow-black/40
              "
            >
              <div
                className="
                  flex items-center gap-2
                  border-b border-white/10
                  bg-white/[0.03]
                  px-6 py-4
                "
              >
                <span className="h-3 w-3 rounded-full bg-red-500/80" />

                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />

                <span className="h-3 w-3 rounded-full bg-green-500/80" />

                <span className="ml-3 font-mono text-xs text-slate-400">
                  Talk to Rozer
                </span>
              </div>

              <div className="space-y-6 p-7">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl bg-blue-500/15
                      "
                    >
                      <Icon className="h-5 w-5 text-blue-400" />
                    </span>

                    <div>
                      <p
                        className="
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        {label}
                      </p>

                      <div className="mt-1 space-y-1">
                        {value.map((item) => (
                          <p
                            key={item}
                            className="
                              text-[15px]
                              font-medium
                              leading-relaxed
                              text-slate-200
                            "
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}