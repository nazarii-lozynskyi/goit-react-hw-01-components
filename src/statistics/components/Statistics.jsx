import PropTypes from 'prop-types';

export default function Statistics({ stats }) {
  return (
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{stats.percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  stats: PropTypes.object.isRequired,
};
