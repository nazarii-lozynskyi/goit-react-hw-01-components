import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return (
    <tr>
      <td>{transactions.type}</td>
      <td>{transactions.amount}</td>
      <td>{transactions.currency}</td>
    </tr>
  );
}

// TransactionHistory.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,

//   currency: PropTypes.string.isRequired,
// };
