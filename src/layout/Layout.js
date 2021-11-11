import Navbar  from '../components/navBar/NavBar';
import { BrowserRouter as Routes } from 'react-router-dom';
import  "./Layout.css";

const Layout = () => {

    return ( 
      <Routes>
         <Navbar />
      </Routes>
     );
}
 
export default Layout;