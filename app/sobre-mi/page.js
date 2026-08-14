export const metadata = {
  title: "Sobre mí | GameVault",
};

export default function SobreMiPage() {
  return (
    <section className="section about">
      <h1>Sobre mí</h1>
      <p>
        Soy estudiante y jugador desde hace varios años. Creé este proyecto
        para practicar Next.js (App Router) mientras hablo de algo que
        disfruto: los videojuegos.
      </p>
      <p>
        Este sitio es 100% estático: los datos de los juegos viven en el
        propio proyecto, sin backend ni base de datos.
      </p>
      <div className="about__stack">
        <h2>Tecnologías usadas</h2>
        <ul>
          <li>Next.js 15 (App Router)</li>
          <li>React con componentes reutilizables</li>
          <li>CSS propio, sin frameworks</li>
        </ul>
      </div>
    </section>
  );
}
