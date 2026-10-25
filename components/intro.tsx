"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Photo1 from "../public/Photo1.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 w-full max-w-5xl scroll-mt-32 pt-8 sm:mb-0 sm:pt-14"
    >
      <div className="grid items-center gap-12 sm:grid-cols-[1fr_0.72fr] sm:gap-16">
        <div className="order-2 text-center sm:order-1 sm:text-left">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-900/10 px-3 py-1.5 text-xs font-medium tracking-wide text-stone-600 dark:border-white/10 dark:text-stone-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            OPEN TO OPPORTUNITIES
          </motion.div>

          <motion.p
            className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[#a34e32]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Hello, I&apos;m Prajjwal
          </motion.p>
          <motion.h1
            className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            I build thoughtful{" "}
            <span className="font-normal italic text-[#a34e32]">digital</span>{" "}
            experiences.
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-stone-600 dark:text-stone-300 sm:mx-0 sm:text-lg sm:leading-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Software developer focused on building useful, polished web
            applications with React, Next.js, and modern web technologies.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium sm:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.6 }}
          >
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3.5 text-white transition hover:bg-[#a34e32] dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-[#e3a087]"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Let&apos;s talk
              <BsArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <a
              className="group flex items-center gap-2 rounded-full borderBlack px-5 py-3.5 text-stone-700 transition hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-white/10"
              href="/Prajwal_Resume.pdf"
              download
            >
              Download CV
              <HiDownload className="transition group-hover:translate-y-1" />
            </a>

            <a
              aria-label="LinkedIn profile"
              href="https://www.linkedin.com/in/prajjwal-mishra-434a37218"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full borderBlack p-3.5 text-stone-600 transition hover:border-[#a34e32]/30 hover:text-[#a34e32] dark:text-stone-300"
            >
              <BsLinkedin />
            </a>

            <a
              aria-label="GitHub profile"
              href="https://github.com/Prajjwal1203"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full borderBlack p-3.5 text-[1.35rem] text-stone-600 transition hover:border-[#a34e32]/30 hover:text-[#a34e32] dark:text-stone-300"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative order-1 mx-auto w-full max-w-sm sm:order-2"
          initial={{ opacity: 0, y: 20, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-[#bd5e3d]/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#eee9e0] dark:bg-white/10">
            <Image
              src={Photo1}
              alt="Portrait of Prajjwal"
              fill
              sizes="(max-width: 640px) 80vw, 360px"
              quality={90}
              priority
              className="object-cover"
            />
          </div>
          <span className="absolute -bottom-5 -left-5 rounded-xl border border-stone-900/10 bg-[#faf9f6] px-4 py-3 text-xs font-medium tracking-wide text-stone-600 shadow-sm dark:border-white/10 dark:bg-[#1d1d1a] dark:text-stone-300">
            BASED IN INDIA
          </span>
        </motion.div>
      </div>
    </section>
  );
}
