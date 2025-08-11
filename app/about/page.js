import Image from "next/image";
import cat from "./cat_pfp.jpeg";

export default function About() {
  return (
    <div className="p-15 flex flex-col gap-15 max-w-screen-2xl mx-auto">
      <h1
        className="text-8xl tracking-tighter 
text-balance"
      >
        A little about me.
      </h1>
      <div className="flex flex-col gap-20">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-5 basis-2/3">
            <h1 className="text-6xl">Hi, I&apos;m Marcus</h1>
            <p className="text-2xl text-balance">
              I&apos;m a recent Computer Science graduate from Virginia Tech. I
              made this website to share some of my work and experiences in a
              more personal way without all of the business buzzwords and
              jargon. Everything you see here is in my own words and made from
              scratch. Enjoy your stay!
            </p>
          </div>
          <div className="relative h-full basis-1/3 flex justify-center items-center">
            <Image
              src={cat}
              alt="Marcus Huynh"
              className="rounded-full shadow-lg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
