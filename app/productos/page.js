import ProductList from "@/components/ProductList";

export const metadata = { title: "Productos | GameVault" };

export default function ProductosPage() {
  return (
    <div className="container-fluid px-4">
      <section className="section">
        <h1>Productos</h1>
        <p className="section__intro">Catálogo consultado en tiempo real desde DummyJSON.</p>
        <ProductList />
      </section>
    </div>
  );
}