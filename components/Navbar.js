import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="navbar__brand">
        🎮 GameVault
      </Link>
      <nav className="navbar__links">
        <Link href="/">Inicio</Link>
        <Link href="/juegos">Juegos</Link>
        <Link href="/sobre-mi">Sobre mí</Link>
      </nav>
    </header>
  );
}
