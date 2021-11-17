import React, { useContext } from "react";
import ProductosCard from "../ProductosCard/ProductosCard.jsx";
import DataContext from "../../context/DataContext";
import { Row } from "react-bootstrap";
import style from './ProductoItems.module.css'

//Componente del producto, llamando y enviandole las props al componente de las cards

const ProductosItems = () => {
  const { productos } = useContext(DataContext);
  

  return (
    <>
      <h1 className={style.title} >Productos</h1>
      <Row xs={1} md={2} className="g-8 w-75 h-50  p-3 mx-auto">
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
    </>
  );
};

export default ProductosItems;
