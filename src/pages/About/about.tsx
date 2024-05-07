import { motion } from "framer-motion";
import CenteredLayout from "@/components/centeredLayout";
import Header from "@/components/header";
import JobItem from "@/components/jobItem";
import ContactSection from "@/components/contactSection";
import TitleComponent from "@/components/titleComponent";
import Profile from "@/assets/_profile.jpg";

function About() {
  return (
    <CenteredLayout>
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center flex-col p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full float-start"
        >
          <TitleComponent title="Sobre" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full flex justify-between items-center md:gap-12 sm:gap-9 max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:justify-center"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-72 h-72 rounded-lg"
            src={Profile}
            alt="Kayke Barbosa Loiola"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-2/3 h-72 md:shrink max-[600px]:h-auto max-[600px]:mt-5 max-[600px]:w-[90%]"
          >
            <p className="text-left font-semibold text-zinc-300/90 tracking-wider md:text-[0.95rem] sm:text-[0.85rem]">
              Olá, sou Kayke Barbosa, um Desenvolvedor de Software dedicado e
              entusiasta da tecnologia. Possuo especialização em JavaScript
              (Node.js, React.js, React Native, entre outros) e PHP, com
              experiência significativa em frameworks como Nest.js, Next.js e
              Laravel.
              <br />
              <br />
              Com mais de um ano de atuação, contribuí para diversos projetos de
              sucesso. Além da minha atividade profissional, tenho interesse em
              música, literatura e aprecio uma boa xícara de café. Estou sempre
              aberto para discutir tecnologia, enfrentar desafios ou
              simplesmente conversar. Se desejar entrar em contato, estou à
              disposição.
              <br />
              <br />
              Estou sempre à disposição para ajudar ou criar novas soluções
              utilizando tecnologia.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="h-[1px] w-full bg-zinc-200/10 mt-11 xl:flex md:hidden sm:hidden max-w-[600px]:flex"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="h-[75vh] w-full mt-16 sm:mt-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <TitleComponent title="Carreira" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="h-[40vh] grid gap-8"
          >
            <JobItem
              linkTo="https://www.netwall.com.br/"
              jobTitle="Analista de Suporte"
              companyName="NetWall"
              location="Remoto"
              startDate="mar 2024"
              endDate="Momento"
            />

            <JobItem
              linkTo="https://www.instagram.com/eeepgerardojose/related_profiles/"
              jobTitle="Analista de Sistemas"
              companyName="EEEP Gerardo J. D. Loiola"
              location="Remoto"
              startDate="mar 2023"
              endDate="abril 2024"
            />

            <JobItem
              linkTo="https://grendene.com.br/"
              jobTitle="Analista de BI"
              companyName="Grendene"
              location="Presencial"
              startDate="set 2023"
              endDate="dez 2023"
            />
          </motion.div>
        </motion.div>
        <ContactSection />
      </motion.div>
    </CenteredLayout>
  );
}

export default About;
