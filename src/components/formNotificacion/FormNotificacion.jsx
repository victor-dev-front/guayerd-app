import {Modal} from "react-bootstrap";
import { useState } from "react";

const  FormNotificacion = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    return (
        <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                            <input/>
                            <input/>
                            <button onClick={handleClose}>Enviar</button>      
            </Modal.Body>
            </Modal>
      </>
     );
}
 
export default FormNotificacion;