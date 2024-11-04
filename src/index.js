import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import Portfolio from './Portfolio';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HelmetProvider>
        <React.StrictMode>
            <Portfolio />
        </React.StrictMode>
    </HelmetProvider>
);