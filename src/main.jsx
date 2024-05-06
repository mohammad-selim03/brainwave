import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import router from "./components/Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router router={router}>
      <App />
    </Router>
  </React.StrictMode>
);
