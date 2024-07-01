import React from 'react';

const WelcomeComponent = ({ username }) => {
  return (
    <div className="p-5 bg-blue-50 text-gray-800 rounded">
      <h1 className="text-2xl font-bold">Bienvenido a la Aplicación</h1>
      <p className="mt-2">Hola, {username}! Estamos encantados de verte aquí.</p>
      <p className="mt-1">Explora las características de nuestra aplicación y disfruta de tu tiempo.</p>
    </div>
  );
}

export default WelcomeComponent;
