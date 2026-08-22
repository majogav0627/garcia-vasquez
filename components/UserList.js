"use client";

import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { userNames } from "@/data/userNames";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("No se pudieron cargar los usuarios");
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <p>Cargando usuarios...</p>;
  if (status === "error") return <p className="alert alert-danger">No fue posible cargar los usuarios.</p>;

  return (
    <div className="row g-4">
      {users.map((user) => (
        <div key={user.id} className="col-12 col-md-6 col-xl-4">
          <UserCard
            user={user}
            displayName={userNames[user.id] || `Usuario ${user.id}`}
          />
        </div>
      ))}
    </div>
  );
}