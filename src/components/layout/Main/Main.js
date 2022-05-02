import About from "../../Pages/About/About";
import Projects from "../../Pages/Projects/Projects";
import Contact from "../../Pages/Contact/Contact";
import "./Main.css";

export default function Main() {
  return (
    <main className="main__container">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
