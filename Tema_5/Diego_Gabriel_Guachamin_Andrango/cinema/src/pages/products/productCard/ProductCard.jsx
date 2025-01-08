import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-director">Director: {product.director}</p>
        <p className="card-description">{product.description}</p>
        <div className="card-info">
          <span>Género: {product.subcategory}</span>
        </div>
        <div className="card-pricing">
          <span className="price">Precio: ${product.price}</span>
        </div>
        <button className="card-button">Seleccionar asientos</button>
      </div>
    </div>
  );
};

export default ProductCard;
