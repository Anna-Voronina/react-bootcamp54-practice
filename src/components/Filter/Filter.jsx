import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      placeholder="find to do"
      onChange={e => dispatch(addFilter(e.target.value))}
    />
  );
};

export default Filter;
