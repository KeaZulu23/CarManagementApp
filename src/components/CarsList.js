import React, { useContext } from 'react';
import _ from 'lodash';
import Car from './Car';
import CarsContext from '../context/CarsContext';

const CarsList = () => {
  const { cars, setCars } = useContext(CarsContext);

  const handleRemoveCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <React.Fragment>
      <div className="car-list">
        {!_.isEmpty(cars) ? (
          cars.map((car) => (
            <Car key={car.id} {...car} handleRemoveCar={handleRemoveCar} />
          ))
        ) : (
          <p className="message">No cars available. Please add some cars.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CarsList;