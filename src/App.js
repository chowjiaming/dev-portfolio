import { useContext } from "react";
import ThemeContext from "./context/themeContext";
import { ScrollProvider } from "./context/scrollContext";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Footer from "./components/layout/Footer/Footer";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={theme}>
      <ScrollProvider>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </ScrollProvider>
      <ToggleSwitch />
    </div>
  );
}

export default App;
