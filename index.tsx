import React from "https://jspm.org/react";
import ReactDom from "https://jspm.org/react-dom";

import App from "./app.tsx";

(ReactDom as any).render(
    <App />,
    document.getElementById("root"),
);
