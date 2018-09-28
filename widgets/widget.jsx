import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tab' 
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Clock />, root);
});
