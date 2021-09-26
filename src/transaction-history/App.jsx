import TransactionHistoryTable from './components/TransactionHistoryTable';

import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <TransactionHistoryTable transactions={transactions} />
    </div>
  );
}
