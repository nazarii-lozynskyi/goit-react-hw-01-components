import PropTypes from 'prop-types';

import styles from './Profile.module.css';

import defaultImg from './images/default_img.png';

export default function Profile({
  name = 'unknown',
  tag,
  location,
  avatar = defaultImg,
  stats,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
