import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ServicesHeader from "./components/ServicesHeader";
import Services from "./components/Services/Services";
import Industries from "./components/Industries";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1c]">
      <Navbar />
      <Hero />
      <Stats />
      <div id="services">
        <ServicesHeader />
        <Services />
      </div>
      <Industries />
      <CaseStudies />
      <Process />
      <TechStack />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}