'use client';

import { useState } from 'react';
import GameForm from './GameForm';
import GameCard from './GameCard';
import styles from './GameManager.module.css';

export default function GameManager({ initialGames, onAddGame, onUpdateGame, onDeleteGame }) {
  const [showForm, setShowForm] = useState(false);
  const [editingGame, setEditingGame] = useState(null);
  const [games, setGames] = useState(initialGames);

  const handleAddGame = (newGameData) => {
    const newGame = {
      ...newGameData,
      slug: newGameData.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, ''),
    };
    setGames([...games, newGame]);
    onAddGame(newGame);
    setShowForm(false);
  };

  const handleUpdateGame = (updatedGameData) => {
    const updated = games.map((g) =>
      g.slug === editingGame.slug ? { ...g, ...updatedGameData } : g
    );
    setGames(updated);
    onUpdateGame(editingGame.slug, updatedGameData);
    setEditingGame(null);
  };

  const handleDeleteGame = (slug) => {
    if (confirm('¿Estás seguro de que quieres eliminar este juego?')) {
      setGames(games.filter((g) => g.slug !== slug));
      onDeleteGame(slug);
    }
  };

  const handleCancelEdit = () => {
    setEditingGame(null);
    setShowForm(false);
  };

  return (
    <div className={styles.container}>
      {!showForm && !editingGame && (
        <div className={styles.header}>
          <div>
            <h1>Administrar Juegos</h1>
            <p className={styles.subtitle}>
              {games.length} juegos en la colección
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className={styles.addButton}
          >
            + Agregar Juego
          </button>
        </div>
      )}

      {showForm && !editingGame && (
        <div className={styles.formWrapper}>
          <h2>Agregar Nuevo Juego</h2>
          <GameForm
            onSubmit={handleAddGame}
            onCancel={handleCancelEdit}
          />
        </div>
      )}

      {editingGame && (
        <div className={styles.formWrapper}>
          <h2>Editar: {editingGame.title}</h2>
          <GameForm
            game={editingGame}
            onSubmit={handleUpdateGame}
            onCancel={handleCancelEdit}
          />
        </div>
      )}

      {!showForm && !editingGame && (
        <div className={styles.gamesGrid}>
          {games.map((game) => (
            <div key={game.slug} className={styles.gameCardWrapper}>
              <GameCard game={game} />
              <div className={styles.actions}>
                <button
                  onClick={() => setEditingGame(game)}
                  className={styles.editBtn}
                  title="Editar juego"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => handleDeleteGame(game.slug)}
                  className={styles.deleteBtn}
                  title="Eliminar juego"
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
