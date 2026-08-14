import Link from "next/link";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";

export default function HomePage() {
  const destacados = games.slice(0, 3);

  return (
    <>
      <section className="hero">
        <h1>
          Bienvenido a <span className="hero__highlight">GameVault</span>
        </h1>
        <p>
          Mi colección personal de videojuegos favoritos: reseñas cortas,
          géneros y lo que más disfruté de cada uno.
        </p>
        <Link href="/juegos" className="button">
          Ver todos los juegos
        </Link>
      </section>

      <section className="section">
        <h2>Destacados</h2>
        <div className="grid">
          {destacados.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>
    </>
  );
}
