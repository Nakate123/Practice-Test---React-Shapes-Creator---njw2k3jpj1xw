import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
// import About from './components/About/About';
// import Team from './components/Team/Team';
// import Vision from './components/Vision/Vision';
import CreateShapes from "./components/CreateShapes/CreateShapes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:tabType" element={<Home />} />
        <Route path="/createshapes" element={<CreateShapes />} />
      </Routes>
    </div>
  );
}

export default App;
