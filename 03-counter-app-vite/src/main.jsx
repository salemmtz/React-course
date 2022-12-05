import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';
import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp title="Hi, I am Salem" /> */}
    <CounterApp value={100} />
  </React.StrictMode>
);
