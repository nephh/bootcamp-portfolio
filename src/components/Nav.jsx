import { Link, useLocation } from "react-router-dom";

const activeLink = "manrope-bold text-blue-200";
const inactiveLink = "manrope-default text-zinc-200 hover:font-bold";

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between bg-zinc-700 p-4">
      <p className="text-2xl manrope-bold text-blue-200">Owen McCormick</p>
      <div>
        <Link
          to="/"
          className={`${
            location.pathname === "/" ? activeLink : inactiveLink
          } mr-4`}
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === "/contact" ? activeLink : inactiveLink
          } mr-4`}
        >
          Contact Me
        </Link>
        <Link
          to="/projects"
          className={`${
            location.pathname === "/projects" ? activeLink : inactiveLink
          } mr-4`}
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className={`${
            location.pathname === "/resume" ? activeLink : inactiveLink
          }`}
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
