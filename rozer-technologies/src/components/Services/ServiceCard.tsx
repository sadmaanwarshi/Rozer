import { type LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: Props) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-6
        py-6
        shadow-[0_4px_20px_rgba(15,23,42,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-100
        hover:shadow-xl
      "
    >

      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-blue-500/10
          opacity-0
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-blue-50
          transition-all
          duration-300
          group-hover:bg-blue-100
        "
      >
        <Icon
          size={21}
          strokeWidth={2.2}
          className="
            text-blue-600
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="relative">

        <h3
          className="
            mt-5
            text-[17px]
            font-semibold
            leading-6
            tracking-tight
            text-slate-900
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2.5
            text-[15px]
            leading-6
            text-slate-500
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;