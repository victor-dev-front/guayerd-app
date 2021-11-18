import styles from "./Innovacion.module.css";
import imgInnovacion from "../../../assets/img/innovación.jpg";
const Innovacion = () => {
    return ( 
           <>
             <h2 className={styles.titulo}>Innovación</h2>
             <div className={styles.contenido}>
                 <p className={styles.parrafo}>La historia de cada bicicleta GUAYERD empieza sólo a 100km del lugar donde la historia de la bicicleta comenzó en 1817. Justo a las afueras de Stuttgart, corazón de Alemania en innovaciones del sector automovilístico y bastión de marcas líderes en tecnología como Porsche o Mercedes-Benz, es donde tienen su base los diseñadores e ingenieros del departamento de I+D de GUAYERD. Es aquí donde todas nuestras bicicletas se inventan, planifican y desarrollan para su distribución internacional en 77 países.</p>
                 <img className={styles.imgInnovacion} src={imgInnovacion} alt="imagen innovación" />
                 <p className={styles.parrafo}>Así, nuestros desarrolladores de producto no sólo tienen que tener en cuenta un montón de diferentes requisitos técnicos, también tienen que garantizar que cada bicicleta de cada categoría es completamente merecedora de llevar el nombre GUAYERD en sus tubos. Ya se trate de una bici de montaña de alta gama, una de carretera en carbono para competición, una bici eléctrica fiable o un modelo desenfadado para principiantes, sólo se validan los mejores diseños que se fabricarán en colaboración con proveedores de primer nivel. Para la fluidez de todos estos procesos tan estrechamente relacionados, el equipo de I+D alemán viaja frecuentemente Taiwán.</p>
                 <p className={styles.parrafo}>Allí, nuestros expertos debaten y revisan con los especialistas taiwaneses cada paso: desde el primer prototipo hasta el modelo de serie perfectamente acabado. Cada bicicleta que sale completamente montada de una de las tres fábricas en Asia es realmente única. Porque cuando una bici está camino a su nuevo dueño en cualquiera de los 77 países del mundo en los que se distribuye GUAYERD, no sólo el departamento de I+D alemán ha infundido vida en la bicicleta, sino que cada una de las personas involucradas en el proceso de fabricación ha velado para que una genuina bicicleta se haya fabricado con el mayor cuidado posible.</p>
             </div>
           </>
     );
}
 
export default Innovacion;