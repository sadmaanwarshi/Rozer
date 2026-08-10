import { useEffect, useState } from "react";
import { ArrowRight, Code2 } from "lucide-react";

interface NavLink {
  label: string;
  id: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Services", id: "services" },
  { label: "Industries", id: "industries" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Process", id: "process" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-200"
        : "bg-[#0A0E1C] border-b border-white/10"
        }`}
    >
      {/* Background Dot Pattern */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-[0.12]"
          }`}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}

        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
            <Code2
              className="h-4.5 w-4.5 text-white"
              strokeWidth={2.5}
            />
          </span>

          <span className="text-xl font-bold tracking-tight">
            <span
              className={`transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"
                }`}
            >
              Rozer
            </span>

            <span className="text-blue-600">
              Technologies
            </span>
          </span>
        </a>

        {/* Navigation */}

        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-sm font-medium transition-colors duration-300 ${scrolled
                  ? "text-gray-600 hover:text-blue-600"
                  : "text-slate-300 hover:text-white"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}

        <div className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className={`text-[13px] font-medium transition-colors duration-300 ${scrolled
              ? "text-gray-700 hover:text-blue-600"
              : "text-slate-300 hover:text-white"
              }`}
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-[13px] font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Book Consultation
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </nav>
    </header>
  );
}