export const metadata = {
  title: "Sobre mí | GameVault",
};

export default function SobreMiPage() {
  return (
    <div className="container-fluid px-4">
      <section className="section about">
        <h1 className="mb-4">Sobre mí</h1>
        <p className="lead">
          Soy estudiante y jugador desde hace varios años. Creé este proyecto
          para practicar Next.js (App Router) mientras hablo de algo que
          disfruto: los videojuegos.
        </p>
        <p>
          Este sitio es 100% estático: los datos de los juegos viven en el
          propio proyecto, sin backend ni base de datos.
        </p>
        <div className="about__stack mt-5">
          <h2 className="mb-3">Tecnologías usadas</h2>
          <ul className="list-group">
            <li className="list-group-item bg-dark text-light border-secondary">📦 <strong>Next.js 15</strong> (App Router)</li>
            <li className="list-group-item bg-dark text-light border-secondary">⚛️ <strong>React</strong> con componentes reutilizables</li>
            <li className="list-group-item bg-dark text-light border-secondary">🎨 <strong>Bootstrap 5</strong> + CSS personalizado</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
