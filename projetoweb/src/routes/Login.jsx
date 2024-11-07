import React from 'react';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Usuário:
                    <input type="text" name="username" />
                </label>
                <label>
                    Senha:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
