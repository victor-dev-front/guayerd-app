import React, { useContext } from "react";
import DataContext from "../../../context/DataContext";
import { Row } from "react-bootstrap";
import {ProductosCard, CodigoDescuento }from "../..";
import style from './ProductoItems.module.css'


//Componente del producto, llamando y enviandole las props al componente de las cards

const ProductosItems = () => {
  const { productos } = useContext(DataContext);

  return (
    <div className={style.fondo}>
      <h1 className={style.title}>Productos</h1>
      <Row xs={1} md={2} className="g-8 w-75 h-50  p-3 mx-auto">
    {/* Se realiza el envio de la informacion de la API al componente y el mapeo del componente que contiene la card */}
        {productos.map((p) => (
          <ProductosCard
            key={p.title}
            title={p.title}
            description={p.description}
            img={p.imgUrl}
            inStock={p.inStock}
            price={p.price}
            discount={p.discountPrice}
            currency={p.currency}
          />
        ))}
      </Row>
      {/* Llamado al componente que contiene el modal con el codigo de descuento */}
      <CodigoDescuento/>
    </div>
  );
};

export default ProductosItems;
