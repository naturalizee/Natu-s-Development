import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelmetProvider } from 'react-helmet-async';
import Portfolio from './Portfolio';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <React.StrictMode>
        {/* <HelmetProvider> */}
            <Portfolio />
        {/* </HelmetProvider> */}
    </React.StrictMode>
);