import "./styles/base.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import UserProvider from "./contexts/UserContext.jsx";
import RouterProvider from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider>
      <UserProvider>
        <App />
        <Toaster />
      </UserProvider>
    </RouterProvider>
  </React.StrictMode>
);
