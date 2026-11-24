import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import logo from "../assets/rozer-1.png";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Industries", id: "industries" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 40);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const linkClass = scrolled
    ? "text-slate-700 hover:text-blue-600"
    : "text-slate-300 hover:text-white";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-white/10 bg-[#0a0e1c]"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <a href="/">
          <img
            src={logo}
            alt="Rozer Technologies"
            className="h-10 w-auto object-contain"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`} className={`text-sm font-medium ${linkClass}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 lg:inline-flex"
        >
          Book Consultation
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>

        <details className="lg:hidden">
          <summary
            className={`flex cursor-pointer list-none items-center gap-2 rounded-md px-3 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden ${linkClass}`}
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
            Menu
          </summary>

          <ul className="absolute inset-x-0 top-full space-y-1 border-t border-white/10 bg-[#0a0e1c] p-4 shadow-lg">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => {
                    event.currentTarget.closest("details")?.removeAttribute("open");
                  }}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 focus-visible:bg-white/10"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}