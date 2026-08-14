export default function Footer() {
  return (
    <footer className="bg-dark text-center text-light py-4 mt-5 border-top border-secondary">
      <div className="container-fluid">
        <p className="mb-0">
          <strong>GameVault</strong> · Proyecto académico hecho con Next.js y Bootstrap
        </p>
        <small className="text-muted">PON0 - Grupo: {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
