import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    /* return <h1>This is a React script.</h1>*/
    return React.createElement('h1', null, 'This is a React script.');
};

const container = document.getElementById('root');
const root = createRoot(container);

/* root.render(<App />); */
root.render(React.createElement(App));