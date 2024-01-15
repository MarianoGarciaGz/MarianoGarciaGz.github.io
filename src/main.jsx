import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";

/* provider */
import { Provider } from "./provider/Provider.jsx";

/* aos animations */
import AOS from "aos";
import "../node_modules/aos/src/sass/aos.scss";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
