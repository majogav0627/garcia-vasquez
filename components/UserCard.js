import Link from "next/link";

export default function UserCard({ user, displayName }) {
  return (
    <article className="card h-100 user-card">
      <img src={user.image} alt={displayName} className="user-card__image" loading="lazy" />
      <div className="card-body">
        <h2 className="card-title h5">{displayName}</h2>
        <p className="text-muted mb-2">@{user.username}</p>
        <p className="small mb-1">{user.email}</p>
        <p className="small text-muted">{user.company.title}</p>
        <Link href={`/usuarios/${user.id}`} className="btn btn-outline-secondary mt-2">Ver perfil</Link>
      </div>
    </article>
  );
}