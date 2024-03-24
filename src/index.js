import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import ColorReduxProvider from './store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <ColorReduxProvider>
      <App />
    </ColorReduxProvider>
);
