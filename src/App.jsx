import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <div>
      <h1>Hello Niko Router</h1>

      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
