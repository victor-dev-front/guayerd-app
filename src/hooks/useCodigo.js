import { useState, useEffect } from "react";

//Hook que contiene la logica de la ventana modal del codigo de descuento de la seccion de productos.
const useCodigo = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const [codigo] = useState("10HOTSALE para obtener un 10% de descuento");

  const visible = localStorage.getItem("forModal");

  useEffect(() => {
    if (!visible) {
      localStorage.setItem("forModal", 1);
      setShow(true);
    } else {
      setShow(false);
    }
  }, [visible]);

  return [show, handleClose, codigo];
};

export default useCodigo;
