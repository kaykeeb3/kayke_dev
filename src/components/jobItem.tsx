import { motion } from "framer-motion";
import CustomLink from "./link";

interface JobItemProps {
  jobTitle: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  linkTo: string;
}

const JobItem: React.FC<JobItemProps> = ({
  jobTitle,
  companyName,
  location,
  startDate,
  endDate,
  linkTo,
}: JobItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 mb-4"
    >
      <h3 className="font-bold text-left text-zinc-200 text-xl mb-2">
        {jobTitle}
      </h3>

      <CustomLink to={linkTo}>
        <motion.span whileHover={{ textDecoration: "underline" }}>
          {companyName}
        </motion.span>{" "}
        • {location}
      </CustomLink>

      <p className="mt-2 text-zinc-400 font-light text-base">
        {startDate} – {endDate}
      </p>
    </motion.div>
  );
};

export default JobItem;
