import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetailsPage.css"

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-page">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
}

export default ProductDetailsPage;

