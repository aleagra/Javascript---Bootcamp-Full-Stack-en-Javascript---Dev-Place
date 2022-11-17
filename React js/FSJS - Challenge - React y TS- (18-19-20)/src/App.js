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
export const contexto = createContext();

function App() {

  return (
    <>
    <CartProvider>
      <Appbar />
      <Categoria />
      <BrowserRouter>
        <contexto.Provider>
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
          </Routes>
          <Footer />
        </contexto.Provider>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
