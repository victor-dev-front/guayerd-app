import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

//Componente de la ventana modal que muestra los detalles de cada producto

const ProductosDetalles = ({ img, description, title }) => {
  //funciones definidas por bootstrap para el funcionamiento del modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return ( //ventana modal de bootstrap con informacion del detalle del producto
    <>
      <div style={{display: "flex",justifyContent: "center"}}>
        <Button size="lg" variant="primary" onClick={handleShow}>Ver detalles del articulo</Button>
      </div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
        animation={true}>

        <Modal.Header closeButton>
          <Modal.Title> {title} </Modal.Title>
        </Modal.Header>

        <img className="img" src={img} alt={title} />
        <Modal.Body> {description} </Modal.Body>

        <Modal.Footer style={{display: "flex",justifyContent: "center"}}>
          <Button variant="primary" onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductosDetalles;
