import {Button,Modal} from "react-bootstrap";
import { useState } from "react";
import FormNotificacion from "../formNotificacion/FormNotificacion";
const Notificacion = () => {

    const [show, setShow] = useState(true);
    const [estado,setEstado] = useState(false);
  
    const handleClose = () => {
      setShow(false);
    };
   
    const formulario = () =>{
      setShow(false);
      setEstado(true);
    }

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>¿DESEAS SUSCRIBIRTE?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              NO
            </Button>
            <Button variant="primary" onClick={formulario}>
              SI
            </Button>
          </Modal.Footer>
        </Modal>
        {estado ? <FormNotificacion /> :null}
      </>
    )
}
 
export default Notificacion;