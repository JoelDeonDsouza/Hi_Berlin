// Router //
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// Pages //
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
