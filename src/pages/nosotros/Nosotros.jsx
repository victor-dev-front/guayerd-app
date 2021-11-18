import { Container } from "react-bootstrap";
import { Exitos, Historia, Innovacion, TablaPremios } from "../../components";
import styles from "./Nosotros.module.css";

const Nosotros = () => {
  return (
    <div className={styles.fondo}>
      <Container>
        <Historia />
        <Innovacion />
        <Exitos />
        <TablaPremios />
      </Container>
    </div>
  );
};

export default Nosotros;
