import { motion } from "framer-motion";
import "./About.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <SectionTitle
          eyebrow="ABOUT ME"
          title="More than"
          highlight="just code."
        />

        <div className="about__content">
          <motion.div
            className="about__statement"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I&apos;m a junior full stack developer focused on building useful,
              thoughtful and visually engaging web experiences.
            </p>
          </motion.div>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              My background in e-commerce taught me to think about technology
              from a practical perspective: understanding users, solving
              problems and turning ideas into something that actually works.
            </p>

            <p>
              I enjoy working across the stack, learning new technologies and
              continuously improving the way I build.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
