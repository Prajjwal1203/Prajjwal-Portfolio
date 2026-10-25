"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-2xl scroll-mt-28 text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-5 text-stone-600 dark:text-stone-300">
        Have a project in mind or just want to say hello? Send me a message.
      </p>

      <form
        className="mt-8 flex flex-col text-left"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 rounded-xl borderBlack bg-white/60 px-4 text-stone-900 transition placeholder:text-stone-400 focus:border-[#bd5e3d]/50 focus:outline-none dark:bg-white/[0.03] dark:text-white"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="my-3 h-52 rounded-xl borderBlack bg-white/60 p-4 text-stone-900 transition placeholder:text-stone-400 focus:border-[#bd5e3d]/50 focus:outline-none dark:bg-white/[0.03] dark:text-white"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
