import PropTypes from 'prop-types';

import Statistics from './Statistics';

import styles from '../Statistics.module.css';

const backgroundColor = [
  {
    color: '#eeaeca',
  },
  {
    color: '#c2aeee',
  },
  {
    color: '#c14242',
  },
  {
    color: '#4bb43f',
  },
  {
    color: '#e1e908',
  },
];

function StatisticsList({ stats }) {
  //const title = false;
  return (
    <ul className={styles.list}>
      {stats.map(statisticalData => (
        <Statistics
          key={statisticalData.id}
          stats={statisticalData}
          options={backgroundColor}
        />
      ))}
    </ul>
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
