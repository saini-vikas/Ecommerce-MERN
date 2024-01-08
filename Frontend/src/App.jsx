import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Sales from "./pages/Sales";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({ name: "Vikas" });
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/sales" element={<Sales />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
