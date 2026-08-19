import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copyright">
          © {currentYear} Alessia Precedo. All rights reserved.</span>
        <button
          className="footer__top"
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
