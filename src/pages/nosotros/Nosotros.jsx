import {Container} from "react-bootstrap";
import Exitos from "../../components/guayerd/exitos/Exitos";
import Historia from "../../components/guayerd/historia/Historia";
import Innovacion from "../../components/guayerd/innovacion/Innovacion";

const Nosotros = () => {
    return ( 
        <Container>
          <Historia/>
          <Innovacion/>
          <Exitos />
        </Container>
     );
}
 
export default Nosotros;