import React from "https://dev.jspm.io/react";
import ReactDom from "https://dev.jspm.io/react-dom";

import App from "./app.tsx";

(ReactDom as any).render(
    <App />,
    document.getElementById("root"),
);
