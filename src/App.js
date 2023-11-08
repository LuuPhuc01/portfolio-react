import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-blue-950 px-5">
      <div className=" container mx-auto px-15 py-5">
        <Header />
      </div>
      <div className=" container mx-auto px-15 py-5 divide-y-2">
        <Banner />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
