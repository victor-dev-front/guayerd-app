import {Button,Modal,Form} from "react-bootstrap";
import { useState, useEffect } from "react";
const Notificacion = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        handleShow();
    }, [])

    const Formulario = () =>{
      
    }

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>¿DESEAS SUSCRIBIRTE?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              NO
            </Button>
            <Button variant="primary" onClick={Formulario}>
              SI
            </Button>
          </Modal.Footer>
        </Modal>
    )
}
 
export default Notificacion;