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

function App() {
  return (
    <>
      <Appbar />
      <Categoria />
      <BrowserRouter>
        <Routes>
          <Route path="/todoslosproductos" element={<Todoslosproductos />} />
          <Route path="/Celulares" element={<Celulares />} />
          <Route path="/Tablets" element={<Tablets />} />
          <Route path="/Televisores" element={<Televisores />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/General" element={<General />} />
          <Route path="/Iniciar Sesion" element={<Sesion />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
