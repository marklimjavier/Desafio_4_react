import React, { useState } from 'react';

const Buscador = ({ info, setInfo, dataOriginal }) => {
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const inputHandler = (e) => {
    const buscarPalabra = e.target.value.toLowerCase();

    if (!buscarPalabra) {
      setInfo(dataOriginal);
      return;
    }

    const resultado = info.filter((digimon) => {
      const nombre = digimon.name ? digimon.name.toLowerCase() : '';
      const nivel = digimon.level ? digimon.level.toLowerCase() : '';

      return nombre.includes(buscarPalabra) || nivel.includes(buscarPalabra);
    });

    setInfo(resultado);
  };

  const botonOrden = () => {
    const nuevoOrden = !ordenAscendente;
    setOrdenAscendente(nuevoOrden);

    const resultadoOrdenado = info.slice().sort((a, b) => {
      const factorOrden = nuevoOrden ? 1 : -1;
      return a.name.localeCompare(b.name) * factorOrden;
    });

    setInfo(resultadoOrdenado);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Buscar Digimon"
        className="form-control-mb-3"
        onChange={inputHandler}
      />
      <button className='botonAlfabetico' onClick={botonOrden}>
        {ordenAscendente ? 'Ordenar Descendente' : 'Ordenar Ascendente'}
      </button>
    </div>
  );
};

export default Buscador;