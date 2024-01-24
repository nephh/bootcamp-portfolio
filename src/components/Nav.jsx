import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const activeLink = "manrope-bold text-blue-200";
  const inactiveLink = "manrope-default text-zinc-200 hover:font-bold";

  return (
    <>
      <p className="manrope-bold text-2xl text-zinc-200">
        <a href="/"> Owen McCormick</a>
      </p>
      <div className="flex space-x-4">
        <Link
          to="/"
          className={location.pathname === "/" ? activeLink : inactiveLink}
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" ? activeLink : inactiveLink
          }
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className={
            location.pathname === "/resume" ? activeLink : inactiveLink
          }
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? activeLink : inactiveLink
          }
        >
          Contact Me
        </Link>
      </div>
    </>
  );
}
