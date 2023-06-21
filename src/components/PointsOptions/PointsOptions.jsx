import PropTypes from 'prop-types';

export const PointsOptions = ({ options, onLeavePoint }) => {
  return (
    <ul>
      {options.map(item => {
        return (
          <button
            key={item}
            type="button"
            onClick={() => {
              onLeavePoint(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </ul>
  );
};

PointsOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeavePoint: PropTypes.func.isRequired,
};
