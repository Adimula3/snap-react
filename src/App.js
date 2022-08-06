
import './App.css';
import Navbar from "./component/navbar";
import Hero from "./pages/hero";
import MobileNav from "./component/mobileNav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNav />
        <Hero />

    </div>
  );
}

export default App;
