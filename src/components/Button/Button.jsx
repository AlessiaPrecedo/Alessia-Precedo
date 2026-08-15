import { ArrowUpRight } from "lucide-react";
import "./Button.scss";

const Button = ({ children, href, variant = "primary", icon = true }) => {
  const content = (
    <>
      <span>{children}</span>

      {icon && <ArrowUpRight size={18} strokeWidth={1.8} />}
    </>
  );

  if (href) {
    return (
      <a className={`button button--${variant}`} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={`button button--${variant}`} type="button">
      {content}
    </button>
  );
};

export default Button;
