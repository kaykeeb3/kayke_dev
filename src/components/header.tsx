import { motion } from "framer-motion";
import CustomLink from "./link";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-end py-12 md:pr-5 max-[600px]:p-4"
    >
      <div className="flex items-center justify-center gap-8">
        <CustomLink to="/about">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="font-semibold hover:underline"
          >
            Quem sou
          </motion.span>
        </CustomLink>
        <CustomLink to="/projects">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="font-semibold hover:underline"
          >
            Iniciar Projeto
          </motion.span>
        </CustomLink>
      </div>
    </motion.header>
  );
}

export default Header;
