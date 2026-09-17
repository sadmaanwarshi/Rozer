import {
  Code2,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#060B1F] text-white">

      <div className="max-w-[1240px] mx-auto px-6 py-20">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16">

          {/* Left */}
          <div>

            <div className="flex items-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-full bg-[#3B5BFF] flex items-center justify-center">
                <Code2 size={20} />
              </div>

              <h2 className="text-2xl font-bold">
                Rozer Technologies
              </h2>

            </div>

            <p className="text-[#95A4C6] leading-8 text-[17px] max-w-[380px]">
              Helping businesses identify technology opportunities, build the
              right software solutions, and continuously improve the systems
              that power their operations and growth.
            </p>

            <h4 className="mt-10 mb-4 font-semibold text-white">
              Stay updated with our insights
            </h4>

            <div className="flex">

              <input
                type="email"
                placeholder="your@email.com"
                className="
                  flex-1
                  h-14
                  rounded-l-xl
                  bg-[#1B2439]
                  border border-[#29324A]
                  px-5
                  outline-none
                  placeholder:text-[#7F8CA8]
                "
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="
                  w-14
                  h-14
                  rounded-r-xl
                  bg-[#3B5BFF]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#2f52ff]
                  transition
                "
              >
                <Send size={18} />
              </button>

            </div>

            {/* Social */}
            {/* Social */}
<div className="flex gap-4 mt-8">
  {[
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/rozer-technologiess/",
      svg: (
        <svg
          className="w-[18px] h-[18px] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },

    {
      name: "Threads",
      href: "https://www.threads.com/@rozertechnologies",
      svg: (
        <svg
          className="w-[18px] h-[18px] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.517 15.586 1.521 12.01v-.017c0-3.583.834-6.44 2.479-8.493C5.85 1.194 8.604.014 12.183 0h.01c2.688.018 4.941.722 6.7 2.094 1.64 1.28 2.825 3.087 3.52 5.371l-2.225.677c-.55-1.808-1.457-3.226-2.696-4.215-1.33-1.06-3.114-1.602-5.306-1.616-2.879.011-5.021.904-6.367 2.653-1.292 1.68-1.947 4.044-1.947 7.029v.014c-.003 2.979.65 5.34 1.941 7.019 1.347 1.751 3.491 2.646 6.372 2.665 2.582-.018 4.668-.635 6.023-1.783 1.188-1.006 1.814-2.367 1.86-4.047.044-1.589-.553-2.812-1.772-3.635-.078-.052-.159-.103-.242-.151-.116.843-.329 1.624-.638 2.336-.93 2.143-2.574 3.364-4.754 3.532-1.643.127-3.188-.368-4.24-1.36-1.002-.945-1.53-2.274-1.485-3.743.043-1.429.584-2.69 1.565-3.646.972-.948 2.37-1.493 4.04-1.576 1.172-.057 2.266.087 3.235.425-.127-.916-.415-1.65-.857-2.19-.57-.697-1.47-1.06-2.675-1.078-1.61-.024-2.639.471-3.105 1.47L7.075 6.09c.865-1.853 2.62-2.803 5.213-2.765 1.895.028 3.378.679 4.408 1.935.803.98 1.292 2.294 1.455 3.91.623.295 1.183.64 1.674 1.033 1.848 1.482 2.747 3.46 2.674 5.88-.064 2.284-.941 4.196-2.607 5.683-1.8 1.607-4.39 2.458-7.706 2.482ZM12.71 9.9c-2.074.104-3.316 1.184-3.361 2.923-.025.832.237 1.52.778 2.031.574.541 1.444.807 2.389.733 1.329-.103 2.316-.852 2.933-2.226.329-.733.519-1.607.566-2.604-.948-.618-2.059-.922-3.305-.857Z" />
        </svg>
      ),
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/rozertechnologies/",
      svg: (
        <svg
          className="w-[18px] h-[18px] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm11 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
        </svg>
      ),
    },
  ].map((item) => (
    <a
      key={item.name}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.name}
      className="
        w-11
        h-11
        rounded-full
        bg-[#1B2439]
        hover:bg-[#3B5BFF]
        transition
        flex
        items-center
        justify-center
        text-white
      "
    >
      {item.svg}
    </a>
  ))}
</div>
          </div>

          {/* Services */}
          <div>

            <h3 className="font-semibold text-lg mb-6">
              What We Do
            </h3>

            <ul className="space-y-4 text-[#95A4C6]">

              <li>
                <a href="#services" className="hover:text-white transition">
                  Technology Consulting
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Digital Transformation
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Business Automation
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  AI & Intelligent Solutions
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Custom Software Development
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Managed Technology
                </a>
              </li>

            </ul>
          </div>

          {/* Industries */}
          <div>

            <h3 className="font-semibold text-lg mb-6">
              Industries
            </h3>

            <ul className="space-y-4 text-[#95A4C6]">

              <li>
                <a href="#industries" className="hover:text-white transition">
                  Manufacturing
                </a>
              </li>

              <li>
                <a href="#industries" className="hover:text-white transition">
                  Healthcare
                </a>
              </li>

              <li>
                <a href="#industries" className="hover:text-white transition">
                  Education
                </a>
              </li>

              <li>
                <a href="#industries" className="hover:text-white transition">
                  Logistics
                </a>
              </li>

              <li>
                <a href="#industries" className="hover:text-white transition">
                  Retail & E-Commerce
                </a>
              </li>

              <li>
                <a href="#industries" className="hover:text-white transition">
                  Professional Services & HR
                </a>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>

            <h3 className="font-semibold text-lg mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-[#95A4C6]">

              <li>
                <a href="#process" className="hover:text-white transition">
                  How We Work
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Case Studies
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Technology Consultation
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>

              {/* Add these when pages exist */}
              {/* <li>About Us</li> */}
              {/* <li>Insights</li> */}
              {/* <li>Careers</li> */}
              {/* <li>Privacy Policy</li> */}

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2940] mt-20 pt-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-[#7D8BA9] text-sm">
              © 2026 Rozer Technologies. All rights reserved.
            </p>

            <div className="flex gap-8 text-sm text-[#7D8BA9]">

              <a href="#contact" className="hover:text-white">
                Contact
              </a>

              <a href="#services" className="hover:text-white">
                Services
              </a>

              <a href="#process" className="hover:text-white">
                How We Work
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;