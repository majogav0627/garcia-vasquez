"use client";

import { useEffect, useState } from "react";

const defaultProduct = {
  title: "",
  description: "",
  price: "",
  stock: "",
  category: "",
  thumbnail: "",
};

export default function ProductForm({
  mode = "create",
  initialData = defaultProduct,
  onSubmit,
  onCancel,
  isSubmitting = false,
}) {
  const [formData, setFormData] = useState({ ...defaultProduct, ...initialData });

  useEffect(() => {
    setFormData({ ...defaultProduct, ...initialData });
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      price: Number(formData.price),
      stock: Number(formData.stock),
      category: formData.category.trim(),
      thumbnail:
        formData.thumbnail.trim() ||
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    };

    if (
      !payload.title ||
      !payload.description ||
      !payload.category ||
      Number.isNaN(payload.price) ||
      Number.isNaN(payload.stock) ||
      payload.price <= 0 ||
      payload.stock < 0
    ) {
      return;
    }

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0">
            {mode === "create" ? "Crear producto" : "Actualizar producto"}
          </h2>
          {onCancel ? (
            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onCancel}>
              Cancelar
            </button>
          ) : null}
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="title" className="form-label text-light">
              Título
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="category" className="form-label text-light">
              Categoría
            </label>
            <input
              id="category"
              name="category"
              type="text"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="description" className="form-label text-light">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="price" className="form-label text-light">
              Precio
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="stock" className="form-label text-light">
              Stock
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              className="form-control"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="thumbnail" className="form-label text-light">
              URL de imagen
            </label>
            <input
              id="thumbnail"
              name="thumbnail"
              type="url"
              className="form-control"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="d-flex gap-2 mt-4">
          <button type="submit" className="btn btn-success" disabled={isSubmitting}>
            {isSubmitting
              ? mode === "create"
                ? "Creando..."
                : "Guardando..."
              : mode === "create"
                ? "Guardar producto"
                : "Actualizar producto"}
          </button>
        </div>
      </div>
    </form>
  );
}
