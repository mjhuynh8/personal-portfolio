import Image from "next/image";
import cat from "./cat_pfp.jpeg";
import me from "./me_pfp.jpeg";

export default function About() {
  return (
    <div className="container-background min-h-screen">
      <div className="p-15 flex flex-col gap-25 max-w-screen-2xl mx-auto">
        <h1
          className="text-8xl tracking-tighter 
text-balance"
        >
          A little about me.
        </h1>
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-row gap-15 items-center">
            <div className="relative h-full basis-1/3 flex justify-center items-center">
              <Image
                src={me}
                alt="Marcus Huynh"
                className="rounded-full shadow-lg"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-5 basis-2/3">
              <h1 className="text-6xl">Hi, I&apos;m Marcus 👋</h1>
              <p className="text-2xl text-balance">
                Welcome! I&apos;m a recent Computer Science graduate from
                Virginia Tech with a strong passion for learning, building, and
                growing. I&apos;ve created this website to share some of my work
                and experiences in a more personal way.
              </p>
              <p className="text-2xl text-balance">
                Feel free to look around and learn about my background, and
                don&apos;t hesitate to reach out to connect or just have a chat.
                Thank you for visiting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
