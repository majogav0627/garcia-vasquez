'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from "next/link";
import Badge from "@/components/Badge";
import { games as defaultGames, getGameBySlug } from "@/data/games";

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [game, setGame] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Intentar cargar desde localStorage primero
    const savedGames = localStorage.getItem('games');
    let gamesToSearch = defaultGames;
    
    if (savedGames) {
      try {
        gamesToSearch = JSON.parse(savedGames);
      } catch (error) {
        console.error('Error loading games:', error);
      }
    }

    const foundGame = gamesToSearch.find((g) => g.slug === params.slug);
    setGame(foundGame);
    setIsLoaded(true);
  }, [params.slug]);

  if (!isLoaded) {
    return (
      <section className="detail">
        <p>Cargando...</p>
      </section>
    );
  }

  if (!game) {
    return (
      <section className="detail">
        <Link href="/juegos" className="detail__back">
          ← Volver a juegos
        </Link>
        <h1>Juego no encontrado</h1>
        <p>Lo sentimos, no pudimos encontrar el juego que buscas.</p>
      </section>
    );
  }

  return (
    <section className="detail">
      <Link href="/juegos" className="detail__back">
        ← Volver a juegos
      </Link>

      <div className="detail__header" style={{ "--accent": game.color }}>
        <div className="detail__cover">{game.cover}</div>
        <div>
          <h1>{game.title}</h1>
          <div className="game-card__meta">
            <Badge text={game.genre} color={game.color} />
            <span className="game-card__year">
              {game.platform} · {game.year}
            </span>
          </div>
          <div className="game-card__rating">⭐ {game.rating.toFixed(1)} / 10</div>
        </div>
      </div>

      <p className="detail__description">{game.description}</p>

      <h2>Lo que más destaco</h2>
      <ul className="detail__list">
        {game.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
