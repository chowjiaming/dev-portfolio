import { ScrollProvider } from "./helpers/context/scrollContext";
import Navbar from "./components/Navbar/Navbar";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollProvider>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </ScrollProvider>
    </div>
  );
}

export default App;
