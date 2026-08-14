'use client';

import { useState, useEffect } from 'react';
import styles from './GameForm.module.css';

export default function GameForm({ game = null, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    platform: '',
    year: new Date().getFullYear(),
    rating: 7.5,
    cover: '🎮',
    color: '#3ddc97',
    description: '',
    highlights: [],
  });

  const [highlightInput, setHighlightInput] = useState('');

  useEffect(() => {
    if (game) {
      setFormData(game);
    }
  }, [game]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'year' || name === 'rating' ? parseFloat(value) : value,
    }));
  };

  const handleAddHighlight = () => {
    if (highlightInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        highlights: [...prev.highlights, highlightInput.trim()],
      }));
      setHighlightInput('');
    }
  };

  const handleRemoveHighlight = (index) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.platform.trim()) {
      alert('Por favor completa título y plataforma');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Título *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="ej: Hollow Knight"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Género</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="ej: Metroidvania"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Plataforma *</label>
        <input
          type="text"
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          placeholder="ej: Nintendo Switch, PC, PlayStation 5"
          required
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Año</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            min="1950"
            max={new Date().getFullYear()}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Calificación (0-10)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="10"
            step="0.1"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Icono/Emoji</label>
          <input
            type="text"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            maxLength="2"
            placeholder="🎮"
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Color (hex)</label>
        <div className={styles.colorInput}>
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.color}
            onChange={handleChange}
            name="color"
            placeholder="#3ddc97"
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe el juego..."
          rows="3"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Aspectos destacados</label>
        <div className={styles.highlightInput}>
          <input
            type="text"
            value={highlightInput}
            onChange={(e) => setHighlightInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddHighlight();
              }
            }}
            placeholder="Agrega un aspecto destacado y presiona Enter"
          />
          <button
            type="button"
            onClick={handleAddHighlight}
            className={styles.addBtn}
          >
            Agregar
          </button>
        </div>
        {formData.highlights.length > 0 && (
          <div className={styles.highlightsList}>
            {formData.highlights.map((highlight, index) => (
              <div key={index} className={styles.highlight}>
                <span>{highlight}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveHighlight(index)}
                  className={styles.removeBtn}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitBtn}>
          {game ? 'Actualizar juego' : 'Agregar juego'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className={styles.cancelBtn}
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
