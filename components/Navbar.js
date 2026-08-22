import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            🎮 <strong>GameVault</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/juegos" className="nav-link">
                  Juegos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/productos" className="nav-link">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/usuarios" className="nav-link">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sobre-mi" className="nav-link">
                  Sobre mí
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
