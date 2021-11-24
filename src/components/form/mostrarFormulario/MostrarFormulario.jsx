// Se invoca la libreria React bootstrap.
import { Container, Row } from "react-bootstrap";
// Se invocan los estilos que se van a utilizar.
import style from "../mostrarFormulario/MostrarFormulario.module.css";
// Desestrcturación para componentes de formik
import { Form, FormikProvider } from "formik";
// Desestructuración de componentes de Material UI(core).
import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography
} from "@material-ui/core";

const MostrarFormulario = ({ formik }) => {
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
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit} autoComplete="off">
            <h2 className={style.contacto}>Contáctanos!</h2>
            <TextField
              name="nombre"
              label="Nombre"
              variant="outlined"
              size="small"
              style={{ marginBottom: "1rem" }}
              value={formik.values.nombre || ""}
              onChange={formik.handleChange}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              helperText={formik.touched.nombre && formik.errors.nombre}
              FormHelperTextProps={{
                style: { fontSize: 12, fontWeight: "bold" }
              }}
              inputProps={{
                style: { fontSize: 12, fontWeight: "bold" }
              }}
              InputLabelProps={{
                style: {
                  paddingTop: 4,
                  fontSize: 12,
                  color: "black",
                  fontWeight: "bold"
                }
              }}
            />
            <TextField
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              size="small"
              style={{ marginBottom: "1rem" }}
              value={formik.values.email || ""}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.nombre && formik.errors.email}
              FormHelperTextProps={{
                style: { fontSize: 12, fontWeight: "bold" }
              }}
              inputProps={{ style: { fontSize: 12, fontWeight: "bold" } }}
              InputLabelProps={{
                style: {
                  paddingTop: 4,
                  fontSize: 12,
                  color: "black",
                  fontWeight: "bold"
                }
              }}
            />
            <TextField
              name="telefono"
              type="number"
              label="Teléfono"
              variant="outlined"
              size="small"
              style={{ marginBottom: "1rem" }}
              value={formik.values.telefono || ""}
              onChange={formik.handleChange}
              error={formik.touched.telefono && Boolean(formik.errors.telefono)}
              helperText={formik.touched.nombre && formik.errors.telefono}
              FormHelperTextProps={{
                style: { fontSize: 12, fontWeight: "bold" }
              }}
              inputProps={{ style: { fontSize: 12, fontWeight: "bold" } }}
              InputLabelProps={{
                style: {
                  paddingTop: 4,
                  fontSize: 12,
                  color: "black",
                  fontWeight: "bold"
                }
              }}
            />
            <TextField
              name="tema"
              select
              label="Tema"
              value={formik.values.tema || ""}
              onChange={formik.handleChange}
              error={formik.touched.tema && Boolean(formik.errors.tema)}
              helperText={formik.touched.tema && formik.errors.tema}
              FormHelperTextProps={{
                style: { fontSize: 12, fontWeight: "bold" }
              }}
              variant="outlined"
              size="small"
              style={{ marginBottom: "1rem" }}
              inputProps={{ style: { fontSize: 12, fontWeight: "bold" } }}
              SelectProps={{ style: { fontSize: 12, fontWeight: "bold" } }}
              InputLabelProps={{
                style: {
                  paddingTop: 4,
                  fontSize: 12,
                  color: "black",
                  fontWeight: "bold"
                }
              }}
            >
              <MenuItem
                name="tema"
                value="Venta"
                style={{ fontSize: 12, fontWeight: "bold" }}
              >
                Venta
              </MenuItem>
              <MenuItem
                name="tema"
                value="Trabajo"
                style={{ fontSize: 12, fontWeight: "bold" }}
              >
                Trabajo
              </MenuItem>
              <MenuItem
                name="tema"
                value="Reparacion"
                style={{ fontSize: 12, fontWeight: "bold" }}
              >
                Reparación
              </MenuItem>
              <MenuItem
                name="tema"
                value="Otros"
                style={{ fontSize: 12, fontWeight: "bold" }}
              >
                Otros
              </MenuItem>
            </TextField>
            <TextField
              name="consulta"
              label="Ingrese su consulta"
              multiline
              rows={7}
              value={formik.values.consulta || ""}
              onChange={formik.handleChange}
              error={formik.touched.consulta && Boolean(formik.errors.consulta)}
              helperText={formik.touched.consulta && formik.errors.consulta}
              FormHelperTextProps={{
                style: { fontSize: 12, fontWeight: "bold" }
              }}
              variant="outlined"
              size="small"
              style={{ marginBottom: "1rem" }}
              inputProps={{
                style: { fontSize: 12, lineHeight: "100%", fontWeight: "bold" }
              }}
              InputLabelProps={{
                style: {
                  paddingTop: 4,
                  fontSize: 12,
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
                  fullWidth
                  className={style.botonEnviar}
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
          </Form>
        </FormikProvider>
      </Grid>
    </>
  );
};

export default MostrarFormulario;
