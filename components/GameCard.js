import Link from "next/link";
import Badge from "./Badge";

export default function GameCard({ game }) {
  const { slug, title, genre, platform, year, rating, cover, color } = game;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <Link href={`/juegos/${slug}`} className="text-decoration-none">
        <div className="card h-100 bg-dark text-light border-secondary hover-shadow" style={{ cursor: "pointer", transition: "transform 0.2s" }}>
          <div className="card-body">
            <div className="mb-3" style={{ fontSize: "3rem" }}>
              {cover}
            </div>
            <h5 className="card-title">{title}</h5>
            <div className="mb-2">
              <Badge text={genre} color={color} />
              <span className="ms-2 small text-muted">({year})</span>
            </div>
            {platform && (
              <p className="mb-2">
                <small className="badge bg-info text-dark">🎮 {platform}</small>
              </p>
            )}
            <div className="card-text">
              <strong>⭐ {rating.toFixed(1)}/10</strong>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
