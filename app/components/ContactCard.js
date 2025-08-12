import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const icons = {
  Email: <FaEnvelope />,
  LinkedIn: <FaLinkedin />,
  Github: <FaGithub />,
};

export default function ContactCard({ platform, username, link, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row gap-4 border-2 border-gray-300 rounded-lg p-8 bg-primary w-64 h-32 items-center justify-center hover:border-gray-400 hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-2 justify-center items-center">
          {icons[platform]}
          <h1 className="text-2xl">{platform}</h1>
        </div>
        <span className="text-center">{username}</span>
      </div>
    </a>
  );
}
