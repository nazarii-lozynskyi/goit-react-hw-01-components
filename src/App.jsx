import Profile from './components/profile/Profile';
import StatisticsList from './components/statistics/StatisticsList';
import Friends from './components/friends/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistoryTable';
import Container from 'container/Container';

import user from './components/profile/user.json';
import friends from './components/friends/friends.json';
import stats from './components/statistics/statistical-data.json';
import transactions from './components/transaction-history/transactions.json';

export default function App() {
  return (
    <Container>
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
    </Container>
  );
}
