import './App.css'

// Import the components
import Home from './Homepage';
import China from './China';
import Jaapan from './japannew';


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
    element: <Jaapan />,
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