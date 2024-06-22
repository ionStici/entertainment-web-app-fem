import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/base.scss";
import { Toaster } from "react-hot-toast";
import MoviesProvider from "./contexts/MoviesContext.jsx";
import UserProvider from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <MoviesProvider>
        <Toaster />
        <App />
      </MoviesProvider>
    </UserProvider>
  </React.StrictMode>
);
