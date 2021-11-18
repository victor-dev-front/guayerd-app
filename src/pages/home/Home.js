import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
import Main from "../../components/main/Main";
import Notificacion from "../../components/notificacion/Notificacion";

 const Home = () => {
    
     return (
       <> 
            <Notificacion/>
            <Header />
            <Main />
            <Section /> 
         </>
      );
 }
  
 export default Home;