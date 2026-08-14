import Link from "next/link";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";

export default function HomePage() {
  const destacados = games.slice(0, 3);

  return (
    <div className="container-fluid px-4">
      <section className="hero">
        <h1>
          Bienvenido a <span className="hero__highlight">GameVault</span>
        </h1>
        <p>
          Mi colección personal de videojuegos favoritos: reseñas cortas,
          géneros y lo que más disfruté de cada uno.
        </p>
        <Link href="/juegos" className="btn btn-custom">
          Ver todos los juegos
        </Link>
      </section>

      <section className="section">
        <h2 className="mb-4">Destacados</h2>
        <div className="row">
          {destacados.map((game) => (
            <div key={game.slug} className="col-12 col-md-6 col-lg-4 mb-4">
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
