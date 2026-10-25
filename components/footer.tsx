import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t border-stone-900/10 px-4 py-8 text-center text-stone-500 dark:border-white/10 dark:text-stone-400">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Prajjwal Mishra. All rights reserved.
      </small>
      <p className="text-xs">
        Designed and built with Next.js, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
}
