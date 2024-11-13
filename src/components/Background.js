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
         <Card titulo="Card 1" descripcion="Descripción de la tarjeta 1" imagenUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlndlMPLj17nMNIanMx79nW0swIu_179D7g&s" />

         </Contenedor>
        
         <Contenedor>
         
         <Card titulo="Card 1" descripcion="Descripción de la tarjeta 1" imagenUrl="https://i.pinimg.com/236x/19/5b/21/195b21515f13aff8d74fab2052b2f5b1.jpg" />

         </Contenedor>
         <Contenedor>
         <Login/>
         </Contenedor>
  </div>;
};

export default Background;
