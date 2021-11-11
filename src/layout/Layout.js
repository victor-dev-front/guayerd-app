import Navbar  from '../components/navBar/NavBar';
import { DataProvider } from '../context/DataContext';
import { BrowserRouter as Routes } from 'react-router-dom';
import  "./Layout.css";

const Layout = () => {

    return ( 
      <Routes>
         <DataProvider>
            <Navbar />
         </DataProvider>
      </Routes>
     );
}
 
export default Layout;