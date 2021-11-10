import "./App.css";
import "./utilities.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Reservation from "./components/Reservation/Reservation";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
