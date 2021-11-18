import React from "react";
import { Modal, Button } from "react-bootstrap";
import useCodigo from "../../hooks/useCodigo";
import { BiGift } from "react-icons/bi";
import style from './CodigoDescuento.module.css'

const CodigoDescuento = () => {
  const [show, handleClose, codigo] = useCodigo();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <BiGift className={style.icon} />
          <Modal.Title>Codigo promocional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Gracias por elegirnos! Le obsequiamos el código **PROMO** con su
          compra. {codigo}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CodigoDescuento;
