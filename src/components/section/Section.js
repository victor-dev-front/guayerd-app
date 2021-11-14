import { Container } from "react-bootstrap";
import styles from "./Section.module.css";
import { BsCheck2Square } from "react-icons/bs";
const Section = () => {
    return ( 
        <div className={styles.section}>
            <Container>
               <h2 className={styles.subTitulo}>¿Por que elegirnos?</h2>
               <ul>
                    <li>
                        <p>Te brindaremos un asesoramiento de primer nivel. <span className={styles.colorIcono}><BsCheck2Square/></span></p>
                    </li>
                    <li>
                        <p>Nuestros productos se exportan y se venden en 77 paises. <span className={styles.colorIcono}><BsCheck2Square/></span></p>
                    </li>
                    <li>
                        <p>Cada bicicleta que se ofrece al publico esta echa con materia prima de primera calidad. <span className={styles.colorIcono}><BsCheck2Square/></span> </p>
                    </li>
                    <li>
                        <p>En GUAYERD nos aseguramos que cada bicicleta que esta en camino a su nuevo dueño, sea unica y tengo el mayor cuidado en su fabricacion. <span className={styles.colorIcono}><BsCheck2Square/></span></p>
                    </li>
               </ul>
             </Container>
        </div>
     );
}
 
export default Section;