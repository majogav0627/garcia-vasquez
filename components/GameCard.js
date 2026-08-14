import Link from "next/link";
import Badge from "./Badge";

export default function GameCard({ game }) {
  const { slug, title, genre, platform, year, rating, cover, color } = game;

  return (
    <Link href={`/juegos/${slug}`} className="text-decoration-none">
      <div className="card h-100 bg-dark text-light border-secondary" style={{ cursor: "pointer", transition: "transform 0.2s ease" }}>
        <div className="card-body">
          <div className="mb-3" style={{ fontSize: "3.5rem", textAlign: "center" }}>
            {cover}
          </div>
          <h5 className="card-title mb-2">{title}</h5>
          <div className="mb-2">
            <Badge text={genre} color={color} />
          </div>
          <small className="text-muted d-block mb-2">({year})</small>
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
  );
}
