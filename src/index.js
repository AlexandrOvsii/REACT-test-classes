import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';

function Test({ name, lastName, price }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Lastname: {lastName}</h3>
      <p>Price: {price}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test name="Sasha" lastName="Ovsiy" price="500" />
  </React.StrictMode>
);
