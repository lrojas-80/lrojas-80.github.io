/* eslint-disable jsx-a11y/alt-text */
//crear un componente
import React from 'react';
import '../css/Testimonio.css';
function Testimonio(props) {
  return (
    <div className='contenedor-pic'>
      <img 
      className='img-pic' 
      src={require(`../img/pic-${props.img}.jpg`)} 
      alt={(`Imagen-${props.img}.jpg`)}/>
      <div className='contenedor-texto--testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <b>{props.empresa}</b></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;