import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/custom.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreProvider } from "./context/useGlobalReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



const Main = () => {
  return (
    <React.StrictMode>
      <StoreProvider>
        <RouterProvider router={router}></RouterProvider>
      </StoreProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
