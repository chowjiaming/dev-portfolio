import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Crafted with <span className="footer__emoji">♥</span> by{" "}
        <a
          className="footer__text footer__text--link"
          href="https://github.com/chowjiaming"
        >
          Joseph Chow
        </a>
        .
      </p>
    </footer>
  );
}
