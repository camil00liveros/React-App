// src/components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ titulo, descripcion, imagen }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '300px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
  };

  const titleStyle = {
    margin: '0 0 10px',
    fontSize: '1.5em',
  };

  const descriptionStyle = {
    margin: '0',
    color: '#555',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <img src={imagen} alt={titulo} style={imageStyle} />
      <div style={contentStyle}>
        <h2 style={titleStyle}>{titulo}</h2>
        <p style={descriptionStyle}>{descripcion}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
};

export default Card;
