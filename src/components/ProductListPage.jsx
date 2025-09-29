import React from 'react';
import '../styles/ProductListPage.css';

// Dummy data example - you can replace with import from products.js later
const products = [
  { id: 1, name: 'Product One', price: 29.99 },
  { id: 2, name: 'Product Two', price: 59.99 },
  { id: 3, name: 'Product Three', price: 99.99 },
];

function ProductListPage() {
  return (
    <div className="product-list-container">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
