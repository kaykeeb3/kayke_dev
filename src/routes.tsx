import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Projects from "./pages/Projects/projects";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
