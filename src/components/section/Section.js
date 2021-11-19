import { Container } from "react-bootstrap";
import styles from "./Section.module.css";
import { BsCheck2Square } from "react-icons/bs";
import {Link} from "react-router-dom";
const Section = () => {
  return (
    <div className={styles.section}>
      <Container>
        <h2 className={styles.subTitulo}>¿Por qué elegirnos?</h2>
        <ul>
          <li>
            <p>
              Te brindaremos un asesoramiento de primer nivel.{" "}
              <span className={styles.colorIcono}>
                <BsCheck2Square />
              </span>
            </p>
          </li>
          <li>
            <p>
              Nuestros productos se exportan y se venden en 77 países.{" "}
              <span className={styles.colorIcono}>
                <BsCheck2Square />
              </span>
            </p>
          </li>
          <li>
            <p>
              Cada bicicleta que se ofrece al público esta hecha con materia
              prima de primera calidad.{" "}
              <span className={styles.colorIcono}>
                <BsCheck2Square />
              </span>{" "}
            </p>
          </li>
          <li>
            <p>
              En GUAYERD nos aseguramos que cada bicicleta que está en camino a
              su nuevo dueño, sea única y tenga el mayor cuidado en su
              fabricación.{" "}
              <span className={styles.colorIcono}>
                <BsCheck2Square />
              </span>
            </p>
          </li>
        </ul>
         <div className={styles.contenedorBoton}>
            <Link className={styles.btn} to="/nosotros">MAS SOBRE NOSOTROS</Link>
        </div>
      </Container>
    </div>
  );
};

export default Section;
