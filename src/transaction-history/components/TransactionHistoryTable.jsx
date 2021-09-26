import PropTypes from 'prop-types';

import TransactionHistory from './TransactionHistory';

import styles from '../TransactionHistory.module.css';

function TransactionHistoryTable({ transactions }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
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
