import React from "react";
import ProductoDetalles from "../ProductosDetalles/ProductosDetalles";
import style from "../ProductosCard/ProductosCard.module.css";
import PropTypes from 'prop-types'
import { Card, Col } from "react-bootstrap";

//Componente que retorna la card que contiene cada producto

const ProductosCard = ({ //Se recibe la informacion para renderizarlo en las cards
  title,
  description,
  img,
  price,
  discount,
  inStock,
  currency
}) => { //Se genera la card con la informacion recibida de la API y se llama al componente de detalle del producto
  return (
    <div className="container d-flex justify-content-center">
      <div className="justify-content-center">
        <Col>
          <Card className="m-1 mb-4" style={{ minHeight: "400px" }}>
            <img className="img" src={img} alt={title} />
            <div className="card-body">
              <h3 className={style.title}> {title} </h3>
              <h5 className={discount ? style.tachado : style.price}>{price} {currency}</h5>
              <h4 className={style.descuento}> {discount ?? discount} {discount ? currency : null}</h4>
              <h5 className={style.stock}> Disponibles: {inStock} </h5>
              
              {/* Se llama al componente de detalle de cada producto y se le envia por props la informacion necesaria  */}
              <ProductoDetalles
                description={description}
                title={title}
                img={img}/>

            </div>
          </Card>
        </Col>
      </div>
    </div>
  );
};
//PropTypes definidas para este componente.
ProductosCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  discount: PropTypes.number,
  inStock: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}

export default ProductosCard;
