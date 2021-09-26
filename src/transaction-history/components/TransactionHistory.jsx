import PropTypes from 'prop-types';

import styles from '../TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <tr>
      <td className={styles.type}>{transactions.type}</td>
      <td className={styles.amount}>{transactions.amount}</td>
      <td className={styles.currency}>{transactions.currency}</td>
    </tr>
  );
}

// TransactionHistory.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,

//   currency: PropTypes.string.isRequired,
// };
