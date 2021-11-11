import React from "react";
import ProductoDetalles from "../ProductosDetalles/ProductosDetalles.jsx";
import style from "../ProductosCard/ProductosCard.module.css";
import { Card, Col } from "react-bootstrap";

//Componente que retorna la card que contiene cada producto

const ProductosCard = ({
  title,
  description,
  img,
  price,
  discount,
  inStock,
  currency
}) => {


  return (
   
      <div className="container d-flex justify-content-center">
        <div className="justify-content-center">
        <Col>
            <Card className="m-1 " >
              <img src={img} alt={title} />
              <div className="card-body">
                <h3 className={style.title}> {title} </h3>
                <h5 className={style.price}>  {price} {currency} </h5>
                <h4 className={style.descuento}> {discount} {currency} </h4>
                <h5 className="card-stock"> Disponibles: {inStock} </h5>
                <ProductoDetalles description={description} title={title} />
              </div>
            </Card>
          </Col>
        </div>
      </div>
  );
};


export default ProductosCard;
