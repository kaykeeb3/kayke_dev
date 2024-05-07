import { motion } from "framer-motion";
import CenteredLayout from "@/components/centeredLayout";
import Header from "@/components/header";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Presentation from "@/assets/presentation.svg";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaPhp, FaAws } from "react-icons/fa";
import { SiNestjs, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

function Home() {
  return (
    <>
      <div className="min-h-screen min-w-full">
        <CenteredLayout>
          <Header />

          <div className="flex items-center justify-center sm:p-5 max-[600px]:p-5 max-[600px]:mt-16">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="h-[70vh] w-full flex items-center justify-center max-[600px]:p-3"
            >
              <div className="w-full">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="font-bold text-5xl text-zinc-200 mb-10"
                >
                  Desenvolvo <br />
                  projetos inovadores
                </motion.h2>

                <motion.h4
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="font-normal text-zinc-400 text-base"
                >
                  Desenvolvo aplicações fullstack para web e mobile
                  <br /> abrangendo desde o layout até o código. <br />
                  <br />
                  Utilizando as seguintes tecnologias. <br />
                  <div className="flex justify-start gap-3 mt-3 xl:gap-4 max-[600px]:gap-2 ">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <IoLogoJavascript className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <FaReact className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <FaNodeJs className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <SiNextdotjs className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <SiNestjs className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <SiTypescript className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <FaPhp className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <BiLogoPostgresql className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-zinc-400"
                    >
                      <FaAws className="w-5 h-5 text-zinc-300" />
                    </motion.span>
                  </div>
                </motion.h4>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="flex items-center justify-start mt-8 gap-10"
                >
                  <Link
                    to="https://www.linkedin.com/in/kayke-barbosa-loiola"
                    className="px-8 py-4 text-white font-semibold bg-blue-700 hover:bg-blue-800"
                  >
                    Entre em contato
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/kayke-barbosa-loiola"
                    className="border border-blue-700 p-3"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 text-zinc-200 animate-bounce"
                    >
                      <ArrowDown className="animate-bounce" />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-sm:hidden md:hidden lg:flex lg:w-[70%]"
            >
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="h-fit"
                src={Presentation}
                alt="Background Image"
              />
            </motion.div>
          </div>
        </CenteredLayout>
      </div>
    </>
  );
}

export default Home;
