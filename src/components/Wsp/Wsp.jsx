import { FaWhatsapp } from "react-icons/fa";
import "./Wsp.scss";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/5491144046226"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact me on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsApp;
