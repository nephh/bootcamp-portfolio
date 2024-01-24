export default function ProjectItem({ title, imgUrl, stack, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="overflow-hidden rounded-md border-2 border-zinc-900 transition-all duration-300 hover:scale-105">
        <img
          src={imgUrl}
          alt="project image"
          className="flex h-full w-64 cursor-pointer items-center justify-center object-scale-down md:h-48"
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
                  className="inline-block rounded-md border-2 border-zinc-900 px-2 py-1 font-semibold"
                >
                  {item}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </a>
  );
}
