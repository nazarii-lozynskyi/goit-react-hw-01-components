import './App.css';

import FriendList from './components/FliendList';

import friends from './friends.json';

export default function App() {
  return (
    <div>
      <FriendList friends={friends} />
    </div>
  );
}
