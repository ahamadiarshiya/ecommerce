import '../styles/HomePage.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>hiiii</div>
  );
}


export default HomePage;
