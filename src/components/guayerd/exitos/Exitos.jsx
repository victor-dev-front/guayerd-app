import styles from "./Exitos.module.css";
import imgExitos from "../../../assets/img/exitos.jpg";

const Exitos = () => {
    return ( 
        <>
            <h2 className={styles.titulo}>Exitós</h2>

            <div>
                <img src={imgExitos} alt="imgen exitos" />
                <p className={styles.parrafo}>Durante más de una década, GUAYERD ha sido el principal patrocinador del MULTIVAN GUAYERD BIKING TEAM, con el que se han obtenido éxitos a nivel internacional y en 2013 se amplió la colaboración y presencia de GUAYERD con el ciclismo de alta competición al entrar a formar parte del LAMPRE-GUAYERD en el circuito UCI World Tour. Con este movimiento, GUAYERD ponía por primera vez en sus 25 años de historia sus bicicletas a competir al más alto nivel tanto en MTB como en carretera.</p>
                <p className={styles.parrafo}>Para GUAYERD la decisión de estar presente como patrocinador en dos equipos internacionales va mucho más allá de una mera cuestión de marketing. Como sucede en la Fórmula 1, la estrecha colaboración entre los fabricantes y los mejores profesionales, tanto ingenieros como atletas, da como resultado el mejor producto posible. Resultado de esta colaboración han surgido proyectos como la BIG.NINE, NINETY-SIX, REACTO o SCULTURA. Todas plataformas que han marcado un antes y un después en sus disciplinas y que han recibido la aprobación de los usuarios y los reconocimientos de los medios internacionales más importantes.</p>
                <p className={styles.parrafo}>Franco Cervi es el jefe de ingenieros de GUAYERD y tú con tu GUAYERD te beneficias de los conocimientos de Franco y todo su equipo de ingenieros, además de toda la experiencia de profesionales como Sandro Guzmán, Pepe Sánchez o Rui Costa JR. Su éxito es nuestra motivación.</p>
            </div>
        </>
     );
}
 
export default Exitos;