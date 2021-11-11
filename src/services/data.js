import  Axios  from "axios"

 const getBanner = async (setBanner) =>{

    const respuesta = await Axios.get("http://demo2420474.mockable.io/getHomeBanner");
    setBanner(respuesta.data);
    
 }

 const getProductos = async(setProductos) => {
     const respuesta = await Axios.get("https://demo2420474.mockable.io/productList");
     setProductos(respuesta.data);
 }

 export {getBanner,getProductos};
 