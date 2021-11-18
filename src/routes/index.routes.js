import { Route, Routes } from "react-router-dom";
import {Home, Productos, Contacto, Nosotros} from '../pages'

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
    </Routes>
  );
};

export default Rutas;
