import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import japan from './japan.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
  path: "/",
  element: <div>This is the Home Page</div>,
  },

  {
    path: "/Japan",
    component:{japan}
  },

  {
    path: "/China",
    element: <h1>China</h1>,
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
