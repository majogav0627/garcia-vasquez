"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const emptyFormData = {
  title: "",
  description: "",
  price: "",
  stock: "",
  category: "",
  thumbnail: "",
};

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState(emptyFormData);
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadProducts = async () => {
    setStatus("loading");
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) throw new Error("No se pudo cargar el catálogo");
      const data = await response.json();
      setProducts(data.products || []);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setFeedback({
        type: "error",
        message: error.message || "No fue posible cargar los productos.",
      });
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreate = async (payload) => {
    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al crear el producto.");
      }

      const createdProduct = await response.json();
      setProducts((prev) => [createdProduct, ...prev]);
      setIsCreating(false);
      setFeedback({
        type: "success",
        message: `Producto creado correctamente: ${createdProduct.title}`,
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "No se pudo crear el producto.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async (payload) => {
    if (!editingId) return;

    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch(`https://dummyjson.com/products/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto.");
      }

      const updatedProduct = await response.json();
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingId ? { ...product, ...updatedProduct } : product,
        ),
      );
      setEditingId(null);
      setEditingData(emptyFormData);
      setFeedback({
        type: "success",
        message: `Producto actualizado correctamente: ${updatedProduct.title}`,
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "No se pudo actualizar el producto.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (productId, productTitle) => {
    const confirmed = window.confirm(
      `¿Seguro que quieres eliminar "${productTitle}"?`,
    );

    if (!confirmed) return;

    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el producto.");
      }

      const deletedProduct = await response.json();
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      setEditingId((current) => (current === productId ? null : current));
      setFeedback({
        type: "success",
        message: `Producto eliminado correctamente: ${deletedProduct.title || productTitle}`,
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "No se pudo eliminar el producto.",
      });
    }
  };

  const startEdit = (product) => {
    setEditingId(product.id);
    setIsCreating(false);
    setEditingData({
      title: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: product.category,
      thumbnail: product.thumbnail || "",
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingData(emptyFormData);
  };

  if (status === "loading") return <p>Cargando productos...</p>;

  if (status === "error") {
    return (
      <>
        <p className="alert alert-danger">
          {feedback.message || "No fue posible cargar los productos."}
        </p>
        <button className="btn btn-custom" onClick={loadProducts}>
          Reintentar
        </button>
      </>
    );
  }

  return (
    <div className="product-list">
      <div className="d-flex justify-content-end mb-3">
        <button
          type="button"
          className="btn btn-custom"
          onClick={() => {
            setIsCreating((prev) => !prev);
            setEditingId(null);
            setEditingData(emptyFormData);
          }}
        >
          {isCreating ? "Cerrar formulario" : "Añadir producto"}
        </button>
      </div>

      {isCreating ? (
        <ProductForm
          mode="create"
          initialData={emptyFormData}
          onSubmit={handleCreate}
          onCancel={() => setIsCreating(false)}
          isSubmitting={isSubmitting}
        />
      ) : null}

      {editingId ? (
        <ProductForm
          mode="update"
          initialData={editingData}
          onSubmit={handleUpdate}
          onCancel={cancelEdit}
          isSubmitting={isSubmitting}
        />
      ) : null}

      {feedback.message ? (
        <div className={`alert ${feedback.type === "success" ? "alert-success" : "alert-danger"}`}>
          {feedback.message}
        </div>
      ) : null}

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-xl-4">
            <ProductCard
              product={product}
              onEdit={() => startEdit(product)}
              onDelete={() => handleDelete(product.id, product.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}