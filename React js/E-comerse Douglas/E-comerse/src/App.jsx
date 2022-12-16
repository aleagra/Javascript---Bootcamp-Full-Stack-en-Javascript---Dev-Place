import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { Homepage } from "./Componentes/Homepage";
import { Footer } from "./Componentes/Footer";
import { Appbar } from "./Componentes/Navbar";
import { Login } from "./Componentes/Login";
import { Register } from "./Componentes/Register";
import Cart from "./Componentes/Cart";
import PaymentMethod from "./Componentes/metodopago";
import { ListProducts } from "./Componentes/ListProducts";
import { Ingresarproducto } from "./Componentes/ingresarProducto";
import { AllProducts } from "./Componentes/AllProducts";
import { Hoddies } from "./Componentes/Hoddies";
import { Tshirts } from "./Componentes/T-shirt";
import { Jeans } from "./Componentes/Jeans";
import { Details } from "./Componentes/Details";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Appbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/PaymentMethod" element={<PaymentMethod />} />
            <Route path="/Products" element={<ListProducts />} />
            <Route path="/RegisterProduct" element={<Ingresarproducto />} />
            <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/Hoddies" element={<Hoddies />} />
            <Route path="/Tshirts" element={<Tshirts />} />
            <Route path="/Jeans" element={<Jeans />} />
            <Route path="/Details/:id" element={<Details />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
