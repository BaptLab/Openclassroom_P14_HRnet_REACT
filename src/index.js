import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./router/Routing";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./index.css";

// Create a React root and render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /**
   * The root component of the application.
   * @component
   */
  <React.StrictMode>
    {/* Provide the Redux store to the entire application */}
    <Provider store={store}>
      {/* Wrap the routing in a BrowserRouter for client-side routing */}
      <BrowserRouter>
        {/* Configure the routing for the application */}
        <Routing />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
