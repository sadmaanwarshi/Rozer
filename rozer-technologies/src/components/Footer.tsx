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

            <p className="text-[#95A4C6] leading-8 text-[17px] max-w-[360px]">
              Building custom business software and AI solutions that transform
              how companies operate and scale.
            </p>

            <h4 className="mt-10 mb-4 font-semibold text-white">
              Stay updated with our insights
            </h4>

            <div className="flex">
              <input
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

            <div className="flex gap-4 mt-8">
              {[
                {
                  name: "LinkedIn",
                  svg: (
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  svg: (
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  ),
                },
                {
                  name: "GitHub",
                  svg: (
                    <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <button
                  key={index}
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
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-4 text-[#95A4C6]">
              <li className="hover:text-white cursor-pointer">Custom Software</li>
              <li className="hover:text-white cursor-pointer">ERP Systems</li>
              <li className="hover:text-white cursor-pointer">HRMS</li>
              <li className="hover:text-white cursor-pointer">CRM Platforms</li>
              <li className="hover:text-white cursor-pointer">AI Automation</li>
              <li className="hover:text-white cursor-pointer">Mobile Apps</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Industries
            </h3>
            <ul className="space-y-4 text-[#95A4C6]">
              <li>Manufacturing</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Logistics</li>
              <li>Retail</li>
              <li>HR & Recruitment</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Company
            </h3>
            <ul className="space-y-4 text-[#95A4C6]">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2940] mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#7D8BA9] text-sm">
              © 2026 Rozer Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-[#7D8BA9]">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;