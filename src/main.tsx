import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import ProtecteRoute from "./protectedRoute/protecteRoute";
import { SideBar } from "./components/SideBar/SideBar.tsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.tsx";
import LightPage, {} from './pages/LightPage/LightPage.tsx'
import Layout from "./components/Layout/Layout.tsx";

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
          { path: "about", element: <AboutPage /> },
          {path: "Traffic", element:<LightPage/>},

  
          {path:"trash", element:'' },
          {path:"spam", element: ' '}
        ],
      },
      {
        path: "signin",
        element: <LoginPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
