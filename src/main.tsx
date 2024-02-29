import React from "react";
import * as ReactDOM from 'react-dom';

// import ReactDOM from "react-dom/client";
// import ReactDOM from "react/jsx-runtime";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";

import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import ProtecteRoute from './protectedRoute/protecteRoute';

import { SideBar } from "./components/SideBar/SideBar.tsx";
import {AufPage} from "./pages/SignupPage/SignupPage.tsx";
import MapPage from "./pages/MapPage/MapPage.tsx";
import Profile from "./pages/ProfilePage/ProfilePage.tsx";
import SystemPage from "./pages/SystemPage/SystemPage.tsx";
import SystemModules from "./modules/SystemModules/SystemModules.tsx";
import Layout from "./components/Layout/Layout.tsx";
import ChangePage from "./pages/ChangePage/ChangePage.tsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      
          element: <ProtecteRoute children={<Layout />} />, 
       
         children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "homepage",
            element: <HomePage />,   
          },
          {
            path: "map",
            element: <MapPage />,   
          },
          {
            path: "profile",
            element: <Profile />,   
          },{
            path: "change",
            element: <ChangePage />,   
          },
          {
            path: "systems",
            element: <SystemPage />,
          children:[
            {
              index:true,
              element: <SystemModules />,
            },
            { path: ":id",
            element: <SystemPage/>
          }
          ]
          },
        ]
      },
      {
        path:"signin",
        element: <LoginPage />  
      }, 
      {
        path:"signap",
        element: <AufPage />  
      }, 
    ],
  },

]);




ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

