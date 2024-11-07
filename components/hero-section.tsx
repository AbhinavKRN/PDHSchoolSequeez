"use client";  

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { useRouter } from "next/navigation";
import Image from "next/image";

import img1 from "@/public/Vector.svg";

export function HeroHighlightDemo() {
  const router = useRouter();

  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.4,
          rotate: 720,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.3,
        }}
        className="mt-12 flex justify-center"
      >
        <Image
          src={img1}
          alt="Vector Illustration"
          className="rounded-lg shadow-lg w-36 h-36"
        />
      </motion.div>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <div className="font-bold mt-14 pb-4">
          Elevate Your Career at{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-500 to-blue-500">
            PDH School
          </span>{" "}
          of Tech and Business!
        </div>

        <div className="font-normal pb-4">
          Learn from industry leaders and innovate in pre-incubator programs.
        </div>
        <Highlight className="text-black dark:text-white">
          Unleash Your Potential, Join Today!
        </Highlight>
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.3,
        }}
        className="mt-8 flex justify-center"
      >
        <button
          onClick={() =>
            router.push(
              "https://docs.google.com/forms/d/e/1FAIpQLSehQlbNermYzdRPcAGe3I2ujBUIIB8Qmw7-VsHEhRHnk7YzWw/viewform"
            )
          }
          className="relative px-6 py-3 text-lg font-semibold overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 ease-in-out bg-black text-white hover:bg-white hover:text-black"
          aria-label="Join PDH School"
        >
          <span className="relative z-10">Join Today!</span>
          <span className="absolute inset-0 bg-gradient-to-r from-black to-white transition-all duration-300 ease-in-out group-hover:group-hover:left-0"></span>
        </button>
      </motion.div>
    </HeroHighlight>
  );
}
