import Axios from "axios";

const postContacto = async (setContacto) => {
  // La ruta original es la comentada, pero como no tenemos acceso para validar la info, lo vamos a enviar a submitForm.
  // const respuesta = await Axios.get("https://demo2420474.mockable.io/submitForm");
  const respuesta = await Axios.post(
    "https://formsubmit.co/ajax/albertodamianlopez@gmail.com"
    // "https://formsubmit.co/ajax/a927f008d50ed164c831fd57cfda3019"
  );
  setContacto(respuesta.data);
};

export { postContacto };
