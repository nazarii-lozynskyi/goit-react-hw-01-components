import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './profile/App';
import Statistics from './statistics/App';
import Friends from './friends/App';
import TransactionHistory from './transaction-history/App';

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

ReactDOM.render(
  <React.StrictMode>
    <Friends />
  </React.StrictMode>,
  document.getElementById('task-03')
);

ReactDOM.render(
  <React.StrictMode>
    <TransactionHistory />
  </React.StrictMode>,
  document.getElementById('task-04')
);
