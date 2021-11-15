import { useContext } from "react";
import DataContext from "../../context/DataContext";
import {Carousel,Container} from "react-bootstrap";

const Main = () => {
  
    const {productos} = useContext(DataContext);
    console.log(productos);
    return ( 
          <Container>
            <Carousel>
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
                                <Carousel.Caption>
                                <h3>{producto.title}</h3>
                                <button>VER MAS</button>
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
                                <Carousel.Caption>
                                <h3>{producto.title}</h3>
                                <button>VER MAS</button>
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
                                <Carousel.Caption>
                                <h3>{producto.title}</h3>
                                <button>VER MAS</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                         );
                     }
                 }
            
                 )    
                }
            </Carousel>
         </Container>
     );
}
 
export default Main;

