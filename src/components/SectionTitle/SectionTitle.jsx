import { motion } from "framer-motion";
import "./SectionTitle.scss";

const SectionTitle = ({ eyebrow, title, highlight, description }) => {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}

      <h2 className="section-title__heading">
        {title}

        {highlight && <span>{highlight}</span>}
      </h2>

      {description && (
        <p className="section-title__description">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
