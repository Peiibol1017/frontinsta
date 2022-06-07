import "../Css/Login.css"
import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
      throw new Error(data.message);
      }
      if (res.ok) {
        console.log("Status:", res.status, "Data:", data);
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "Error desconocido");
    }
  };

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        className="logininput"
        name="username"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="logininput"
        name="password"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginbutton">Login</button>
      {error ? <p className="error">{error}</p> : null}
    </form>
  );
}
