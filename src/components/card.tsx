import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-800/10 w-full xl:h-[45vh] md:h-[60vh] md:p-4 p-5 rounded-md"
    >
      {Icon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center w-9 h-9 text-zinc-200 text-left rounded-full p-2 bg-blue-950 border border-zinc-200/10"
        >
          <Icon />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col p-2"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="font-semibold text-2xl text-zinc-200 mb-8"
        >
          {title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-left text-zinc-300 sm:text-sm max-[600px]:bg-rose-500 max-[600px]:text-[1.1rem] md:text-[0.95rem] md:text-lg">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
