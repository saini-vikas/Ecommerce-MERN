import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Sales from "./pages/Sales";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
