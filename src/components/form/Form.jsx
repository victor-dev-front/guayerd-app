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
    .matches(validarNombre, "Debe ingresar un nombre válido")
    .required("El nombre es obligatorio")
    .max(40, "El nombre no puede tener más de 40 caracteres"),
  email: yup
    .string()
    .required("El mail es obligatorio")
    .email("Debe ingresar un mail válido")
    .min(10, "El email ingresado no puede tener menos de 10 caracteres")
    .max(30, "El email ingresado no puede tener más de 30 caracteres"),
  telefono: yup
    .string()
    .required("El teléfono es obligatorio")
    .matches(validarTelefono, "Debe ingresar un teléfono válido")
    .min(10, "El telefono ingresado no puede tener menos de 10 caracteres")
    .max(30, "El telefono ingresado no puede tener más de 30 caracteres")
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <TextField
            fullWidth="30"
            id="nombre"
            name="nombre"
            label="Nombre"
            margin="normal"
            values={formik.values.nombre}
            onChange={formik.handleChange}
            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            helperText={formik.touched.nombre && formik.errors.nombre}
          />
          <br />
          <br />
          <TextField
            fullWidth="30"
            id="email"
            name="email"
            label="Email"
            margin="normal"
            values={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.nombre && formik.errors.email}
          />
          <br />
          <br />
          <TextField
            fullWidth="30"
            id="telefono"
            name="telefono"
            label="Telefono"
            margin="normal"
            values={formik.values.telefono}
            onChange={formik.handleChange}
            error={formik.touched.telefono && Boolean(formik.errors.telefono)}
            helperText={formik.touched.nombre && formik.errors.telefono}
          />
          <br />
          <br />
          <Button
            fullWidth="30"
            type="submit"
            variant="outlined"
            color="default"
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
