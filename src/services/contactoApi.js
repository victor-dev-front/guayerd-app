import Axios from "axios";
// import { form } from "../components/form/Form";

const postContacto = async (setContacto) => {
  // La ruta original es la comentada, pero como no tenemos acceso para validar la info, lo vamos a enviar a submitForm.
  // try {
  // const formData = new FormData();
  const respuesta = await Axios.post(
    "https://formsubmit.co/ajax/albertodamianlopez@gmail.com"
    // "https://formsubmit.co/ajax/a927f008d50ed164c831fd57cfda3019"
  );
  setContacto(respuesta.data);

  //   const respuesta = await Axios({
  //     url: "https://formsubmit.co/ajax/albertodamianlopez@gmail.com",
  //     method: "POST",
  //     data: formData
  //   });
  //   return respuesta;
  // } catch (e) {
  //   console.log(e);
  // }
};

export { postContacto };
