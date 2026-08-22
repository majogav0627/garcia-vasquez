import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GameVault | Catálogo y APIs",
  description: "Catálogo de videojuegos y datos de DummyJSON con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
