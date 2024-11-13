// LoginForm.jsx
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Guardar los datos en variables encapsuladas
    const userData = {
      usuario: username,
      contraseña: password,
    };

    // Mostrar los datos en un mensaje de alerta
    alert(`Usuario: ${userData.usuario}\nContraseña: ${userData.contraseña}`);

    // Limpiar los campos de entrada
    setUsername('');
    setPassword('');
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fff',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  };

  return (
    <form style={formStyle} onSubmit={handleLogin}>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Entrar
      </button>
    </form>
  );
};

export default Login;
