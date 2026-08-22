"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo cargar el catálogo");
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <p>Cargando productos...</p>;
  if (status === "error") {
    return <p className="alert alert-danger">No fue posible cargar los productos.</p>;
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-md-6 col-xl-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}