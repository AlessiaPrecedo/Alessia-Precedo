import "./ProjectCard.scss";

const ProjectCard = ({
  number,
  category,
  title,
  description,
  technologies,
  github,
  demo,
}) => {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__number">{number}</span>

        <span className="project-card__category">{category}</span>
      </div>

      <div className="project-card__content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-card__technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="project-card__bottom">
        <div className="project-card__links">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}

          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
