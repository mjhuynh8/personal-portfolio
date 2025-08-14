import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ name, description, links, stack, date }) {
  return (
    <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-lg p-8 bg-primary hover:border-gray-400 hover:shadow-lg transition-all duration-200">
      <div className="flex flex-row gap-2 justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 items-center">
            <h1 className="text-4xl font-semibold">{name}</h1>
            {links.map((link) => (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name === "Demo" ? (
                  <RxExternalLink className="text-3xl translate-y-0.5" />
                ) : (
                  <FaGithub className="text-3xl translate-y-0.5" />
                )}
              </a>
            ))}
          </div>
        </div>
        <span className="text-xl">{date}</span>
      </div>
      <div>
        <p className="text-xl">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary text-text rounded-full text-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
