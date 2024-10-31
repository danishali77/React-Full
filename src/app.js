import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Products from "./components/products";
import Login from "./components/login";
import Register from "./components/register";
import { Routes, Route } from "react-router-dom";
import ProductsTable from "./components/Product Table";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/productsTable" element={<ProductsTable></ProductsTable>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}
export default App;
