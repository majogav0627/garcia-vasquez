import ProductDetail from "@/components/ProductDetail";

export const metadata = { title: "Detalle de producto | GameVault" };

export default function ProductoPage() {
  return (
    <div className="container-fluid px-4">
      <section className="section"><ProductDetail /></section>
    </div>
  );
}