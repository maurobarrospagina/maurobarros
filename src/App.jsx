import "./App.css";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Herosection from "./components/Herosection";
import Reviews from "./components/Reviews";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

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
      <section id="reviews">
        <Reviews />
      </section>
      <section id="contact">
        <Contato />
      </section>
      <Footer />
    </div>
  );
}

export default App;
