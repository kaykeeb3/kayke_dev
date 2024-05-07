import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github, Send } from "lucide-react";

function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900/50 border border-zinc-800 w-full -mt-10 rounded-lg"
    >
      <div className="p-4">
        <h4 className="text-zinc-200 font-semibold text-xl text-left mb-3">
          VAMOS CONSTRUIR ALGO JUNTOS?
        </h4>

        <p className="font-medium text-zinc-300 text-sm">
          Se você tem algum projeto em mente, sinta-se à vontade para me enviar
          uma mensagem.
        </p>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center justify-start mt-4 mb-3"
        >
          <Link
            to="mailto:kaykeloioladev@gmail.com"
            className="w-44 p-2 flex items-center justify-center bg-zinc-200 hover:bg-zinc-400 text-zinc-900 rounded-full gap-6 max-[600px]:w-52"
          >
            <span className="flex items-center gap-2">
              FALE COMIGO <Send className="w-5 h-5 text-zinc-900" />
            </span>
          </Link>
        </motion.div>

        <div className="w-full h-[0.010rem] bg-zinc-800" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center gap-5 mt-3 max-[600px]:gap-12"
        >
          <Link
            to="https://instagram.com/kaykee_bl"
            className="border border-zinc-700/80 rounded-md p-1 hover:opacity-70"
          >
            <Instagram className="w-5 h-5 text-zinc-300" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/kayke-barbosa-loiola"
            className="border border-zinc-700/80 rounded-md p-1 hover:opacity-70"
          >
            <Linkedin className="w-5 h-5 text-zinc-300" />
          </Link>
          <Link
            to="https://github.com/Kayke-Ti"
            className="border border-zinc-700/80 rounded-md p-1 hover:opacity-70"
          >
            <Github className="w-5 h-5 text-zinc-300" />
          </Link>
          <Link
            to="mailto:kaykeloioladev@gmail.com"
            className="border border-zinc-700/80 rounded-md p-1 hover:opacity-70"
          >
            <Send className="w-5 h-5 text-zinc-300" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactSection;
