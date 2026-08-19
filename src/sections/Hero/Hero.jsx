import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Hero.scss";
import Button from "../../components/Button/Button";
import HeroScene from "./HeroScene";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <HeroScene />
      <div className="hero__glow" />

      <div className="hero__container">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          JUNIOR FULL STACK DEVELOPER
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span>Alessia</span>
          <span translate="no">Precedo.</span>
        </motion.h1>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I build modern web experiences where clean code, thoughtful design and
          real-world functionality meet.
        </motion.p>

        <div className="hero__actions">
          <Button href="#projects">View my work</Button>

          <Button href="#contact" variant="secondary">
            Let's talk
          </Button>
        </div>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="https://github.com/AlessiaPrecedo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/alessiaprecedo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </motion.div>

        <motion.a
          href="#projects"
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span>Scroll to explore</span>
          <ArrowDown size={18} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
