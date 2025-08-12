import ContactCard from "../components/ContactCard";
import { contacts } from "./contacts";

export default function Contact() {
  return (
    <div className="container-background min-h-screen">
      <div className="p-15 flex flex-col gap-15 max-w-screen-2xl mx-auto items-center">
        <h1
          className="text-8xl tracking-tighter 
text-balance"
        >
          Keep in touch.
        </h1>
        <div className="flex flex-row gap-15 justify-center">
          {contacts.map((contact) => {
            return (
              <ContactCard
                key={contact.platform}
                platform={contact.platform}
                username={contact.username}
                link={contact.link}
                icon={contact.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
