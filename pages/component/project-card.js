import Image from "next/image";

export default function ProjectCard({
  image,
  title,
  description,
  techStack = [],
  link,
}) {
  return (
    <div className="rounded-lg border text-gray-800 dark:text-gray-200 overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card hover:scale-[1.02] group">
      <div className="h-48 bg-gradient-to-br from-space-neon to-space-300 flex items-center justify-center text-white p-6 relative overflow-hidden">
        {image ? (
          <Image src={image} layout="fill" objectFit="cover" alt={title} />
        ) : (
          <h3 className="text-2xl font-bold text-center drop-shadow-md relative z-10">
            {title}
          </h3>
        )}
      </div>
      <div className="p-6 bg-space-300">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="mb-4 text-start">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((data, index) => {
            return (
              <span
                key={index}
                className="border border-space-200 dark:border-space-white rounded-md p-2 text-xs"
              >
                {data}
              </span>
            );
          })}
        </div>
      </div>
      <div className="items-center p-6 px-6 pb-6 pt-0 flex gap-2 bg-space-300">
        <a
          href={link ?? "#"}
          target="_blank"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:bg-space-neon/80 hover:text-gray-800 h-10 px-4 py-2 w-full shadow-sm hover:shadow group"
          rel="noreferrer"
        >
          Live Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform"
            data-lov-id="src/components/ProjectsSection.tsx:147:32"
            data-lov-name="ExternalLink"
            data-component-path="src/components/ProjectsSection.tsx"
            data-component-line="147"
            data-component-file="ProjectsSection.tsx"
            data-component-name="ExternalLink"
            data-component-content="%7B%22className%22%3A%22ml-2%20h-4%20w-4%20group-hover%3Atranslate-y-%5B-2px%5D%20transition-transform%22%7D"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
