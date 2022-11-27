import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './context/StateProvider';
import { initialState, reducer } from './reducer/reducer';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StateProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


