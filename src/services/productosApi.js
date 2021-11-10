import  Axios  from "axios"

const getProductos = async (setProductos) =>{

    const respuesta = await Axios.get("https://demo2420474.mockable.io/productList");
    setProductos(respuesta.data);
 }

 
 export {getProductos};