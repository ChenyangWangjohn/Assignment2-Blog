import './App.css'


// Import the components
import Home from './Homepage';
import Japan from './Japan';
import China from './China';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home />,
  },

  {
    path: "/Japan",

    element: <Japan />,
  },

  {
    path: "/China",
    element: <China />,
  },
]);

// change 
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
