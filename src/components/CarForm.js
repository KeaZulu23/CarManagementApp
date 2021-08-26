import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const CarForm = (props) => {
  const [car, setCar] = useState(() => {
    return {
      carname: props.car ? props.car.carname : '',
      maker: props.car ? props.car.maker : '',
      quantity: props.car ? props.car.quantity : '',
      price: props.car ? props.car.price : '',
      date: props.car ? props.car.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { carname, maker, price, quantity } = car;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [carname, maker, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const car = {
        id: uuidv4(),
        carname,
        maker,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(car);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setCar((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setCar((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setCar((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Car Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="carname"
            value={carname}
            placeholder="Enter name of car"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="maker">
          <Form.Label>Car Maker</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="maker"
            value={maker}
            placeholder="Enter name of maker"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Car Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of car"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CarForm;