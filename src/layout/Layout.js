import Navbar  from '../components/navBar/NavBar';
import Footer from '../components/Footer/Footer'
import { DataProvider } from '../context/DataContext';
import { BrowserRouter as Routes } from 'react-router-dom';
import  "./Layout.css";

const Layout = () => {

    return ( 
      <Routes>
         <DataProvider>
            <Navbar />
            <Footer />
         </DataProvider>
      </Routes>
     );
}
 
export default Layout;