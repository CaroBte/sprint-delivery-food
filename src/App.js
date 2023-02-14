import { React, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { auth } from './context';
import { router } from "./Router";
import "./styles/styles.sass"

const App = () => {

  useEffect(() => {
    document.title = "Food Delivery App"
  }, []);

  return (
    <auth.AuthProvider>
      <RouterProvider router={router} />
    </auth.AuthProvider>
  );
}

export default App;
