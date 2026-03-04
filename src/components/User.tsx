"use client";

import { useEffect, useState } from "react";
import { fetchUser } from "../services/api";

export default function User() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUser().then((data) => setName(data.name));
  }, []);

  return <p>{name ? `User: ${name}` : "Loading..."}</p>;
}
