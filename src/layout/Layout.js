import { BrowserRouter as Routes } from 'react-router-dom';
import { DataProvider } from '../context/DataContext';
import  "./Layout.css";
import {NavBar, Footer}  from '../components';


const Layout = () => {

    return ( 
      <Routes>
         <DataProvider>
            <NavBar />
            <Footer />
         </DataProvider>
      </Routes>
     );
}
 
export default Layout;