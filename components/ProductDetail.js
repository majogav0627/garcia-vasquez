"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Producto no encontrado");
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [id]);

  if (status === "loading") return <p>Cargando detalle...</p>;
  if (status === "error" || !product) {
    return (
      <>
        <Link href="/productos" className="detail__back">← Volver a productos</Link>
        <p className="alert alert-danger">No fue posible encontrar este producto.</p>
      </>
    );
  }

  return (
    <>
      <Link href="/productos" className="detail__back">← Volver a productos</Link>
      <div className="product-detail">
        <div>
          <img src={product.images[0]} alt={product.title} className="product-detail__image" />
          <div className="product-detail__gallery">
            {product.images.slice(0, 4).map((image) => (
              <img key={image} src={image} alt="" loading="lazy" />
            ))}
          </div>
        </div>
        <div>
          <span className="badge bg-info text-dark mb-3">{product.category}</span>
          <h1>{product.title}</h1>
          <p className="detail__description">{product.description}</p>
          <div className="product-detail__price">${product.price.toFixed(2)}</div>
          <div className="product-detail__facts">
            <span>⭐ {product.rating} / 5</span>
            <span>{product.stock} unidades en stock</span>
            <span>Descuento: {product.discountPercentage}%</span>
            <span>Marca: {product.brand || "Sin marca"}</span>
          </div>
        </div>
      </div>
    </>
  );
}