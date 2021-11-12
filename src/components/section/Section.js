import { Container } from "react-bootstrap";
import styles from "./Section.module.css";
const Section = () => {
    return ( 
        <div className={styles.section2}>
            <Container>
               <h2 className={styles.subTitulo}>¿Por que elegirnos?</h2>
               <ul>
                    <li>Te brindaremos un asesoramiento de primer nivel <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#6BA8CB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </li>
                    <li>Nuestros productos se exportan y venden en 77 paises <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#6BA8CB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </li>
                    <li>Cada bicicleta que se ofrece al publico, esta echa con materia de primera calidad <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#6BA8CB" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </li>
                    <li></li>
               </ul>
             </Container>
        </div>
     );
}
 
export default Section;