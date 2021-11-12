import { createContext, useEffect, useState} from "react";
import { getBanner } from "../services/bannerApi";
import { getProductos } from "../services/productosApi";

const DataContext = createContext();

const DataProvider = ({children}) => {

    const [banner, setBanner] = useState("");
    const [productos, setProductos] = useState([]);
    
    const setData = ()=> getBanner(setBanner); 
    const setData2 = () => getProductos(setProductos);
    useEffect(() => {
      setData();
      setData2();
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