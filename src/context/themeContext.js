import { createContext } from "react";
import NavBar from "../components/navBar/NavBar";

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{

return( 
      <ThemeContext.Provider>
       <NavBar />
        {children}
      </ThemeContext.Provider>
      )
}

export {ThemeProvider};
export default ThemeContext;