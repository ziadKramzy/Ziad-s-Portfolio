import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import "./InfiniteMovingCards.module.css";

export function InfiniteMovingCardsDemo() {
  const skills = [
    "Python",
    "Django",
    "Flask",
    "React",
    "JavaScript",
    "Docker",
    "Git",
    "Html5",
    "Css3",
    "Tailwindcss",
    "Bash Script",
    "PostgreSql",
  ];
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      style={{ margin: '2rem 0' }}
    >
      <InfiniteMovingCards skills={skills} direction="right" speed="slow" />
    </div>
  );
}
