// Contenedor.jsx
import React from 'react';

const Contenedor = ({ children }) => {
  const backgroundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC', // Fondo color hueso
    height: '100vh',
    margin: 0,
  };

  const boxStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    border: '2px solid black',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxHeight: '100vh',
    overflowY: 'auto',
  };

  return (
    <div style={backgroundStyle}>
      <div style={boxStyle}>
        {children}
      </div>
    </div>
  );
};

export default Contenedor;
