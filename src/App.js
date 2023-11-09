import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className=" bg-blue-950 p-10">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
