import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const Services = () => {
  return (
    <section id="services" className="bg-[#F8FAFC] py-18">

      <div className="max-w-7xl mx-auto px-6">

        {/* <p
          className="
          text-center
          text-[#5D6B82]
          text-[28px]
          max-w-4xl
          mx-auto
          leading-relaxed
          mb-20
          "
        >
          From ideation to deployment, we deliver every layer of your digital
          infrastructure with precision and purpose.
        </p> */}

        <div
          className="
          grid
          lg:grid-cols-3
          md:grid-cols-2
          gap-8
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