import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s',
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#555';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
  };

  return (
    <nav style={navbarStyle}>
      <button 
        style={buttonStyle} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        Inicio
      </button>
      <button 
        style={buttonStyle} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        Quiénes Somos
      </button>
      <button 
        style={buttonStyle} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        Contacto
      </button>
    </nav>
  );
};

export default Navbar;
