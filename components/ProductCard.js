import Link from "next/link";

export default function ProductCard({ product }) {
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
          <strong>${product.price.toFixed(2)}</strong>
          <span>⭐ {product.rating}</span>
          <span>{product.stock} disponibles</span>
        </div>
        <Link href={`/productos/${product.id}`} className="btn btn-custom mt-3">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}