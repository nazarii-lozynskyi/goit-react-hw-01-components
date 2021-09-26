import PropTypes from 'prop-types';

import styles from '../Friends.module.css';

export default function Friend({ friends }) {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: friends.isOnline ? 'green' : 'red' }}
      >
        {friends.isOnline}
      </span>
      <img
        className={styles.avatar}
        src={friends.avatar}
        alt={friends.name}
        width="48"
      />
      <p className={styles.name}>{friends.name}</p>
    </li>
  );
}

// Friend.propTypes = {
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.oneOf(['true', 'false']).isRequired,

//   avatar: PropTypes.string.isRequired,
// };
