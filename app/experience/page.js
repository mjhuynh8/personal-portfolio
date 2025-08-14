import ExperienceCard from "../components/ExperienceCard";
import { experience } from "./experiences";

export default function Experience() {
  return (
    <div className="container-background min-h-screen">
      <div className="px-20 py-15 flex flex-col gap-15 max-w-screen-2xl mx-auto">
        <h1
          className="text-8xl tracking-tighter 
text-balance"
        >
          Where I&apos;ve been.
        </h1>
        <div className="flex flex-col gap-15">
          {experience.map((experience) => {
            return (
              <ExperienceCard
                key={experience.company}
                company={experience.company}
                title={experience.title}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
                stack={experience.stack}
                link={experience.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
