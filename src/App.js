import { React, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { auth, restaurant } from './context';
import { router } from "./Router";
import "./styles/styles.sass"

const App = () => {

  useEffect(() => {
    document.title = "Food Delivery App"
  }, []);

  return (
    <restaurant.RestaurantProvider>
      <auth.AuthProvider>
        <RouterProvider router={router} />
      </auth.AuthProvider>
    </restaurant.RestaurantProvider>
  );
}

export default App;
