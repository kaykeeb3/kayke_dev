import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github, Send } from "lucide-react";

function contactSection() {
  return (
    <div className="border-zinc-700 border w-full -mt-10 rounded-lg">
      <div className="p-4">
        <h4 className="text-zinc-200 font-semibold text-xl text-left mb-3">
          VAMOS CONSTRUIR ALGO JUNTOS?
        </h4>

        <p className="font-medium text-zinc-300 text-sm">
          Se você tem algum projeto em mente, sinta-se à vontade para me enviar
          uma mensagem.
        </p>

        <div className="flex items-center justify-start mt-4 mb-3">
          <button className="w-44 p-2 flex items-center justify-center bg-zinc-200 hover:bg-zinc-400 text-zinc-900 rounded-full gap-6 max-[600px]:w-52">
            FALE COMIGO <Send className="w-5 h-5 text-zinc-900" />
          </button>
        </div>

        <div className="w-full h-[0.010rem] bg-zinc-800" />

        <div className="flex items-center justify-center gap-5 mt-3 max-[600px]:gap-12">
          <Link
            to="/"
            className="border border-zinc-700/80 rounded-md p-1 hover:opacity-70"
          >
            <Instagram className="w-5 h-5 text-zinc-300" />
          </Link>
          <Link
            to="/"
            className="border border-zinc-700/80 rounded-md p-1 hover:opacity-70"
          >
            <Linkedin className="w-5 h-5 text-zinc-300" />
          </Link>
          <Link
            to="/"
            className="border border-zinc-700/80 rounded-md p-1 hover:opacity-70"
          >
            <Github className="w-5 h-5 text-zinc-300" />
          </Link>
          <Link
            to="/"
            className="border border-zinc-700/80 rounded-md p-1 hover:opacity-70"
          >
            <Send className="w-5 h-5 text-zinc-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default contactSection;
