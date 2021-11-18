import { Modal } from "react-bootstrap";
import { useState } from "react";

const FormNotificacion = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          width: "20rem",
          height: "20rem",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <Modal.Body>
          <input placeholder="Ingrese su nombre" />
          <br />
          <br />
          <input placeholder="Ingrese su email" />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <button onClick={handleClose}>Enviar</button>
          </div>
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormNotificacion;
