import Link from "next/link";

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <article className="card h-100 product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-card__image"
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <span className="badge bg-info text-dark align-self-start mb-2">
          {product.category}
        </span>
        <h2 className="card-title h5">{product.title}</h2>
        <p className="text-muted small flex-grow-1">{product.description}</p>
        <div className="product-card__facts">
          <strong>${Number(product.price || 0).toFixed(2)}</strong>
          <span>⭐ {product.rating ?? "-"}</span>
          <span>{product.stock} disponibles</span>
        </div>

        <div className="d-flex gap-2 mt-3">
          <Link href={`/productos/${product.id}`} className="btn btn-custom flex-fill">
            Ver detalle
          </Link>
          <button type="button" className="btn btn-warning flex-fill" onClick={onEdit}>
            Actualizar
          </button>
          <button type="button" className="btn btn-danger flex-fill" onClick={onDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}