import Link from "next/link";
import Badge from "./Badge";

export default function GameCard({ game }) {
  const { slug, title, genre, platform, year, rating, cover, color } = game;

  return (
    <Link href={`/juegos/${slug}`} className="game-card" style={{ "--accent": color }}>
      <div className="game-card__cover">{cover}</div>
      <div className="game-card__body">
        <h3>{title}</h3>
        <div className="game-card__meta">
          <Badge text={genre} color={color} />
          <span className="game-card__year">{year}</span>
        </div>
        {platform && <div className="game-card__platform">🎮 {platform}</div>}
        <div className="game-card__rating">⭐ {rating.toFixed(1)}</div>
      </div>
    </Link>
  );
}
