import { Navbar,Container } from "react-bootstrap";
import style from "./NavBar.module.css";
import Rutas from "../../routes/index.routes";
import {Link} from 'react-router-dom';

const NavBar = () => {

    return ( 
        <>
            <Navbar className={style.navbar} expand="lg">
                <Container>
                <Link className={style.logo} to="/">Guayerd <span>Bikes</span></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={style.boton} />
                <Navbar.Collapse  className={style.nav}>
                        <Link className={style.link} to="/">Home</Link>
                        <Link className={style.link} to="/productos">Productos</Link>
                        <Link className={style.link} to="/contacto">Contacto</Link>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            <Rutas/>
        </>
     );
}
 
export default NavBar;