import {Modal} from "react-bootstrap";
import { useState } from "react";
import { Formik } from "formik";

const  FormNotificacion = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    return (
        <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Formik
                initialValues={{
                    nombre:"",
                    email:""
                }}
                onSubmit={(values) =>{
                    console.log(values)
                }}
                >
                    {
                        <form>
                            <input/>
                            <input/>
                            <button>Enviar</button>
                        </form>
                    }
                    
                </Formik>
            </Modal.Body>
            </Modal>
      </>
     );
}
 
export default FormNotificacion;