'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from "next/link";
import Badge from "@/components/Badge";
import GameForm from "@/components/GameForm";
import { games as defaultGames, getGameBySlug } from "@/data/games";

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [game, setGame] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleUpdateGame = (updatedData) => {
    const savedGames = localStorage.getItem('games');
    let games = defaultGames;
    
    if (savedGames) {
      try {
        games = JSON.parse(savedGames);
      } catch (error) {
        console.error('Error loading games:', error);
      }
    }

    const updatedGames = games.map((g) =>
      g.slug === params.slug ? { ...g, ...updatedData } : g
    );
    
    localStorage.setItem('games', JSON.stringify(updatedGames));
    setGame({ ...game, ...updatedData });
    setIsEditing(false);
  };

  const handleDeleteGame = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este juego?')) {
      const savedGames = localStorage.getItem('games');
      let games = defaultGames;
      
      if (savedGames) {
        try {
          games = JSON.parse(savedGames);
        } catch (error) {
          console.error('Error loading games:', error);
        }
      }

      const updatedGames = games.filter((g) => g.slug !== params.slug);
      localStorage.setItem('games', JSON.stringify(updatedGames));
      router.push('/juegos');
    }
  };

  if (!isLoaded) {
    return (
      <div className="container-fluid px-4">
        <section className="section">
          <p>Cargando...</p>
        </section>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="container-fluid px-4">
        <section className="section">
          <Link href="/juegos" className="detail__back">
            ← Volver a juegos
          </Link>
          <h1>Juego no encontrado</h1>
          <p>Lo sentimos, no pudimos encontrar el juego que buscas.</p>
        </section>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="container-fluid px-4">
        <section className="section">
          <button
            onClick={() => setIsEditing(false)}
            className="btn btn-outline-secondary mb-4"
          >
            ← Cancelar
          </button>
          <GameForm
            initialGame={game}
            onSave={handleUpdateGame}
            isEditing={true}
          />
        </section>
      </div>
    );
  }

  return (
    <div className="container-fluid px-4">
      <section className="section">
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

        <div className="mt-5 d-flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-warning btn-lg"
          >
            ✏️ Editar
          </button>
          <button
            onClick={handleDeleteGame}
            className="btn btn-danger btn-lg"
          >
            🗑️ Eliminar
          </button>
        </div>
      </section>
    </div>
  );
}
