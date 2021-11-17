import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";


//Componente de la ventana modal que muestra los detalles de cada producto

const ProductosDetalles = ({img, description, title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  size="lg" variant="primary" onClick={handleShow}>
        Ver detalles del articulo
      </Button>

      <Modal aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title> {title} </Modal.Title>
        </Modal.Header>
        <img className="img" src={img} alt={title} />
        <Modal.Body> {description} </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductosDetalles;
