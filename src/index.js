import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './profile/App';
import Statistics from './statistics/App';

ReactDOM.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
  document.getElementById('task-01')
);

ReactDOM.render(
  <React.StrictMode>
    <Statistics />
  </React.StrictMode>,
  document.getElementById('task-02')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('task-03')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('task-04')
// );
