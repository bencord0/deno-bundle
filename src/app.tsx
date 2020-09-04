import React from "https://dev.jspm.io/react";

// https://www.typescriptlang.org/docs/handbook/jsx.html#intrinsic-elements
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}

function App() {
    return (
        <p>Hello World</p>
    );
}

export default App;
