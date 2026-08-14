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
    return <section className="section"><p>Cargando...</p></section>;
  }

  return (
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h1>Todos los juegos</h1>
              <p className="section__intro">
                {games.length} juegos en la colección. Haz clic en cualquiera para ver más detalles.
              </p>
            </div>
            <button
              onClick={() => setShowManager(true)}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #3ddc97, #2db88e)',
                border: 'none',
                borderRadius: '8px',
                color: 'black',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              title="Acceder al gestor de juegos"
            >
              ⚙️ Administrar
            </button>
          </div>
          <div className="grid">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
