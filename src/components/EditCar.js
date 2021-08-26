import React, { useContext } from 'react';
import CarForm from './CarForm';
import { useParams } from 'react-router-dom';
import CarsContext from '../context/CarsContext';

const EditCar = ({ history }) => {
  const { cars, setCars } = useContext(CarsContext);
  const { id } = useParams();
  const carToEdit = cars.find((car) => car.id === id);

  const handleOnSubmit = (car) => {
    const filteredCars = cars.filter((car) => car.id !== id);
    setCars([car, ...filteredCars]);
    history.push('/');
  };

  return (
    <div>
      <CarForm car={carToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCar;