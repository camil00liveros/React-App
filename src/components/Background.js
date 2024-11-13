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
         <Card titulo="Card 1" descripcion="Descripción de la tarjeta 1" imagenUrl="./images/img1.jpg" />

         </Contenedor>
        
         <Contenedor>
         
         <Card titulo="Card 2" descripcion="Descripción de la tarjeta 2" imagenUrl="./images/img2.jpg" />

         </Contenedor>
         <Contenedor>
         <Login/>
         </Contenedor>
  </div>;
};

export default Background;
