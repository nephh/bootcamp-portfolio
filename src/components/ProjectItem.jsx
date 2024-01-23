export default function ProjectItem({ title, imgUrl, stack }) {
  return (
    <div className="transform overflow-hidden rounded-md border-2 border-slate-900 transition-all duration-300 hover:scale-105 dark:border-slate-700">
      <img
        src={imgUrl}
        alt="project image"
        className="h-36 w-full cursor-pointer object-cover md:h-48"
      />
      <div className="w-full p-4">
        <h2 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
          {title}
        </h2>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          {stack.map((item, index) => {
            return (
              <span
                key={index}
                className="inline-block rounded-md border-2 border-slate-900 px-2 py-1 font-semibold dark:border-slate-700"
              >
                {item}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
