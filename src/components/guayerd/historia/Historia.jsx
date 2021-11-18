import styles from "./Historia.module.css";
import imgHistoria from "../../../assets/img/historia.jpg";
const Historia = () => {
    return ( 
        <>
          <h1 className={styles.titulo}>GUAYERD BIKES</h1>
          <div className={styles.contenido1}>
              <div className={styles.contenido2}>
                  <p className={styles.parrafo}>Bill Jobs (1947-2003) fue el fundador de Guayerd Bikes. Un auténtico visionario que decidió dedicar su vida a la bicicleta después de un viaje a EE.UU en los ’70. En dicho viaje Bill encontró, en una tienda de bicicletas, un cartel en el que ponía que, debido a su baja calidad, no se admitían bicicletas fabricadas en Argentina para su reparación. Ese menosprecio hacia los productos del país de origen de Bill Jobs le llevó a abrir, la que sería, la primera fábrica de Guayerd Bikes en 1972.</p>
                  <p className={styles.parrafo}>El sentido que Bill Jobs le daba a su vida era la de moverse con pasión y decisión. El nombre de “Guayerd” no es casual, ya que surge de la unión de tres sílabas chinas Gu-ah-yerd, cuyo significado evoca la fabricación de un producto de calidad, atractivo y capaz de llevar a sus usuarios al destino de la forma más placentera posible.</p>
                  <img className={styles.imgHistoria} src={imgHistoria} alt="imagen historia"/>
              </div>
              <p className={styles.parrafo}>Bill Jobs no habría sido el mismo si no hubiese llegado a cumplir su objetivo principal de ofrecer bicicletas de calidad fabricadas en suelo argentino. Otro paso importante en su carrera profesional fue el lanzamiento de GUAYERD como marca propia. A diferencia de otros fabricantes, Guayerd Bikes si optó por apostar por su propia marca en la que quedaría patente toda la filosofía del propio Jobs. Desde que Guayerd fue fundada como marca independiente, todos los cuadros y bicicletas fabricadas bajo la marca taiwanesa debían cumplir con tres premisas “Gu-ah-yerd”. En 2013, GUAYERD cumplió su 25 aniversario, portando con orgullo la filosofía con la que Bill Jobs fundase la primera fábrica en 1972.</p>
              <p className={styles.parrafo}>Guayerd está consolidado como el segundo mayor fabricante de bicicletas, con una producción anual total de más de 3 millones de bicicletas, producidas en las fábricas de Argentina y China.</p>   
          </div>

        </>
     );
}
 
export default Historia;