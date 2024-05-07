import CustomLink from "./link";

function Header() {
  return (
    <header className="flex items-center justify-end py-12 md:pr-5 max-[600px]:p-4">
      <div className="flex items-center justify-center gap-8">
        <CustomLink to="/about">
          <span className="font-semibold hover:underline">Quem sou</span>
        </CustomLink>
        <CustomLink to="/projects">
          <span className="font-semibold hover:underline">Iniciar Projeto</span>
        </CustomLink>
      </div>
    </header>
  );
}

export default Header;
