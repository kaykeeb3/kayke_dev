import { motion } from "framer-motion";
import CustomLink from "./link";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between py-12 md:pr-5 max-[600px]:p-5"
    >
      <div className="float-start flex justify-start p-2">
        {location.pathname !== "/" && ( // Verifica se a localização é diferente da página inicial
          <Link to="/">
            <ArrowLeft className="w-5 h-5 text-zinc-300 hover:text-zinc-400" />
          </Link>
        )}
      </div>
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
