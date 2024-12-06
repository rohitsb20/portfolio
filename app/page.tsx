import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="h-[600px] w-screen border-2 border-red-300">
        {/* info text div */}
        <div>
          <h1 className="text-5xl font-medium ">
            Hey, I&apos;m
            <span className="bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">
              {" "}
              Rohit!
            </span>
          </h1>
          <p
            className={`${spaceGrotesk.className} text-xl font-medium text-wrap`}
          >
            I’m a Frontend Web Developer, Technical Writer and Blogger.
          </p>
          <div>
            <button>More about me</button>
            <button></button>
          </div>
        </div>
        {/* image div */}
        <div></div>
      </div>
    </div>
  );
}
