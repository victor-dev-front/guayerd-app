 import Home from "../pages/home/Home";
 import Productos from "../pages/productos/Productos.jsx";
 import Contacto from "../pages/contacto/Contacto";
 import {Route,Routes} from 'react-router-dom';
import Nosotros from "../pages/nosotros/Nosotros";

const Rutas = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
        </Routes>
    );
}

export default Rutas