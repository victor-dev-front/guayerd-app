import {Container} from "react-bootstrap";
import Exitos from "../../components/guayerd/exitos/Exitos";
import Historia from "../../components/guayerd/historia/Historia";
import Innovacion from "../../components/guayerd/innovacion/Innovacion";
import styles from "./Nosotros.module.css";

const Nosotros = () => {
    return (
        <div  className={styles.fondo}>
          <Container>
            <Historia/>
            <Innovacion/>
            <Exitos />
          </Container>
        </div>
     );
}
 
export default Nosotros;