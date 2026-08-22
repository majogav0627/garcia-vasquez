"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { userNames } from "@/data/userNames";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Usuario no encontrado");
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, [id]);

  if (status === "loading") return <p>Cargando perfil...</p>;
  if (status === "error" || !user) return <p className="alert alert-danger">No fue posible encontrar este usuario.</p>;

  const displayName = userNames[user.id] || `Usuario ${user.id}`;

  return (
    <>
      <Link href="/usuarios" className="detail__back">← Volver a usuarios</Link>
      <div className="user-detail">
        <img src={user.image} alt={displayName} className="user-detail__image" />
        <div>
          <h1>{displayName}</h1>
          <p className="text-muted">@{user.username} · {user.gender}</p>
          <dl className="user-detail__facts">
            <dt>Correo</dt><dd>{user.email}</dd>
            <dt>Teléfono</dt><dd>{user.phone}</dd>
            <dt>Edad</dt><dd>{user.age} años</dd>
            <dt>Empresa</dt><dd>{user.company.name}, {user.company.title}</dd>
            <dt>Ubicación</dt><dd>{user.address.city}, {user.address.state}</dd>
          </dl>
        </div>
      </div>
    </>
  );
}