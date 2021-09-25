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

// Friends.propTypes = {
//   name: PropTypes.string.isRequired,
//   //isOnline: PropTypes.string.isRequired,

//   avatar: PropTypes.string.isRequired,
// };
