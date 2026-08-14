'use client';

import { useEffect, useState } from 'react';
import GameCard from "@/components/GameCard";
import GameManager from "@/components/GameManager";
import { games as defaultGames } from "@/data/games";

export default function JuegosPage() {
  const [games, setGames] = useState(defaultGames);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showManager, setShowManager] = useState(false);

  // Cargar datos de localStorage
  useEffect(() => {
    const savedGames = localStorage.getItem('games');
    if (savedGames) {
      try {
        setGames(JSON.parse(savedGames));
      } catch (error) {
        console.error('Error loading games:', error);
        setGames(defaultGames);
      }
    }
    setIsLoaded(true);
  }, []);

  // Guardar en localStorage cuando cambien los juegos
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('games', JSON.stringify(games));
    }
  }, [games, isLoaded]);

  const handleAddGame = (newGame) => {
    setGames([...games, newGame]);
    setShowManager(false);
  };

  const handleUpdateGame = (slug, updatedData) => {
    setGames(
      games.map((game) =>
        game.slug === slug ? { ...game, ...updatedData } : game
      )
    );
  };

  const handleDeleteGame = (slug) => {
    setGames(games.filter((game) => game.slug !== slug));
  };

  if (!isLoaded) {
    return (
      <div className="container-fluid px-4">
        <section className="section"><p>Cargando...</p></section>
      </div>
    );
  }

  return (
    <div className="container-fluid px-4">
      <section className="section">
        {showManager ? (
          <GameManager
            initialGames={games}
            onAddGame={handleAddGame}
            onUpdateGame={handleUpdateGame}
            onDeleteGame={handleDeleteGame}
          />
        ) : (
          <>
            <div className="row mb-4 align-items-center">
              <div className="col-auto flex-grow-1">
                <h1 className="mb-2">Todos los juegos</h1>
                <p className="section__intro mb-0">
                  {games.length} juegos en la colección. Haz clic en cualquiera para ver más detalles.
                </p>
              </div>
              <div className="col-auto">
                <button
                  onClick={() => setShowManager(true)}
                  className="btn btn-success btn-lg"
                  title="Acceder al gestor de juegos"
                >
                  ⚙️ Administrar
                </button>
              </div>
            </div>
            <div className="row">
              {games.map((game) => (
                <div key={game.slug} className="col-12 col-md-6 col-lg-4 mb-4">
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
