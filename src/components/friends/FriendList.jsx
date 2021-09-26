import PropTypes from 'prop-types';

import Friend from './Friend';

import styles from './Friends.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friendData => (
        <Friend key={friendData.id} friends={friendData} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
