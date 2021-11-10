
import { ThemeProvider } from '../context/themeContext';
import { BrowserRouter as Routes } from 'react-router-dom';
import style from "./Layout.module.css";

const Layout = () => {

    return ( 
      <Routes>
        <ThemeProvider>
        </ThemeProvider>
      </Routes>
     );
}
 
export default Layout;