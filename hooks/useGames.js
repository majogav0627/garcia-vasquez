'use client';

import { useState, useEffect } from 'react';
import { games as defaultGames } from '@/data/games';

export function useGames() {
  const [games, setGames] = useState(defaultGames);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar datos de localStorage al montar
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

  const addGame = (newGame) => {
    const gameWithSlug = {
      ...newGame,
      slug: newGame.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    };
    setGames([...games, gameWithSlug]);
    return gameWithSlug;
  };

  const updateGame = (slug, updatedGame) => {
    setGames(
      games.map((game) =>
        game.slug === slug ? { ...game, ...updatedGame } : game
      )
    );
  };

  const deleteGame = (slug) => {
    setGames(games.filter((game) => game.slug !== slug));
  };

  const getGameBySlug = (slug) => {
    return games.find((game) => game.slug === slug);
  };

  return {
    games,
    addGame,
    updateGame,
    deleteGame,
    getGameBySlug,
    isLoaded,
  };
}
