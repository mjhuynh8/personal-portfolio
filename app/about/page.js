import Image from "next/image";
import cat from "./cat_pfp.jpeg";

export default function About() {
  return (
    <div className="p-15 flex flex-col gap-20 items-center max-w-7xl mx-auto">
      <h1
        className="text-8xl tracking-tighter 
text-balance"
      >
        A little about me.
      </h1>
      <div className="flex flex-col gap-20">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-5 flex-2/3 justify-center">
            <h1 className="text-6xl">Hi, I&apos;m Marcus</h1>
            <p className="text-2xl text-balance">
              I&apos;m a recent Computer Science graduate from Virginia Tech who
              loves building things, breaking them (on purpose), and then
              figuring out how to fix them. When I&apos;m not coding, you can
              probably find me reading, playing games, or hanging out with my
              cat, Suni.
            </p>
          </div>
          <div className="flex justify-center items-center flex-1/3">
            <Image
              src={cat}
              alt="Marcus Huynh"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
