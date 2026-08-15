import { motion } from "framer-motion";
import "./HowIBuild.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the problem, the user and what the product actually needs.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I break the problem into smaller pieces and define the structure before writing code.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I turn ideas into functional interfaces, APIs and integrations using the right tools.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "I test, debug and iterate until the experience feels solid and the code stays maintainable.",
  },
];

const HowIBuild = () => {
  return (
    <section className="how-i-build section" id="how-i-build">
      <div className="how-i-build__container container">
        <SectionTitle
          eyebrow="HOW I BUILD"
          title="From idea"
          highlight="to interface."
        />
        <div className="how-i-build__steps">
          {steps.map((step, index) => (
            <motion.article
              className="build-step"
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <span className="build-step__number">{step.number}</span>

              <div className="build-step__content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
