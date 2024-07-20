"use client";

import React from "react";
import { motion } from "framer-motion";
import HeadingTitle from "./chunkcomponents/HeadingTitle";
import SectionCard from "./chunkcomponents/SectionCard";
import { useSectionActiveLink } from "@/hooks/useSectionActiveLink";

const AboutSection = () => {
  const { ref } = useSectionActiveLink("About");

  return (
    <SectionCard>
      <HeadingTitle title="About Me" size="big" />
      <motion.div
        ref={ref}
        id="about"
        className="bg-dark-alternative text-primary py-5 px-4 sm:py-10 sm:px-8 border-2 border-neutral-800 rounded-2xl hover:backdrop-blur-lg hover:backdrop-brightness-75 scroll-mt-28 z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "keyframes" }}
      >
        <p className="font-roboto font-light text-base sm:text-xl">
          Hi, I'm Aro Barath Chandru, a dedicated software engineer specializing in{" "}
          <span className="text-[#7a52cf]">Python</span> and{" "}
          <span className="text-[#7a52cf]">JavaScript</span> (React.js, Next.js). I focus on developing cutting-edge solutions and integrating AI technologies to drive innovation.
        </p>
        <p className="font-roboto font-light text-base sm:text-xl mt-4">
          Beyond my current roles, I’m working on an exciting AI engine with the vision of launching a groundbreaking AI startup. 
        </p>
        <p className="font-roboto font-light text-base sm:text-xl mt-4">
          Currently pursuing a BE in Electronic & Communication Engineering from Jeppiaar Engineering College, Chennai, I am passionate about pushing the boundaries of technology. Let’s connect and explore new opportunities together!
        </p>
      </motion.div>
    </SectionCard>
  );
};

export default AboutSection;
