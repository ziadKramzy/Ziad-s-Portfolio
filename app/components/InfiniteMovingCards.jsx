import React, { useRef, useEffect } from "react";
import styles from "./InfiniteMovingCards.module.css";

import { Icon } from "~/components/icon";

const skillIconMap = {
  Python: "python",
  Django: "django",
  Flask: "flask",
  React: "react",
  JavaScript: "javascript",
  Docker: "docker",
  Git: "git",
  Html5: "html5",
  Css3: "css3",
  Tailwindcss: "tailwindcss",
  "Bash Script": "bash",
  PostgreSql: "postgresql",
};

export function InfiniteMovingCards({ skills = [], direction = "right", speed = "slow" }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;
    if (!container || !scroll) return;

    let frame;
    let pos = 0;
    let step = speed === "fast" ? 3 : speed === "medium" ? 2 : 1;
    if (direction === "left") step = -step;

    function animate() {
      pos += step;
      if (Math.abs(pos) >= scroll.scrollWidth / 2) {
        pos = 0;
      }
      scroll.style.transform = `translateX(${-pos}px)`;
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [direction, speed]);

  // Ensure 'Flask' is always last in the skills order
  let orderedSkills = skills.filter(skill => skill !== 'Flask');
  if (skills.includes('Flask')) orderedSkills.push('Flask');
  const cards = [...orderedSkills, ...orderedSkills];

  return (
    <div className={styles.cardsContainer} ref={containerRef}>
      <div className={styles.cardsTrack} ref={scrollRef}>
        {cards.map((skill, i) => (
          <div className={styles.card} key={i}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <svg width={48} height={48} style={{ marginBottom: "0.5rem" }}>
                <use href={"/icons/skills-icons.svg#" + skillIconMap[skill]} />
              </svg>
              <span style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#b5e0ff" }}>{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
