import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#a34e32]">
        A little more
      </p>
      <h2 className="text-center text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
