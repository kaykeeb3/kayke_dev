import React from "react";
interface ServiceCardProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-blue-800/10 w-full xl:h-[45vh] max-[600px]:h-[62vh] md:h-[60vh] md:p-4 p-5 rounded-md">
      {Icon && <Icon className="w-8 h-8 text-zinc-200 text-left" />}{" "}
      <div className="flex flex-col p-2">
        <h3 className="font-semibold text-2xl text-zinc-200 mb-8">{title}</h3>
        <div>
          <p className="text-left text-zinc-300 sm:text-sm  md:text-[0.95rem] md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
