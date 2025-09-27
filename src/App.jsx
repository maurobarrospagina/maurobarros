import "./App.css";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      <section className="mt-20" id="gallery">
        <Gallery />
      </section>
      <p className="min-h-96">teste</p>
    </div>
  );
}

export default App;
