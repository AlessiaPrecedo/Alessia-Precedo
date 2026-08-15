import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Projects.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Eleodora Pizarro Atelier",
    category: "E-Commerce",
    description:
      "E-commerce desarrollado con React y Firebase, enfocado en una experiencia de compra clara y moderna.",
    technologies: ["React", "Firebase", "Sass"],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Juli Tattoo",
    category: "Landing Page",
    description:
      "Landing page para una tatuadora, diseñada para presentar su trabajo, servicios y facilitar el contacto.",
    technologies: ["React", "Vite", "Sass"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Atomic Bombs Roller Derby",
    category: "Web App",
    description:
      "Aplicación web para gestionar una rifa utilizando JavaScript y Firebase Firestore.",
    technologies: ["JavaScript", "Firebase", "Firestore"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[current];

  return (
    <section className="projects section" id="projects">
      <div className="projects__container container">
        <SectionTitle
          eyebrow="SELECTED WORK"
          title="Things I've"
          highlight="built."
          description="A selection of projects where I turned ideas into functional digital experiences."
        />

        <div className="projects__carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                number={`0${project.id} / 0${projects.length}`}
                category={project.category}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
              />

              <div className="projects__controls">
                <button
                  type="button"
                  onClick={previousProject}
                  aria-label="Previous project"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextProject}
                  aria-label="Next project"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="projects__progress">
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === current ? "active" : ""}
              onClick={() => setCurrent(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
