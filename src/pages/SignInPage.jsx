import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authStyles } from "./Auth.styled";

function SignInPage({ setIsAuth }) {
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(event) {
        event.preventDefault();

        const savedLogin = localStorage.getItem("userLogin");
        const savedPassword = localStorage.getItem("userPassword");

        if (!savedLogin || !savedPassword) {
        setError("Сначала зарегистрируйся");
        return;
        }

        if (login !== savedLogin || password !== savedPassword) {
        setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
        return;
        }

        setError("");
        setIsAuth(true);
        navigate("/", { replace: true });
    }

    return (
        <div style={authStyles.page}>
            <form style={authStyles.form} onSubmit={handleLogin}>
            <h1 style={authStyles.title}>Вход</h1>

            <input
                type="text"
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder="Эл. почта"
                autoComplete="username"
                style={{
                ...authStyles.input,
                ...(error ? authStyles.inputError : {}),
                }}
                required
            />

            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Пароль"
                autoComplete="current-password"
                style={{
                ...authStyles.input,
                ...(error ? authStyles.inputError : {}),
                }}
                required
            />

            {error && (
                <p role="alert" style={authStyles.error}>
                {error}
                </p>
            )}

            <button type="submit" style={authStyles.button}>
                Войти
            </button>

            <p style={authStyles.footer}>
                Нужно зарегистрироваться?
                <br />
                <Link to="/register" style={authStyles.link}>
                Регистрируйтесь здесь
                </Link>
            </p>
            </form>
        </div>
    );
};

export default SignInPage;