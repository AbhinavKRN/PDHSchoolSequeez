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
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.5,
        }}
        className="mt-12 flex justify-center"
      >
        <Image
          src={img1}
          alt="Vector Illustration"
          className="rounded-lg shadow-lg w-28 h-28"
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
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className="font-bold ">
          Elevate Your Career at PDH School of Tech and Business!
        </div>
        <div className="font-normal">
          Learn from industry leaders and innovate in pre incubator programs.{" "}
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
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.3,
        }}
        className="mt-8 flex justify-center"
      >
        <button
          onClick={() =>
            router.push(
              "https://docs.google.com/forms/d/e/1FAIpQLSehQlbNermYzdRPcAGe3I2ujBUIIB8Qmw7-VsHEhRHnk7YzWw/viewform",
            )
          }
          className="px-6 py-3 bg-white text-black  rounded-md text-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Join Today!
        </button>
      </motion.div>
    </HeroHighlight>
  );
}
