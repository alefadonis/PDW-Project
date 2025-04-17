import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import frontPageImage from "./assets/front-page.svg";
import { useNavigate } from "react-router-dom"; // If you're using React Router

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [ , setError] = useState("");
  const [ , setLoading] = useState(false);
  const navigate = useNavigate(); // <-- Required for navigation

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro no login");
      }

      const data = await response.json();
      console.log("Login success:", data);

      Cookies.set("token", data.token, { expires: 1 }); 

      navigate("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="logo">Presente!</div>
      <button
        onClick={() => {
          Cookies.set(
            "token",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJwcm9mMTIzIiwibmFtZSI6InByb2YudXNlckBleGFtcGxlLmNvbSIsInJvbGUiOiJwcm9mZXNzb3IiLCJleHAiOjE5OTk5OTk5OTl9.dummysignature"
          );
          window.location.reload();
        }}
      >
        Set Professor Token
      </button>

      <div className="image-wrapper">
        <img src={frontPageImage} alt="Login Front Page Image" />
      </div>
      <div className="card">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Digite o seu email"
              className="input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="student"
                checked={role === "student"}
                onChange={(e) => setRole(e.target.value)}
              />
              Sou Aluno
            </label>

            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="professor"
                checked={role === "professor"}
                onChange={(e) => setRole(e.target.value)}
              />
              Sou Professor
            </label>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
