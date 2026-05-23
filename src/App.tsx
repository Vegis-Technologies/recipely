import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Recipes from "./pages/recipes";
import Collections from "./pages/collections";
import SingleRecipePage from "./pages/recipes/[id]/single-recipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<SingleRecipePage />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
