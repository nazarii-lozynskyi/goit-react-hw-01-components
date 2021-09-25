import PropTypes from 'prop-types';

import TransactionHistory from './TransactionHistory';

function TransactionHistoryTable({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <TransactionHistory key={transaction.id} transactions={transaction} />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistoryTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistoryTable;
