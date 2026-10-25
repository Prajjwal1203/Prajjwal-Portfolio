"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];



export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  
  
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group h-full"
    >
      <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-900/[0.08] bg-white/60 transition-colors hover:bg-white dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#eee9e0] dark:bg-white/5">
          <Image
            src={imageUrl}
            alt={`${title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-[#eee9e0] px-3 py-1 text-[0.65rem] font-medium tracking-wide text-stone-600 dark:bg-white/[0.08] dark:text-stone-300"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-stone-900/10 px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-[#a34e32]/30 hover:text-[#a34e32] dark:border-white/10 dark:text-stone-100 dark:hover:text-[#e3a087]"
            >
              View project <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </section>
    </motion.div>
  );
}
