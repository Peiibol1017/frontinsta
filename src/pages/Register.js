import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
 const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("La contraseña no coincide");
      return;
    }

    try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
      method: "POST",
      body: JSON.stringify({ username, email, password: pass1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });

  const data = await res.json();
        if (res.ok) {
        console.log("Status:", res.status, "Data:", data);}
   if (!res.ok) {
     throw new Error(data.message);
   }
   navigate("/")
} catch (error) {
    setError(error.messsage);
}
};
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          name="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="pass1">Contraseña</label>
        <label htmlFor="pass2">Confirma tu Contraseña</label>
        <input
          name="pass1"
          type="password"
          value={pass1}
          required
          onChange={(e) => setPass1(e.target.value)}
        />
        <input
          type="password"
          id="pass2"
          name="pass2"
          value={pass2}
          required
          onChange={(e) => setPass2(e.target.value)}
        />
        <button>Registrate</button>
        {error ? <p>{error}</p> : null}
      </form>
    );
}