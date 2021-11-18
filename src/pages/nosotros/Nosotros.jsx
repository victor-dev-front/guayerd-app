import {Container} from "react-bootstrap";
import Exitos from "../../components/guayerd/exitos/Exitos";
import Historia from "../../components/guayerd/historia/Historia";
import Innovacion from "../../components/guayerd/innovacion/Innovacion";
import TablaPremios from "../../components/TablaPremios/TablaPremios";

const Nosotros = () => {
    return ( 
        <Container>
          <Historia/>
          <Innovacion/>
          <Exitos />
          <TablaPremios />
        </Container>
     );
}
 
export default Nosotros;