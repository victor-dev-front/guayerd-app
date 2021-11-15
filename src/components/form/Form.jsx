import React from "react";
import { Container } from "react-bootstrap";
import style from "../form/Form.module.css";

// Formulario
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";

const validarNombre = new RegExp("^[a-zA-Z ]+$");
const validarTelefono =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  nombre: yup
    .string()
    .matches(validarNombre, "* Debe ingresar un nombre válido")
    .required("* El nombre es obligatorio")
    .max(40, "* El nombre no puede tener más de 40 caracteres"),
  email: yup
    .string()
    .required("* El mail es obligatorio")
    .email("* Debe ingresar un mail válido")
    .min(10, "* El email ingresado no puede tener menos de 10 caracteres")
    .max(30, "* El email ingresado no puede tener más de 30 caracteres"),
  telefono: yup
    .string()
    .required("* El teléfono es obligatorio")
    .matches(validarTelefono, "* Debe ingresar un teléfono válido")
    .min(10, "* El teléfono ingresado no puede tener menos de 10 caracteres")
    .max(30, "* El teléfono ingresado no puede tener más de 30 caracteres"),
  consulta: yup
    .string()
    .required("* Por favor ingrese su consulta")
    .max(300, "* Su consulta no puede tener más de 300 caracteres")
});

// Array para input de selección múltiple
const opciones = [
  // {
  //   value: "",
  //   label: ""
  // },
  {
    value: "venta",
    label: "Venta"
  },
  {
    value: "trabajo",
    label: "Trabajo"
  },
  {
    value: "reparacion",
    label: "Reparación"
  },
  {
    value: "otros",
    label: "Otros"
  }
];

const Form = () => {
  // const [tema, setTema] = React.useState("Tema");

  // const handleChange = (event) => {
  //   setTema(event.target.value);
  // };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      tema: "Venta",
      consulta: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Container>
          <TextField
            fullWidth="30"
            id="nombre"
            name="nombre"
            label="Nombre"
            margin="normal"
            variant="outlined"
            size="small"
            values={formik.values.nombre}
            onChange={formik.handleChange}
            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            helperText={formik.touched.nombre && formik.errors.nombre}
            FormHelperTextProps={{ style: { fontSize: 12 } }}
            inputProps={{ style: { fontSize: 15 } }} // font size of input text
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "grey"
              }
            }} // font size of input label
          />
          <br />
          <br />
          <TextField
            fullWidth="30"
            id="email"
            name="email"
            label="Email"
            margin="normal"
            variant="outlined"
            size="small"
            values={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.nombre && formik.errors.email}
            FormHelperTextProps={{ style: { fontSize: 12 } }}
            inputProps={{ style: { fontSize: 15 } }} // font size of input text
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "grey"
              }
            }} // font size of input label
          />
          <br />
          <br />
          <TextField
            fullWidth="30"
            id="telefono"
            name="telefono"
            label="Teléfono"
            margin="normal"
            variant="outlined"
            size="small"
            values={formik.values.telefono}
            onChange={formik.handleChange}
            error={formik.touched.telefono && Boolean(formik.errors.telefono)}
            helperText={formik.touched.nombre && formik.errors.telefono}
            FormHelperTextProps={{
              style: { fontSize: 12 }
            }}
            inputProps={{ style: { fontSize: 15 } }} // font size of input text
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "grey"
              }
            }} // font size of input label
          />
          <br />
          <br />
          <TextField
            fullWidth="30"
            id="tema"
            select
            label="Tema"
            // value={tema}
            // onChange={handleChange}
            values={formik.values.tema}
            onChange={formik.handleChange}
            error={formik.touched.tema && Boolean(formik.errors.tema)}
            helperText={formik.touched.tema && formik.errors.tema}
            FormHelperTextProps={{
              style: { fontSize: 12 }
            }}
            SelectProps={{
              native: true
            }}
            variant="outlined"
            margin="normal"
            size="small"
            inputProps={{ style: { fontSize: 12 } }} // font size of input text
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "grey"
              }
            }} // font size of input label
          >
            {opciones.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <br />
          <br />
          <TextField
            fullWidth="30"
            id="consulta"
            label="Ingrese su consulta"
            // placeholder="Ingrese su consulta"
            multiline
            rows={7}
            values={formik.values.consulta}
            onChange={formik.handleChange}
            error={formik.touched.consulta && Boolean(formik.errors.consulta)}
            helperText={formik.touched.consulta && formik.errors.consulta}
            FormHelperTextProps={{
              style: { fontSize: 12 }
            }}
            SelectProps={{
              native: true
            }}
            variant="outlined"
            margin="normal"
            size="normal"
            inputProps={{ style: { fontSize: 15 } }} // font size of input text
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "grey"
              }
            }} // font size of input label
          />
          <br />
          <br />
          <br />
          <Button
            fullWidth="30"
            type="submit"
            variant="outlined"
            color="default"
            size="normal"
          >
            Enviar
          </Button>
          <br />
          <br />
        </Container>
      </form>
    </>
  );
};

export default Form;
