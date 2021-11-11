import { createContext, useEffect, useState} from "react";
import { getBanner, getProductos } from "../services/data";

const DataContext = createContext();

const DataProvider = ({children}) => {

    const [banner, setBanner] = useState("");
    const [productos, setProductos] = useState([]);
    console.log(productos);
    useEffect(() => {
       getBanner(setBanner);
       getProductos(setProductos);
      
    }, [])

    const values = { banner,productos};
    return (
        <DataContext.Provider value={values}> 
            {children}
        </DataContext.Provider>
    )
}

export {DataProvider};
export default DataContext;