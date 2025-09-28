import "./App.css";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Herosection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="reviews">reviews</section>
      <section id="contact">contato</section>
    </div>
  );
}

export default App;
