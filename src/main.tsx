import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import ProtecteRoute from './protectedRoute/protecteRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      
          element: <ProtecteRoute children={<SideBar />} />, 
       
         children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "homepage",
            element: <HomePage />,   
          },
        ]
      },
      {
        path:"signin",
        element: <LoginPage />  
      }, 
    ],
  },

]);




ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);







