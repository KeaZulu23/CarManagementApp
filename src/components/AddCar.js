import React, { useContext } from 'react';
import CarForm from './CarForm';
import CarsContext from '../context/CarsContext';

const AddCar = ({ history }) => {
  const { cars, setCars } = useContext(CarsContext);

  const handleOnSubmit = (car) => {
    setCars([car, ...cars]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <CarForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCar;