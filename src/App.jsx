import Profile from './profile/App';
import StatisticsList from './statistics/App';
import Friends from './friends/App';
import TransactionHistory from './transaction-history/App';

import user from './profile/user.json';
import friends from './friends/friends.json';
import stats from './statistics/statistical-data.json';
import transactions from './transaction-history/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList stats={stats} />
      <Friends friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}
