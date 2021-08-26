import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddCar from '../components/AddCar';
import CarsList from '../components/CarsList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditCar from '../components/EditCar';
import CarsContext from '../context/CarsContext';

const AppRouter = () => {
  const [cars, setCars] = useLocalStorage('cars', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <CarsContext.Provider value={{ cars, setCars }}>
            <Switch>
              <Route component={CarsList} path="/" exact={true} />
              <Route component={AddCar} path="/add" />
              <Route component={EditCar} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </CarsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;