import { Appbar } from "./componentes/Navbar";
import { Footer } from "./componentes/Footer";
import { Categoria } from "./componentes/Nav-categoria";
import { General } from "./componentes/General";
import { Homepage } from "./componentes/pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import { Celulares } from "./componentes/pages/Celulares";
import { Tablets } from "./componentes/pages/Tablets";
import { Televisores } from "./componentes/pages/Televisores";
import { Todoslosproductos } from "./componentes/pages/todoproductos";
import { Sesion } from "./componentes/pages/sesion";
import { React, createContext } from "react";
import Carrito from "./componentes/pages/Carrito";
import { CartProvider } from "react-use-cart";
import { Detalles } from "./componentes/detalles";
import Search from "./componentes/pages/Search";
import { Ingresarproducto } from "./componentes/ingresarproducto";
import { IngresarUser } from "./componentes/ingresaruser";
import Cardform from "./componentes/metodopago";
import DetallesCompra from "./componentes/detallesCompra";
export const contexto = createContext();

function App() {
  return (
    <>
      <div className="app">
        <CartProvider>
          <BrowserRouter>
            <Appbar />

            <Routes>
              <Route
                path="/todoslosproductos"
                element={<Todoslosproductos />}
              />
              <Route path="/Celulares" element={<Celulares />} />
              <Route path="/Tablets" element={<Tablets />} />
              <Route path="/Televisores" element={<Televisores />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/General" element={<General />} />
              <Route path="/Iniciar Sesion" element={<Sesion />} />
              <Route path="/Carrito" element={<Carrito />} />
              <Route path="/Detalles/:id" element={<Detalles />} />
              <Route path="/Search/:buscar" element={<Search />} />
              <Route path="/Productos" element={<Ingresarproducto />} />
              <Route path="/Register" element={<IngresarUser />} />
              <Route path="/Metodo de pago" element={<Cardform />} />
              <Route path="/Detalles de compra" element={<DetallesCompra />} />
              Cardform
            </Routes>

            <Footer />
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
