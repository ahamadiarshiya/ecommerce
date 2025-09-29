import React from 'react';
import '../styles/ProductDetailsPage.css';

function ProductDetailsPage() {
 
  const product = {
    name: 'Product One',
    description: 'This is a detailed description of Product One.',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/300',
  };

  return (
    <div className="product-details-container">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p className="description">{product.description}</p>
      <p className="price">Price: ${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetailsPage;
