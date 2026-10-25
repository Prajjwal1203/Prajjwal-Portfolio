"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-3 h-14 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 rounded-full border border-stone-900/[0.07] bg-[#faf9f6]/85 shadow-sm shadow-stone-900/[0.03] backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#1d1d1a]/85 sm:top-5"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      <nav aria-label="Main navigation" className="fixed left-1/2 top-3 flex h-14 -translate-x-1/2 items-center sm:top-5">
        <ul className="flex w-[calc(100vw-2rem)] max-w-[46rem] items-center justify-center gap-0.5 text-[0.68rem] font-medium text-stone-500 sm:gap-2 sm:text-sm">
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center rounded-full px-2 py-3 transition-colors hover:text-[#a34e32] dark:text-stone-400 dark:hover:text-white sm:px-3",
                  {
                    "text-[#a34e32] dark:text-[#e3a087]":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-[#eee9e0] dark:bg-white/[0.08]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
