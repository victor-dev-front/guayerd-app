import React from "react";
import { Container, Row } from "react-bootstrap";
import style from "../form/Form.module.css";

// Formulario
import { useFormik } from "formik";
import * as yup from "yup";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

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
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        wrap="nowrap"
        className={style.container}
      >
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          {/* <Container className={style.container}> */}
          {/* <Container> */}
          <h2 className={style.contacto}>Contáctanos!</h2>
          <TextField
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
            FormHelperTextProps={{
              style: { fontSize: 12, fontWeight: "bold" }
            }}
            inputProps={{
              style: { fontSize: 15, fontWeight: "bold" }
            }} // font size of input text
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                // color: "grey",
                color: "black",
                fontWeight: "bold"
              }
            }} // font size of input label
          />
          <TextField
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
            FormHelperTextProps={{
              style: { fontSize: 12, fontWeight: "bold" }
            }}
            inputProps={{ style: { fontSize: 15, fontWeight: "bold" } }} // font size of input text
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "black",
                fontWeight: "bold"
              }
            }}
          />
          <TextField
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
              style: { fontSize: 12, fontWeight: "bold" }
            }}
            inputProps={{ style: { fontSize: 15, fontWeight: "bold" } }}
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "black",
                fontWeight: "bold"
              }
            }}
          />
          <TextField
            id="tema"
            select
            label="Tema"
            //value=""
            // onChange={handleChange}
            values={formik.values.tema}
            onChange={formik.handleChange}
            error={formik.touched.tema && Boolean(formik.errors.tema)}
            helperText={formik.touched.tema && formik.errors.tema}
            FormHelperTextProps={{
              style: { fontSize: 12, fontWeight: "bold" }
            }}
            SelectProps={{
              native: true
            }}
            variant="outlined"
            margin="normal"
            size="small"
            inputProps={{ style: { fontSize: 12, fontWeight: "bold" } }}
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "black",
                fontWeight: "bold"
              }
            }}
          >
            {opciones.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            id="consulta"
            label="Ingrese su consulta"
            multiline
            rows={7}
            values={formik.values.consulta}
            onChange={formik.handleChange}
            error={formik.touched.consulta && Boolean(formik.errors.consulta)}
            helperText={formik.touched.consulta && formik.errors.consulta}
            FormHelperTextProps={{
              style: { fontSize: 12, fontWeight: "bold" }
            }}
            SelectProps={{
              native: true
            }}
            variant="outlined"
            margin="normal"
            size="normal"
            inputProps={{
              style: { fontSize: 15, lineHeight: "100%", fontWeight: "bold" }
            }}
            InputLabelProps={{
              style: {
                paddingTop: 3,
                fontSize: 15,
                color: "black",
                fontWeight: "bold"
              }
            }}
          />
          <Container>
            <Row className="justify-content-md-center">
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                size="normal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "10rem",
                  border: "0.1rem solid",
                  boxShadow: "0px 0px 2px 0.5px #212c65",
                  borderRadius: "2rem",
                  marginTop: "1rem"
                }}
              >
                <Typography
                  variant="h5"
                  color="initial"
                  style={{ fontWeight: "bold" }}
                >
                  Enviar
                </Typography>
              </Button>
            </Row>
          </Container>
        </form>
      </Grid>
      <div className={style.container__mapa}>
        <h2 className={style.mapa}>
          <span className={style.ubicacion}>Dónde encontrarnos!</span>
        </h2>
        <div className={style.map__responsive}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.512780793885!2d-58.4500563851957!3d-34.59119276434157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1ses-419!2sar!4v1626215769377!5m2!1ses-419!2sar"
            title="Mapa"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* </Grid> */}
    </>
  );
};

export default Form;
