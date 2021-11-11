import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import { Container } from "react-bootstrap";


 const Home = () => {
     return (
         <> 
            <Header />
            <Container> 
                <Main />
            </Container>
         </>
      );
 }
  
 export default Home;