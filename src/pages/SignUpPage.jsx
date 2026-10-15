import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authStyles } from "./Auth.styled";

function SignUpPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !name.trim() ||
      !login.trim() ||
      !password ||
      !confirmPassword
    ) {
      setError("Заполни все поля");
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    localStorage.setItem("userName", name.trim());
    localStorage.setItem("userLogin", login.trim());
    localStorage.setItem("userPassword", password);

    setError("");
    navigate("/login", { replace: true });
  }

    return (
        <div style={authStyles.page}>
            <form style={authStyles.form} onSubmit={handleSubmit}>
            <h1 style={authStyles.title}>Регистрация</h1>

            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Имя"
                autoComplete="name"
                style={authStyles.input}
                required
            />

            <input
                type="text"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder="Эл. почта"
                autoComplete="username"
                style={authStyles.input}
                required
            />

            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Пароль"
                autoComplete="new-password"
                style={authStyles.input}
                required
            />

            {error && (
                <p role="alert" style={authStyles.error}>
                {error}
                </p>
            )}

            <button type="submit" style={authStyles.button}>
                Зарегистрироваться
            </button>

            <p style={authStyles.footer}>
                Уже есть аккаунт?{" "}
                <Link to="/login" style={authStyles.link}>
                Войдите здесь
                </Link>
            </p>
            </form>
        </div>
    );
}

export default SignUpPage;