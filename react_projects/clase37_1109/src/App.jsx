import Nav from "./components/Nav";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Products  from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
