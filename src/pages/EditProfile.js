import "../Css/Register.css";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
export const EditProfile = () => {
  const navigate = useNavigate();
const {id} = useParams();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
   const [pass3, setPass3] = useState("");
  const [error, setError] = useState(null);
  const {token} = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("La contraseña no coincide");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND}/edit/${id}`, {
        method: "PATH",
        body: JSON.stringify({
          name,
          surname,
          email,
          newPassword: pass1,
          password: pass3,
        }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="registerform">
      <label htmlFor="name">Nombre:</label>
      <input
        className="registerinput"
        name="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="surname">Apellido:</label>
      <input
        className="registerinput"
        name="surname"
        value={surname}
        required
        onChange={(e) => setSurname(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        className="registerinput"
        name="email"
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="pass1">Contraseña</label>
      <input
        className="registerinput"
        name="pass1"
        type="password"
        value={pass1}
        required
        onChange={(e) => setPass1(e.target.value)}
      />
      <label htmlFor="pass2">Confirma tu Contraseña</label>
      <input
        className="registerinput"
        type="password"
        id="pass2"
        name="pass2"
        value={pass2}
        required
        onChange={(e) => setPass2(e.target.value)}
      />
      <label htmlFor="pass3">Introduce tu Contraseña actual</label>
      <input
        className="registerinput"
        type="password"
        id="pass3"
        name="pass3"
        value={pass3}
        required
        onChange={(e) => setPass3(e.target.value)}
      />
      <button className="registerbutton">Registrate</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};
