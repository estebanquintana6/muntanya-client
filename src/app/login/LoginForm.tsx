"use client";

import { useState } from "react";

interface OwnProps {
  onLogin: (email: string, password: string) => Promise<never>;
  onLogout: () => Promise<never>;
}

const LoginForm = ({ onLogin, onLogout }: OwnProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const onSubmit = async () => {
    try {
        await onLogin(username, password);
    } catch(err) {
        setShowErrorMsg(true);
    }
  }

  return (
    <>
      <form action={onSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {showErrorMsg && <p>Datos incorrectos</p>}
      <form action={async () => onLogout()}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default LoginForm;
