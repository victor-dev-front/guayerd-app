import  Axios  from "axios"

const getBanner = async (setBanner) =>{

    const respuesta = await Axios.get("http://demo2420474.mockable.io/getHomeBanner");
    setBanner(respuesta.data);
 }

 
 export {getBanner};
