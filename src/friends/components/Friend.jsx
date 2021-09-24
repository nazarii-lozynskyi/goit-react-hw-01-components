import PropTypes from 'prop-types';

export default function Friend({ friends }) {
  return (
    <li className="item">
      <span className="status">{friends.isOnline}</span>
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

// Friends.propTypes = {
//   name: PropTypes.string.isRequired,
//   //isOnline: PropTypes.string.isRequired,

//   avatar: PropTypes.string.isRequired,
// };
