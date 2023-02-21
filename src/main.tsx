import "./styles/tailwind.css";
import React from "react";
import ReactDOM from "react-dom/client";

import MainRouter from "./router";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
    <React.StrictMode>
        <MainRouter />
    </React.StrictMode>,
);
