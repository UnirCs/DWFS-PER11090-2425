import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Movie from "../views/Movie";
import NotFound from "../views/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;