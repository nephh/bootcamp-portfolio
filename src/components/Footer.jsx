const Footer = () => {
  return (
    <footer className="manrope-default w-full bg-zinc-900 py-5 text-lg text-zinc-200">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.github.com/nephh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-bold"
        >
          Github
        </a>
        <a
          href="https://dev.to/nephh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-bold"
        >
          Dev.to
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-bold"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
