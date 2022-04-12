import Contact from "../../components/Contact/Contact";
import Attribution from "../../components/Attribution/Attribution";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer__container">
      <Contact />
      <Attribution />
    </footer>
  );
}
