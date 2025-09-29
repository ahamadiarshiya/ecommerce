import '../styles/ProductListPage.css';

import React, { useEffect, useState } from "react";


function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("https://fakestoreapi.com/products", {
      headers: {
        Authorization: `Bearer ${token}`, // optional for fakestore
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
