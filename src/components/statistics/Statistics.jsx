import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{stats.label}</span>
      <span className={styles.percentage}>{stats.percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  stats: PropTypes.object.isRequired,
};
