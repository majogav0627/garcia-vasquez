import UserList from "@/components/UserList";

export const metadata = { title: "Usuarios | GameVault" };

export default function UsuariosPage() {
  return (
    <div className="container-fluid px-4">
      <section className="section">
        <h1>Usuarios</h1>
        <p className="section__intro">Usuarios consultados mediante la API pública de DummyJSON.</p>
        <UserList />
      </section>
    </div>
  );
}