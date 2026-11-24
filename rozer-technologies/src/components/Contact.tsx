import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import { useCreateContactMutation } from "../api/contactApi";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@rozertechnologies.com",
    href: "mailto:info@rozertechnologies.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 7004431954",
    href: "tel:+917004431954",
  },
  { icon: MapPin, label: "Office", value: "Kolkata, India" },
];

const SERVICES = [
  "Technology Consulting",
  "Digital Transformation",
  "Business Automation",
  "AI & Intelligent Solutions",
  "Custom Software Development",
  "Managed Technology",
  "Not Sure Yet — Need Guidance",
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

const LABEL_CLASS = "mb-1.5 block text-xs font-medium text-slate-300";
const INPUT_CLASS =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

function getErrorMessage(error: unknown) {
  if (typeof error === "object" && error !== null && "status" in error) {
    if (error.status === 429) {
      return "Too many requests. Please wait a moment and try again.";
    }

    if (error.status === 400 && "data" in error) {
      const { data } = error;

      if (
        typeof data === "object" &&
        data !== null &&
        "message" in data &&
        typeof data.message === "string"
      ) {
        return data.message;
      }
    }
  }

  return "Unable to submit your request. Please try again.";
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [reference, setReference] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [createContact, { isLoading }] = useCreateContactMutation();

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.currentTarget;
    setForm((previous) => ({ ...previous, [name]: value }));
    setErrorMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) return;

    setReference(null);
    setErrorMessage("");

    const fullName = form.fullName.trim();
    const projectDetails = form.details.trim();
    const enteredPhone = form.phoneNumber.trim().replace(/[\s().-]/g, "");

    if (!fullName || !form.service || !projectDetails) {
      setErrorMessage("Enter your name, choose a service, and describe your project.");
      return;
    }

    const phoneNumber = enteredPhone.startsWith("+")
      ? enteredPhone
      : `${form.countryCode}${enteredPhone}`;

    if (!/^\+[1-9]\d{7,14}$/.test(phoneNumber)) {
      setErrorMessage("Enter a valid phone number with its country code.");
      return;
    }

    try {
      const result = await createContact({
        fullName,
        email: form.email.trim(),
        phoneNumber,
        companyAddress: form.company.trim(),
        serviceRequired: form.service,
        projectDetails,
      }).unwrap();

      setReference(result.reference);
      setForm(INITIAL_FORM);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a0e1c] to-[#10163a] py-16 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs font-semibold tracking-wide text-blue-300">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Let's Understand Your{" "}
              <span className="text-blue-500">Business Challenge</span>
            </h2>

            <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-400">
              Tell us about your business, current challenges and what you would like to
              improve. We'll review your requirements and explore where technology can
              create meaningful value.
            </p>

            <div className="mt-8 space-y-5">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </span>

                  <div>
                    <p className="text-xs text-slate-500">{label}</p>

                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-white hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white">{value}</p>
                    )}
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
              Kolkata, West Bengal, India
            </p>
            <p className="text-xs text-slate-500">
              Serving businesses across India and worldwide
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">
          <h3 className="text-xl font-bold text-white">
            Book a Technology Consultation
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={LABEL_CLASS}>
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={150}
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Rajesh Mehta"
                  className={INPUT_CLASS}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={LABEL_CLASS}>
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="rajesh@company.com"
                  className={INPUT_CLASS}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-phone" className={LABEL_CLASS}>
                Phone Number *
              </label>

              <div className="flex w-full overflow-hidden rounded-lg border border-white/10 bg-white/5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <select
                  name="countryCode"
                  autoComplete="tel-country-code"
                  aria-label="Country code"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="w-[105px] shrink-0 cursor-pointer border-r border-white/10 bg-[#0d1226] px-3 py-2.5 text-sm text-white outline-none"
                >
                  {COUNTRY_CODES.map(({ code, country }) => (
                    <option key={`${country}-${code}`} value={code}>
                      {country} {code}
                    </option>
                  ))}
                </select>

                <input
                  id="contact-phone"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel-national"
                  inputMode="numeric"
                  required
                  maxLength={30}
                  value={form.phoneNumber}
                  onChange={handleChange}
                  placeholder="7004431954"
                  className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-company" className={LABEL_CLASS}>
                Company Name
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={250}
                value={form.company}
                onChange={handleChange}
                placeholder="Your company name"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="contact-service" className={LABEL_CLASS}>
                How Can We Help? *
              </label>
              <select
                id="contact-service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className={`w-full rounded-lg border border-white/10 bg-[#0d1226] px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  form.service ? "text-white" : "text-slate-400"
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

            <div>
              <label htmlFor="contact-details" className={LABEL_CLASS}>
                Business Challenge / Goals *
              </label>
              <textarea
                id="contact-details"
                name="details"
                required
                maxLength={5000}
                rows={4}
                value={form.details}
                onChange={handleChange}
                placeholder="Tell us what your business is trying to improve, where you are facing challenges, or what process you think could work better..."
                className={`${INPUT_CLASS} resize-none`}
              />
            </div>

            <div role="status" className={reference === null ? "sr-only" : undefined}>
              {reference !== null && (
                <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-400">
                  Your consultation request was received. Your reference number is{" "}
                  <strong>#{reference}</strong>.
                </p>
              )}
            </div>

            {errorMessage && (
              <p
                role="alert"
                className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400"
              >
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isLoading ? "Sending..." : "Send Message & Book Consultation"}
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