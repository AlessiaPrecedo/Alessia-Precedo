import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSass,
  SiVite,
  SiFramer,
  SiMysql,
  SiSocketdotio,
} from "react-icons/si";

import "./Stack.scss";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    description:
      "I use React to build dynamic, reusable and component-based user interfaces.",
    icon: FaReact,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description:
      "My core language for building interactive and dynamic web experiences.",
    icon: SiJavascript,
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "I use Node.js to build server-side applications and backend services.",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    category: "Backend",
    description:
      "A framework I use to structure APIs, routes and application logic.",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "A NoSQL database I use to store and manage application data.",
    icon: SiMongodb,
  },
  {
    name: "Firebase",
    category: "Backend Services",
    description:
      "I use Firebase services for authentication, data storage and application development.",
    icon: SiFirebase,
  },
  {
    name: "Sass",
    category: "Styling",
    description:
      "I use Sass to organize styles and create more scalable CSS architectures.",
    icon: FaSass,
  },
  {
    name: "HTML5",
    category: "Frontend",
    description:
      "The foundation I use to structure semantic and accessible web content.",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    category: "Styling",
    description:
      "I use CSS to create responsive layouts and polished user interfaces.",
    icon: FaCss3Alt,
  },
  {
    name: "Git",
    category: "Tools",
    description:
      "My version control system for tracking changes throughout development.",
    icon: FaGitAlt,
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Where I host repositories and manage my project workflow.",
    icon: FaGithub,
  },
  {
    name: "Vite",
    icon: SiVite,
    category: "Tools",
    description:
      "A fast development environment and build tool I use for modern frontend projects.",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    category: "Animation",
    description:
      "I use Framer Motion to create smooth and meaningful animations in React.",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    description:
      "A relational database I use to store and manage structured application data.",
  },
  {
    name: "Socket.io",
    icon: SiSocketdotio,
    category: "Backend Services",
    description:
      "I use Socket.io for real-time, bidirectional communication between clients and servers.",
  },
];

const Stack = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedTech, setSelectedTech] = useState(technologies[0]);

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
  drag="x"
  dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
  dragElastic={0}
  onDrag={handleDrag}
  whileTap={{ cursor: "grabbing" }}
><div className="stack-orbit__circle" />

          <div className="stack-orbit__center">
            <span>STACK</span>
            <small>DRAG ME</small>
          </div>

          {positions.map(({ technology, x, y, depth }) => {
            const isActive = technology.icon === selectedTech.icon;
            const Icon = technology.icon;

            return (
              <motion.button
                key={technology.icon}
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
                <Icon />
                <span>{technology.icon}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="stack__selected"
          key={selectedTech.icon}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>SELECTED TECHNOLOGY</span>

          <div className="stack__selected-icon">
            {(() => {
              const SelectedIcon = selectedTech.icon;

              return <SelectedIcon />;
            })()}
          </div>

          <p className="stack__category">{selectedTech.category}</p>

          <h3>{selectedTech.name}</h3>

          <p>{selectedTech.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;
