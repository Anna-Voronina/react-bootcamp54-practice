import PropTypes from 'prop-types';

export const Statistics = ({ points, total }) => {
  return (
    <>
      <ul>
        {points.map(([key, value]) => (
          <li key={key}>
            Point {key} : Score {value}
          </li>
        ))}
      </ul>
      <p>Total points: {total}</p>
    </>
  );
};

Statistics.propTypes = {
  points: PropTypes.arrayOf(PropTypes.array).isRequired,
};
