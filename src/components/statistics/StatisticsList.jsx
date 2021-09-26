import PropTypes from 'prop-types';

import Statistics from './Statistics';

import styles from './Statistics.module.css';

function StatisticsList({ stats, title = 'Upload stats' }) {
  //const title = false;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(statisticalData => (
          <Statistics key={statisticalData.id} stats={statisticalData} />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
