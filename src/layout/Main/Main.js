import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import "./Main.css";

export default function Main() {
  return (
    <main className="main__container">
      <About />
      <Projects />
    </main>
  );
}
