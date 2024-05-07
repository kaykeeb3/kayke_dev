import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import TitleComponent from "./titleComponent";
import { motion } from "framer-motion";

type FeedbackMessageType = "" | "success" | "error";

export default function FormSection() {
  const [feedbackMessage, setFeedbackMessage] =
    useState<FeedbackMessageType>("");
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    const email = formRef.current.email.value;

    if (!validateEmail(email)) {
      console.error("E-mail inválido.");
      setFeedbackMessage("error");
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID
      );

      console.log("Email enviado com sucesso!");
      setFeedbackMessage("success");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setFeedbackMessage("error");
    }

    formRef.current.reset();
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex justify-center items-center flex-col max-[600px] p-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full">
          <TitleComponent title="Iniciar um projeto" />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-8 md:p-8">
          <div className="md:w-1/2 md:text-center rounded-lg p-6 bg-gray-900 shadow-lg">
            <h2 className="text-left text-2xl md:text-3xl font-semibold leading-tight text-gray-300 mb-4">
              Vamos colocar a<br />
              mão na massa?
            </h2>
            <p className="text-base text-gray-400 text-left">
              Conte-me sobre o seu projeto. <br /> <br />
              Compartilhe sobre o seu projeto, estou interessado em ouvir!{" "}
              <br />
              <br />
              Tenho experiência sólida em uma variedade de tecnologias,
              abrangendo JavaScript, Node.js, Nest.js, Laravel, PHP, TypeScript,
              PostgreSQL e AWS. Se você está interessado em discutir tecnologia,
              enfrentar desafios ou iniciar um novo projeto, estou à disposição
              para conversarmos.
              <br />
              <br />
              Vou te responder em breve.
            </p>
          </div>

          <div className="w-full md:w-1/2 border border-zinc-50/10">
            <form
              ref={formRef}
              className="bg-gray-800/25 text-white p-6 md:p-8 rounded-lg shadow-lg"
              onSubmit={sendEmail}
              name="contact"
            >
              <div className="flex flex-col items-stretch justify-between mb-4">
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="input-field mb-4 w-full p-3 bg-gray-700/50 text-gray-300 placeholder-gray-400 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-400"
                  name="from_name"
                  type="text"
                  placeholder="Nome"
                  required
                />
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="input-field mb-4 w-full p-3 bg-gray-700/50 text-gray-300 placeholder-gray-400 border border-blue-500 rounded-lg focus:outline-none focus:border-blue-400"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <motion.input
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                type="hidden"
                name="bot-field"
              />

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Você já tem layout?
                </p>
                <div className="flex items-center">
                  <label
                    htmlFor="yes"
                    className="radio-label flex items-center gap-2 cursor-pointer text-gray-300"
                  >
                    <input
                      id="yes"
                      type="radio"
                      className="radio-input"
                      name="layout"
                      value="Sim"
                      required
                    />
                    <span>Sim</span>
                  </label>
                  <label
                    htmlFor="no"
                    className="radio-label flex items-center gap-2 ml-4 cursor-pointer text-gray-300"
                  >
                    <input
                      id="no"
                      type="radio"
                      className="radio-input"
                      name="layout"
                      value="Não"
                      required
                    />
                    <span>Não</span>
                  </label>
                </div>
              </div>

              <div className="flex items-start flex-col mb-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Número de páginas do projeto
                </p>
                <div className="flex flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map((number) => (
                    <motion.label
                      key={String(number)}
                      htmlFor={`page-${number}`}
                      className="pages mr-2 mb-2 p-2 gap-3 rounded-lg cursor-pointer w-11 text-center flex items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <input
                        id={`page-${number}`}
                        className="radio-input"
                        type="radio"
                        name="pagesnumber"
                        value={String(number)}
                        required
                      />
                      {number}
                    </motion.label>
                  ))}
                </div>
              </div>

              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="input-field mt-4 w-full bg-transparent border border-blue-500 p-3 text-gray-300 placeholder-gray-400 rounded-lg focus:outline-none focus:border-blue-400"
                name="message"
                placeholder="Mensagem"
                required
              ></motion.textarea>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                type="submit"
                className="bg-blue-600 text-white font-semibold text-lg leading-relaxed mt-4 px-6 py-3 rounded-lg hover:bg-blue-500 max-[600px] w-full"
              >
                Enviar mensagem
              </motion.button>
              <p
                className={`text-sm text-center mt-2 ${
                  feedbackMessage === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {feedbackMessage === "success"
                  ? "Mensagem enviada com sucesso!"
                  : feedbackMessage === "error"
                  ? "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde."
                  : ""}
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
