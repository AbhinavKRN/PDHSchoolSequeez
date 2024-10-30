"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
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
          Learn from industry leaders and innovate in pur incubator programs.{" "}
        </div>
        <Highlight className="text-black dark:text-white">
          Unleash Your Potential, Join Today!
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
