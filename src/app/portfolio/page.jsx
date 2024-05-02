"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React e-commerce",
    desc: "This e-commerce application has been developed as an open-source project and is accessible on GitHub. By accessing the codebase, you can see how the application is structured and how development can be continued",
    img: "https://i.pinimg.com/564x/66/66/e6/6666e66640af828ff4d8cdb6cdfdc36b.jpg",
    link: "https://github.com/ibrahimcakmakk/e-commerce-clone",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React.js Medium Blog",
    desc: "This application, integrated with Firebase and Pinterest APIs, presents you with the latest and most engaging content on your favorite topics. You can create your own blog posts, save content you like, and share them.",
    img: "https://i.pinimg.com/736x/8e/e0/60/8ee0600cce110a8b54126283322d952b.jpg",
    link: "https://github.com/ibrahimcakmakk/blog-react",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Next Js Movie App",
    desc: "Experience the magic of cinema like never before with the Next.js Movie App. Dive into a world of entertainment and embark on a cinematic journey tailored to your preferences.",
    img: "https://i.pinimg.com/564x/72/20/6a/72206ac68abdd292c358510b9609b382.jpg",
    link: "https://github.com/ibrahimcakmakk/MovieApp",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Spotify Explorer is your ultimate companion for discovering, listening to, and sharing your favorite music. With seamless integration with the Spotify API, this application provides you with access to an extensive library of tracks, albums, and playlists from around the world.",
    img: "https://i.pinimg.com/564x/57/d4/19/57d419664ce34db2f1aa17036cc2cb35.jpg",
    link: "https://github.com/ibrahimcakmakk",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;