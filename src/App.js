import { useContext } from "react";
import ThemeContext from "./helpers/context/themeContext";
import { ScrollProvider } from "./helpers/context/scrollContext";
import Navbar from "./components/Navbar/Navbar";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import ToggleSwitch from "./components/Shared/ToggleSwitch/ToggleSwitch";
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
