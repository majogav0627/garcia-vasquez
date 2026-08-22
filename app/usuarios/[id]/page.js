import UserDetail from "@/components/UserDetail";

export const metadata = { title: "Perfil de usuario | GameVault" };

export default function UsuarioPage() {
  return (
    <div className="container-fluid px-4">
      <section className="section"><UserDetail /></section>
    </div>
  );
}