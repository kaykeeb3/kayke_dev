import CenteredLayout from "@/components/centeredLayout";
import Header from "@/components/header";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Presentation from "@/assets/presentation.svg";

function Home() {
  return (
    <>
      <div className="min-h-screen min-w-full">
        <CenteredLayout>
          <Header />

          <div className="flex items-center justify-center sm:p-5 max-[600px]:p-5 max-[600px]:mt-16">
            <div className="h-[70vh] w-full flex items-center justify-center max-[600px]:p-3">
              <div className="w-full">
                <h2 className="font-bold text-5xl text-zinc-200 mb-10">
                  Desenvolvo <br />
                  projetos inovadores
                </h2>

                <h4 className="font-normal text-zinc-400 text-base">
                  Desenvolvo aplicações fullstack para web e mobile
                  <br /> abrangendo desde o layout até o código.
                </h4>
                <div className="flex items-center justify-start mt-8 gap-10">
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
                    <ArrowDown className="w-8 h-8 text-zinc-200 animate-bounce" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-sm:hidden md:hidden lg:flex lg:w-[70%]">
              <img
                className="h-fit"
                src={Presentation}
                alt="Background Image"
              />
            </div>
          </div>
        </CenteredLayout>
      </div>
    </>
  );
}

export default Home;
