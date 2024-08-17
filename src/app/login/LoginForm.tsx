"use client";

import { useState } from "react";

interface OwnProps {
  onLogin: (email: string, password: string) => Promise<never>;
}

const LoginForm = ({ onLogin }: OwnProps) => {
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
    <div className="flex flex-col m-auto bg-primary w-96 h-96 p-6 rounded-xl">
      <h3 className="my-auto text-center text-xl font-zodiak-regular">Inicio de sesión</h3>
      <form className="mb-auto w-full" action={onSubmit}>
        <input
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuario"
        />
        <br />
        <input
          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button 
            className="text-white font-zodiak-regular w-full bg-brown-25 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            type="submit">
                Login
        </button>
      </form>
      {showErrorMsg && <p>Datos incorrectos</p>}
    </div>
  );
};

export default LoginForm;
