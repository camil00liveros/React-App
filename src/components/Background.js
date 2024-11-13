import React from 'react';
import Contenedor from './Contenedor';
import Card from "./Card"
import Login from './Login';
const Background = ({ children }) => {
  const backgroundStyle = {
    backgroundColor: '#F5F5DC', // Color hueso
    minHeight: '100vh',         // Ocupa toda la altura de la pantalla
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={backgroundStyle}>{children}
         <Contenedor>
         <Card titulo="Card 1" descripcion="Descripción de la tarjeta 1" imagenUrl="https://via.placeholder.com/150" />

         </Contenedor>
        
         <Contenedor>
         
         <Card titulo="Card 1" descripcion="Descripción de la tarjeta 1" imagenUrl="https://via.placeholder.com/150" />

         </Contenedor>
         <Contenedor>
         <Login/>
         </Contenedor>
  </div>;
};

export default Background;
