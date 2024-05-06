import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: ReactNode;
}

function CustomLink({ to, children }: CustomLinkProps) {
  return (
    <Link to={to}>
      <h2 className="text-base text-zinc-300 font-medium hover:text-zinc-400">
        {children}
      </h2>
    </Link>
  );
}

export default CustomLink;
