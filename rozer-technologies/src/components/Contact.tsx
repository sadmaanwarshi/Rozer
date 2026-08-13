import { useState, type FormEvent } from "react";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { useCreateContactMutation } from "../api/contactApi";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "info@rozer.online" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 7004431954" },
  { icon: MapPin, label: "Office", value: "Kolkata, India" },
];

const SERVICES = [
  "Custom Software Development",
  "ERP Systems",
  "HRMS Solutions",
  "CRM Platforms",
  "AI & Automation",
  "Web Applications",
];

const COUNTRY_CODES = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+971", country: "AE" },
  { code: "+65", country: "SG" },
  { code: "+880", country: "BD" },
  { code: "+92", country: "PK" },
  { code: "+94", country: "LK" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+81", country: "JP" },
];

const INITIAL_FORM = {
  fullName: "",
  email: "",
  countryCode: "+91",
  phoneNumber: "",
  company: "",
  service: "",
  details: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);

  const [createContact, { isLoading, isSuccess, isError }] =
    useCreateContactMutation();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await createContact({
        fullName: form.fullName,
        email: form.email,

        // Country code + phone number combined
        phoneNumber: `${form.countryCode}${form.phoneNumber}`,

        companyAddress: form.company,
        serviceRequired: form.service,
        projectDetails: form.details,
      }).unwrap();

      setForm(INITIAL_FORM);
    } catch (err) {
      console.error("Contact submission failed:", err);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a0e1c] to-[#10163a] py-16 sm:py-24"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-semibold tracking-wide text-blue-300">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Let's Build Something{" "}
              <span className="text-blue-500">Remarkable</span>
            </h2>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-400">
              Tell us about your project. Our team will review your
              requirements and schedule a free 45-minute consultation within
              24 hours.
            </p>

            <div className="mt-8 space-y-5">
              {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </span>

                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm font-semibold text-white">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/917004431954"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20">
            <MapPin className="h-5 w-5 text-blue-400" />
            <p className="mt-2 text-sm font-medium text-slate-300">
              Bengaluru, Karnataka, India
            </p>
            <p className="text-xs text-slate-500">Global Tech Hub</p>
          </div>
        </div>

        {/* FORM */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">
          <h3 className="text-xl font-bold text-white">
            Book Free Consultation
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Full Name + Email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-300">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Rajesh Mehta"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-300">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rajesh@company.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-300">
                Phone Number *
              </label>

              <div className="flex w-full overflow-hidden rounded-lg border border-white/10 bg-white/5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                {/* Country Code */}
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  aria-label="Country code"
                  className="w-[105px] shrink-0 cursor-pointer border-r border-white/10 bg-[#0d1226] px-3 py-2.5 text-sm text-white outline-none"
                >
                  {COUNTRY_CODES.map(({ code, country }) => (
                    <option key={`${country}-${code}`} value={code}>
                      {country} {code}
                    </option>
                  ))}
                </select>

                {/* Phone Number */}
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="7004431954"
                  inputMode="numeric"
                  autoComplete="tel"
                  className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-300">
                Company Name
              </label>

              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Service */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-300">
                Service Required
              </label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`w-full rounded-lg border border-white/10 bg-[#0d1226] px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${form.service ? "text-white" : "text-slate-400"
                  }`}
              >
                <option value="" disabled>
                  Select a service...
                </option>

                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Details */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-300">
                Project Details
              </label>

              <textarea
                name="details"
                rows={4}
                value={form.details}
                onChange={handleChange}
                placeholder="Tell us about your project, current challenges, and goals..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Success */}
            {isSuccess && (
              <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-400">
                Your consultation request has been submitted successfully our
                team will connect you soon.
              </p>
            )}

            {/* Error */}
            {isError && (
              <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
                Unable to submit your request. Please try again.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />

              {isLoading
                ? "Sending..."
                : "Send Message & Book Consultation"}
            </button>

            <p className="text-center text-xs text-slate-500">
              Free consultation &bull; No commitment &bull; NDA available
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

