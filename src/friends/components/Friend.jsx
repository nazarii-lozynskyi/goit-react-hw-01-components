import PropTypes from 'prop-types';

export default function Friend({ friends }) {
  return (
    <li className="item">
      <span
        className="status"
        style={{ backgroundColor: friends.isOnline ? 'green' : 'red' }}
      >
        {friends.isOnline}is
      </span>
      <img
        className="avatar"
        src={friends.avatar}
        alt={friends.name}
        width="48"
      />
      <p className="name">{friends.name}</p>
    </li>
  );
}

// Friend.propTypes = {
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.oneOf(['true', 'false']).isRequired,

//   avatar: PropTypes.string.isRequired,
// };
