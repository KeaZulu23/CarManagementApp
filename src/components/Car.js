import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Car = ({
  id,
  carname,
  maker,
  price,
  quantity,
  date,
  handleRemoveCar
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="car">
      <Card.Body>
        <Card.Title className="car-title">{carname}</Card.Title>
        <div className="car-details">
          <div>Maker: {maker}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: R {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveCar(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Car;