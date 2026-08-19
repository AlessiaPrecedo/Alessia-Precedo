import { motion } from "framer-motion";
import alessiaImg from "../../assets/alessia.jpg";
import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <motion.div
          className="about__image-wrapper"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -8 }}
        >
          <img
            className="about__image"
            src={alessiaImg}
            alt="Alessia Precedo"
          />
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="about__eyebrow">ABOUT ME</p>

          <h2 className="about__title">More than just code.</h2>

          <div className="about__text">
            <p>
             I am a junior Full Stack developer focused on creating modern, functional web experiences centered on both business and user needs.
            </p>

            <p>
          I enjoy turning ideas into real products by combining clean code, thoughtful design, and problem-solving.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
