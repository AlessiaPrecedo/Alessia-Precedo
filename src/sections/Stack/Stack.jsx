import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Stack.scss";

const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Firebase",
  "Firestore",
  "Sass",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Vite",
  "Framer Motion",
];

const Stack = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedTech, setSelectedTech] = useState("React");

  const radius = 190;

  const positions = useMemo(() => {
    return technologies.map((technology, index) => {
      const angle =
        (index / technologies.length) * Math.PI * 2 +
        (rotation * Math.PI) / 180;

      return {
        technology,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        depth: Math.sin(angle),
      };
    });
  }, [rotation]);

  const handleDrag = (_, info) => {
    const movement = info.delta.x + info.delta.y;

    setRotation((prev) => prev + movement * 0.35);
  };

  const handleSelect = (technology) => {
    setSelectedTech(technology);
  };

  return (
    <section className="stack section" id="stack">
      <div className="stack__container container">
        <SectionTitle
          eyebrow="TECH STACK"
          title="What I use"
          highlight="to build."
          description="Drag the stack to explore the technologies I use across frontend, backend and development workflows."
        />
      </div>

      <div className="stack__experience">
        <motion.div
          className="stack-orbit"
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0}
          onDrag={handleDrag}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="stack-orbit__circle" />

          <div className="stack-orbit__center">
            <span>STACK</span>
            <small>DRAG ME</small>
          </div>

          {positions.map(({ technology, x, y, depth }) => {
            const isActive = technology === selectedTech;

            return (
              <motion.button
                key={technology}
                type="button"
                className={`stack-orbit__tech ${isActive ? "active" : ""}`}
                animate={{
                  x,
                  y,
                  scale: isActive ? 1.15 : 0.85 + (depth + 1) * 0.1,
                  opacity: 0.45 + (depth + 1) * 0.25,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                onClick={() => handleSelect(technology)}
              >
                {technology}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="stack__selected"
          key={selectedTech}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>SELECTED TECHNOLOGY</span>

          <h3>{selectedTech}</h3>

          <p>
            Part of my development toolkit for building modern web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;
