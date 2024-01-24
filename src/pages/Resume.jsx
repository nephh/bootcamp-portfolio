export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl mb-2 text-center">Click the button below to download my resume</p>
      <p className="text-sm">I don't have a resume put together yet, I'm working on it :)</p>
      <a href="/path/to/resume.pdf" download>
        <button className="mt-4 px-3 rounded-md bg-zinc-200 p-2 font-extrabold text-zinc-900 transition-all duration-300 hover:px-6">
          Download Resume
        </button>
      </a>
    </div>
  );
}
