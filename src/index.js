import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="iannGostoso" element={<Home />} />
        </>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

