// Catálogo de videojuegos — datos locales, sin backend
export const games = [
  {
    slug: "hollow-knight",
    title: "Hollow Knight",
    genre: "Metroidvania",
    platform: "PC / Switch",
    year: 2017,
    rating: 9.5,
    cover: "🪲",
    color: "#7c5cff",
    description:
      "Un metroidvania de acción y exploración ambientado en el reino subterráneo de Hallownest. Combate preciso, mundo interconectado y una atmósfera melancólica que lo convierten en un clásico moderno del género.",
    highlights: [
      "Mapa enorme e interconectado",
      "Combate ágil basado en habilidad",
      "Dirección de arte pintada a mano",
    ],
  },
  {
    slug: "the-legend-of-zelda-botw",
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Aventura / Mundo abierto",
    platform: "Switch",
    year: 2017,
    rating: 9.7,
    cover: "🗡️",
    color: "#3ddc97",
    description:
      "Reinventa la fórmula de Zelda con un mundo abierto que premia la exploración libre, la experimentación con física y la resolución creativa de problemas.",
    highlights: [
      "Libertad total de exploración",
      "Sistema de física y química",
      "Santuarios como mini-puzzles",
    ],
  },
  {
    slug: "stardew-valley",
    title: "Stardew Valley",
    genre: "Simulación / Vida rural",
    platform: "PC / Multiplataforma",
    year: 2016,
    rating: 9.2,
    cover: "🌾",
    color: "#ffb703",
    description:
      "Un simulador de granja relajante con cultivo, minería, pesca y relaciones sociales. Ideal para sesiones cortas o largas maratones tranquilas.",
    highlights: [
      "Ciclo de estaciones y cultivos",
      "Cooperativo en línea",
      "Alta rejugabilidad",
    ],
  },
  {
    slug: "celeste",
    title: "Celeste",
    genre: "Plataformas de precisión",
    platform: "PC / Multiplataforma",
    year: 2018,
    rating: 9.4,
    cover: "🏔️",
    color: "#ff5d8f",
    description:
      "Plataformas exigente sobre subir una montaña, con una narrativa honesta sobre la salud mental y un diseño de niveles impecable.",
    highlights: [
      "Controles ultra precisos",
      "Modo asistido opcional",
      "Banda sonora memorable",
    ],
  },
  {
    slug: "hades",
    title: "Hades",
    genre: "Roguelike de acción",
    platform: "PC / Multiplataforma",
    year: 2020,
    rating: 9.6,
    cover: "🔥",
    color: "#e5383b",
    description:
      "Un roguelike de mazmorras con combate frenético, narrativa que avanza en cada intento y una mitología griega llena de personalidad.",
    highlights: [
      "Narrativa que evoluciona con cada run",
      "Builds de armas muy variadas",
      "Progresión permanente entre partidas",
    ],
  },
  {
    slug: "portal-2",
    title: "Portal 2",
    genre: "Puzzle en primera persona",
    platform: "PC / Multiplataforma",
    year: 2011,
    rating: 9.8,
    cover: "🌀",
    color: "#4cc9f0",
    description:
      "Puzzles basados en portales con una escritura ingeniosa y un modo cooperativo que exige comunicación real entre jugadores.",
    highlights: [
      "Diseño de puzzles brillante",
      "Modo cooperativo dedicado",
      "Humor y escritura memorables",
    ],
  },
];

export function getGameBySlug(slug) {
  return games.find((game) => game.slug === slug);
}
