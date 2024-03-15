import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import ProtecteRoute from "./protectedRoute/protecteRoute";
import { AufPage } from "./pages/SignupPage/SignupPage.tsx";
import MapPage from "./pages/MapPage/MapPage.tsx";
import Profile from "./pages/ProfilePage/ProfilePage.tsx";
import SystemPage from "./pages/SystemPage/SystemPage.tsx";
import SystemModules from "./modules/SystemModules/SystemModules.tsx";
import Layout from "./components/Layout/Layout.tsx";
import ChangePage from "./pages/ChangePage/ChangePage.tsx";
import ForgotPage from "./pages/ForgotPage/ForgotPage.tsx";
import LinkPage from "./pages/LinkPage/LinkPage.tsx";
import DynamicsRoute from "./pages/DynamicsRoute/DynamicsRoute.tsx";

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
          },
          {
            path: "/profile/change",
            element: <ChangePage />,
          },

          {
            path: "systems",
            element: <SystemPage />,
            children: [
              {
                index: true,
                element: <SystemModules />,
              },
              { path: ":id", element: <DynamicsRoute /> },
            ],
          },
        ],
      },
      {
        path: "signin",
        element: <LoginPage />,
      },
      {
        path: "signap",
        element: <AufPage />,
      },
      {
        path: "forgot",
        element: <ForgotPage />,
      },
      {
        path: "link",
        element: <LinkPage />,
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
