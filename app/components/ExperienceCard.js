import { RxExternalLink } from "react-icons/rx";

export default function ExperienceCard({
  company,
  title,
  startDate,
  endDate,
  description,
  stack,
  link,
}) {
  return (
    <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-lg p-8 bg-primary hover:border-gray-400 hover:shadow-lg transition-all duration-200">
      <div className="flex flex-row gap-2 justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 items-center">
            <h1 className="text-4xl font-semibold">{company}</h1>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <RxExternalLink className="text-3xl translate-y-0.5" />
              </a>
            )}
          </div>
          <h1 className="text-2xl">{title}</h1>
        </div>
        <span className="text-xl">
          {startDate} - {endDate}
        </span>
      </div>
      <div>
        <ul className="list-disc list-outside text-xl pl-5 space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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
