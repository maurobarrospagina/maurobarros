import "./App.css";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </div>
  );
}

export default App;
