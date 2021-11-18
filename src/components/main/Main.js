import DataContext from "../../context/DataContext";
import {Link} from 'react-router-dom';
import {Carousel,Container} from "react-bootstrap";
import { useContext } from "react";
import styles from "./Main.module.css";

const Main = () => {

    const {productos} = useContext(DataContext);
    console.log(productos);
    return (
        <div className={styles.fondo}>
          <Container>
            <Carousel className={styles.Carousel}>
                {
                 productos.map((producto,i) => {
                     if(i === 0){
                         return (
                            <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={producto.imgUrl}
                            alt={producto.title}
                            />
                                <Carousel.Caption className={styles.infoBici}>
                                <h3>{producto.title}</h3>
                                <Link className={styles.btn} to="/productos">VER MAS</Link>
                                </Carousel.Caption>
                            </Carousel.Item>  
                         );
                     } else if(i === 1){
                         return (
                            <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100"
                            src={producto.imgUrl}
                            alt={producto.title}
                            />
                                <Carousel.Caption className={styles.infoBici}>
                                <h3>{producto.title}</h3>
                                <Link className={styles.btn} to="/productos">VER MAS</Link>
                                </Carousel.Caption>
                            </Carousel.Item>    
                         );
                     } else if(i === 2){
                         return (
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={producto.imgUrl}
                            alt={producto.title}
                            />
                                <Carousel.Caption className={styles.infoBici}>
                                <h3>{producto.title}</h3>
                                <Link className={styles.btn} to="/productos">VER MAS</Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                         );
                     }
                 }
            
                 )    
                }
            </Carousel>
          </Container>
        </div> 
     );
}
 
export default Main;

