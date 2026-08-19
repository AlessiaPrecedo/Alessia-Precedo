import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="Let's build"
          highlight="something."
          description="Have a project, an opportunity or simply want to talk? My inbox is open."
        />

        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a className="contact__email" href="mailto:alessiaprecedo777@gmail.com">
            alessiaprecedo777@gmail.com
          </a>

          <div className="contact__links">
            <a href="https://www.linkedin.com/in/alessiaprecedo/" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} />
            </a>

            <a href="https://github.com/alessiaprecedo" target="_blank" rel="noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
