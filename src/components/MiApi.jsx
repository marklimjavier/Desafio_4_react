import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const MiApi = ({info, setInfo, setDataOriginal}) => {
  const urlApi = 'https://digimon-api.vercel.app/api/digimon';

  const fetchData = async () => {
    try {
      const response = await fetch(urlApi);
      if (!response.ok) {
        throw Error('Error en la respuesta de la API');
      }
      const data = await response.json(urlApi);
      setInfo(data);
      setDataOriginal(data);
    } catch (error) {
      console.error('Error al obtener datos de la API', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='posicion'>
      {info.map((digimon, index) => (
        <Card key={index} className='tarjeta'>
          <Card.Img className='imgApi' variant="top" src={digimon.img} />
          <Card.Body>
            <Card.Title className='titulo'>Nombre: {digimon.name}</Card.Title>
            <Card.Text className='texto'>
              Estado: {digimon.level}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MiApi;