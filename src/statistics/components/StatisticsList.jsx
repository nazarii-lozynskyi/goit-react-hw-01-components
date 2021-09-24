import PropTypes from 'prop-types';

import Statistics from './Statistics';

function StatisticsList({ stats }) {
  //const title = false;
  return (
    <ul>
      {stats.map(statisticalData => (
        <Statistics key={statisticalData.id} stats={statisticalData} />
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
