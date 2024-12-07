// Router //
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// Pages //
import { Home, Anmeldung } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anmeldung" element={<Anmeldung />} />
      </Routes>
    </Router>
  );
}

export default App;
