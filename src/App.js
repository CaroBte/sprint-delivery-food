import { React, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from "./Router";


const App = () => {

  useEffect(() => {
    document.title = "Food Delivery App"
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
