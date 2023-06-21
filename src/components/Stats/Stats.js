import { StatsItem } from 'components/StatsItem/StatsItem';
import PropTypes from 'prop-types'
export const Stats = ({ title, stats }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(item => (
          <StatsItem {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    
  }).isRequired).isRequired
}