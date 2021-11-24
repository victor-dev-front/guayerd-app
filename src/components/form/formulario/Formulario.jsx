// Desestrcturación de componente de formik
import { useFormik } from "formik";
// Se invoca la libreria para validaciones yup
import * as yup from "yup";
// Se invoca la libreria axios.
import Axios from "axios";
// Se invoca la libreria sweet alert
import Swal from "sweetalert2";
// Se invocan los componentes desde el index
import { MostrarFormulario, MapaContacto } from "../../../components";

// Expresiones regulares para validaciones.
const validarNombre = new RegExp(
  "^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$"
);
const validarTelefono =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Esquema de validación con yup.
const validationSchema = yup.object({
  nombre: yup
    .string()
    .matches(validarNombre, "* Debe ingresar un nombre válido")
    .required("* El nombre es obligatorio")
    .max(40, "* El nombre no puede tener más de 40 caracteres"),
  email: yup
    .string()
    .required("* El email es obligatorio")
    .email("* Debe ingresar un mail válido")
    .min(10, "* El email ingresado no puede tener menos de 10 caracteres")
    .max(30, "* El email ingresado no puede tener más de 30 caracteres"),
  telefono: yup
    .string()
    .required("* El teléfono es obligatorio")
    .matches(validarTelefono, "* Debe ingresar un teléfono válido"),
  tema: yup
    .string()
    .required("* El tema es obligatorio")
    .oneOf(
      ["Venta", "Trabajo", "Reparacion", "Otros"],
      "* Por favor, seleccione un tema"
    ),
  consulta: yup
    .string()
    .required("* Por favor ingrese su consulta")
    .max(300, "* Su consulta no puede tener más de 300 caracteres")
});

// Componente principal
const Formulario = () => {
  // Se declara el hook de Formik
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      tema: "",
      consulta: ""
    },
    // Se envían los datos del formulario por mail.
    onSubmit: async (values, { resetForm }) => {
      try {
        let res = await Axios.post(
          "https://formsubmit.co/ajax/albertodamianlopez@gmail.com",
          values,
          { headers: { Accept: "application/json" } }
        );
        // Si los datos son correctos, se emite un mensaje con Sweet Alert
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "Su consulta se envió con éxito! Le responderemos a la brevedad.",
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 4000
        });
        // Reset de valores del formulario
        resetForm();
      } catch (err) {
        console.log(err);
      }
    },
    // Se asigna el esquema de validación definido
    validationSchema: validationSchema
  });

  return (
    <>
      {/* Se declaran los inputs del formulario con su boton y propiedades */}
      <MostrarFormulario formik={formik} />
      {/* Se invoca el mapa de contacto con la ubicación de Guayerd Bikes */}
      <MapaContacto />
    </>
  );
};

export default Formulario;
