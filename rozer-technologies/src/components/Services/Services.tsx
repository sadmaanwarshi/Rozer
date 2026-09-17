import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const Services = () => {
  return (
    <section className="bg-[#F8FAFC] py-18">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;